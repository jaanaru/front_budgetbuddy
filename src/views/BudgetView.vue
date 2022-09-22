<template>
  <div>
    <div id="month">
      <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select"
              v-model="selectedMonth"
              v-on:change="setBudgetDateRange">
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
      <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select"
              v-model="selectedYear"
              v-on:change="setBudgetDateRange">
        <option>Vali aasta</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>



    <h1> Minu eelarve</h1><br>
    <h2> Tulud </h2>
    <div id="setupIncome">
      <SetupIncomeWithData :budget-date-range="budgetDateRange" title='Tulukategooria' :key="budgetDateRange.month"/>
    </div>
    <br><br>
    <h2> Kulud </h2>

    <div id="setupExpense">
      <SetupExpenseWithData :budget-date-range="budgetDateRange" title='Kulukategooria' :key="budgetDateRange.month"/>
    </div>

    <div>

    </div>
    <br><br>
    <button type="button" style="margin: 5px" class="btn btn-dark">Salvesta eelarve</button>
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
      selectedMonth: 8,
      selectedYear: 2022,
      budgetDateRange: {
        month: 8,
        year: 2022,
      }
    }
  },

  methods: {
    setBudgetDateRange: function () {
      this.budgetDateRange.month = Number(this.selectedMonth)
      this.budgetDateRange.year = Number(this.selectedYear)
    },
  },

  beforeMount() {
    this.setBudgetDateRange()
  }
}

</script>

<style>
#select {
  width: 10%;
  height: 42px;
}
</style>
