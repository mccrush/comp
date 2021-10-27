<template>
  <div class="row">
    <div class="col-12 ps-3 pt-4 pe-3">
      <button
        v-for="cat in category"
        :key="cat.alias"
        class="btn btn-primary btn-lg border-0 w-100 mb-3"
        type="button"
        @click="$emit('show-check', { cat: cat.alias })"
      >
        {{ cat.title }}
      </button>
    </div>
  </div>
</template>

<script>
import category from '@/data/category'

export default {
  data() {
    return {
      category
    }
  }
}
</script>

<style scoped>
.btn-primary {
  color: #f2f2f2;
  background-color: #253144;
}
</style>