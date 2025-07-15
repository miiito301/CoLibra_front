<template>
    <div>
        <Form @submit-form="getBook" />
        <Result :books="books" @submit-review="handleReviewSubmit" /><!--内部でreviewform.vueを表示-->
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import axios from 'axios'
    import Form from '../components/form.vue'
    import Result from '../components/result.vue'

    const books = ref([])

    // Google Books API に検索リクエスト
    const getBook = ([keyword, title, author]) => {
    // クエリ組み立て
    let query = ''
     //検索条件をurlに足していく
    if (title) query += `intitle:${title}+`
    if (author) query += `inauthor:${author}+`
    if (keyword) query += `${keyword}+`
    // 最後の "+" を削除
    query = query.replace(/\+$/, '')

    axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
        q: query,
        maxResults: 30,
        orderBy: 'relevance',
        printType: 'books',
        }
    })
    .then(response => {
        books.value = response.data.items || []// null 対策
    })
    .catch(error => {
        console.error("API error", error.response?.data || error.message)
    })
    }

    

    // ReviewForm から送られたレビューを受け取りバックエンドへ送信

    const API_BASE = import.meta.env.VITE_API_URL

    const handleReviewSubmit = async (reviewData) => {
    try { 
        await fetch(`${API_BASE}/reviews`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(reviewData)
        })
        alert("感想を保存しました")
    } catch (error) {
        console.error("感想の保存に失敗：", error)
        alert("保存に失敗しました")
    }
    }
</script>
