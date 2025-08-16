<template>
  <el-dialog v-model="visible" title="添加" width="500">
    <el-input v-model="textarea" :rows="20" type="textarea" placeholder="Please input" />
    <el-button @click="update">更新</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
import type { Alpha } from '@/stores/modules/alpha.ts'

const visible = ref(false)
const init = (_id: number) => {
  visible.value = true
  id.value = _id
  textarea.value = JSON.stringify(alphaStore.alphaList.find(item => item.id === _id), null, 2)
}

const id = ref(0)
const textarea = ref('')

const alphaStore = useAlphaStore()
const update = () => {
  if (textarea) {
    const alpha: Alpha = JSON.parse(textarea.value)
    alpha.futureEvents = []
    alphaStore.updateAlpha(id.value, alpha)
    visible.value = false
  }
}

defineExpose({
  init,
})
</script>

<style scoped lang="scss"></style>
