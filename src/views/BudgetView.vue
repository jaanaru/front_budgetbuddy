<template>
  <div>
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="findDateData">
              Kuu
          </button>
          <div v-for="planninginfo in planningInfos" class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">{{planninginfo.month}}</a>

          </div>
      </div>
      <div>

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
        userId: sessionStorage.getItem('userId'),
        planningInfos: {
            year: 0,
            month: 0
        }
    }

  },

  methods: {
      findDateData: function () {
          this.$http.get("/budget/planning/month/all")
              .then(response => {
                  console.log(response.data)
              }).catch(error => {
              console.log(error)
          })
      }
      },

  mounted() {

  }
}

</script>
