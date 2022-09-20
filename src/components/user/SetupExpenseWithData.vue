<template>

  <div id="expense">
    <h2> {{ title }}</h2>

    <table class="table">

      <tr>
        <th scope="col">Kategooria</th>
        <th scope="col">Subkategooria</th>
        <th scope="col">Eelarve</th>
        <th scope="col">Tegelik</th>
        <th scope="col">Jääk</th>
      </tr>

      <div v-for="category in expenseCategories" id="mainCategory">
        <tr>
          <td>{{ category.categoryName }}</td>
          <td></td>
          <td>{{ category.categoryBudgetedSum }}</td>
          <td>{{ category.categorySum }}</td>
          <td>200.00</td>
        </tr>

        <div v-for="subcategory in category.subcategories" id="subcategory">
          <tr>
            <td></td>
            <td>{{ subcategory.subcategoryName }}</td>
            <td>{{ subcategory.subcategoryBudgetedSum }}</td>
            <td>{{ subcategory.subcategorySum }}</td>
            <td>50.00</td>
          </tr>
        </div>
      </div>

    </table>


    <br><br>




  </div>


</template>



<script>
import AddSubcategory from "@/components/user/AddSubcategory";
import AddExpenseCategory from "@/components/user/AddExpenseCategory";

export default {
  name: "SetupExpenseWithData",
  components: {AddSubcategory, AddExpenseCategory},
  props: {
    title: String,
  },

  data() {
    return {
      userId: sessionStorage.getItem('userId'),
      newSubcategoryName: '',
      subcategoryId: 0,
      expenseCategories: [
        {
          categoryId: 0,
          categoryName: "",
          categoryBudgetedSum: Number,
          categorySum: Number,
          subcategories: [
            {
              categoryId: 0,
              subcategoryId: 0,
              subcategoryName: "",
              subcategoryBudgetedSum: Number,
              subcategorySum: Number,
              isActive: true
            }
          ]
        }
      ],
      divUpdateSubcategoryName: true,
      divAddSubcategory: true,
      displayAddSubcategoryComponent: true,
      displayNewExpenseComponent: false
    }
  },
  methods: {
    findExpenseCategories: function () {
      this.divUpdateSubcategoryName = false
      this.$http.get("/setup/categories/expense", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.expenseCategories = response.data.categories
        console.log("expense kategooriad", response.data)
      }).catch(error => {
        console.log(error)
      })
    },



  },
  mounted() {
    this.findExpenseCategories()
  }

}
</script>

<style scoped>
/*#expense {*/
/*  background-color: aliceblue;*/
/*  color: #390A7A;*/
/*}*/
/*#mainCategory {*/
/*  border: 2px ;*/
/*  padding: 5px;*/
/*}*/
/*#subcategiry {*/
/*  border: 2px ;*/
/*  padding: 2px;*/
/*}*/

</style>