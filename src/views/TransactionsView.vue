<template>
  <div>
    <div>
      <table class="table table-hover table-light">
        <thead>
        <TransactionTableHeader/>
        <TransactionTableInputFields/>
        </thead>
        <TransactionTableBody :transaction-infos="transactionInfos"/>

      </table>
    </div>
  </div>
</template>


<script>

import TransactionTableHeader from "@/components/transaction/TransactionTableHeader";
import TransactionTableInputFields from "@/components/transaction/TransactionTableInputFields";
import TransactionTableBody from "@/components/transaction/TransactionTableBody";

export default {
  name: "TransactionsView",
  components: {TransactionTableBody, TransactionTableInputFields, TransactionTableHeader},
  data: function () {
    return {
      transactionInfos:
          [
            {
              userId: 0,
              senderAccountId: 0,
              receiverAccountId: 0,
              date: '',
              subcategoryId: 0,
              description: '',
              amount: 0,
              type: '',
              isActive: true
            }
          ]
    }
  },
  methods: {
    findTransactionsByUserId: function () {
      this.$http.get("budget/transaction/all", {
            params: {
              transactionId: this.transactionId
            }
          }
      ).then(response => {
        this.transactions = response.data

      }).catch(error => {
        console.log(error)
      })
    },

  }
}

</script>


