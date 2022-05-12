

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <a class="navbar-brand" href="#"><span class="date">{{ this.currentDateTime() }}</span></a>
         <a class="navbar-brand text-align-right" href="#"><span class="contact"> Contact Us</span></a>

<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
         
    </div>

  
  </nav>
</template>

<script>

export default {
  name: "App",

  methods: {
    currentDateTime() {
      const current = new Date();
      const date =
        current.getMonth() +
        1 +
        "-" +
        current.getDate() +
        "-" +
        current.getFullYear();

      return date;
    },
  },
};
</script>


<style>

.date{
    color:yellow;
    font-size:30px
}

</style>
