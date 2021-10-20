<template>
  <div class="row">
    <div class="col-12 pt-4">
      <div
        v-for="check in checklist"
        :key="check.alias"
        class="shadow-sm rounded w-100 mb-2 ps-3 pt-2 pe-2 pb-2"
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
import malware from '@/data/malware'
import software from '@/data/software'
import windows from '@/data/windows'

export default {
  props: {
    category: {
      type: String,
      default: 'boost'
    }
  },
  data() {
    return {
      boost,
      malware,
      software,
      windows
    }
  },
  computed: {
    checklist() {
      switch (this.category) {
        case 'boost':
          return this.boost
        case 'malware':
          return this.malware
        case 'software':
          return this.software
        case 'windows':
          return this.windows
        default:
          return this.boost
      }
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