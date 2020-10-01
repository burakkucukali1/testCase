<template>
  <div class="">
    <form @submit.prevent="submitForm">
      <div class="row mt-3">
        <div class="col-12">
          <label>Ad</label>
          <input type="text" name="name" class="w-100" v-model="name" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <label>Soyad</label>
          <input type="text" name="surname" class="w-100" v-model="surname" />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <label>Telefon</label>
          <input type="text" name="phone" class="w-100" v-model="phone" />
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <button
            type="submit"
            class="w-100 text-white"
            :class="isUpdate ? 'bg-danger' : 'bg-info'"
          >
            {{ isUpdate ? "Güncelle" : "Ekle" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "addForm",
  data() {
    return {
      
      name: "",
      surname: "",
      phone: "",
      isUpdate: false,
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        surname: this.surname,
        phone: this.phone,
      };
      this.$emit("onSubmit", formData);
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.surname = "";
      this.phone = "";
      this.isUpdate = false;
    },
  },
};
</script>

<style>
</style>