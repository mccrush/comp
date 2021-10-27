<template>
  <Navbar
    @show-cat="showCat"
    @reset-checklist="resetChecklist"
    :pageTitle="pageTitle"
    :myComponent="myComponent"
  />
  <div class="w-760 container mb-5">
    <transition name="fade" mode="out-in">
      <component
        :is="myComponent"
        @show-check="showCheck"
        :category="category"
        :checklist="checklist"
      />
    </transition>
  </div>
  <Footer />
  <Menu @clear-data="clearData" />
</template>

 

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import dataCategory from '@/data/category'
import dataBoost from '@/data/boost'
import dataMalware from '@/data/malware'
import dataSoftware from '@/data/software'
import dataWindows from '@/data/windows'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Category from '@/views/Category'
import Checklist from '@/views/Checklist'
import Menu from '@/components/Menu'

export default {
  components: {
    Navbar,
    Footer,
    Category,
    Checklist,
    Menu
  },
  data() {
    return {
      dataCategory,
      boost: JSON.parse(localStorage.getItem('cat-boost')) || dataBoost,
      malware: JSON.parse(localStorage.getItem('cat-malware')) || dataMalware,
      software:
        JSON.parse(localStorage.getItem('cat-software')) || dataSoftware,
      windows: JSON.parse(localStorage.getItem('cat-windows')) || dataWindows,
      myComponent: localStorage.getItem('comp-page') || 'Category',
      category: localStorage.getItem('comp-cat') || ''
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
    },
    pageTitle() {
      return this.category
        ? this.dataCategory.find(item => item.alias === this.category).title
        : 'Что будем делать?'
    }
  },
  methods: {
    showCheck({ cat }) {
      this.category = cat
      this.myComponent = 'Checklist'

      localStorage.setItem('comp-page', 'Checklist')
      localStorage.setItem('comp-cat', cat)
    },
    showCat() {
      this.category = ''
      this.myComponent = 'Category'
      localStorage.setItem('comp-page', 'Category')
      localStorage.removeItem('comp-cat')
    },
    resetChecklist() {
      this.checklist.map(item => {
        item.check = false
      })
      localStorage.setItem(
        'cat-' + this.category,
        JSON.stringify(this.checklist)
      )
    },
    clearData() {
      localStorage.removeItem('comp-cat')
      localStorage.removeItem('comp-page')
      localStorage.removeItem('cat-boost')
      localStorage.removeItem('cat-malware')
      localStorage.removeItem('cat-software')
      localStorage.removeItem('cat-windows')
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