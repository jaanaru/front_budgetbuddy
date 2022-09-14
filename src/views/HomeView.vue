<template>
  <div class="home">
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

