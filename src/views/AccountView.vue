<template>


    <div>
        <div id="accountView">
        <table class="table-hover" id="table" >
            <thead>
            <tr>
                <th scope="col">Minu kontod</th>
                <th scope="col"></th>
                <th scope="col">Kontojääk</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>

            <tbody>

            <tr v-for="account in accountInfos">
                <td>{{ account.accountName }}</td>
                <td></td>
                <td>{{ account.balance }}</td>
                <td>
                    <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="editAccountName(account)">
                        Muuda
                    </button>
                </td>
                <td>
                    <button type="submit" class="btn btn-outline-dark btn-sm"
                            v-on:click="deactivateAccountName(account)">Kustuta
                    </button>
                </td>
            </tr>

            </tbody>

        </table>
        </div>
        <br>
        <div v-if="divUpdateAccountName">
            <input type="text" v-model="newAccountName" placeholder='Uus nimi'>
            <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="updateAccountName">Salvesta
            </button>
        </div>
        <br>

<div v-if="divAddNewAccount">
    <button type="submit" class="btn btn-outline-dark btn-sm"
            v-on:click="addNewAccount">Lisa uus konto
    </button>
    <br>
</div>


        <div v-if="displayAddNewAccountComponent">
            <AddAccount :user-id="userId"
                        :name="name"
                        :lisa-nupp="divAddNewAccount"

                @successfulAddedNewAccountEvent="refreshAccounts"/>
        </div>

    </div>
</template>

<script>
import AddAccount from "@/components/account/AddAccount";

export default {
    name: "AccountView",
    components: {AddAccount},
    data: function () {
        return {
            userId: sessionStorage.getItem('userId'),
            newAccountName: '',
            accountId: 0,
            accountInfos: [
                {
                    accountId: 0,
                    accountName: '',
                    balance: 0,
                    isActive: true
                }
            ],
            accountRequest: {
                userId: 0,
                accountTypeId: 0,
                name: '',
                description: '',
                balance: 0
            },

            divUpdateAccountName: false,
            displayAddNewAccountComponent: false,
            divAddNewAccount: true

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
        editAccountName: function (account) {
            this.divUpdateAccountName = true
            this.accountId = account.accountId
            this.newAccountName = account.accountName

        },
        updateAccountName: function () {
            this.$http.patch("/budget/account/update", null, {
                    params: {
                        accountId: this.accountId,
                        accountName: this.newAccountName
                    }
                }
            ).then(response => {
                this.divUpdateAccountName = false
                this.findAccounts()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        addNewAccount: function () {
            this.displayAddNewAccountComponent = true
        },
        refreshAccounts: function () {
            this.findAccounts()
            this.displayAddNewAccountComponent = false
        },
        deactivateAccountName: function (account) {
            this.$http.patch("/budget/account/status", null, {
                    params: {
                        accountId: account.accountId,
                        isActive: false
                    }
                }
            ).then(response => {
                this.findAccounts()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })


            this.accountInfos.isActive = false
        }

    },

    mounted() {
        this.findAccounts()
    }
}

</script>

<style scoped>
#accountView {
    padding-left: 600px;
    padding-bottom: 20px;
    padding-top: 35px;
}
</style>