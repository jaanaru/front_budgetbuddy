<template>
  <div>

<!--   <AlertError :errorMessage="errorMessage"/>-->
    {{userRequest.userName}}
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
      errorMessage: '',
      userRequest: {
        userName: '',
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
      // enne kui te üldse register user sõnumit teele panete, siis vaadake et kõik kastid oleks täidetud (vihje .size())
      // kui ei ole täidetud siis alert errori ära täita, kui errorit pole siis errorMessage = ''

      this.$http.post("/login/register/user", this.userRequest
      ).then(response => {
          this.userResponse = response.data
        // todo: salvestada userId ära session storage'sse (otsi sõna 'session' järgi üle ourBank-front projekti selle kasutust
        //  (ctrl+shift+F)
        //  Teil läheb seda userId'd hiljem igal pool vaja. Vaadake hiljem näidiseid et kuidas sessionstorage.getItem() abil saada neid väärtusi kätte
        // peale seda pushige ('push') uuele lehele startBudgetVuew (vihje, router sätted)

        //


      }).catch(error => {
        // kui tuleb error, siis peaks errorMessage ära täitma
        console.log(error.response.detail)
      })
    }
  }
}
</script>