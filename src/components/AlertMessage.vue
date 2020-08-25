<template>
    <div class="animate bg-teal-100 border-t-4 w-64 centering inset-x-auto border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mx-auto fixed" role="alert">
        <div class="flex">
            <div class="py-1">
                <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
            </div>
            <div>
                <p class="font-bold">Masuk Pak eko</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AlertMessage"
};
</script>

<style scoped>

.centering {
    top: 2%;
    right: 50%;
    left: 41%;
    margin: 0;
}

.successfully-saved.hide-opacity{
    opacity: 0;
}

.animate {
    -webkit-animation: fadein 1s; /* Safari */
    -moz-animation: fadein 1s; /* Firefox */
    -ms-animation: fadein 1s; /* IE */
    -o-animation: fadein 1s; /* Opera*/
    animation: fadein 1s;
}


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
