<template>
  <div>
      <div id="month">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select" v-model="month.name">
              <option>Vali kuu</option>
              <option value="1">Jaanuar</option>
              <option value="2">Veebruar</option>
              <option value="3">Märts</option>
              <option value="4">Aprill</option>
              <option value="5">Mai</option>
              <option value="6">Juuni</option>
              <option value="7">Juuli</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">Oktoober</option>
              <option value="11">November</option>
              <option value="12">Detsember</option>
          </select>
      </div>
      <div id="year">
      <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select" v-model="year.name">
              <option>Vali aasta</option>
              <option value="1">2020</option>
              <option value="2">2021</option>
              <option value="3">2022</option>
              <option value="4">2023</option>
              <option value="5">2024</option>
              <option value="6">2025</option>
          </select>
      </div>

<!--      <button type="button" style="margin: 5px" class="btn btn-outline-dark btn-sm" v-on:click="saveMonthBudget">-->
<!--          Vali-->
<!--      </button>-->


    <h1> Minu eelarve</h1><br>
    <h2> Tulud </h2>
    <div id="setupIncome">
      <SetupIncomeWithData title='Tulukategooria'/>
    </div>
    <br><br>
    <h2> Kulud </h2>

    <div id="setupExpense">
      <SetupExpenseWithData title='Kulukategooria'/>
    </div>

    <div>

    </div>
    <br><br>
      <button type="button" style="margin: 5px" class="btn btn-secondary" v-on:click="saveBudget">Salvesta eelarve</button>
  </div>
</template>

<script>
import SetupIncomeWithData from "@/components/user/SetupIncomeWithData";
import SetupExpenseWithData from "@/components/user/SetupExpenseWithData";

export default {
  name: "BudgetView",
  components: {SetupIncomeWithData, SetupExpenseWithData},
  data() {
    return {
        month: {monthName: ''},
        year: {yearName: ''},
        // displaySetupIncome: false,
        // displaySetupExpense: false
    }
  },

  methods: {
      // saveMonthBudget: function () {
      //     sessionStorage.setItem('month', this.month.monthName)
      //     sessionStorage.setItem('year', this.year.yearName)
      //     // this.displaySetupIncome = true
      //     // this.displaySetupExpense = true
      // }
      },

  mounted() {
  }
}

</script>

<style>
#select {
    width: 10%;
    height: 42px;
}
#month {
    padding-left: 40px;
}
#year {
    padding-left: 40px;
}
</style>
