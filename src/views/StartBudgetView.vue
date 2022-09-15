<template>
    <div>
        <br>
        <h2> Loo oma eelarve</h2>
        <br>
        <h2></h2>

        <div>
            <ul v-for="category in this.incomeCategories">
                <li> {{ category.categoryName }}</li>
                <ul v-for="subcategory in category.subcategories">
                <li>{{subcategory.subcategoryName}}</li>
                </ul>
            </ul>
        </div>

        <!-- kuvab standard eelarve listina -->
        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="findIncomeCategories">Alusta
        </button>

        <!--    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="changeMyBudget">Muuda eelarve malli-->
        <!--    </button>-->
        <!--    <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="useStandardBudget">Kasuta eelarve malli-->
        <!--    </button>-->

        <div>
            <SetupIncome title='Tulukategooriad'/>
        </div>
        <div>
            <SetupExpense title="Kulukategooriad"/>
        </div>


    </div>
</template>


<script>
import SetupIncome from "@/components/user/SetupIncome";
import SetupExpense from "@/components/user/SetupExpense";

export default {
    name: "StartBudgetView",
    components: {SetupIncome, SetupExpense},
    data() {
        return {
            userId: sessionStorage.getItem('userId'),

            incomeCategories: [
                {
                    categoryId: 0,
                    categoryName: "",
                    subcategories: [
                        {
                            categoryId: 0,
                            subcategoryId: 0,
                            subcategoryName: "",
                            isActive: true
                        }
                    ]
                }
            ],
            expenseCategories: {}
        }

    },

    methods: {

        findIncomeCategories: function () {
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
        }

    }
    ,
    mounted() {
        this.findIncomeCategories()
        // this.findExpenseCategories()
    }
    ,
}
</script>


<style scoped>

</style>