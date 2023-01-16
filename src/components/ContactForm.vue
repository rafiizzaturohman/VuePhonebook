<script setup>
import { ref } from 'vue';

const emit = defineEmits(['createContact'])

const name = ref('')
const phone = ref('')

const addContact = () => {
    emit('createContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}

const cancelContact = () => {
    name.value = ''
    phone.value = ''
}
</script>

<template>
    <div>
        <div class="form-input">
            <div>
                <p class="title-form">Add</p>
            </div>
            <form @submit.prevent="addContact">
                <div class="input-group">
                    <input type='text' maxlength="20" v-model="name" id="name" class="input" required>
                    <label for="name" class="input-label">Name</label>
                </div>

                <div class="input-group">
                    <input type='tel' pattern='[08][0-9]{11}' maxlength="12" v-model="phone" id="phone" class="input"
                        required>
                    <label for="phone" class="input-label">Phone</label>
                </div>

                <p class="format">Phone format: 0812345678912</p>

                <div class="mt-2">
                    <button type='submit' class="addbutton">
                        <p class="addtext">Add</p>
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