<template>
  <div class="dropdown">
    <button
      class="btn btn-warning dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Sıralama</button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a
        class="dropdown-item"
        v-for="(item,index) in selectList "
        :key="index"
        @click="showSelectedItem(index)"
      >{{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
name:"dropdown",
data(){
    return {
        selectList: ['Sırala (A-Z)','Tersten Sırala (Z-A)']
    }
},
methods: {
    showSelectedItem(index){
        this.$emit('changeSorting',index)
    }
}

}
</script>

<style>

</style>