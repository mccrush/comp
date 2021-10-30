<template>
  <div
    class="offcanvas offcanvas-bottom bg-dark"
    tabindex="-1"
    id="menuBar"
    aria-labelledby="menuBarLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="menuBarLabel">Настройки</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex justify-content-center">
      <div class="col-12 col-sm-6 col-lg-4 col-xl-2">
        <ButtonClear @click="$emit('clear-data')" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonClear from '@/components/buttons/ButtonClear'
export default {
  components: {
    ButtonClear
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