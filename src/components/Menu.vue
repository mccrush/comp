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
        <p class="copy-right d-block badge small text-center mt-4 mx-auto">
          Powered by
          <a
            href="https://mccrush.ru"
            title="Перейти на сайт mccrush.ru"
            target="_blank"
            >mccrush.ru</a
          >&nbsp;&nbsp;★&nbsp;&nbsp;Fork me on
          <a
            href="https://github.com/mccrush/comp"
            title="Перейти на сайт github.com"
            target="_blank"
            >GitHub</a
          >
        </p>
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

.copy-right,
.copy-right a {
  color: #ccc;
}

.copy-right a:hover {
  color: #ccc;
  text-decoration: none;
}
</style>