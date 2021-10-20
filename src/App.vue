<template>
  <Navbar />
  <div class="w-760 container border">
    <transition name="fade" mode="out-in">
      <component :is="myComponent" />
    </transition>
  </div>
</template>

 

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Category from '@/components/Category'

export default {
  components: {
    Navbar,
    Category
  },
  data() {
    return {
      myComponent: localStorage.getItem('comp-page') || 'Category'
    }
  },
  methods: {
    getComponent(comp) {
      this.myComponent = comp
    }
  }
}
</script>

<style>
.w-760 {
  max-width: 760px;
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