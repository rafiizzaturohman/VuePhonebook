<script setup>
import ContactList from './ContactList.vue';
import ContactForm from './ContactForm.vue';
import { useContactStore } from '../stores/contact'

const Contact = useContactStore()
const vLoadContact = {
    beforeMount: (el) => {
        Contact.loadItem()
    }
}
</script>

<template>
    <div class="">
        <div>
            <ContactForm @createContact="Contact.addItem" />
        </div>

        <div class="mt-8">
            <ContactList v-load-contact :contacts="Contact.rawItems" />
        </div>
    </div>
</template>