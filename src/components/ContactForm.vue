<script setup>
import { ref } from 'vue';

const emit = defineEmits(['createContact'])

const name = ref('')
const phone = ref('')

function addContact() {
    console.log(name.value, phone.value)
    emit('createContact', { name: name.value, phone: phone.value })
    name.value = ''
    phone.value = ''
}
</script>

<template>
    <div>
        <div>
            <h1 class="title">Add Contact</h1>
        </div>

        <div class="form-input">
            <form @submit.prevent="addContact">
                <div class="input-group">
                    <input type='text' maxlength="20" v-model="name" id="name" class="input" required>
                    <label for="name" class="input-label">Name</label>
                </div>

                <div class="input-group">
                    <input type='tel' pattern='[08][0-9]{11}' maxlength="13" v-model="phone" id="phone" class="input"
                        required>
                    <label for="phone" class="input-label">Phone</label>
                </div>

                <p class="format">Phone format: 0812345678912</p>

                <div class="mt-2">
                    <button type='submit' class="addbutton">
                        <p class="addtext">Add</p>
                    </button>

                    <button type='button' class="cancelbutton">
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