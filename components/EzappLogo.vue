<template>
  <img
    class="ezapp-logo"
    alt="ezapp logo"
    src="/ezappLogo.svg"
  >
</template>

<style>
.ezapp-logo {
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  80% {
    transform: scale(1);
  }
    90% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>
