<template>
    <div>
        <h2> {{ title }}</h2>
        <!-- siia tuleb list -->

        <!--      <div>-->
        <!--          <ul class="list-group" v-for="category in incomeCategories">-->
        <!--              <li>-->
        <!--                  <button type="button" class="list-group-item list-group-item-action">{{-->
        <!--                          category.categoryName-->
        <!--                      }}-->
        <!--                  </button>-->
        <!--              </li>-->
        <!--              <ul class="list-group" v-for="subcategory in category.subcategories">-->
        <!--                  <li>-->
        <!--                      <button type="button" class="list-group-item list-group-item-action">-->
        <!--                          {{ subcategory.subcategoryName }}-->
        <!--                      </button>-->
        <!--                  </li>-->
        <!--              </ul>-->
        <!--          </ul>-->
        <!--      </div>-->

        <br>
        <br>
        <br>
        <table>
            <tr v-for="category in incomeCategories">
                <td>{{ category.categoryName }}</td>
                <br> <br> <br> <br>
                <div v-for="subcategory in category.subcategories">
                    {{ subcategory.subcategoryName }}
                    <button type="submit" v-on:click="editSubcategoryName(subcategory)">muuda</button>
                    <button type="submit">kustuta</button>
                </div>
                <button type="submit">lisa...</button>
            </tr>
        </table>
        <br><br>
        <div>
            <input type="text" v-model="newSubcategoryName">
            <button v-on:click="updateSubcategoryName">Salvesta</button>
        </div>


        <!--    <button type="submit">Lisa</button>-->
        <!--    <button type="submit">Muuda</button>-->


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
            newSubcategoryName: 'Tere',
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

        }

    },
    methods: {
        findIncomeCategories: function () {
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

</style>