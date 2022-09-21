<template>

</template>

<script>
export default {
  name: "AddTransactionInfo",
  props: {
  },
  
  data: function () {
    return {
      transactionId: 0,
      userId: 0,
      senderAccountId: 0,
      senderAccountName: '',
      receiverAccountId: 0,
      date: '',
      subcategoryId: 0,
      subcategoryName: '',
      description: '',
      amount: 0,
      type: '',
      isActive: true
    }

    methods: {
      addNewSubcategory: function () {

        this.$http.post("/budget/transaction/add", null, {
              params: {
                transactionId: this.transactionId,
              }
            }
        ).then(response => {
          this.$emit('successfulAddedNewSubcategoryEvent')
          console.log(response.data)
        }).catch(error => {
          console.log(error)
        })
      },

    }
  }

</script>

<style scoped>

</style>