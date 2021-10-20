<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
import ButtonBack from '@/components/buttons/ButtonBack'

export default {
  components: {
    ButtonBack,
    PageTitle,
    ButtonReload
  }
}
</script>