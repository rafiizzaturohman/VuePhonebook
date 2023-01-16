import { defineStore } from "pinia";
import { api } from './API'

export const useContactStore = defineStore({
    id: 'contact',
    state: () => ({
        rawItems: [],
        params: {
            page: 1,
            pages: 1
        }
    }),
    getters: {
        items: (state) => {
            state.rawItems
        }
    },

    actions: {
        async loadItem() {
            try {
                const { data } = await api.get('users', { params: this.params })

                this.rawItems = [...(this.params.page === 1 ? [] : this.rawItems),
                ...data.data.users.map(item => ({
                    id: item.id,
                    name: item.name,
                    phone: item.phone,
                    sent: true
                }))]
                this.params = {
                    page: data.data.page,
                    pages: data.data.pages
                }
            } catch (error) {
                console.log(error)
            }
        },

        async loadMore() {
            try {
                if (this.params.page < this.params.pages) {
                    let params = {
                        ...this.params.pages,
                        page: this.params.page + 1,
                    }

                    const { data } = await api.get('users', { params })
                    this.params = {
                        page: data.data.page,
                        pages: data.data.pages
                    }

                    this.rawItems = [...this.rawItems, ...data.data.users.map(item => {
                        item.sent = true
                        return item
                    })]
                }
            } catch (error) {
                console.log(error)
            }
        },

        async searchItem({ searchName, searchPhone }) {
            let params = {
                ...this.params,
                searchName,
                searchPhone,
                page: 1
            }
            try {
                const { data } = await api.get('users', { params })
                params = {
                    ...params,
                    pages: data.data.pages
                }
                this.rawItems = data.data.users.map(item => {
                    item.sent = true
                    return item
                })
            } catch (error) {
                console.log(error)
            }
        },

        async addItem({ name, phone }) {
            const id = Date.now()
            this.rawItems.push({ id, name, phone })
            try {
                const { data } = await api.post('users', { name, phone })

                this.rawItems = this.rawItems.map(item => {
                    if (item.id === id) {
                        return {
                            id: data.data.id,
                            name: data.data.name,
                            phone: data.data.phone,
                            sent: true
                        }
                    }
                    return item
                })
            } catch (error) {
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === id) {
                        return {
                            id: item.id,
                            name: item.name,
                            phone: item.phone,
                            sent: false
                        }
                    }
                    return item
                })
            }
        },

        async removeItem(id) {
            try {
                this.rawItems = this.rawItems.filter(item => item.id !== id)

                await api.delete(`users/${id}`)
            } catch (error) {
                console.log(error)
            }
        },

        async updateItem({ id, name, phone }) {
            const { data } = await api.put(`users/${id}`, { name, phone })

            try {
                this.rawItems = this.rawItems.map(item => {
                    if (item.id === id) {
                        return {
                            ...data.data,
                            sent: true
                        }
                    }
                    return item
                })
            } catch (error) {
                alert('Failed to update contact')
                console.log(error)
            }
        },

        async resendItem({ id, name, phone }) {
            try {
                const { data } = await api.post('users', { name, phone })

                if (data.success) {
                    this.rawItems = this.rawItems.map(item => {
                        if (item.id === id) {
                            return {
                                ...data.data,
                                sent: true
                            }
                        }
                        return item
                    })
                }
            } catch (error) {
                alert('Failed to resend data')
                console.log(error)
            }
        }
    }
})