<template>


  <div id="expense">

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p class="text-center">Kategooria</p>
        </div>
        <div class="col-sm">
          <p class="text-center">Subkategooria</p>
        </div>
        <div class="col-sm">
          <p class="text-center">Eelarve</p>
        </div>
        <div class="col-sm">
          <p class="text-center">Tegelik</p>
        </div>
        <div class="col-sm">
          <p class="text-center">Jääk</p>
        </div>
      </div>
      <div class="row" v-for="category in expenseBudgetInfo.categories">
        <div class="col-sm">
          <p class="text-center">{{ category.categoryName }}</p>
        </div>

        <div class="col-sm">
          <div class="row">&nbsp;</div>

          <div class="row" v-for="subcategory in category.subcategories">
            {{ subcategory.subcategoryName }}
          </div>
        </div>

        <div class="col-sm">
          <div class="row">{{ category.categoryBudgetedSum }}</div>

          <div class="row" v-for="subcategory in category.subcategories">
            <input class="form-control form-control-sm" width="1" v-model="subcategory.subcategoryBudgetedSum">
          </div>
        </div>

        <div class="col-sm">
          <div class="row">{{ category.categorySum }}</div>

          <div class="row" v-for="subcategory in category.subcategories">
            {{ subcategory.subcategorySum }}
          </div>
        </div>

        <!--   jääk     -->
        <div class="col-sm">
          <div class="row">{{ category.categoryBudgetedSum - category.categorySum }}</div>

          <div class="row" v-for="subcategory in category.subcategories">
            {{ subcategory.subcategoryBudgetedSum - subcategory.subcategorySum }}
          </div>
        </div>

      </div>

      <div class="row">

        <div class="col-sm">
          <p class="text-center">Kokku</p>
        </div>

        <div class="col-sm">
          <div class="row">&nbsp;</div>
        </div>

        <div class="col-sm">
          <div class="row">{{ expenseBudgetInfo.totalBudgetedSum }}</div>
        </div>

        <div class="col-sm">
          <div class="row">{{ expenseBudgetInfo.totalSum }}</div>
        </div>

        <div class="col-sm">
          <div class="row"> {{ expenseBudgetInfo.totalBudgetedSum - expenseBudgetInfo.totalSum }};</div>
        </div>

      </div>


    </div>


  </div>


</template>


<script>
import AddSubcategory from "@/components/user/AddSubcategory";
import AddExpenseCategory from "@/components/user/AddExpenseCategory";

export default {
  name: "SetupExpenseWithData",
  components: {AddSubcategory, AddExpenseCategory},
  props: {
    title: String,
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      newSubcategoryName: '',
      subcategoryId: 0,
      expenseBudgetInfo: {
        categories: [
          {
            categoryId: 0,
            categoryName: '',
            categoryBudgetedSum: 0,
            categorySum: 0,
            subcategories: [
              {
                categoryId: 0,
                subcategoryId: 0,
                subcategoryName: '',
                subcategoryBudgetedSum: 0,
                subcategorySum: 0,
                isActive: false
              }
            ]
          }
        ],
        totalBudgetedSum: 0,
        totalSum: 0
      },

    }

  },
  methods: {
    findExpenseBudgetInfo: function () {
      this.divUpdateSubcategoryName = false
      this.$http.get("/report/budget/expense", {
            params: {
              year: 2022,
              month: 8,
              userId: this.userId
            }
          }
      ).then(response => {
        this.expenseBudgetInfo = response.data
        console.log("expense kategooriad", response.data)
      }).catch(error => {
        console.log(error)
      })
    },


  },
  mounted() {
    this.findExpenseBudgetInfo()
  }

}
</script>

<style scoped>
/*#expense {*/
/*  background-color: aliceblue;*/
/*  color: #390A7A;*/
/*}*/
/*#mainCategory {*/
/*  border: 2px ;*/
/*  padding: 5px;*/
/*}*/
/*#subcategiry {*/
/*  border: 2px ;*/
/*  padding: 2px;*/
/*}*/

</style>