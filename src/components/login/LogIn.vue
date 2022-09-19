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

    </div>
</template>

<script>
import AlertError from "@/components/alerts/AlertError";

export default {
    name: "LogIn",
    components: {AlertError},
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
            // if (this.loginRequest.username == 0 || this.loginRequest.password == 0) {
            //     this.errorMessage = 'Vale kasutajanimi või parool'
            // } else {
            //         this.$http.get("/some/path", {
            //                 params: {
            //                     someParam: this.someVariable
            //                 }
            //             }
            //         ).then(response => {
            //             console.log(response.data)
            //         }).catch(error => {
            //             console.log(error)
            //         })
            //     }
                this.$http.post("//login/log-in", this.loginRequest
                ).then(response => {
                    this.userInfo = response.data
                    sessionStorage.setItem('userId', this.loginRequest.userId)
                    this.$router.push({name: ''})


                }).catch(error => {
                    this.alertError = error.response.data.detail
                })
            }
    },



    navigateToCustomerHomeView: function () {
        sessionStorage.setItem('userId', this.userInfo.userId)
        sessionStorage.setItem('accounts', this.userInfo.accounts)
        this.$router.push({name: 'accountsTransactionsRoute', query: {userId: this.userInfo.userId}})
}


}


</script>

<style>

</style>