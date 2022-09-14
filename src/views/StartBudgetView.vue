<template>
  <div>

    Loo oma eelarve

    <!-- kuvab standard eelarve listina -->
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="findIncomeCategories">Alusta
    </button>

    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="changeMyBudget">Muuda eelarve malli
    </button>
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="useStandardBudget">Kasuta eelarve malli
    </button>

  </div>
</template>


<script>
import SetupIncome from "@/components/user/SetupIncome";
import SetupExpense from "@/components/user/SetupExpense";
export default {
  name: "StartBudgetView",
  components: {SetupIncome, SetupExpense},
  data: function(){
    return {
     userId: sessionStorage.getItem('userId'),
      incomeCategories: {
        categories: [
          {
            categoryId: 0,
            categoryName: '',
            subcategories: [
              {
                categoryId: 0,
                subcategoryId: 0,
                subcategoryName: '',
                isActive: true
              }
            ]
          }
        ]
      },
      expenseCategories: {

      }

    }
  },
  methods: {

    findIncomeCategories: function () {
      this.$http.get("/some/path", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.incomeCategories = response.data
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }

  },
  mounted() {
 //   this.findIncomeCategories()
   // this.findExpenseCategories()
  }
}
</script>





<style scoped>

</style>