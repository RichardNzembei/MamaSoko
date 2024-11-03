<script setup>

</script>
<template>
  <div class="min-h-screen bg-gradient-to-r from-white to-red-300 ">
   <div class="flex p-4 justify-center items-center ">
<div>
  <img src="../assets/images/grocery.png" alt="">
</div>
<div class="p-2">
  <h2 class="font-san text-2xl">welcome to <span class="text-red-600 text-3xl">MamaSoko</span> Vendor</h2>
  <p class="font-mono">Get fresh Groceries<br> from trusted and a servicing source<br> determined to make a healthy society</p>
</div>
   </div>
   <div class="flex flex-col justify-center items-center text-slate-700 text-center ">
    <h2 class="text-2xl text-green-500 underline mb-4">SIGN UP</h2>
    <div class="mb-4">
      <label for="username" class="block">Username</label>
    <input type="text" placeholder="enter a username" class="text-center  p-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-300 hover:bg-slate-100">
    </div>
    <div class="mb-4">
      <label for="email" class="block">Email</label>
    <input type="text" placeholder="example@gmail.com" class="text-center p-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-300 hover:bg-slate-100">
    </div>
    <div class="mb-4">
      <label for="password" class="block">Password</label>
    <input type="text" placeholder="*******" class="text-center  p-1 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-300 hover:bg-slate-100">
    </div>
    <button class="bg-red-400 rounded-2xl p-1 w-40 text-white hover:bg-white hover:text-red-400">Register</button>
   </div>
  </div>
</template>