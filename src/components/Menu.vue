<template>
  <div
    class="offcanvas offcanvas-bottom"
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
    <div class="offcanvas-body">
      <ButtonClear @click="$emit('clear-data')" />
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