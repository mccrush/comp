<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div class="container-fluid justify-content-between">
      <ButtonBack />
      <PageTitle />
      <ButtonReload />
    </div>
  </nav>
</template>

<script>
import ButtonBack from '@/components/buttons/ButtonBack'
import PageTitle from '@/components/PageTitle'
import ButtonReload from '@/components/buttons/ButtonReload'

export default {
  components: {
    ButtonBack,
    PageTitle,
    ButtonReload
  }
}
</script>