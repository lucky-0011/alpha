<template>
  <el-dialog v-model="visible" title="添加" width="500">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="名称">
        <el-input v-model="form.symbol" />
      </el-form-item>
      <el-form-item label="卖出价值">
        <el-input v-model.number="form.value" type="text" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-button @click="confirm">确定</el-button>
  </el-dialog>
</template>

<script setup lang="ts">
const visible = ref(false)
const id = ref(0)
const init = (_id: number) => {
  visible.value = true
  id.value = _id
}

const form = ref({
  symbol: '',
  value: 0,
})

const alphaStore = useAlphaStore()
const confirm = () => {
  if (form.value.symbol && form.value.value) {
    alphaStore.claimAirdrop(id.value, form.value)
    visible.value = false
  }
}

defineExpose({
  init,
})
</script>

<style scoped lang="scss"></style>
