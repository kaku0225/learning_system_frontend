<script setup></script>

<template>
  <h2>作業</h2>
  <hr>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="class-home-work-tab" data-bs-toggle="tab" data-bs-target="#class-home-work" type="button" role="tab" aria-controls="class-home-work" aria-selected="true">課程作業</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="test-home-work-tab" data-bs-toggle="tab" data-bs-target="#test-home-work" type="button" role="tab" aria-controls="test-home-work" aria-selected="false">考卷作業</button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <!-- class home work -->
    <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="class-home-work" id="class-home-work-all" value="all">
        <label class="form-check-label" for="class-home-work-all">顯示全部</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="class-home-work" id="class-home-work-undone" value="undone">
        <label class="form-check-label" for="class-home-work-undone">未完成</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="class-home-work" id="class-home-work-done" value="done">
        <label class="form-check-label" for="class-home-work-done">已完成</label>
      </div>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">指派日期</th>
            <th scope="col">學級</th>
            <th scope="col">年級</th>
            <th scope="col">科目</th>
            <th scope="col">知識點</th>
            <th scope="col">影片</th>
            <th scope="col">完成度</th>
            <th scope="col">完成日期</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><a href="#">開始上課</a></td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td><a href="#">開始上課</a></td>
          </tr>
          <tr>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td><a href="#">開始上課</a></td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <span class="page-link">
              2
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- test home work -->
    <div class="tab-pane fade" id="test-home-work" role="tabpanel" aria-labelledby="test-home-work-tab">
      <br>
      <div class="tab-pane fade show active" id="class-home-work" role="tabpanel" aria-labelledby="class-home-work-tab">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="test-home-work" id="test-home-work-all" value="option1">
          <label class="form-check-label" for="test-home-work-all">顯示全部</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="test-home-work" id="test-home-work-undone" value="option2">
          <label class="form-check-label" for="test-home-work-undone">未完成</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="test-home-work" id="test-home-work-done" value="option3">
          <label class="form-check-label" for="inlineRadio3">已完成</label>
        </div>
      </div>
      <table class="table table-bordered" style="margin-top: 30px">
        <thead>
          <tr>
            <th scope="col">指派日期</th>
            <th scope="col">學級</th>
            <th scope="col">科目</th>
            <th scope="col">年級</th>
            <th scope="col">考卷名稱</th>
            <th scope="col">完成度</th>
            <th scope="col">完成日期</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><a href="#">開始答卷</a></td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
            <td><a href="#">開始答卷</a></td>
          </tr>
          <tr>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td>@twitter</td>
            <td><a href="#">開始答卷</a></td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active">
            <span class="page-link">
              2
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
