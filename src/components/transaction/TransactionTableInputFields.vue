<template>
  <tr>
    <td><input type="date" aria-label="Kuupäev" class="form-control" v-model="transactionInfoAdd.date"></td>
    <td>
      <select type="selected" v-model="transactionInfoAdd.senderAccountId">
        <option disabled value="">Vali konto</option>
        <option v-for="accountInfo in accountInfos" :value="accountInfo.accountId">
          {{accountInfo.accountName }}
        </option>
      </select>
    </td>

<!--    <td>-->
<!--      <select type="selected" v-model="transactionInfoAdd.receiverAccountId">-->
<!--        <option disabled value="">Vali konto</option>-->
<!--        <option value="">Välja</option>-->
<!--        <option v-for="accountInfo in accountInfos" :value="accountInfo.accountId">-->
<!--          {{accountInfo.accountName }}-->
<!--        </option>-->
<!--      </select>-->
<!--    </td>-->

    <td>
      <select type="selected" v-model="transactionInfoAdd.subcategoryId">
      <option disabled value="">Vali kategooria</option>
        <option v-for="subcategoryInfoAdd in subcategoryInfosAdd" :value="subcategoryInfoAdd.subcategoryId">{{
            subcategoryInfoAdd.subcategoryName}}
          </option>
    </select>
    </td>
    <td><input type="text" class="form-control" placeholder="Memo" v-model="transactionInfoAdd.description"></td>

    <select type="selected" v-model="transactionInfoAdd.type">
      <option value="e">Kulu</option>
      <option value="i">Tulu</option>

    </select>
    <td><input type="number" placeholder="Summa" v-model="transactionInfoAdd.amount"/></td>
    <td>
      <button type="submit" style="margin: 5px" class="btn btn-light" v-on:click="transactionInfoAddTransaction">Lisa</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'TransactionTableInputFields',
  props: {
    accountInfo: '',
    subcategoryInfoAdd: '',

  },
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      selectedAccountId: '',
      selectedSubcategoryId:'',


      accountInfos:
          [
            {
              accountId: 0,
              accountName: '',
              balance: 0,
              isActive: true
            }
          ],
      subcategoryInfosAdd:
          [
            {
              categoryId: 0,
              subcategoryId: 0,
              subcategoryName:'',
              subcategoryBudgetedSum: 0,
              subcategorySum: 0,
              isActive: true
            }
          ],
      transactionInfoAdd:

            {
              transactionId: 0,
              userId: sessionStorage.getItem('userId'),
              senderAccountId: '',
              senderAccountName: '',
              receiverAccountId: null,
              date: '',
              subcategoryId: '',
              subcategoryName: '',
              description: '',
              amount: 0,
              type: 'e',
              isActive: true
            }
          ,
    }
  },
  methods: {

    getAccountInfos: function () {
      this.$http.get("/budget/account/all", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.accountInfos = response.data
        console.log(this.accountInfos)
      }).catch(error => {
        console.log(error)
      })
    },
    getSubcategoryInfosAdd: function () {
      this.$http.get("/setup/subcategories/all", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.subcategoryInfosAdd = response.data
      }).catch(error => {
        console.log(error)
      })
    },
    setInitialDefaultInputFieldValues : function () {
      this.transactionInfoAdd.date = new Date().toISOString().slice(0, 10)
    }
    ,

    transactionInfoAddTransaction: function () {
      // todo: kontrolli kas kõik kohustuslikud väljad täidetud, kui siis alert

      this.$http.post("/budget/transaction/add", this.transactionInfoAdd
      ).then(response => {
        this.transactionInfoAdd = response.data
        this.$emit('eventAddTransactionSuccess')

      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    this.getAccountInfos()
    this.getSubcategoryInfosAdd()
    this.setInitialDefaultInputFieldValues()
  }
}
</script>