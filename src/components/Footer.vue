<template>
  <nav class="navbar fixed-bottom navbar-light bg-light border-top">
    <div class="container-fluid d-flex justify-content-center">
      <ButtonSettings
        data-bs-toggle="offcanvas"
        data-bs-target="#menuBar"
        aria-controls="menuBar"
      />
    </div>
  </nav>
</template>

<script>
import ButtonSettings from '@/components/buttons/ButtonSettings'
export default {
  components: {
    ButtonSettings
  }
}
</script>