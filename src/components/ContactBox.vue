<script setup>
import ContactList from './ContactList.vue';
import ContactSearch from './ContactSearch.vue';
import { useContactStore } from '../stores/contact'
import ContactForm from './ContactForm.vue';

const Contact = useContactStore()
const vLoadContact = {
    beforeMount: (el) => {
        Contact.loadItem()
    }
}
</script>

<template>
    <header class="">
        <h1 class="title">Phonebook</h1>
        <div>
            <div class="form-box">
                <div class="addform">
                    <ContactForm @createContact="Contact.addItem" />
                </div>
                <div class="searchform">
                    <ContactSearch @searchContact="Contact.searchItem" />
                </div>
            </div>
            <div></div>
        </div>

        <div>
            <div class="mt-8">
                <ContactList v-load-contact :contacts="Contact.rawItems" />
            </div>
        </div>
    </header>
</template>