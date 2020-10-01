<template>
  <div>
    <button class="btn btn-secondary" @click="returnHomepage">
      Anasayfaya Dön
    </button>
  </div>
</template>

<script>
export default {
  name: "returnButton",
  methods: {
    returnHomepage() {
      this.$router.push(`/`);
    },
  },
};
</script>

<style>
</style>