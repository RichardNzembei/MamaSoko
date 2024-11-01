<script setup>
import NavigationBar from './NavigationBar.vue';
</script>
<template>
  <div class="bg-gradient-to-br from-white to-red-100 min-h-screen flex flex-col">
    <NavigationBar/>
    <div class="flex justify-center mt-28">
      <div class="relative mt-2">
        <span class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4">
          <img src="../assets/icons/search.png" alt="search-icon" class="w-full h-full object-contain" />
        </span>
        <input 
        type="text" 
        placeholder="search grocery" 
        class="rounded-3xl p-2 shadow-2xl text-center text-red-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 ">
      </div>

    </div>
    <section class="mt-3">
            <ul class="flex justify-center space-x-4 text-slate-700">
              <li class="p-1 hover:text-red-200">
                <router-link to="/all">All</router-link>
              </li>
              <li class=" p-1 hover:text-red-400">
                <router-link to="/active">Fruits</router-link>
              </li>
              <li class="  p-1 hover:text-red-400 ">
                <router-link to="/completed">Vegetables</router-link>
              </li>
              <li class="  p-1 hover:text-red-400">
                <router-link to="/completed">Cereals</router-link>
              </li>
              <li class="  p-1 hover:text-red-400">
                <router-link to="/completed">Meat</router-link>
              </li>
              <li class="  p-1 hover:text-red-400">
                <router-link to="/completed">Milk</router-link>
              </li>

            </ul>
          </section>
  </div>
</template>