<template>
  <header class="main-header">
    <a href="/" class="logo">
      <span class="logo-mini"><b>V</b></span>
      <span class="logo-lg"><b>Vue-Koa-Sample</b></span>
    </a>
    <!--/* トップメニュー */-->
    <nav class="navbar navbar-static-top" role="navigation">
      <!--/* サイドバー制御 */-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li>
            <a href="#" id="logout"><i class="fa fa-sign-out"></i> ログアウト</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
