<template>
  <nav class="h-64 navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
    <div
      class="container-fluid justify-content-center pt-1 pb-1"
      :class="{
        'justify-content-between': myComponent === 'Checklist'
      }"
    >
      <ButtonBack
        v-if="myComponent === 'Checklist'"
        @click="$emit('show-cat')"
      />
      <PageTitle :pageTitle="pageTitle" />
      <ButtonReload
        v-if="myComponent === 'Checklist'"
        @click="$emit('reset-checklist')"
      />
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
    },
    myComponent: {
      type: String
    }
  }
}
</script>

<style scoped>
.h-64 {
  height: 64px;
}
</style>