<template>
  <h6 class="d-sm-none text-light m-0">{{ pageTitle }}</h6>
  <h5 class="d-none d-sm-block d-md-none text-light m-0">{{ pageTitle }}</h5>
  <h3 class="d-none d-md-block text-light m-0">{{ pageTitle }}</h3>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String
    }
  }
}
</script>