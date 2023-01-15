<script>
import { useContactStore } from '../stores/contact';

export default {
    setup() {
        const Contact = useContactStore()

        return { Contact }
    },
    props: {
        contact: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isEdit: false,
            name: this.contact.name,
            phone: this.contact.phone,
            sent: this.contact.sent
        }
    },
    methods: {
        update(id) {
            this.Contact.updateItem({ id, name: this.name, phone: this.phone, sent: this.sent })
            this.isEdit = false
        }
    }
}
</script>

<template>
    <div>
        <div v-if="isEdit">
            <div>
                <h1 class="item">{{ contact.name }}</h1>
            </div>
            <div>
                <h1 class="item">{{ contact.phone }}</h1>
            </div>

            <button type="button" @click="isEdit = true">
                Edit
            </button>

            <button type="button" @click="Contact.removeItem(contact.id)">
                <!-- {{ this.props.users.sent ? 'Delete' : 'Resend' }} -->
                Delete
            </button>
        </div>

        <div v-else>
            <div>
                <input type='text' v-model="name" />
            </div>
            <div>
                <input type='tel' pattern='[08][0-9]{11}' max-length="13" v-model="phone" />
            </div>

            <div>
                <button type="button" @click="update(contact.id)">
                    Save
                </button>

                <button type="button" @click="isEdit = false">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>