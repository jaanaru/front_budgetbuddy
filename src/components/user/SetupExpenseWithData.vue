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
          <p class="text-left">{{ category.categoryName }}</p>
        </div>

        <div class="col-sm">
          <div class="row">&nbsp;</div>

          <div class="row" v-for="subcategory in category.subcategories">
            <p class="text-center">{{ subcategory.subcategoryName }}</p>
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ category.categoryBudgetedSum }}</p>
          </div>

          <div class="row" v-for="subcategory in category.subcategories">
            <input class="form-control form-control-sm" width="1" v-model="subcategory.subcategoryBudgetedSum">
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ category.categorySum }}</p>
          </div>

          <div class="row" v-for="subcategory in category.subcategories">
            <p class="text-center">{{ subcategory.subcategorySum }}</p>
          </div>
        </div>

        <!--   jääk     -->
        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ category.categoryBudgetedSum - category.categorySum }}</p>
          </div>

          <div class="row" v-for="subcategory in category.subcategories">
            <p class="text-center">{{ subcategory.subcategoryBudgetedSum - subcategory.subcategorySum }}</p>

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
          <div class="row">
            <p class="text-center">{{ expenseBudgetInfo.totalBudgetedSum }}</p>
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ expenseBudgetInfo.totalSum }}</p>
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ expenseBudgetInfo.totalBudgetedSum - expenseBudgetInfo.totalSum }}</p>
          </div>
        </div>


      </div>


    </div>

    <button type="button" style="margin: 5px" class="btn btn-outline-dark btn-sm"
            v-on:click="updatePlanningInfosInDatabase">
      Salvesta kulud
    </button>

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
    budgetDateRange: {}
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
                subcategoryBudgetedSumId: 0,
                subcategorySum: 0,
                isActive: false
              }
            ]
          }
        ],
        totalBudgetedSum: 0,
        totalSum: 0
      },
      planningInfos: [
        {
          subcategoryBudgetedId: 0,
          amount: 0
        }
      ]
    }

  },
  methods: {
    findExpenseBudgetInfo: function () {
      this.$http.get("/report/budget/expense", {
            params: {
              year: this.budgetDateRange.year,
              month: this.budgetDateRange.month,
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
    updatePlanningInfosInDatabase: function () {
      var planningInfoList = [];
      for (let c = 0; c < this.incomeBudgetInfo.categories.length; c++) {
        for (let sc = 0; sc < this.incomeBudgetInfo.categories[c].subcategories.length; sc++) {
          let planningInfo = {

            amount: this.incomeBudgetInfo.categories[c].subcategories[sc].subcategoryBudgetedSum,
            subcategoryBudgetedId: this.incomeBudgetInfo.categories[c].subcategories[sc].subcategoryBudgetedSumId
          }
          planningInfoList.push(planningInfo)
        }
      }

      this.$http.patch("/budget/planning/month/update", planningInfoList
      ).then(response => {
        this.findIncomeBudgetInfo()
      }).catch(error => {
        console.log(error)
      })
    }

  },
  beforeMount() {
    this.findExpenseBudgetInfo()
  }

}
</script>

<style scoped>


#expense {
  background-color: aliceblue;
  color: #390A7A;
  font-size: large;
}

#mainCategory {
  border: 2px;
  padding: 5px;
}

#subcategory {
  border: 2px;
  padding: 2px;
}

</style>