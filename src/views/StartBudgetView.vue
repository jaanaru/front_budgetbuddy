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
export default {
  name: "StartBudgetView",
  data: function(){
    return {
     userId: sessionStorage.getItem('userId'),
      incomeCategories: {

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