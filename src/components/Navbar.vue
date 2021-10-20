<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div class="container-fluid justify-content-between pt-1 pb-1">
      <ButtonBack @click="$emit('show-cat')" />
      <PageTitle :pageTitle="pageTitle" />
      <ButtonReload @click="$emit('reset-checklist')" />
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
  },
  props: {
    pageTitle: {
      type: String
    }
  }
}
</script>