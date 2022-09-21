<template>
  <tr>
    <td><input type="date" aria-label="Kuupäev" class="form-control"></td>


    <td><select type="selected" v-model="selectedAccountId">
        <option disabled value="">Vali konto</option>
        <option v-for="accountInfo in accountInfos" :value="accountInfo.accountId">
          {{accountInfo.accountName }}
        </option>
      </select>
    </td>

    <td>
      <select type="selected" v-model="selectedSubcategoryId">
      <option disabled value="">Vali kategooria</option>
        <option v-for="subcategoryInfoAdd in subcategoryInfosAdd" :value="subcategoryInfoAdd.subcategoryId">{{
            subcategoryInfoAdd.subcategoryName}}
          </option>
    </select>
    </td>


    <td><input type="text" class="form-control" placeholder="Memo"></td>
    <td><input type="number" placeholder="Väljaminek"/></td>
    <td><input type="number" placeholder="Sissetulek"/></td>
    <td>
      <button type="submit" style="margin: 5px" class="btn btn-light" v-on:click="addTransaction">Lisa</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'TransactionTableInputFields',
  props: {},
  data: function () {
    return {
      userId: sessionStorage.getItem('userId'),
      selectedAccountId: '',
      selectedSubcategoryId:'',

      addTransactionInfo:
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
          ],
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
    }
  },
  methods: {
    addTransaction: function () {
      // todo Loo data osasse uus objekt add transactionInfo
      //  täida see transactionInfo objekt infoga
      //  osa infost saad täidetud v-model abil kastidest ja rippmenüüde selected id-dest


      this.$http.post("/budget/transaction/add", this.transactionInfo
      ).then(response => {

        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
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
  },
  mounted() {
    this.getAccountInfos()
    this.getSubcategoryInfosAdd()
  }
}
</script>