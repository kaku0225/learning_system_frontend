<script setup>
import { ref, onMounted } from 'vue'
import { useApolloClient } from '@vue/apollo-composable';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import gql from 'graphql-tag'
import ScheduleNewModal from '../components/ScheduleNewModal.vue'
import Modal from 'bootstrap/js/dist/modal';
import { storeToRefs } from 'pinia'
import { useTeachersScheduleStore } from "@/stores/teachersSchedule.js"

  const { resolveClient } = useApolloClient();
  const client = resolveClient()

  const store = useTeachersScheduleStore()
  const { fetchTeachers, assignSelectedDate, handleEventChange } = store
  const { currentEvents, todayEvent } = storeToRefs(store)

  const ScheduleModal = ref({ modal: null })

  const calendarOptions = ref({
    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin // needed for dateClick
    ],
    headerToolbar: {
      // left: 'prev,next today',
      // center: 'title',
      // right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    events: [], // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    select: handleDateSelect,
    // eventClick: handleEventClick,
    eventChange: handleEventChange,
    eventsSet: handleEvents
    /* you can update a remote database when these fire:
    eventAdd:
    eventRemove:
    */
  })

  function handleWeekendsToggle() {
    calendarOptions.value.weekends = !calendarOptions.value.weekends // update a property
  }

  function handleDateSelect(selectInfo) {
    assignSelectedDate(selectInfo)
    ScheduleModal.value.modal.show()
  }

  function handleEvents(events) {
    currentEvents.value = events
  }

  async function fetchSchedules() {
    const response = await client.query({
      query: gql`
        query {
          schedules {
            id
            title
            start
            end
            allDay
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.schedules) {
      calendarOptions.value.events = response.data.schedules
    }
  }

onMounted(() => {
  fetchSchedules()
  fetchTeachers()
  ScheduleModal.value.modal = new Modal('#ScheduleModal', {})
})

</script>

<template>
  <div class='calendar-demo-app'>
    <div class='calendar-demo-app-sidebar'>
      <!-- <div class='calendar-demo-app-sidebar-section'> -->
        <!-- <h2 class="calendarTitle">Instructions</h2>
        <ul class="calendarUl">
          <li class="calendarLi">Select dates and you will be prompted to create a new event</li>
          <li class="calendarLi">Drag, drop, and resize events</li>
          <li class="calendarLi">Click an event to delete it</li>
        </ul> -->
      <!-- </div> -->
      <div class='calendar-demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked='calendarOptions.weekends'
            @change='handleWeekendsToggle'
          />
          顯示假日
        </label>
      </div>
      <div class='calendar-demo-app-sidebar-section'>
        <h2>今日輔導老師 ({{ todayEvent.length }})</h2>
        <ul class="calendarUl">
          <li class="calendarLi" v-for='event in todayEvent' :key='event.id'>
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='calendar-demo-app-main'>
      <FullCalendar
        class='calendar-demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b class="calendarB">{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
  <ScheduleNewModal></ScheduleNewModal>
</template>

<style lang='css'>

.calendarTitle {
  margin: 0;
  font-size: 16px;
}

.calendarUl {
  margin: 0;
  padding: 0 0 0 1.5em;
}

.calendarLi {
  margin: 1.5em 0;
  padding: 0;
}

.calendarB { /* used for event dates/times */
  margin-right: 3px;
}

.calendar-demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.calendar-demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.calendar-demo-app-sidebar-section {
  padding: 2em;
}

.calendar-demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

</style>