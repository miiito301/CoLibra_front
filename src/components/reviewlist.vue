<template>
    <div class="px-4 md:px-10 py-6 max-w-screen-lg mx-auto w-full">

        <h1 class="text-5xl font-bold text-center mb-8 tracking-wide">
            BookStack</h1>
        
        <div v-if="reviews.length > 0" class="space-y-6">
        <div v-for="review in reviews" :key="review._id" 
        class="flex flex-col md:flex-row bg-white border border-blue-800 rounded-xl shadow-lg p-6">

            <div class="flex-shrink-0 hidden md:block">
                <img v-if="review.thumbnail" :src="review.thumbnail" alt="本のサムネイル"
                class="rounded-lg"/>
                <img v-else src="../assets/miserarenai.jpg"alt="画像なし"
                class="rounded-lg w-[128px] h-[192px]"/>
            </div>

            <!-- Review Content -->
            <div class="flex flex-col justify-between md:ml-6 flex-1">
                <!-- Title & Author -->
                <div class="mb-3">
                    <p class="text-2xl font-semibold mb-1">{{ review.title }}</p>
                    <p class="flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                        </svg>
                            {{ review.authors?.join("、") }}
                        </p>
                </div>
                <!-- Review Details -->
                <div>
                    <p class="space-y-1 text-sm">User Name：{{ review.review.name }}</p>
                    <p class="space-y-1 text-sm">Post Data：{{ formatDate(review.createdAt) }}</p>
                    <p>⭐{{ review.review.rating }}</p>
                    <p>{{ review.review.comment }}</p>
                </div>
            </div>
        </div>
    </div>

        <div v-else class="text-center text-gray-600 mt-10">
            <p class="text-lg">No review found</p>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";

    const reviews = ref([]);

    const API_BASE = import.meta.env.VITE_API_URL

    const fetchReviews = async () => {
    try {
        const res = await fetch(`${API_BASE}/reviews`);
        const data = await res.json();
        reviews.value = data;
    } catch (error) {
        console.error("レビュー取得失敗:", error);
    }
    };

    //評価日を年月日に直す
    const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString();
    };

    onMounted(() => {
    fetchReviews();
    });



</script>
