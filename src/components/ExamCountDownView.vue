<script setup>
import { ref, watchEffect } from 'vue'
import { useQuery } from '@vue/apollo-composable';
import VueCountdown from '@chenfengyuan/vue-countdown';
import gql from 'graphql-tag'
const s_exam = ref(0)
const c_exam = ref(0)

const { result } = useQuery(gql`
  query {
    examCountdown {
      sectionalExam
      comprehensiveAssessmentProgram
    }
  }
`);

watchEffect(() => {
  if (result.value) {
    s_exam.value = parseInt(result.value.examCountdown.sectionalExam)
    c_exam.value = parseInt(result.value.examCountdown.comprehensiveAssessmentProgram)
  }
});

</script>

<template>
  <div class="d-flex justify-content-around">
    <div class="card" style="margin-right: 5px">
      <div class="card-body">
        <vue-countdown :time="s_exam" v-slot="{ days, hours, minutes, seconds }">
          <div class="main">
            <h4>距離第二次段考倒數</h4>
            <div class="countdown">
              <div>
                <span class="number days"></span>
                <div>
                  <h3>{{ days }}</h3>
                </div>
                <span>Days</span>
              </div>
              <div>
                <span class="number hours"></span>
                <div>
                  <h3>{{ hours }}</h3>
                </div>
                <span>Hours</span>
              </div>
              <div>
                <span class="number minutes"></span>
                <div>
                  <h3>{{ minutes }}</h3>
                </div>
                <span>Minutes</span>
              </div>
              <div>
                <span class="number seconds"></span>
                <div>
                  <h3>{{ seconds }}</h3>
                </div>
                <span>seconds</span>
              </div>
            </div>
          </div>
        </vue-countdown>
        <br>
        <div class="card-footer text-muted">
          <a href="#" class="card-link">我想上課</a>
          <a href="#" class="card-link">我想做題</a>
        </div>
      </div>
    </div>
    <div class="card" style="margin-left: 5px">
      <div class="card-body">
        <vue-countdown :time="c_exam" v-slot="{ days, hours, minutes, seconds }">
          <div class="main">
            <h4>距離會考</h4>
            <div class="countdown">
              <div>
                <span class="number days"></span>
                <div>
                  <h3>{{ days }}</h3>
                </div>
                <span>Days</span>
              </div>
              <div>
                <span class="number hours"></span>
                <div>
                  <h3>{{ hours }}</h3>
                </div>
                <span>Hours</span>
              </div>
              <div>
                <span class="number minutes"></span>
                <div>
                  <h3>{{ minutes }}</h3>
                </div>
                <span>Minutes</span>
              </div>
              <div>
                <span class="number seconds"></span>
                <div>
                  <h3>{{ seconds }}</h3>
                </div>
                <span>seconds</span>
              </div>
            </div>
          </div>
        </vue-countdown>
        <br>
        <div class="card-footer text-muted">
          <a href="#" class="card-link">我想上課</a>
          <a href="#" class="card-link">我想做題</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h4{
  text-align: center;
  padding-top: 30px;
  text-transform: uppercase;
}

.countdown{
  display: flex;
  justify-content: center;
  gap: 20px;
}
  
.countdown > div{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  box-shadow: 1px 1px 15px rgba(0,0,0,0.25);
  width: 80px;
  height: 80px;
  border-radius: 5px;
}
.number {
  font-weight: 500;
  font-size: 44px;
  color: #CAA78C;
}

div span:last-of-type{
  font-size: 12px;
}

@media screen and (max-width:600px){
  h4{
    font-size: 40px;
  }
  
  .countdown{
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
  }
  .countdown > div{
    background-color: #fff;
    width: 250px;
    height: 60px;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  div span:last-of-type{
  font-size: 24px;
    text-transform: uppercase;
}
  .number {
  font-size: 34px;
}
}
</style>