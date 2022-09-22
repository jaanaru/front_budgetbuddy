<template>
  <div>
      <div id="month">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select">
              <option selected>Vali kuu</option>
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
      <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="select">
              <option selected>Vali aasta</option>
              <option value="1">2016</option>
              <option value="2">2017</option>
              <option value="3">2018</option>
              <option value="4">2019</option>
              <option value="5">2020</option>
              <option value="6">2021</option>
              <option value="7">2022</option>
              <option value="8">2023</option>
              <option value="9">2024</option>
              <option value="10">2025</option>
          </select>
      </div>


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
      <button type="button" style="margin: 5px" class="btn btn-dark" v-on:click="saveBudget">Salvesta eelarve</button>
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
    }
  },

  methods: {
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
</style>
