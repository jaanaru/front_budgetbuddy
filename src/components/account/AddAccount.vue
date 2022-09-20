<template>

    <div>

        <input type="text" placeholder="" v-model="accountName">

        <button type="button" style="margin: 5px" class="btn btn-outline-dark btn-sm" v-on:click="addAccount">
            Lisa
        </button>

    </div>
</template>

<script>
export default {
    name: "AddAccount",
    data: function () {
        return {
            accountName: ''
        }
    },
    methods: {
        addAccount: function () {
            this.$http.post("/budget/account/add", this.addAccount
            ).then(response => {
                this.$emit('successfulAddedNewAccountEvent')
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

</script>

<style scoped>

</style>