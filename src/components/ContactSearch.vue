<style scoped>
@import "../../index.css";
</style>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['searchContact'])

const searchName = ref('')
const searchPhone = ref('')

const addContact = () => {
    emit('searchContact', { searchName: searchName.value || '', searchPhone: searchPhone.value || '' })
    searchName.value = ''
    searchPhone.value = ''
}

const cancelContact = () => {
    emit('searchContact', { searchName: '', searchPhone: '' })
    searchName.value = ''
    searchPhone.value = ''
}
</script>

<template>
    <div>
        <div class="form-input">
            <div>
                <p class="title-form">Add</p>
            </div>

            <form @submit.prevent="addContact">
                <div class="input-group flex">
                    <label for="searchName" class="label">Name</label>
                    <input type='text' maxlength="20" v-model="searchName" id="searchName" class="input">
                </div>

                <div class="input-group flex">
                    <label for="searchPhone" class="label">Phone</label>
                    <input type='tel' maxlength="12" v-model="searchPhone" id="searchPhone" class="input">
                </div>

                <div class="mt-10">
                    <button type='submit' class="addbutton">
                        <p class="addtext">Search</p>
                    </button>

                    <button type='button' class="cancelbutton" @click="cancelContact">
                        <p class="canceltext">Cancel</p>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
@import "../../index.css";
</style>