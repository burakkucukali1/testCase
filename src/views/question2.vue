<template>
  <div class="container">
    
    <!-- Adding Contact Form -->
    <addForm @onSubmit="saveFormData" ref="addForm" />
  <div class="mt-3" style="text-align:center">
  <returnButton/>
  </div>
    <!-- Contact List -->
    <h1 class="mt-5 mb-5" style="text-align: center">REHBER</h1>
    <div class="header d-flex justify-content-between">
      <div class="search">
        <p class="h4"><i class="fas fa-search"></i></p>
      </div>
      <div class="searchInput">
        <input
          type="search"
          style="width: 50vw"
          placeholder="Aramak istediğiniz isim?"
          v-model="searchInput"
        />
      </div>
      <div class="dropdown">
        <dropdown @changeSorting="setSortingId"/>
      </div>
    </div>
    <div
      class="body d-flex justify-content-between border-bottom border-secondary"
    >
      <div class="name col-4"><b>Ad</b></div>
      <div class="surname col-4"><b>Soyad</b></div>
      <div class="phone col-4"><b>Telefon</b></div>
      <div></div>
    </div>
    <contacts
      v-for="(item, index) in sortBySelection"
      :key="index"
      :index="index"
      :name="item.name"
      :surname="item.surname"
      :phone="item.phone"
      @onUpdate="editContact"
      @onDelete="deleteContact"
    />
  </div>
</template>

<script>
import addForm from "../components/addForm.vue";
import contacts from "../components/contact.vue";
import dropdown from "../components/dropdown.vue";
import returnButton from "../components/returnButton.vue"
export default {
  name: "question2",
  data() {
    return {
      contactList: [],
      updateIndex: null,
      currentSortingId: null,
      isClickedDropdown: false,
      searchInput: "",
    };
  },
  methods: {
    saveFormData(data) {
      if (this.updateIndex !== null) {
        this.contactList.splice(this.updateIndex, 1, data);
      } else {
        this.contactList.push(data);
      }
    },
    setSortingId(selectionId) {
      this.currentSortingId = selectionId;
      console.log(typeof this.currentSortingId);
      console.log(...this.contactList);

      this.isClickedDropdown = true;
    },
    deleteContact(index) {
      this.contactList.splice(index, 1);
    },
    editContact(index) {
      this.updateIndex = index;
      console.log(index);
      this.$refs.addForm.isUpdate = true;
      this.$refs.addForm.name = this.contactList[index].name;
      this.$refs.addForm.surname = this.contactList[index].surname;
      this.$refs.addForm.phone = this.contactList[index].phone;
    },
  },
  computed: {
    sortBySelection() {
      if (this.isClickedDropdown == true) {
        switch (this.currentSortingId) {
          case 0:
            if (this.searchInput) {
              const input = this.searchInput.toLowerCase();
              return this.contactList.filter(
                (e) =>
                  e.name.toLowerCase().includes(input) ||
                  e.surname.toLowerCase().includes(input)
              ).sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
              );
            } else {
              return this.contactList.sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
              );
            }
            break;
          case 1:
           if (this.searchInput) {
              const input = this.searchInput.toLowerCase();
              return this.contactList.filter(
                (e) =>
                  e.name.toLowerCase().includes(input) ||
                  e.surname.toLowerCase().includes(input)
              ).sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
              );
            } else {
              return this.contactList.sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
              );
            }
            break;
          default:
            break;
        }
      } else {
        if (this.searchInput) {
          const input = this.searchInput.toLowerCase();
          return this.contactList.filter(
            (e) =>
              e.name.toLowerCase().includes(input) ||
              e.surname.toLowerCase().includes(input)
          );
        } else {
          return this.contactList;
        }
      }
    },
    sortBySearchInput() {
      if (this.searchInput) {
        this.contactList.filter((e) => e.name.includes(this.searchInput));
      }
    },
  },
  components: {
    addForm,
    contacts,
    dropdown,
    returnButton
  },
};
</script>

<style>
</style>