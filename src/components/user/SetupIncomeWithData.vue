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
            <input input class="form-control form-control-sm" v-model="subcategory.subcategoryBudgetedSum">
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


  </div>

</template>

<script>
import AddSubcategory from "@/components/user/AddSubcategory";
import AddIncomeCategory from "@/components/user/AddIncomeCategory";

export default {
  name: "SetupIncomeWithData",
  components: {AddSubcategory, AddIncomeCategory},
  props: {
    title: String,
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
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
                subcategorySum: 0,
                isActive: false
              }
            ]
          }
        ],
        totalBudgetedSum: 0,
        totalSum: 0
      }
      ,

    }

  },
  methods: {
    findIncomeBudgetInfo: function () {
      this.$http.get("/report/budget/income", {
            params: {
              year: 2022,
              month: 8,
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

  },

  mounted() {
    this.findIncomeBudgetInfo()
  }
}
</script>


