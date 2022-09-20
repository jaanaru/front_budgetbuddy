<template>
  <tr>
    <td><input type="date" aria-label="Kuupäev" class="form-control"></td>
    <td><select type="selected">
      <option disabled value="">Vali konto</option>
    </select></td>
    <td><select type="selected">
      <option disabled value="">Vali kategooria</option>
    </select></td>
    <td><input type="text" class="form-control" placeholder="Memo"></td>
    <td><input type="number" placeholder="Väljaminek"/></td>
    <td><input type="number" placeholder="Sissetulek"/></td>
    <td>
      <button type="submit" style="margin: 5px" class="btn btn-light" v-on:click="">Lisa</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'TransactionTableInputFields',
  props: {},
  data: function () {
    return {
      transactionInfos:
          [
            {
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
          ]

    }
  },
  methods: {
    addTransactionInfo:function (){
      this.$http.post("/budget/transaction/add", this.addTransactionInfo
      ).then(response => {
        this.$emit('successfulAddedNewTransactionEvent')
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }


    // transactionInfos: function(transaction) {
    //   sessionStorage.setItem('date',transaction.date)
    //   sessionStorage.setItem('senderAccountId', transaction.senderAccountId)
    //   sessionStorage.setItem('subCategoryId',transaction.subcategoryId)
    //   sessionStorage.setItem('Memo',transaction.description)
    //   sessionStorage.setItem('transactionAmount', transaction.amount)
    //   sessionStorage.setItem('transactionAmount',transaction.amount)
    //
    //   this.$router.push({name: 'accountsTransactionsRoute', query: {transactionId: transaction.transactionId}})
    // }
  }
}


</script>