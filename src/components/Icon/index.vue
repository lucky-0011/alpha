<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  icon: string
  size?: number | string
  color?: string
}

const { icon, size = '1em', color = 'currentColor' } = defineProps<Props>()
</script>

<template>
  <Icon :icon="icon" :width="size" :height="size" :color="color" inline />
</template>

<style lang="scss" scoped></style>
