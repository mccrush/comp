<template>
  <div class="row">
    <div class="col-12 pt-4">
      <div
        v-for="check in boost"
        :key="check.alias"
        class="shadow-sm rounded w-100 mb-2 ps-3 pt-3 pe-2 pb-3"
      >
        <div class="form-check d-flex align-items-center">
          <input
            class="check-size form-check-input me-2"
            type="checkbox"
            :id="check.alias"
            :checked="check.check"
          />
          <label class="form-check-label lh-sm pt-1" :for="check.alias">
            {{ check.title }}
          </label>
        </div>
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
<style scoped>
.check-size {
  width: 24px;
  height: 24px;
}
</style>