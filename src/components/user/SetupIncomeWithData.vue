<template>

  <div id="income">
    <h2> {{ title }}</h2>

    <table class="table table-hover table-light">
      <thead>
      <tr>
        <th scope="col">Kategooria</th>
        <th scope="col">Subkategooria</th>
        <th scope="col">Eelarve</th>
        <th scope="col">Tegelik</th>
        <th scope="col">Jääk</th>
      </tr>
      </thead>

      <tbody>
      <div v-for="category in incomeCategories" id="mainCategory">

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
      </tbody>
    </table>


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
      incomeCategories: [
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
      displayNewIncomeComponent: false,

    }

  },
  methods: {
    findIncomeCategories: function () {
      this.divUpdateSubcategoryName = false
      this.$http.get("/setup/categories/income", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.incomeCategories = response.data.categories
        console.log("income kategooriad", response.data)
      }).catch(error => {
        console.log(error)
      })
    },

  },

  mounted() {
    this.findIncomeCategories()
  }
}
</script>


