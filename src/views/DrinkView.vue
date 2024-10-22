<script setup lang="ts"></script>

<template>
  <h1>Espresso What???</h1>
  <div class="drink-container">
    <div class="glass"></div>
    <div class="internal-glass"></div>
    <div class="portion-container">
      <div class="drink-portion"></div>
      <div class="drink-portion"></div>
      <div class="drink-portion"></div>
      <div class="drink-portion"></div>
      <div class="drink-portion"></div>
      <div class="drink-portion bottom-curve"></div>
    </div>
  </div>
</template>

<style>
h1 {
  color: #120902;
  margin-bottom: 50px;
}
.drink-container {
  position: relative;
}
.glass {
  /* TODO: Add variables for sizing, extract out similar styles */
  position: absolute;
  border-top: 350px solid #2a5c59;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 350px;
}
.internal-glass {
  position: absolute;
  z-index: 2;
  top: 3px;
  left: 4px;

  border-top: 336px solid var(--color-background);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 336px;
}
.portion-container {
  z-index: 3;
  position: relative;
  top: 25px;
  left: 66px;
}
.drink-portion {
  height: 50px;
  width: 212px;
  border-left: 2px solid #2a5c59;
  border-right: 2px solid #2a5c59;
  background-color: #361a07;
}
.bottom-curve {
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-bottom: 2px solid #2a5c59;
}
</style>
<!-- Notes -->

<!-- Design inspiration: -->
<!-- The drink image was heavily inspired by the design found on this blog post
https://blog.mistobox.com/espresso-coffee-drinks/ by Tyler Schultz. 
The artist for the image itself was unlisted.  -->

<!-- CSS Waves  -->
<!-- I love the CSSTricks website, and they have a blogpost for making
wave patterns: https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/
by Temani Afif. They also have a wave generator tool, which I used:
https://css-generators.com/wavy-shapes/  -->
