<template>
<div>
    <input type="text" placeholder="" v-model="expenseCategoryName">

    <button type="button" style="margin: 5px" class="btn btn-outline-secondary btn-sm" v-on:click="addExpenseCategory">
        Lisa
    </button>
</div>
</template>

<script>
export default {
    name: "AddExpenseCategory",
    props: {
        userId: ''
    },
    data: function (){
        return {
            expenseCategoryName: ''
    }
    },
    methods: {
        addExpenseCategory: function () {
            this.$http.post("/setup/category/expense/add", null, {
                    params: {
                        userId: this.userId,
                        categoryName: this.expenseCategoryName
                    }
                }
            ).then(response => {
                this.$emit('successfulAddedNewExpenseCategoryEvent')
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