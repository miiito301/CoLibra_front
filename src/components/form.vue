<template>

    <form @submit.prevent="submitForm" 
        class="max-w-4xl mx-auto p-6 flex flex-col items-center">

        <div class="flex gap-6 mb-6">
            <input type="text" v-model="keyword"  placeholder="Keyword" 
                class="flex1 border border-gray-300 rounded-md px-4 py-3 placeholder-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
            <input type="text" v-model="title" placeholder="Title" 
                class="flex1 border border-gray-300 rounded-md px-4 py-3 placeholder-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
            <input type="text" v-model="author" placeholder="Author" 
                class="flex border border-gray-300 rounded-md px-4 py-3 placeholder-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition">
        </div>
            <div class="text-center">
                <button type="submit" 
                    class="bg-white text-blue-700 font-semibold px-12 py-1 rounded-full shadow-md hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition">
                    🔎</button>
            </div> 
    </form>

</template>

<script setup>

    import {ref} from "vue"

    const keyword=ref("")
    const title =ref("")
    const author=ref("")

    const emits=defineEmits([
        "submit-form"
    ])

    const submitForm=()=>{
        emits("submit-form", [keyword.value,title.value,author.value])
        keyword.value=""
        title.value=""
        author.value=""
    }

</script>