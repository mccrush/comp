<template>
  <Navbar @show-cat="showCat" />
  <div class="w-760 container border">
    <transition name="fade" mode="out-in">
      <component
        :is="myComponent"
        @show-check="showCheck"
        :category="category"
      />
    </transition>
  </div>
</template>

 

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Category from '@/views/Category'
import Checklist from '@/views/Checklist'

export default {
  components: {
    Navbar,
    Category,
    Checklist
  },
  data() {
    return {
      myComponent: localStorage.getItem('comp-page') || 'Category',
      category: localStorage.getItem('comp-cat') || 'boost'
    }
  },
  methods: {
    showCheck({ cat }) {
      this.category = cat
      this.myComponent = Checklist

      localStorage.setItem('comp-page', 'Checklist')
      localStorage.setItem('comp-cat', cat)
    },
    showCat() {
      this.myComponent = Category
      localStorage.setItem('comp-page', 'Category')
    }
  }
}
</script>

<style>
.w-760 {
  max-width: 640px;
}
.btn:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>