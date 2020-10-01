<template>
  <div class="home">
    <div class="container">
      <h1 style="text-align:center">SORULAR</h1>
    <button @click= "gotoPage1" type="button" class="btn btn-info btn-lg btn-block mt-5">Soru 1</button>
    <button @click= "gotoPage2" type="button" class="btn btn-dark btn-lg btn-block mt-5">Soru 2</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

},
methods: {
  gotoPage1(){
    this.$router.push(`/question1`)
  },
  gotoPage2(){
    this.$router.push(`/question2`)
  }


}
}
</script>
