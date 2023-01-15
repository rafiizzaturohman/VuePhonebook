<script setup>
import ContactList from './ContactList.vue';
import ContactForm from './ContactForm.vue';
import { useContactStore } from '../stores/contact';

const Contact = useContactStore()
</script>

<template>
    <div>
        <div>
            <ContactForm />
        </div>

        <div>
            <ContactList :contacts="Contact.rawItems" />
        </div>
    </div>
</template>