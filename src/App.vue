<template>
  <div id="app">
    <nav style="background-color: #e3f2fd;">

      <router-link to="/">Home</router-link> |
      <router-link to="/mybudget">Minu eelarve</router-link> |
      <router-link to="/report">Raport</router-link> |
      <router-link to="/transactions">Minu tehingud</router-link> |
        <router-link to="/account">Kontod</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: 	#390A7A;
    padding-bottom: 900px;
    background-color: aliceblue;
    background-size: auto;
}

nav {
  padding: 35px;
}

nav a {

  font-weight: bold;
  color: 	#390A7A;
}

nav a.router-link-exact-active {
  color: 	#390A7A;
}
body {
    background-color: aliceblue;
    background-size: auto;
}

</style>
