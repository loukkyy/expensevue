<template>
  <header>
    <div id="nav">
      <router-link to="/" class="title">Expense Vue</router-link>
      <button v-if="isSignedIn" @click="showForm = !showForm" @focusout="showForm = false" class="btn btn-add"><img src="@/assets/add.svg" alt=""></button>
      <transition name="fade">
        <ExpenseForm v-if="showForm" class="pop-up" />
      </transition>
      <transition name="fade">
        <button v-if="isSignedIn" @click="signOut" class="btn btn-logout">
          Logout
        </button>
      </transition>
    </div>
  </header>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import ExpenseForm from "@/components/ExpenseForm.vue";
export default {
  name: "myHeader",
  components: {
    ExpenseForm,
  },
  data() {
    return {
      isSignedIn: false,
      showForm: false,
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "Login" });
        });
    },
    checkIfSignedIn() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.isSignedIn = true;
        } else {
          this.isSignedIn = false;
        }
      });
    },
  },
  mounted() {
    this.checkIfSignedIn();
  },
};
</script>
<style scoped>
header {
  color: whitesmoke;
  background-color: hsl(208, 30%, 55%);
  padding: 1rem;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
}
.title {
  font-size: 2rem;
}

.btn-logout {
  color: inherit;
}
.btn-logout:hover {
  background-color: transparent;
  color: hsl(187, 100%, 91%);
}
.btn-add {
  height: 4rem;
  width: 4rem;
  font-size: 1em;
  justify-self: flex-start;
  color: inherit;
  padding: 0;
  text-align: center;
  border-radius: 50%;
  line-height: 0;
  stroke: #9ef4ff;
}
.btn-add:hover {
  background-color: hsl(112, 60%, 44%);
  position: relative;
}
.pop-up {
  position: absolute;
  left: 50vw;
  top: 100px;
  z-index: 1;
  transform: translateX(-50%);
}
</style>
