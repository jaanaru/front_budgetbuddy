<template>
    <div>
        <br>
        <h1> Loo oma eelarve</h1>
        <br>
        <div>
            <SetupIncome title='Tulukategooria'/>
        </div>
        <br><br>

<!--        <div class="list-group">-->



<!--            <ul class="list-group" v-for="category in this.incomeCategories">-->
<!--                <li>-->
<!--                    <button type="button" class="list-group-item list-group-item-action">{{-->
<!--                            category.categoryName-->
<!--                        }}-->
<!--                    </button>-->
<!--                </li>-->
<!--                <ul class="list-group" v-for="subcategory in category.subcategories">-->
<!--                    <li>-->
<!--                        <button type="button" class="list-group-item list-group-item-action">-->
<!--                            {{ subcategory.subcategoryName }}-->
<!--                        </button>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </ul>-->
<!--        </div>-->




<!--        <div>-->
<!--            <SetupExpense title="Kulukategooriad"/>-->
<!--        </div>-->
<!--        <br><br>-->

<!--        <ul class="list-group" v-for="category in this.expenseCategories">-->
<!--            <li>-->
<!--                <button type="button" class="list-group-item list-group-item-action">{{-->
<!--                        category.categoryName-->
<!--                    }}-->
<!--                </button>-->
<!--            </li>-->
<!--            <ul class="list-group" v-for="subcategory in category.subcategories">-->
<!--                <li>-->
<!--                    <button type="button" class="list-group-item list-group-item-action">{{-->
<!--                            subcategory.subcategoryName-->
<!--                        }}-->
<!--                    </button>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </ul>-->


<!--        <button type="button" style="margin: 5px" class="btn btn-outline-dark" v-on:click="findIncomeCategories">OK-->
<!--        </button>-->

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
            // userId: sessionStorage.getItem('userId'),

            // incomeCategories: [
            //     {
            //         categoryId: 0,
            //         categoryName: "",
            //         subcategories: [
            //             {
            //                 categoryId: 0,
            //                 subcategoryId: 0,
            //                 subcategoryName: "",
            //                 isActive: true
            //             }
            //         ]
            //     }
            // ],
            // expenseCategories: [
            //     {
            //         categoryId: 0,
            //         categoryName: "",
            //         subcategories: [
            //             {
            //                 categoryId: 0,
            //                 subcategoryId: 0,
            //                 subcategoryName: "",
            //                 isActive: true
            //             }
            //         ]
            //     }
            // ],

        }

    },

    methods: {

    },
    mounted() {
        // this.findIncomeCategories()
        //  this.findExpenseCategories()
    },
}
</script>


<style scoped>

</style>