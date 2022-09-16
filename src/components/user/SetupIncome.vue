<template>
    <div>
        <h2> {{ title }}</h2>

        <table>
            <tr v-for="category in incomeCategories" id="mainCategory">
                <td>{{ category.categoryName }}</td>
                <br> <br> <br> <br>


                <div v-for="subcategory in category.subcategories" id="subcategiry">
                    {{ subcategory.subcategoryName }}
                    <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="editSubcategoryName(subcategory)">Muuda</button>
                    <button type="submit" class="btn btn-outline-dark btn-sm">kustuta</button>
                </div>

                <button type="submit" class="btn btn-outline-dark btn-sm">lisa...</button>
            </tr>
        </table>
        <br><br>
        <div v-if="divUpdateSubcategoryName">
            <input type="text" v-model="newSubcategoryName">
            <button type="submit" class="btn btn-outline-dark btn-sm" v-on:click="updateSubcategoryName">Salvesta</button>
        </div>



    </div>

</template>

<script>
export default {
    name: "SetupIncome",
    props: {
        title: String,
    },

    data() {
        return {
            userId: sessionStorage.getItem('userId'),
            newSubcategoryName: '',
            subcategoryId: 0,
            incomeCategories: [
                {
                    categoryId: 0,
                    categoryName: "",
                    subcategories: [
                        {
                            categoryId: 0,
                            subcategoryId: 0,
                            subcategoryName: "",
                            isActive: true
                        }
                    ]
                }
            ],
            divUpdateSubcategoryName: true,

        }

    },
    methods: {
        findIncomeCategories: function () {
            this.divUpdateSubcategoryName = false
            this.$http.get("/setup/categories/income", {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                this.incomeCategories = response.data.categories
                console.log("income kategooriad", response.data)
            }).catch(error => {
                console.log(error)
            })
        },
        editSubcategoryName: function (subcategory) {
            this.divUpdateSubcategoryName = true
            this.subcategoryId = subcategory.subcategoryId
            this.newSubcategoryName = subcategory.subcategoryName
        },
        updateSubcategoryName: function () {

            this.$http.patch("/setup/subcategory/update", null, {
                    params: {
                        subcategoryId: this.subcategoryId,
                        subcategoryName: this.newSubcategoryName
                    }
                }
            ).then(response => {
                this.findIncomeCategories()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        this.findIncomeCategories()
    }
}
</script>

<style scoped>
#mainCategory {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: 2px ;
    padding: 5px;
}
#subcategiry {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border: 2px ;
    padding: 2px;
}

</style>