<template>
    <div>
        <p class="bg-gray-300 rounded-lg mt-2">{{ data.length }} - List Item</p>
        <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
            <div :key="json.id" v-for="json in data" class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" v-bind:src="json.url">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ json.title }}</div>
                    <p class="float-left text-gray-700 inline-block text-2xl">{{ json.price | currency }}</p>
                    <button @click="$emit('click', json)" class="float-right mb-2 bg-blue-500 text-white py-2 px-4 rounded">Beli</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ListRendering",
    props: {
        data: {
            type: Array,
            required: true,
        }
    },
    model: {
        prop: "button",
        event: "click",
    }
};
</script>
<style scoped>

.bg-blue-500 {
    background-color: #EE4D2D !important;
}
.bg-blue-500:hover {
    background-color: #cc482d !important;
}
.text-2xl {
    color: #EE4D2D !important;
}

</style>