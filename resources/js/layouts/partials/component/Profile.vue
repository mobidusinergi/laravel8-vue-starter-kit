<template>
    <div class="tab-pane" id="Profile-icon">
      <nav class="sidebar-nav sidebar-scroll">
        <div class="user-detail">
          <div class="text-center mb-3">
            <img
              class="img-thumbnail rounded-circle"
              src="/assets/images/sm/avatar1.jpg"
              alt=""
            />
            <h6 class="mt-3 mb-0">Michelle Green</h6>
            <div class="text-center text-muted">Manager</div>
            <hr />
            <small class="text-muted">Address: </small>
            <p>San Francisco</p>
            <small class="text-muted">Email address: </small>
            <p>louispierce@example.com</p>
            <small class="text-muted">Mobile: </small>
            <p>+ 202-222-2121</p>
            <a
              href="page-profile.html"
              class="btn btn-block btn-success mb-2"
              title=""
              >View Profile</a
            >
            <a href="../documentation/index.html" class="btn btn-block btn-info"
              >Documentation</a
            >
          </div>
          <hr />
          <div class="card-text">
            <div class="mt-0">
              <small class="float-right text-muted">10/200 GB</small>
              <span>Memory</span>
              <div class="progress progress-xxs">
                <div style="width: 60%" class="progress-bar"></div>
              </div>
            </div>
            <div class="mt-4">
              <small class="float-right text-muted">40 MB</small>
              <span>Bandwidth</span>
              <div class="progress progress-xxs">
                <div style="width: 50%" class="progress-bar"></div>
              </div>
            </div>
            <div class="mt-4">
              <small class="float-right text-muted">73%</small>
              <span>Activity</span>
              <div class="progress progress-xxs">
                <div style="width: 40%" class="progress-bar"></div>
              </div>
            </div>
            <div class="mt-4">
              <small class="float-right text-muted">400 GB</small>
              <span>FTP</span>
              <div class="progress progress-xxs mb-0">
                <div style="width: 80%" class="progress-bar bg-danger"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>