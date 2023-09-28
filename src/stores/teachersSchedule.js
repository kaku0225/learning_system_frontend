import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import { toast } from 'vue3-toastify'
import gql from 'graphql-tag'

export const useTeachersScheduleStore = defineStore('teachersSchedule', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const teachers = ref([])
  const currentEvents = ref([])
  const selectedDate = ref({})

  const hasMatchingDate = computed(() => (teacher) => {
    return teacher.schedules.some((schedule) => new Date(schedule.start).getTime() / 1000 === new Date(selectedDate.value.start).getTime() / 1000);
  });

  const todayEvent = computed(() => {
    let today = new Date();
    let year = today.getFullYear(); // 獲取年份，例如 2023
    let month = String(today.getMonth() + 1).padStart(2, '0'); // 獲取月份，需要補零，例如 "09"
    let day = String(today.getDate()).padStart(2, '0'); // 獲取日期，需要補零，例如 "18"

    let todayString = `${year}-${month}-${day}`;
    return currentEvents.value.filter(event => event.startStr === todayString )
  })

  async function fetchTeachers() {
    const response = await client.query({
      query: gql`
        query {
          teachers {
            id
            name
            email
            schedules {
              start
              end
            }
            subjects {
              name
            }
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.teachers) {
      teachers.value = response.data.teachers
    }
  }

  async function mutationScheduleCreateOrDestroy(teacher) {
    const response = await client.mutate({
      mutation: gql`
        mutation scheduleCreateOrDestroy($teacherId: String! $title: String!, $start: ISO8601DateTime!, $end: ISO8601DateTime!, $allDay: Boolean!) {
          scheduleCreateOrDestroy (input: { teacherId: $teacherId, title: $title, start: $start, end: $end, allDay: $allDay }){
            schedules {
              id
              title
              start
              startStr
              end
              allDay
              teacher {
                id
                name
              }
            }
            success
            message
          }
        }
      `,
      variables: {
        teacherId: teacher.id,
        title: teacher.name,
        start: selectedDate.value.start,
        end: selectedDate.value.end,
        allDay: selectedDate.value.allDay
      },
    });

    if(response.data.scheduleCreateOrDestroy.success) {
      let calendarApi = selectedDate.value.view.calendar
      let events = calendarApi.getEvents()
      calendarApi.unselect() // clear date selection
      events.map((event) => (event.remove()))
      
      currentEvents.value = response.data.scheduleCreateOrDestroy.schedules
      currentEvents.value.map((schedule) => (
        calendarApi.addEvent({
          id: schedule.id,
          title: schedule.title,
          start: schedule.startStr,
          end: schedule.end,
          allDay: schedule.allDay
        })
      ))
      fetchTeachers()
    } else {
      toast.error(response.data.scheduleCreateOrDestroy.message, { autoClose: 3000 })
    }
  }

  function assignSelectedDate(selectInfo) {
    selectedDate.value = selectInfo
  }

  async function handleEventChange(event){
    if (currentEvents.value.some((currentEvent) => new Date(currentEvent.start).getTime() / 1000 === new Date(event.event.start).getTime() / 1000 && currentEvent.title === event.event.title)) {
      toast.error('目標日期已安排老師，無法重複安排', { autoClose: 1000 })
      setTimeout(() => {
        window.location.href = '/class_adviser_interface/teacher_schedule'
      }, 1500);
      return
    }
    const response = await client.mutate({
      mutation: gql`
        mutation scheduleUpdate($id: String! $start: ISO8601DateTime!, $end: ISO8601DateTime!) {
          scheduleUpdate (input: { id: $id, start: $start, end: $end }){
            schedules {
              id
              title
              start
              startStr
              end
              allDay
              teacher {
                id
                name
              }
            }
            success
            message
          }
        }
      `,
      variables: {
        id: event.oldEvent.id,
        start: event.event.start,
        end: event.event.end,
      },
    });
    if(response.data.scheduleUpdate.success) {
      fetchTeachers()
    } else {
      toast.error(response.data.scheduleUpdate.message, { autoClose: 3000 })
    }
  }
  

  return { teachers, currentEvents, selectedDate, hasMatchingDate, todayEvent, fetchTeachers, mutationScheduleCreateOrDestroy, assignSelectedDate, handleEventChange }
})
