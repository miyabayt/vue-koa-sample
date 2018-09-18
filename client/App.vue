<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="content-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  },
};
</script>

<style>
</style>
