<template>
  <div>
    <td><input type="date" aria-label="Kuupäev" class="form-control"></td>
    <td><select type="selected">
      <option disabled value="">Vali konto</option>
    </select>
    </td>
    <td>
      <select type="selected">
        <option disabled value="">Vali kategooria</option>
      </select>
    </td>
    <td><input type="text" class="form-control" placeholder="Memo"></td>
    <td><input type="number" placeholder="Väljaminek"/></td>
    <td><input type="number" placeholder="Sissetulek"/></td>
  </div>
</template>
<script>
export default {
  name: 'TransactionTableInputFields'
}
</script>