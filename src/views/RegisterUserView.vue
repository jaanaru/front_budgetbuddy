<template>
  <div>

   <AlertError :errorMessage="errorMessage"/>

    <input type="text" style="margin: 5px" placeholder="kasutajanimi" v-model="userRequest.username"><br>
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
      errorMessage: '',
        userExists : true,
      userRequest: {
        username: '',
        password: '',
        email: ''
      },
      userResponse: {
        userId: 0
      }
    }
  },
  methods: {
    registerNewUser: function () {
      this.errorMessage = ''

      if (this.userRequest.username.length == 0 || this.userRequest.password.length == 0 || this.userRequest.email.length == 0) {
        this.errorMessage = 'Kõik väljad peavad olema täidetud'
      } else {
        this.$http.post("/login/register/user", this.userRequest
        ).then(response => {
          this.userResponse = response.data
          sessionStorage.setItem('userId', this.userResponse.userId)
          this.$router.push({name: 'startBudgetRoute'})



        }).catch(error => {
          // kui tuleb error, siis peaks errorMessage ära täitma????
            let errorMessage = error.error.response.data.detail
            errorMessage = errorMessage.replace('[', '')
            errorMessage = errorMessage.replace(']', '')
            this.errorMessage = errorMessage

          console.log(error.response.detail)
        });
      }
    }
  }
}
</script>