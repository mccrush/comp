<template>
  <nav class="navbar fixed-bottom navbar-dark bg-dark">
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

<style scoped>
.bg-dark {
  background-color: #253144 !important;
  color: #f2f2f2;
  border-top: 1px solid #32425a;
}
</style>