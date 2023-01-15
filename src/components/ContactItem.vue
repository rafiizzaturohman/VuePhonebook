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
            phone: this.contact.phone
        }
    },
    methods: {
        update(id) {
            this.Contact.updateItem({ id, name: this.name, phone: this.phone })
            this.isEdit = false
        }
    }
}
</script>

<template>
    <div v-if="isEdit" class="mt-4 card">
        <div class="mb-4">
            <input type='text' v-model="name" class="inputadd" />
        </div>
        <div class="mt-4">
            <input type='tel' pattern='[08][0-9]{11}' maxlength="12" v-model="phone" class="inputphone" />
        </div>

        <div class="editbutton">
            <button type="button" @click="update(contact.id)" class="addbutton">
                Save
            </button>

            <button type="button" @click="isEdit = false" class="cancelbutton">
                Cancel
            </button>
        </div>
    </div>

    <div v-else class="mt-4 card">
        <div>
            <h1 class="itemname">{{ contact.name }}</h1>
        </div>
        <div>
            <h1 class="itemphone">{{ contact.phone }}</h1>
        </div>

        <div class="editbutton" v-if="contact.sent">
            <button type="button" @click="isEdit = true" class="addbutton">
                <p class="addtext">Edit</p>
            </button>

            <button type="button" @click="Contact.removeItem(contact.id)" class="cancelbutton">
                <p class="cancettext">Delete</p>
            </button>
        </div>

        <div v-else class="editbutton">
            <button type="button" @click="Contact.resendItem(contact)" class="resendbutton">
                <p class="resendtext">Resend</p>
            </button>
        </div>
    </div>
</template>