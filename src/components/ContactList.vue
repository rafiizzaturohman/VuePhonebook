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
    <div>
        <ContactItem v-for="(contact) in contacts" :contact="contact" />
    </div>
</template>

<!--  resend={()=> this.props.resend(user.id, user.name,
user.phone)} remove={() => this.props.remove(user.id)} update={(name, phone) => this.props.update(user.id,
name, phone) -->