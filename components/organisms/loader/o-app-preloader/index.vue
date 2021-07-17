<template lang="pug">
.o-rk-app-preloader(v-if="preloader.isLoading" ref="appPreloader")
  a-preloader-spinner
</template>

<script>
import { defineComponent, computed, useStore, onMounted, nextTick } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()
    const preloader = computed(() => store.state.preloader)

    onMounted(() => {
      nextTick(() => {
        if (!preloader.isAttached) {
          store.commit('preloader/HIDE_PRELOADER')
        }
      })
    })

    return { preloader }
  }
})
</script>

<style lang="scss" scoped>
.o-rk-app-preloader {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-ui-03);
}
</style>
