<template>
  <div>

    Loo oma eelarve

    <!-- kuvab standard eelarve listina -->
    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="findAllCategories">Alusta
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
     <!-- categoryName: '',
      subcategoryName: '' -->
    }
  },
  methods: {
    findAllCategories: function () {
      this.$http.get('/setup/categories/income?userId')
          .then(result => {
            console.log(result )
          } )
    },
  }
}
</script>





<style scoped>

</style>