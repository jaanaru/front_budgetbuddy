<template>
    <div>
        <div v-if="divLogInInputForm">
            <br>
            <h2>{{ title }}</h2>
            <AlertError :errorMessage="errorMessage"/>
            <input type="text" style="margin: 5px" placeholder="kasutajanimi" v-model="loginRequest.username"><br>
            <input type="password" style="margin: 5px" placeholder="parool" v-model="loginRequest.password"><br>
            <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="logIn">Logi sisse</button>
            <br>
            <router-link to="/register" id="link">Registreeri uus kasutaja</router-link>
        </div>

    </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";
import BudgetView from "@/views/BudgetView";
export default {
    name: "LogIn",
    components: {AlertError, BudgetView},
    // props: {
    //     title: String
    // },  EI TEA KAS SEDA ON VAJA
    data: function () {
        return {
            errorMessage: '',
            divLogInInputForm: true,
            loginRequest: {
                username: '',
                password: '',
            },

            userInfo: {
                userId: 0,
                accounts: [,
                    {
                        id: 0,
                        accountName: '',
                        balance: 0,
                        isActive: true
                    }
                ]
            }
        }

    },
    methods: {
        logIn: function () {
            this.errorMessage = ''

                this.$http.post("/login/log-in", this.loginRequest
                ).then(response => {
                    this.userInfo = response.data
                    sessionStorage.setItem('userId', this.loginRequest.userId)
                    this.$router.push({name: 'myMonthlyBudget'})


                }).catch(error => {
                    this.alertError = error.response.data.detail
                })
            }
    },


//
//     navigateToCustomerHomeView: function () {
//         sessionStorage.setItem('userId', this.userInfo.userId)
//         sessionStorage.setItem('accounts', this.userInfo.accounts)
//         this.$router.push({name: 'accountsTransactionsRoute', query: {userId: this.userInfo.userId}})
// }


}


</script>

<style>
#link {
    color: 	#390A7A
}
</style>