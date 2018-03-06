<template>
  <div id="app">
    <el-menu :default-active="activeIndex" style="margin-left:10%; width:80%; margin-bottom:20px;" class="el-menu" mode="horizontal" :router="true">
      <el-menu-item index="1" :route="{ path: '/'}">Home</el-menu-item>
      <el-menu-item index="2" :route="{ path: '/about'}">About</el-menu-item>
      <el-menu-item index="3" :route="{ path: '/add'}" style="float: right;">Add Customers</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return{
      activeIndex:'1'
    }
  }
}
</script>

<style>

</style>
