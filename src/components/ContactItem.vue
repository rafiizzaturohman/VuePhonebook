<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <div>
            <h1>{{ name }}</h1>
        </div>

        <div>
            <h1>{{ phone }}</h1>
        </div>

        <div>
            <button>
                Edit
            </button>

            <button>
                {this.props.users.sent ? 'Delete' : 'Resend'}
            </button>
        </div>
    </div>
</template>