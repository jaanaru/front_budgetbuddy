<template>


  <div id="income">

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
      <div class="row" v-for="category in incomeBudgetInfo.categories">
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
            <input  class="form-control" width="1" v-model="subcategory.subcategoryBudgetedSum">
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
          <p class="text-left">Kokku</p>
        </div>

        <div class="col-sm">
          <div class="row">&nbsp;</div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ incomeBudgetInfo.totalBudgetedSum }}</p>
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ incomeBudgetInfo.totalSum }}</p>
          </div>
        </div>

        <div class="col-sm">
          <div class="row">
            <p class="text-center">{{ incomeBudgetInfo.totalBudgetedSum - incomeBudgetInfo.totalSum }}</p>
          </div>
        </div>

      </div>


    </div>
    <AlertSuccess :success-message="successMessage"/>
    <button type="button" style="margin: 5px" class="btn btn-dark"
            v-on:click="updatePlanningInfosInDatabase">
      Salvesta tulud
    </button>


  </div>

</template>

<script>
import AddSubcategory from "@/components/user/AddSubcategory";
import AddIncomeCategory from "@/components/user/AddIncomeCategory";
import AlertSuccess from "@/components/alerts/AlertSuccess";


export default {
  name: "SetupIncomeWithData",
  components: {AddSubcategory, AddIncomeCategory, AlertSuccess},
  props: {
    title: String,
    budgetDateRange: {}
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      successMessage: '',
      newSubcategoryName: '',
      subcategoryId: 0,
      incomeBudgetInfo: {
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
    findIncomeBudgetInfo: function () {
      this.$http.get("/report/budget/income", {
            params: {
              year: this.budgetDateRange.year,
              month: this.budgetDateRange.month,
              userId: this.userId
            }
          }
      ).then(response => {
        this.incomeBudgetInfo = response.data
        console.log("income kategooriad", response.data)
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
          this.successMessage = 'Eelarve tulud salvestatud :)'
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
    this.findIncomeBudgetInfo()
  }
}
</script>
<style scoped>


#income {
  background-color: aliceblue;
  color: #390A7A;
  font-size: 1.1em
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

