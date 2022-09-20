<template>


    <div>
        <table class="table-hover">
          <thead>
          <tr>
              <th scope="col">Minu kontod</th>
          </tr>
          </thead>

            <tbody>
            <tr v-for="account in accountInfos">
                <td>{{account.accountName}}</td>
            </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
export default {
    name: "AccountView",
    data: function () {
        return {
            userId: sessionStorage.getItem('userId'),
            accountInfos: [
                {
                    id: 0,
                    accountName: '',
                    balance: 0,
                    isActive: true
                }
            ]
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
            }
        },

        mounted() {
        this.findAccounts()
        }
}

</script>

<style scoped>

</style>