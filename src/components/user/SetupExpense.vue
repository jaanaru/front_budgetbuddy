<template>

  <div id="expense">
    <h2> {{ title }}</h2>

      <table>
          <tr v-for="category in expenseCategories" id="mainCategory">
              <td>{{ category.categoryName }}</td>
              <br> <br> <br> <br>


              <div v-for="subcategory in category.subcategories" id="subcategiry">
                  {{ subcategory.subcategoryName }}
                  <button type="submit" class="btn btn-outline-secondary btn-sm"v-on:click="editSubcategoryName(subcategory)">muuda</button>
                  <button type="submit" class="btn btn-outline-secondary btn-sm" v-on:click="deactivateSubcategory(subcategory)">kustuta</button>
              </div>

              <div>
                  <button type="submit" class="btn btn-outline-secondary btn-sm" id="addSubcategory"
                          v-on:click="addNewSubcategory">Lisa uus alamkategooria
                  </button>
                  <div v-if="displayAddSubcategoryComponent">
                      <AddSubcategory :category-id="category.categoryId"
                                      :display-component="displayAddSubcategoryComponent"
                                      @successfulAddedNewSubcategoryEvent="refreshSubcategories"/>
                  </div>
              </div>


          </tr>
      </table>


      <br><br>


      <div v-if="divUpdateSubcategoryName">
          <input type="text" v-model="newSubcategoryName">
          <button type="submit" class="btn btn-outline-secondary btn-sm" v-on:click="updateSubcategoryName">Salvesta</button>
      </div>

      <div>
          <button type="submit" class="btn btn-outline-secondary btn-lg" v-on:click="addNewExpenseCategory">Lisa uus peakategooria
          </button>
          <div v-if="displayNewExpenseComponent">

              <AddExpenseCategory :user-id="userId"
                                 @successfulAddedNewExpenseCategoryEvent="refreshCategories"/>

          </div>
      </div>

  </div>


</template>



<script>
import AddSubcategory from "@/components/user/AddSubcategory";
import AddExpenseCategory from "@/components/user/AddExpenseCategory";

export default {
  name: "SetupExpense",
    components: {AddSubcategory, AddExpenseCategory},
    props: {
      title: String,
    },

   data() {
return {
    userId: sessionStorage.getItem('userId'),
    newSubcategoryName: '',
    subcategoryId: 0,
    expenseCategories: [
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
    divAddSubcategory: true,
    displayAddSubcategoryComponent: true,
    displayNewExpenseComponent: false
   }
   },
    methods: {
        findExpenseCategories: function () {
            this.divUpdateSubcategoryName = false
            this.$http.get("/setup/categories/expense", {
                    params: {
                        userId: this.userId
                    }
                }
            ).then(response => {
                this.expenseCategories = response.data.categories
                console.log("expense kategooriad", response.data)
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
                this.findExpenseCategories()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        },

        addNewSubcategory: function () {
            this.displayAddSubcategoryComponent = true

        },
        refreshSubcategories: function () {
            this.findExpenseCategories()
            this.displayAddSubcategoryComponent = false
        },
        deactivateSubcategory: function (subcategory) {
            this.$http.patch("/setup/subcategory/status", null, {
                    params: {
                        subcategoryId: subcategory.subcategoryId,
                        isActive: false
                    }
                }
            ).then(response => {
                this.findExpenseCategories()
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })


            this.expenseCategories.isActive = false
        },
        addNewExpenseCategory: function () {
          this.displayNewExpenseComponent =true
        },

        refreshCategories: function () {
            this.findExpenseCategories()
            this.displayNewExpenseComponent = false
        },

    },
    mounted() {
        this.findExpenseCategories()
    }

}
</script>

<style scoped>
#expense {
    background-color: aliceblue;
    color: #390A7A;
}
#mainCategory {
    border: 2px ;
    padding: 5px;
}
#subcategiry {
    border: 2px ;
    padding: 2px;
}

</style>