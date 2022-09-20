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

    }
}
</script>


<style scoped>


#startBudget {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: -webkit-center;
    color: #390A7A;
}
#setupIncome{
    width: 50%;
    float: left;
}
#setupExpense {
    width: 50%;
    float: right;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #390A7A;
}

nav a.router-link-exact-active {
    color: #390A7A;
}

</style>