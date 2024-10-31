<script setup>
import NavigationBar from '../components/NavigationBar.vue';
</script>

<template>
  <div class="bg-gradient-to-br from-white to-red-100 min-h-screen flex flex-col">
    <NavigationBar/>
    
    <div class="flex flex-col lg:flex-row items-center justify-center mt-12 px-4 lg:px-8">
      
      <!-- Image Section -->
      <img 
        src="../assets/images/groceries.jpg" 
        alt="basket image" 
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mb-8 lg:mb-0 lg:mr-8 object-contain"
      />

      <!-- Text Content Section -->
      <div class="mt-8 text-center lg:text-left">
        <div class="flex items-center justify-center lg:justify-start p-2 space-x-2 bg-white rounded-2xl shadow-lg mb-6">
          <img src="../assets/icons/shopping-bag.png" alt="delivery" class="h-6 w-6" />
          <span>Grocery Delivery Service</span>
        </div>

        <p class="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
          Make Healthy<br>Life with Fresh<br>Groceries
        </p>
        
        <p class="mb-2 text-sm sm:text-base lg:text-lg">
          Get the best quality groceries in town at your doorstep in a <b>click</b>
        </p>
        
        <span class="underline text-yellow-500 mb-4 inline-block text-sm sm:text-base">
          Stay hooked, stay healthy
        </span>

        <div>
          <button class="bg-red-500 text-white p-2 rounded-xl w-32 sm:w-40 lg:w-48">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  </div>
</template>
