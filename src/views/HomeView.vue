<template>
    <div>
        <div qys-font="bold" qys-text="brand" class="border border-error" @click="handleOpenModal">
            attribute mode
        </div>
        <VModal :is-open="isOpen" @close="handleCloseModal">
            <div class="flex items-center justify-center">
                <button
                    type="button"
                    class="rounded-md bg-black bg-opacity-20 px-4 py-2 font-medium hover:bg-opacity-30 focus:outline-none"
                    qys-text="sm white"
                    qys-focus-visible="ring-2 ring-white ring-opacity-75"
                    @click="handleOpenModal"
                >
                    弹窗
                </button>
            </div>
        </VModal>
    </div>
</template>

<script lang="ts" setup>
const isOpen = ref<Boolean>(false)

const handleOpenModal = () => {
    isOpen.value = true
}
const handleCloseModal = () => {
    isOpen.value = false
}
</script>

<style lang="scss" scoped>
.brand {
    width: 100px;
}
</style>
