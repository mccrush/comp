<template>
  <div>
    <h5 class="d-sm-none text-light m-0">{{ pageTitle }}</h5>
    <h4 class="d-none d-sm-block d-md-none text-light m-0">
      {{ pageTitle }}
    </h4>
    <h3 class="d-none d-md-block text-light m-0">
      {{ pageTitle }}
    </h3>
  </div>
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