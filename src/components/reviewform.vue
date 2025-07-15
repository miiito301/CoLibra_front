<template>

    <div class="bg-gray-50 p-6 rounded-lg shadow-inner border mt-2">

        <form @submit.prevent="submitReview" class="space-y-4">

            <!-- レビュー記入者 -->
            <div>
                <label class="block text-sm font-medium text-gray-700">User Name</label>
                <input v-model="name" type="text" placeholder="Enter your name" required 
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <!-- 評価 -->
            <div>
                <label class="block text-sm font-medium text-gray-700">Rating（0〜10）</label>
                <select v-model.number="rating"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option v-for="n in 11" :key="n" :value="n - 1">{{ n - 1 }}</option>
                </select>
            </div>

            <!-- コメント -->
            <div>
                <textarea v-model="comment" placeholder="Comment" rows="5"  required
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                </textarea>
            </div>

            <!-- 送信ボタン -->
            <div  class="text-right">
                <button type="submit"
                class="px-5 py-2 text-white font-semibold rounded transition bg-gradient-to-r from-blue-700 to-purple-700 hover:from-pink-500 hover:to-yellow-500">
                Send</button>
            </div>
            
        </form>
    </div>

</template>

<script setup>

    import { ref, toRaw } from 'vue'

    // props: 親から渡された本情報
    const props = defineProps({
    book: Object
    })

    // emit: 親にレビューを送信
    const emit = defineEmits(['submit-review'])

    // レビュー入力用データ
    const name = ref('')
    const rating = ref(3) // 初期値：星3
    const comment = ref('')


    // フォーム送信
    const submitReview = () => { //本の情報と感想情報をresult.vueに送信
    const reviewData = {
        bookId: props.book.id,
        title: props.book.volumeInfo.title,
        authors: toRaw(props.book.volumeInfo.authors || []),
        thumbnail: props.book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x180?text=No+Image',
        review: {
        name: name.value,
        rating: rating.value,
        comment: comment.value
        }
    }

    console.log("送信内容:", reviewData);

    emit('submit-review', reviewData)
    name.value = ''     // フォームを初期化
    rating.value = 3
    comment.value = ''
    }

</script>
