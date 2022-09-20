<template>
  <tbody>
  <tr>
    <td><input type="date" aria-label="Kuupäev" class="form-control"></td>
    <td><select type="selected"><option disabled value="">Vali konto</option></select></td>
    <td><select type="selected"><option disabled value="">Vali kategooria</option></select></td>
    <td><input type="text" class="form-control" placeholder="Memo"></td>
    <td><input type="number" placeholder="Väljaminek"/></td>
    <td><input type="number" placeholder="Sissetulek"/></td>
    <td><button type="button" style="margin: 5px" class="btn btn-light" v-on:click="">Lisa</button></td>
  </tr>


  <tr v-for="transaction in transactionInfos" :key="transaction.transactionId">
    <td>zdsds</td>
  </tr>

<!--  <tr v-for="transaction in transactionInfos">-->
<!--    xx-->
<!--&lt;!&ndash;    <td>{{ transaction.date }}</td>&ndash;&gt;-->
<!--&lt;!&ndash;    <td>{{ transaction.senderAccountId }}</td>&ndash;&gt;-->
<!--&lt;!&ndash;    <td>{{ transaction.subcategoryId }}</td>&ndash;&gt;-->
<!--&lt;!&ndash;    <td>{{ transaction.description }}</td>&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash;  Mida teha alumiste 2 reaga? Summa sisse ja summa välja kuhu panna type? Kas amount, järgi ja 2 amount välja pigem?&ndash;&gt;-->
<!--&lt;!&ndash;        Is active? &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <td>{{ transaction.amount }}</td>&ndash;&gt;-->
<!--&lt;!&ndash;    <td>{{ transaction.type }}</td>&ndash;&gt;-->
<!--  </tr>-->
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
    findTransactionsByAccountId: function () {
      this.$http.get("/budget/transaction/account/all", {
            params: {
              accountId: this.accountId
            }
          }
      ).then(response => {
        this.transactionInfos = response.data.transactionInfos
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