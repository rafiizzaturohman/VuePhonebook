import { defineStore } from "pinia";

export const useContactStore = defineStore({
    id: 'contact',
    state: () => ({
        rawItems: []
    }),
    getters: {
        items: (state) => {
            state.rawItems
        }
    },

    actions: {
        addItem(name, phone) {
            this.rawItems.push({ id: Date.now(), name, phone, sent: true })
        },

        removeItem(id) {
            this.rawItems = this.rawItems.filter(item => item.id === id)
        },

        updateItem(contact) {
            this.rawItems = this.rawItems.map(item => {
                if (item.id === contact.id) {
                    return contact
                }
                return item
            })
        }
    }
})