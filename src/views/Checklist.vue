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
            @change="checkItem(check.alias)"
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
import dataBoost from '@/data/boost'
import dataMalware from '@/data/malware'
import dataSoftware from '@/data/software'
import dataWindows from '@/data/windows'

export default {
  props: {
    category: {
      type: String,
      default: 'boost'
    }
  },
  data() {
    return {
      boost: JSON.parse(localStorage.getItem('cat-boost')) || dataBoost,
      malware: JSON.parse(localStorage.getItem('cat-malware')) || dataMalware,
      software:
        JSON.parse(localStorage.getItem('cat-software')) || dataSoftware,
      windows: JSON.parse(localStorage.getItem('cat-windows')) || dataWindows
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
  },
  methods: {
    checkItem(alias) {
      const index = this.checklist.findIndex(item => item.alias === alias)
      let element = this.checklist[index]
      element.check = !element.check
      this.checklist[index] = element

      localStorage.setItem(
        'cat-' + this.category,
        JSON.stringify(this.checklist)
      )
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