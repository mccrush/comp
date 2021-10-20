<template>
  <div class="row">
    <div class="col-12 pt-4">
      <div
        v-for="chek in boost"
        :key="chek.alias"
        class="shadow-sm rounded w-100 mb-3 p-2"
      >
        {{ chek.title }}
      </div>
    </div>
  </div>
</template>

<script>
import boost from '@/data/boost'

export default {
  data() {
    return {
      boost
    }
  }
}
</script>