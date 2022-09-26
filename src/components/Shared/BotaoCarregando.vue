<template>
    <div>
        <button :class="`btn btn-${class_btn} btn-block`">
            <span v-if="!sending">
                <slot></slot>
                <!-- Login -->
            </span>
            <div class="spinner-border spinner-border-sm" role="status" v-else>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        sending: {
            type: Boolean,
            required: true,
        },
        class_btn: {
            type: String,
            required: true,
        }
    }
}
</script>