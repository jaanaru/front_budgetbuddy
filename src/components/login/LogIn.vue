<template>
  <div>
    <div v-if="divLogInInputForm">
      <br>
      <h2>{{ title }}</h2>
      <AlertError :errorMessage="alertError"/>
      <input type="text" style="margin: 5px" placeholder="kasutajanimi" v-model="loginRequest.username"><br>
      <input type="password" style="margin: 5px" placeholder="parool" v-model="loginRequest.password"><br>
      <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="logIn">Logi sisse</button>
      <br>
      <router-link to="/register">Registreeri uus kasutaja</router-link>
    </div>

    <div v-if="divChooseRole">
      <br>
      <h2>Sisene rolliga</h2>
      <input checked type="radio" id="optionOne" :value="roles[0]" v-model="roleSelected"/>
      <label for="optionOne">{{ roles[0] }}</label>
      <br>
      <input type="radio" id="optionTwo" :value="roles[1]" v-model="roleSelected"/>
      <label for="optionTwo">{{ roles[1] }}</label>
      <br>
      <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="logInWithRole">Sisene</button>
    </div>
  </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";

export default {
  name: "LogIn",
  components: {AlertError},
  props: {
    title: String
  },
  data: function () {
    return {
      alertError: '',
      roles: [],
      divLogInInputForm: true,
      divChooseRole: false,
      roleSelected: 'admin',
      loginRequest: {
        username: '',
        password: '',
      },
      customerInfo: {
        userId: '',
        roleNames: [],
        customerId: '',
        firstName: '',
        lastName: '',
        personalCode: ''
      }
    }
  },
  methods: {
    logIn: function () {
      this.alertError = ''
      this.$http.post("/log-in", this.loginRequest
      ).then(response => {
        this.customerInfo = response.data
        this.roles = this.customerInfo.roleNames

        if (this.roles.length > 1) {
          // run this process when multirole
          this.divLogInInputForm = false
          this.divChooseRole = true
        } else {
          // run this process when single role

          // when admin
          if (this.roles[0] == 'admin') {
            this.$router.push({name: 'adminRoute'})
          } else {
            this.navigateToCustomerHomeView()
          }
        }
      }).catch(error => {
        this.alertError = error.response.data.detail
      })
    },
    logInWithRole: function () {
      if (this.roleSelected == 'admin') {
        this.$router.push({name: 'adminRoute'})
      } else {
        this.navigateToCustomerHomeView()
      }
    },
    navigateToCustomerHomeView: function () {
      sessionStorage.setItem('firstName', this.customerInfo.firstName)
      sessionStorage.setItem('lastName', this.customerInfo.lastName)
      this.$router.push({name: 'customerHomeRoute', query: {customerId: this.customerInfo.customerId}})
    }
  }
}
</script>