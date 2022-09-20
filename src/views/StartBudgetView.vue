<template>
    <div id="startBudget">

        <h1> Loo oma eelarve</h1><br>
        <div id="setupIncome"><SetupIncome title='Tulukategooria'/></div>


        <div id="setupExpense"><SetupExpense title='Kulukategooria'/></div>

        <div>

        </div>
        <br><br>
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
        }

    },

    methods: {

    },
    mounted() {
        // this.findIncomeCategories()
        //  this.findExpenseCategories()
    }
}
</script>


<style scoped>


#startBudget {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: -webkit-center;
    color: #A5D3F7
;
}


nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

</style>