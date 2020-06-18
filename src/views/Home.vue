<template>
  <div class="container">
    <div class="lateral-menu">
      <button class="btn" @click="compName = 'Summary'"><img src="@/assets/summary.svg" alt=""></button>
      <button class="btn" @click="compName = 'Dashboard'"><img src="@/assets/dashboard.svg" alt=""></button>
      <button class="btn" @click="compName = 'User'"><img src="@/assets/user.svg" alt=""></button>
    </div>
    <transition name="fade" mode="out-in">
    <component :is="compName" />
    </transition>
  </div>
</template>

<script>
import Summary from "@/components/Summary.vue";
import Dashboard from "@/components/Dashboard.vue";
import User from "@/components/User.vue";

export default {
  name: "Home",
  components: {
    Summary,
    Dashboard,
    User,
  },
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
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "lateral-menu content"
    "lateral-menu content";
}
.content {
  grid-area: content;
}
.lateral-menu {
  align-self: flex-start;
  grid-area: lateral-menu;
  display: flex;
  flex-direction: column;
}
</style>
