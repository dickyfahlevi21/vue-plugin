<template>
    <div class="inline-block">
        <input
        class="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Cari item" 
        @input="$emit('change', $event.target.value)"    
        />
    </div>
</template>
<script>
export default {
    name: "SearchBox",
    props:['value'],
    model: {
        prop: "input",
        event: "change",
    }
};
</script>
