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
            contact: this.contact.name,
            sent: this.contact.sent
        }
    },
}
</script>