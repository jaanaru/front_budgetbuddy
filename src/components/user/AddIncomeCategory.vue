<template>
    <div>

        <input type="text" placeholder="" v-model="incomeCategoryName">

        <button type="button" style="margin: 5px" class="btn btn-outline-secondary btn-sm" v-on:click="addIncomeCategory">
            Lisa
        </button>

    </div>
</template>

<script>
export default {
    name: "AddIncomeCategory",
    props: {
        userId: ''
    },
    data: function () {
        return {
            incomeCategoryName: ''
        }
    },
    methods: {
        addIncomeCategory: function () {

            this.$http.post("/setup/category/income/add", null, {
                    params: {
                        userId: this.userId,
                        categoryName: this.incomeCategoryName
                    }
                }
            ).then(response => {
                this.$emit('successfulAddedNewIncomeCategoryEvent')
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