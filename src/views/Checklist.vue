<template>
  <div class="row">
    <div class="col-12 pt-4">
      <div
        v-for="check in checklist"
        :key="check.alias"
        class="check-item shadow-sm rounded w-100 mb-2 ps-3 pt-2 pe-2 pb-2"
      >
        <div class="form-check d-flex align-items-center">
          <input
            class="check-size form-check-input me-3"
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
export default {
  props: {
    category: {
      type: String,
      default: 'boost'
    },
    checklist: {
      type: Array
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

.check-item {
  color: #f2f2f2;
  background-color: #253144;
}

.form-check-input:focus {
  border-color: #f25c05;
  outline: 0;
  box-shadow: none;
}

.form-check-input:checked {
  background-color: #f25c05;
  border-color: #f25c05;
}
</style>