<template>
  <tbody>
  <TransactionTableInputFields @eventAddTransactionSuccess="findTransactionsByAccountId"/>
  <tr v-for="transaction in transactionInfos">
    <td>{{ transaction.date }}</td>
    <td>{{ transaction.senderAccountName }}</td>
<!--    <td>{{ transaction.receiverAccountName }}</td>-->
    <td>{{ transaction.subcategoryName }}</td>
    <td>{{ transaction.description }}</td>

    <td v-if="transaction.type == 'e'">{{ transaction.amount }}</td>
    <td v-else></td>

    <td v-if="transaction.type == 'i'">{{ transaction.amount }}</td>
    <td v-else></td>
    <td></td>
  </tr>
  </tbody>

</template>
<script>
import TransactionTableInputFields from "@/components/transaction/TransactionTableInputFields";

export default {
  name: 'TransactionTableBody',
  components: {TransactionTableInputFields},

  data: function () {
    return {
      //todo: see võta query parameetrina sisse
      accountId: 1,
      transactionInfos:
          [
            {
              transactionId: 0,
              userId: 0,
              senderAccountId: 0,
              senderAccountName: '',
              receiverAccountId: 0,
              receiverAccountName: '',
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
    findTransactionsByAccountId: function () {
      this.$http.get("/budget/transaction/account/all", {
            params: {
              accountId: this.accountId
            }
          }
      ).then(response => {
        this.transactionInfos = response.data
        console.log("transactionInfos", response.data)

      }).catch(error => {
        console.log(error)
      })
    },
  },
  beforeMount() {
    this.findTransactionsByAccountId()
  }
}
</script>