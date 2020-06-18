<template>
  <div class="content">
    <h2>Expense summary</h2>
    <ul class="card">
        <transition-group name="list" tag="p">
      <li v-for="(item, idx) in getExpenses" :key="idx">
        {{ item.category }}, {{ item.date }}, {{ item.amount }}€
      </li>
        </transition-group>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      expense: {
        category: "",
        amount: 0,
        date: new Date().toISOString().slice(0, 10),
      },
      compName: "Summary",
    };
  },
  computed: {
    ...mapGetters("expense", {
      getExpenses: "getExpenses",
    }),
  },
};
</script>

<style scoped>

.card {
  border: 2px solid hsl(0, 0%, 50%);
  padding: 0.8rem;
  margin: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    list-style: none;
    height: 50vh;
    width: 50vw;
}
li {
    padding: 0.5rem;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
