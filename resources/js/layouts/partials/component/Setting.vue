<template>
    <div class="tab-pane" id="Setting-icon">
      <nav class="sidebar-nav sidebar-scroll">
        <p>General Settings</p>
        <ul class="setting-list list-unstyled">
          <li>
            <label class="fancy-checkbox">
              <input type="checkbox" name="checkbox" />
              <span>Report Panel Usag</span>
            </label>
          </li>
          <li>
            <label class="fancy-checkbox">
              <input type="checkbox" name="checkbox" checked="" />
              <span>Email Redirect</span>
            </label>
          </li>
          <li>
            <label class="fancy-checkbox">
              <input type="checkbox" name="checkbox" checked="" />
              <span>Notifications</span>
            </label>
          </li>
          <li>
            <label class="fancy-checkbox">
              <input type="checkbox" name="checkbox" />
              <span>Offline</span>
            </label>
          </li>
          <li>
            <label class="fancy-checkbox">
              <input type="checkbox" name="checkbox" />
              <span>Location Permission</span>
            </label>
          </li>
        </ul>
        <ul class="list-group">
          <li class="list-group-item">
            Dark Menu
            <div class="float-right">
              <label class="switch">
                <input type="checkbox" class="dark_menu_btn" />
                <span class="slider round"></span>
              </label>
            </div>
          </li>
          <li class="list-group-item">
            Dark version
            <div class="float-right">
              <label class="switch">
                <input type="checkbox" class="light-btn" />
                <span class="slider round"></span>
              </label>
            </div>
          </li>
        </ul>
        <hr />
        <p>Choose Skin</p>
        <ul class="choose-skin list-unstyled mb-0">
          <li data-theme="indigo" class="active">
            <div class="indigo"></div>
          </li>
          <li data-theme="green">
            <div class="green"></div>
          </li>
          <li data-theme="orange">
            <div class="orange"></div>
          </li>
          <li data-theme="blush">
            <div class="blush"></div>
          </li>
          <li data-theme="cyan">
            <div class="cyan"></div>
          </li>
        </ul>
      </nav>
    </div>
</template>