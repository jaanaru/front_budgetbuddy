<template>
  <div>
    <div>
      <table class="table table-hover table-light">
        <TransactionTableHeader/>
        <TransactionTableBody/>




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

    methods: {

    },
}

</script>


