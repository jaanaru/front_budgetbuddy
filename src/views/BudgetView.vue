<template>
  <div>

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
  </div>
</template>

<script>
import SetupIncomeWithData from "@/components/user/SetupIncomeWithData";
import SetupExpenseWithData from "@/components/user/SetupExpenseWithData";

export default {
  name: "BudgetView",
  components: {SetupIncomeWithData, SetupExpenseWithData},
  data() {
    return {}

  },

  methods: {},
  mounted() {

  }
}

</script>
