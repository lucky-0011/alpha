<template>
  <el-dialog v-model="visible" title="添加" width="500">
    <el-button @click="example">示例</el-button>
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
    alpha.historyEvents.forEach((item) => {
      item.timestamp = new Date(item.time).getTime() + 8 * 60 * 60 * 1000
    })
    alphaStore.addAlpha(alpha)
  }
}

const example = () => {
  textarea.value = `{
    "name": "zz",
    "level": 1,
    "defaultBalancePoints": 3,
    "defaultTradingPoints": 16,
    "futureEvents": [],
    "historyEvents": [
      {
        "time": "2025-8-8",
        "balancePoints": 3,
        "tradingPoints": 16,
        "consumePoints": 0
      },
      {
        "time": "2025-8-7",
        "balancePoints": 3,
        "tradingPoints": 17,
        "consumePoints": 15,
        "claimedAirdrop": [
          {
            "symbol": "F",
            "value": 50
          }
        ]
      }
    ]
  }`
}

defineExpose({
  init,
})
</script>

<style scoped lang="scss"></style>
