<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen= false;
};
</script>

<template>
  <nav class="p-6">
    <div class="flex justify-between items-center rounded-xl">
      <!-- Logo Section -->
      <div class="flex items-center">
        <img 
          src="../assets/images/mamasoko.jpg" 
          alt="mamasoko icon"
          class="h-16 w-16 rounded-full"
        />
        <span class="ml-2 text-sm lg:text-2xl">
          <span class="text-red-500 font-bold">Mama</span>
          <span class="text-yellow-500 font-bold">Soko</span>
        </span>
      </div>

      <!-- Menu Links (Always Horizontal) -->
      <div class="hidden md:flex space-x-8">
        <RouterLink to="/" class="text-gray-700 hover:text-red-600">Home</RouterLink>
        <RouterLink to="/productlist" class="text-gray-700 hover:text-red-600">Groceries</RouterLink>
        <RouterLink to="/productlist" class="text-gray-700 hover:text-red-600">Shop</RouterLink>
        <RouterLink to="/productlist" class="text-gray-700 hover:text-red-600">Contact</RouterLink>
        <RouterLink to="/useraccount" class="text-gray-700 hover:text-red-600">Me</RouterLink>
      </div>

      <!-- Centered Cart and Sign-Up Button on All Screens -->
      <div class="flex items-center space-x-6">
        <img 
          src="../assets/icons/grocery-cart.png" 
          alt="cart"
          class="h-8 w-8"
        />
        <button class="text-white bg-black p-2 rounded-3xl md:w-24 w-20 hover:bg-yellow-100 hover:text-black">Sign Up</button>
      </div>

      <!-- Menu Toggle Button for Small Screens (Aligned Right) -->
      <button @click="toggleMenu" class="block md:hidden ml-4">
        <img src="../assets/icons/menu.png" alt="menu icon" class="h-12 w-12"/>
      </button>

      <!-- Mobile Menu Links -->
      <div 
      v-click-outside="closeMenu"
        v-if="isMenuOpen"
        
        :class="[
          'absolute md:hidden top-20 right-0 bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        ]"
      >
        <RouterLink to="/" class="block text-gray-700 hover:text-red-600 py-2">Home</RouterLink>
        <RouterLink to="/productlist" class="block text-gray-700 hover:text-red-600 py-2">Groceries</RouterLink>
        <RouterLink to="/productlist" class="block text-gray-700 hover:text-red-600 py-2">Shop</RouterLink>
        <RouterLink to="/productlist" class="block text-gray-700 hover:text-red-600 py-2">Contact</RouterLink>
        <RouterLink to="/useraccount" class="block text-gray-700 hover:text-red-600 py-2">Me</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add any necessary styles */
</style>
