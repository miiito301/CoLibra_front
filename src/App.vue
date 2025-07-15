

<template>
  <div>
    <!-- ヘッダー -->
    <header class="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-10 shadow-xl">
      <h1 class="text-5xl md:text-7xl font-extrabold text-center tracking-widest drop-shadow-lg">CoLibra</h1>
    </header>
      
      <!-- 中央ナビゲーションバー -->
      <nav class="mt-6 flex justify-center gap-6">
        <router-link to="/" class="px-6 py-2 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold text-center">
          🏠 Home　
        </router-link>
        <router-link to="/reviews" class="px-6 py-2 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold text-center">
          📚 BookStack　
        </router-link>
      </nav>

    <!-- メインビュー -->
    <main class="flex-1 p-8 bg-gray-50 min-h-screen">
      <div class="max-w-4xl mx-auto w-full px-4">
        <router-view />
      </div>
    </main>
  </div>
</template>

