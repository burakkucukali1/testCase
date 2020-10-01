<template>
<div>

 <div class="body d-flex justify-content-between">
    <div class="name col-4">{{ name }}</div>
    <div class="surname col-4">{{ surname }}</div>
    <div class="phone col-4">{{ phone }}</div>
    <div class="operators d-flex pr-2">
      <div>
      <a @click="gotoUpdate"><i class="fas fa-edit"></i></a>
      </div>
      <div>
      <a @click="gotoDelete"><i class="fas fa-minus-circle"></i></a>
      </div>
      
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: "contacts",
  data(){
    return {
     
    }
  },
  props: ['index','name','surname','phone'],
  methods: {
    gotoUpdate(){
      this.$emit('onUpdate',this.index)
    },
    gotoDelete(){
     this.$emit('onDelete',this.index)

    }
  }
};
</script>

<style>
</style>