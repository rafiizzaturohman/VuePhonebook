<script setup>
import ContactItem from './ContactItem.vue';

defineProps({
    contacts: {
        type: Object,
        requeired: true
    }
})

</script>

<template>
    <div class="mt-4 list-contact">
        <ContactItem v-for="(kontak) in contacts" :contact="kontak" />
    </div>
</template>