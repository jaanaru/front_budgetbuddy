<template>


    <div>
        <table class="table-hover">
          <thead>
          <tr>
              <th scope="col">Minu kontod</th>
          </tr>
          </thead>

            <tbody>
            <div>


            <tr v-for="account in accountInfos">
                <td>{{account.accountName}}
                    <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="editAccountName">Muuda</button>
                    <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="deactivateAccountName">Kustuta</button></td>
            </tr>

            </div>
            <button type="submit" class="btn btn-outline-dark btn-sm"
                    v-on:click="addNewAccount(subcategory)">Lisa
            </button>
            </tbody>

        </table>
        <br>
        <div v-if="divUpdateAccountName">
            <input type="text" v-model="newAccountName">
            <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="updateAccountName">Salvesta
            </button>
        </div>
        <br>

    </div>
</template>

<script>
export default {
    name: "AccountView",
    data: function () {
        return {
            userId: sessionStorage.getItem('userId'),
            newAccountName: '',
            accountId: 0,
            accountInfos: [
                {
                    id: 0,
                    accountName: '',
                    balance: 0,
                    isActive: true
                }
            ],

            divUpdateAccountName: false,

        }

    },
    methods: {
        findAccounts: function () {
                this.$http.get("/budget/account/all", {
                        params: {
                            userId: this.userId
                        }
                    }
                ).then(response => {
                    this.accountInfos = response.data
                    console.log("kontod", response.data)
                }).catch(error => {
                    console.log(error)
                })
            },
        editAccountName: function(account) {
            this.divUpdateAccountName = true
            this.id = account.id
            this.newAccountName = account.accountName

        },
        updateAccountName: function () {
            this.$http.patch("/budget/account/update", null, {
                    params: {
                        accountId: this.accountId,
                        accountName: this.accountName
                    }
                }
            ).then(response => {
                this.findAccounts()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },







        },


        mounted() {
        this.findAccounts()
        }
}

</script>

<style scoped>

</style>