<template>

    <div v-if="books.length>0">
        <div v-for="book in books" class="flex flex-col md:flex-row border bg-white border-blue-800 p-4 rounded-lg my-6 relative shadow-md">

            <a :href="book.volumeInfo.infoLink" target="_blank" rel="noopener noreferrer"
                class="flex-shrink-0 hidden md:block mt-2">
                <img v-if="book.volumeInfo.imageLinks?.thumbnail" :src="book.volumeInfo.imageLinks.thumbnail" alt="本のサムネイル"
                    class="rounded-lg"/>
                <img v-else src="../assets/miserarenai.jpg"alt="画像なし"
                    class="rounded-lg w-[128px] h-[192px]"/>
            </a>

            <div class="flex flex-col justify-between md:ml-6 flex-1">
                <div>
                    <p class="text-2xl text-gray-800 font-semibold">{{ book.volumeInfo.title }}</p>

                    <p class="flex items-center text-gray-800 gap-2  mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                        </svg>
                            <span>{{ book.volumeInfo.authors?.join("、") }}</span>
                            </p><!--配列の要素を、で連結-->

                    <div class="flex flex-col gap-1 text-gray-700 mt-2">
                        <p><span class="font-semibold">Published：</span>{{ book.volumeInfo.publishedDate }}</p>
                        <p><span class="font-semibold">Page：</span>{{ book.volumeInfo.pageCount }} pages</p>
                    </div>
                </div>

                <!-- Review ボタン -->
                    <button @click="toggleReview(book.id)"
                        class="rounded px-6 py-2 border bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold transition">
                        Review
                    </button>
            </div>
                
                <!-- Review フォーム -->
                <transition name="fade">
                    <div v-if="showReviewFormId === book.id" class="mt-6">
                        <ReviewForm :book="book" @submit-review="handleSubmitReview" />
                    </div>
                </transition>
        </div>
    </div>

        <div v-else>
            <h1 class="text-center">
                No Item Found</h1>
        </div>
    

</template>

<script setup>

    defineProps({
        books:Array, //親から受け取る検索結果
    })

    import {ref} from "vue"
    import ReviewForm from "./reviewform.vue"

    const showReviewFormId =ref(null) //表示中の感想フォームの本ID

    const toggleReview = (bookId) => {
        showReviewFormId.value =showReviewFormId.value === bookId ? null : bookId
    }

    const emit = defineEmits(['submit-review'])

    //感想の送信イベントを受け取り、バックエンドに送信
    const handleSubmitReview = (reviewData) => {
        emit('submit-review', reviewData)
    }

</script>