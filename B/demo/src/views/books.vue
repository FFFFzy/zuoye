<template>
  <div>
    <p v-for="(item, index) in tabList" :key="index">{{ item }}</p>
    <span @click="add">+1</span>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  methods: {
    add() {
      this.$store.commit('edit')
    },
  },
  computed: {
    ...mapState("Edit", ["tabList"]),
  },
};
</script>