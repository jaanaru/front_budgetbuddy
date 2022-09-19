<template>
  <div class="home" >
    <img alt="Vue logo" src="../assets/BudgetbuddyLogo.png" height="100px"
         width="120px">
    <LogIn title="Sisse logimine"/>
  </div>
</template>

<script>
import LogIn from "@/components/login/LogIn";

export default {
  name: 'HomeView',
  components: {LogIn}
}
</script>


<style >
#mainCategory {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: 2px;
    padding: 5px;
}

#subcategory {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: 2px;
    padding: 2px;
}

</style>




