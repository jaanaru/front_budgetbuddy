<template>
    <div>

        <input type="text" placeholder="" v-model="subcategoryName">

        <button type="button" style="margin: 5px" class="btn btn-outline-dark btn-sm" v-on:click="addNewSubcategory">
            Lisa
        </button>


    </div>
</template>

<script>
export default {
    name: "AddSubcategory",
    props: {
        categoryId: 0
    },
    data: function () {
        return {
            subcategoryName: ''
        }

    },
    methods: {
        addNewSubcategory: function () {

            this.$http.post("/setup/subcategory/add", null, {
                    params: {
                        categoryId: this.categoryId,
                        subcategoryName: this.subcategoryName
                    }
                }
            ).then(response => {
                this.$emit('successfulAddedNewSubcategoryEvent')
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