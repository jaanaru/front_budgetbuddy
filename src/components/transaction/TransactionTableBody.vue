<template>
  <div>
    <tbody>
    <tr v-for="transaction in transactionInfos">
      <td>{{ transaction.date }}</td>
      <td>{{ transaction.senderAccountId }}</td>
      <td>{{ transaction.subcategoryId }}</td>
      <td>{{ transaction.description }}</td>
      <td>{{ transaction.amount }}</td>
    </tr>
    </tbody>
  </div>
</template>
<script>
export default {
  name: 'TransactionTableBody',
  props: {
    transactionInfos: {}
  }
}
</script>