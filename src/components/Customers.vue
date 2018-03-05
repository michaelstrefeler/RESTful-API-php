<template>
  <div class="customers">
    <h1>Manage customers</h1>
    <el-table :data="customers" stripe style="width: 90%; margin-left:5%">
      <el-table-column prop="first_name" label="First Name" width="180">
      </el-table-column>
      <el-table-column prop="last_name" label="Last Name" width="180">
      </el-table-column>
      <el-table-column prop="email" label="Email">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
      customers:[]
    }
  },
  methods: {
    fetchCustomers(){
      this.$http.get('http://slimapp/api/customers')
      .then(function(response){
        this.customers = response.body;
      });
    }
  },
  created: function(){
    this.fetchCustomers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
