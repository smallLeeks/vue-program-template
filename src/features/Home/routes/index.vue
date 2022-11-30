<template>
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
    <button @click="handlePinia">pinia {{ counter }}</button>
    <button @click="handleRequest">请求数据</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/index'
import { inject } from 'vue'
const _http: any = inject('$axios')

const store = useCounterStore()

const counter = storeToRefs(store)

const isOpen = ref<Boolean>(false)

const handlePinia = () => {
    store.increment()
}

const handleOpenModal = () => {
    isOpen.value = true
}
const handleCloseModal = () => {
    isOpen.value = false
}

const handleRequest = () => {
    _http
        .get('/api/data/cms-config.json')
        .then((res: any) => {
            console.log(res)
        })
        .catch((err: any) => {
            console.log(err)
        })
}
</script>

<style lang="scss" scoped>
.brand {
    width: 100px;
}
</style>
