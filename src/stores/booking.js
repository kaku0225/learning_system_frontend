import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag'

export const useBookingStore = defineStore('booking', () => {
  const { resolveClient } = useApolloClient();
  const client = resolveClient()
  const today = new Date();
  const currentDate = today.toLocaleDateString("en-CA")
  const branchSchools = ref([])
  const booking = ref({
    branchSchool: '',
    seat: '',
    semester: 'A',
    classTime: '',
    date: currentDate,
    withLunch: false,
    counselingSubjects: [],
    classmatesIds: []
  })

  async function fetchBranchSchools() {
    const response = await client.query({
      query: gql`
        query {
          branchSchools {
            id
            name
            phone
            address
            enabled
          }
        }
      `,fetchPolicy: "no-cache"
    });

    if (response.data.branchSchools) {
      branchSchools.value = response.data.branchSchools
      booking.value.branchSchool = branchSchools.value[0].name
    }
  }


  return { branchSchools, booking, fetchBranchSchools }
})
