<template>
  <div x>
    <form @submit.prevent="saveExpense" class="container">
      <!-- Category -->
      <select id="categories" name="categories" v-model="category" required>
        <option disabled selected value="">Please select category</option>
        <option v-for="cat in getCategories" :key="cat.id" :value="cat.name">{{
          cat.name
        }}</option>
      </select>
      <!-- Date -->
      <input type="date" name="" id="" v-model="date" required />
      <!-- Amount -->
      <input
        type="number"
        min="0"
        name="expenseAmount"
        id=""
        @focus="$event.target.select()"
        @input="validateAmount"
        v-model="amount"
        @keypress.enter.prevent="saveExpense"
        required
      />
      <button class="btn" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ExpenseForm",
  data() {
    return {
      category: "",
      amount: 0,
      date: new Date().toISOString().slice(0, 10),
    };
  },
  computed: {
    ...mapGetters("expense", {
      getExpenses: "getExpenses",
    }),
    ...mapGetters(["getCategories"]),
  },
  methods: {
    ...mapActions("expense", {
      createExpense: "createExpense",
    }),
    saveExpense() {
      this.createExpense({
        category: this.category,
        amount: this.amount,
        date: this.date,
      });
      this.amount = 0;
      this.date = new Date().toISOString().slice(0, 10);
    },
    validateAmount(event) {
      console.log(event.target.value);
      if (event.target.value < 0) this.amount = 0;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input,
select {
  font: inherit;
  padding: 0.5em;
  background-color: transparent;
  outline: none;
}
</style>
