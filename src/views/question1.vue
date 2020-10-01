<template>
  <div class="container">
    <div class="question1">
      <h1 style="text-align: center">Soru 1</h1>
      <div>
        <label for="">Aralara virgül koyarak diziyi giriniz. </label>
      </div>
      <input class="input" type="text" v-model="arrInput" />
      <button @click="showResult" class="btn btn-primary m-3">Sonuç</button>
      <p>{{ result }}</p>
<returnButton/>
    </div>
  </div>
</template>

<script>
import returnButton from '../components/returnButton'
export default {
  name: "question1",
  data() {
    return {
      arrInput: "",
      result: "",
    };
  },
  components: {
returnButton
  },
  methods: {
    showResult() {
      let arr = this.arrInput.split(",");
      let res = arr.filter((e, i) => arr.indexOf(e) != i)[0]; // main code
      res ? (this.result = res) : (this.result = -1);
      this.arrInput = "";
    },
    returnHomepage() {
      this.$router.push(`/`)
    }
  },
};
</script>

<style>
</style>