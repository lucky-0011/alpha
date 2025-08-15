<template>
  <el-dialog v-model="visible" title="添加" width="500">
    <el-input v-model="textarea" :rows="20" type="textarea" placeholder="Please input" />
    <el-button @click="add">添加</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
import type { Alpha } from '@/stores/modules/alpha.ts'

const visible = ref(false)
const init = () => {
  visible.value = true
}

const textarea = ref('')

const alphaStore = useAlphaStore()
const add = () => {
  if (textarea) {
    const alpha: Alpha = JSON.parse(textarea.value)
    alpha.historyEvents.forEach(item => {
      item.timestamp = new Date(item.time).getTime() + 8 * 60 * 60 * 1000
    })
    alphaStore.addAlpha(alpha)
  }
}

defineExpose({
  init,
})
</script>

<style scoped lang="scss"></style>
