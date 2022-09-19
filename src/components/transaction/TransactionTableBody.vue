<template>
  <div>
    <tbody>
    <tr v-for="transaction in transactionInfos">
      <td>{{ transaction.date }}</td>
      <td>{{ transaction.senderAccountId }}</td>
      <td>{{ transaction.subcategoryId }}</td>
      <td>{{ transaction.description }}</td>
<!--  Mida teha alumiste 2 reaga? Summa sisse ja summa välja kuhu panna type? Kas amount, järgi ja 2 amount välja pigem?
    Is active? -->
      <td>{{ transaction.amount }}</td>
      <td>{{ transaction.type }}</td>
    </tr>
    </tbody>
  </div>
</template>
<script>
export default {
  name: 'TransactionTableBody',
  props: {
    accountId: 1,
    transactionInfos: {}
  },
  data: function () {
    return {
    }
  }
}
</script>