<template>
  <div class="row">
    <div class="col-12 pt-4">
      <button
        v-for="cat in category"
        :key="cat.alias"
        class="btn btn-primary btn-lg w-100 mb-3"
        type="button"
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