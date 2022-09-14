<template>
  <div>

<!--   <AlertError :errorMessage="errorMessage"/>-->
    <input type="text" style="margin: 5px" placeholder="kasutajanimi" v-model="userRequest.userName"><br>
    <input type="text" style="margin: 5px" placeholder="parool" v-model="userRequest.password"><br>
    <input type="text" style="margin: 5px" placeholder="email" v-model="userRequest.email"><br>
    <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="registerNewUser">Loo kasutaja</button>
    <br>
  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";

export default {
  name: 'RegisterUserView',
  components: {
     AlertError
  },

  data: function () {
    return {
      successMessage: '',
      userRequest: {
        userName: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    registerNewUser: function () {
      this.$http.post("/login/register/user", this.userRequest
      ).then(response => {
        // todo: vaja siit edasi arendada
        this.successMessage = 'Yay! Uus klient lisatud (vaja siit edasi arendada)'
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>