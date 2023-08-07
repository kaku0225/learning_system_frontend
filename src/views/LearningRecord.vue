<script setup>
  import Rank from '../components/RankView.vue'
  import RadarChart from '../components/RadarChartView.vue'
</script>

<template>
  <h2>學習記錄</h2>
  <hr>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="viewing-records-tab" data-bs-toggle="tab" data-bs-target="#viewing-records" type="button" role="tab" aria-controls="viewing-records" aria-selected="true">觀看紀錄</button>
      <button class="nav-link" id="answering-records-tab" data-bs-toggle="tab" data-bs-target="#answering-records" type="button" role="tab" aria-controls="answering-records" aria-selected="false">做題紀錄</button>
    </div>
  </nav>
  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="viewing-records" role="tabpanel" aria-labelledby="viewing-records-tab">
      <br>
      <Rank></Rank>
      <hr>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-image-top">
              <img class="w-100" src="https://images.unsplash.com/photo-1560692901-45d529ed05bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-image-top">
              <img class="w-100" src="https://images.unsplash.com/photo-1560692901-45d529ed05bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-image-top">
              <img class="w-100" src="https://images.unsplash.com/photo-1560692901-45d529ed05bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Header</div>
            <div class="card-image-top">
              <img class="w-100" src="https://images.unsplash.com/photo-1560692901-45d529ed05bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="...">
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="answering-records" role="tabpanel" aria-labelledby="answering-records-tab">
      <br>
      <div class="row mb-3">
        <div class="card p-3 w-100">
          <div class="col-md-3">
            <select class="form-select" aria-label="school">
              <option value="國文">國文</option>
              <option value="英文">英文</option>
              <option value="數學">數學</option>
              <option value="地理">地理</option>
              <option value="歷史">歷史</option>
              <option value="公民">公民</option>
              <option value="生物">生物</option>
              <option value="物理">物理</option>
              <option value="地球科學">地球科學</option>
            </select>
          </div>
          <br>
          <div class="col-md-3">
            <select class="form-select" aria-label="school">
              <option value="七年級">七年級</option>
              <option value="八年級">八年級</option>
              <option value="九年級">九年級</option>
            </select>
          </div>
          <div class="col-md-12">
            <RadarChart></RadarChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
