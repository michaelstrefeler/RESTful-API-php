<template>
  <div class="details">
    <router-link to="/">Back</router-link>
    <h1 class="page-header">{{ customer.first_name }} {{ customer.last_name }}</h1>

    <span style="float:right"><el-button v-on:click="deleteCustomer(customer.id)" type="danger">Delete</el-button> </span>
    <router-link v-bind:to="'/edit/'+customer.id" style="float:right; margin-right:5px;"><el-button type="primary">Edit</el-button></router-link>
    <br>
    <br>
    <ul class="list-group">
           <li class="list-group-item"><i class="el-icon-phone"></i> {{ customer.phone }}</li>
           <li class="list-group-item"><i class="el-icon-message"></i> {{ customer.email }}</li>
       </ul>
       <br />
       <ul class="list-group">
           <li class="list-group-item"> {{ customer.address }}</li>
           <li class="list-group-item">{{ customer.city }}</li>
           <li class="list-group-item">{{ customer.state }}</li>
       </ul>
  </div>
</template>

<script>
  export default {
    name: 'customerdetails',
    data () {
      return {
        customer: ''
      }
    },
    methods:{
      fetchCustomer(id){
        this.$http.get('http://slimapp/api/customer/'+ id)
        .then(function(response){
          this.customer = response.body
        })
      },
      deleteCustomer(id){
        this.$http.delete('http://slimapp/api/customer/delete/'+ id)
        .then(function(response){
          this.$router.push({path: '/', query: {alert: 'Customer Deleted'}})
        })
      }
    },
    created: function(){
      this.fetchCustomer(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .details{
    margin-left:10%;
    width: 80%;
  }
</style>
