<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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

