<script setup>
import { ref } from 'vue';

const emit = defineEmits(['searchContact'])

const searchName = ref('')
const searchPhone = ref('')

const searchContact = () => {
    emit('searchContact', { searchName: searchName.value, searchPhone: searchPhone.value })
    searchName.value = searchName.value
    searchPhone.value = searchPhone.value
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
                <p class="title-form">Search</p>
            </div>
            <form @submit.prevent="searchContact">
                <div class="input-group flex">
                    <label for="searchName" class="label">Name</label>
                    <input type='text' maxlength="20" v-model="searchName" id="searchName" class="input">
                </div>

                <div class="input-group flex">
                    <label for="searchName" class="label">Phone</label>
                    <input type='tel' pattern='[08][0-9]{11}' maxlength="12" v-model="searchPhone" id="searchPhone" class="input">
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

<style scoped>
@import "../../index.css";

p {
    margin: -2px 0;
}
</style>