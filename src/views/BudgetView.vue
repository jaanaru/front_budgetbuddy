<template>
    <div >

        <h1> Minu eelarve</h1><br>
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
    name: "BudgetView",
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

</style>