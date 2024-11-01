<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = (event) => {
    console.log('Click event:', event);
    if (event && !event.target.closest('.menu-toggle')) {
        isMenuOpen.value = false;
    }
};
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-10 p-6 bg-gradient-to-br from-white to-red-50">
        <div class="flex justify-between items-center rounded-xl">
            <div class="flex items-center">
                <img src="../assets/images/mamasoko.jpg" alt="mamasoko icon"
                    class="h-10 w-10 md:h-16 md:w-16 rounded-full" />
                <span class="ml-2 text-sm lg:text-2xl">
                    <span class="text-red-500 font-bold">Mama</span>
                    <span class="text-yellow-500 font-bold">Soko</span>
                </span>
            </div>
            <div class="hidden md:flex space-x-8">
                <RouterLink to="/" class="text-gray-700 hover:text-red-600">Home</RouterLink>
                <RouterLink to="/grocery" class="text-gray-700 hover:text-red-600">Groceries</RouterLink>
                <RouterLink to="/shop" class="text-gray-700 hover:text-red-600">Shop</RouterLink>
                <RouterLink to="/contact" class="text-gray-700 hover:text-red-600">Contact</RouterLink>
                <RouterLink to="/useraccount" class="text-gray-700 hover:text-red-600">Me</RouterLink>
            </div>
            <div class="flex items-center space-x-6">
                <img src="../assets/icons/grocery-cart.png" alt="cart" class="h-5 w-5 md:h-8 md:w-8" />
                <button
                    class="text-white bg-black p-2 rounded-3xl w-18 md:w-24 text-sm hover:bg-yellow-100 hover:text-black">Sign
                    Up</button>
            </div>
            <button @click="toggleMenu" class="menu-toggle block md:hidden ml-4">
                <img src="../assets/icons/menu.png" alt="menu icon" class="h-8 w-8" />
            </button>
            <transition enter-active-class="transition-opacity duration-300 ease-in-out"
                leave-active-class="transition-opacity duration-300 ease-in-out" enter-from-class="opacity-0"
                enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="isMenuOpen" v-click-outside="closeMenu"
                    class="absolute md:hidden top-20 right-1 bg-white p-4 rounded-lg shadow-lg">
                    <RouterLink to="/" class="block text-gray-700 hover:text-red-600 py-2">Home</RouterLink>
                    <RouterLink to="/grocery" class="block text-gray-700 hover:text-red-600 py-2">Groceries
                    </RouterLink>
                    <RouterLink to="/shop" class="block text-gray-700 hover:text-red-600 py-2">Shop</RouterLink>
                    <RouterLink to="/contact" class="block text-gray-700 hover:text-red-600 py-2">Contact
                    </RouterLink>
                    <RouterLink to="/useraccount" class="block text-gray-700 hover:text-red-600 py-2">Me</RouterLink>
                </div>
            </transition>
        </div>
    </nav>
</template>
