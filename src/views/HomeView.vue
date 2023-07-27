<script setup>
  import PieChart from '../components/PieChartView.vue'
  import ExamCountDown from '../components/ExamCountDownView.vue'
</script>

<template>
  <div class="d-flex justify-content-around">
    <div style="height: 400px; width: 400px;">
      <PieChart></PieChart>
    </div>
    <div>
      <ExamCountDown></ExamCountDown>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">待辦事項</h5>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
          </div>
        </div>
        <div class="card-footer d-flex">
          <div class="ms-auto">
            <small class="text-muted">新增標籤</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="Los Angeles Skyscrapers"/>
        <div class="card-body">
          <h5 class="card-title">已完成事項</h5>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
                <div class="col-auto">
                  <span class="badge bg-primary rounded-pill">14</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img src="https://plus.unsplash.com/premium_photo-1683133757924-9bdece92f6bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" class="card-img-top" alt="Palm Springs Road"/>
        <div class="card-body">
          <h5 class="card-title">公告</h5>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
            <a href="#" class="list-group-item list-group-item-action mt-1">
              <div class="row">
                <div class="col">
                  <span>A second link item</span>
                </div>
              </div>
              <div>
                <small>2022-02-01</small>
              </div>
            </a>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>