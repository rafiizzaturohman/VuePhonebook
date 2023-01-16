<script setup>
import ContactItem from './ContactItem.vue';

const emit = defineEmits(['loadMore'])

defineProps({
    contacts: {
        type: Object,
        requeired: true
    }
})

const scrolling = (event) => {
    var element = event.target;
    if (element.scrollHeight - element.scrollTop - element.clientHeight <= 1) {
        emit('loadMore')
    }
}

</script>

<template>
    <div class="mt-4 list-contact" v-on:scroll="scrolling">
        <ContactItem v-for="(contact) in contacts" :contact="contact" />
    </div>
</template>