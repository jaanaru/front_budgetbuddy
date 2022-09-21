<template>

    <div>

        <form>

            <div>
                <label for="name">Konto nimi</label>
                <input type="text" id="name" v-model="accountRequest.name">
            </div>
            <div>
                <label for="description">Kirjeldus</label>
                <input type="text" id="description" v-model="accountRequest.description">
            </div>
            <div>
                <label for="balance">Konto jääk</label>
                <input type="text" id="balance" v-model="accountRequest.balance">
            </div>
            <div>
                <label for="accountTypeId">Konto tüüp</label>

            </div>


        </form>


        <button type="button" style="margin: 5px" class="btn btn-outline-dark btn-sm" v-on:click="addAccount">
            Lisa
        </button>

    </div>
</template>

<script>


export default {
    name: "AddAccount",
    props: {
        userId: '',
        name: ''
    },
    data: function () {
        return {
            accountRequest: {
                userId: 0,
                accountTypeId: 0,
                name: '',
                description: '',
                balance: 0
            }
        }
    },
    methods: {
        addAccount: function () {

            this.accountRequest.accountTypeId = 1
            this.accountRequest.userId = this.userId
            this.accountRequest.name = this.accountRequest.name
            this.accountRequest.description = this.accountRequest.description
            this.accountRequest.balance = this.accountRequest.balance

            this.$http.post("/budget/account/add", this.accountRequest
            ).then(response => {
                this.$emit('successfulAddedNewAccountEvent')
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
}


}

</script>

<style scoped>

</style>