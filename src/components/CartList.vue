<template>
     <div>
        <p class="bg-gray-300 rounded-lg mt-2">{{ data.length }} - Cart List</p>
        <div class="grid grid-flow-row grid-cols-3 gap-4">
            <div :key="listCart.id" v-for="listCart in data" class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" v-bind:src="listCart.url">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ listCart.title }}</div>
                    <p class="float-left text-gray-700 inline-block text-2xl">{{ listCart.price | currency }}</p>
                    <button @click="$emit('click', listCart)" class="float-right mb-2 bg-red-700 text-white py-2 px-4 rounded">Hapus</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "CartList",
    props: {
        data: {
            type: Array,
            required: true,
        }
    },
    model: {
        prop: "button",
        event: "click",
    },
};
</script>
<style scoped>

.bg-red-700:hover {
    background-color: #852715 !important;
}
.text-2xl {
    color: #EE4D2D !important;
}

</style>