<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li class="treeview">
          <a href="#"><i class="fa fa-cogs"></i>
            <span>システム設定</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="/system/staffs/find?page=1"><i class="fa fa-user-o"></i>担当者マスタ</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
