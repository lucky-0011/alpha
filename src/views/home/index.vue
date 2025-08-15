<template>
  <div class="p-30px">
    <div class="flex justify-between items-center">
      {{ dayjs(alphaStore.currentTime).format('MM-DD') }}空投信息

      {{ alphaStore.currentTime }}

      <el-button @click="addRef!.init()">添加</el-button>

    </div>

    <el-tabs v-model="active" class="demo-tabs">
      <el-tab-pane label="未来15天" name="future"></el-tab-pane>
      <el-tab-pane label="历史15天" name="history"></el-tab-pane>
    </el-tabs>

    <el-button @click="addRef!.init()">添加</el-button>

    <el-table :data="alphaStore.alphaList" border style="width: 100%">
      <el-table-column fixed prop="id" sortable label="ID" width="80" />
      <el-table-column fixed prop="name" label="名称" width="120" />
      <el-table-column fixed :label="dayjs(alphaStore.currentTime).format('MM-DD ddd')" min-width="100">
        <template #default="{ row }">
          {{ row.currentEvent.points }}
          <el-tag
            v-for="value of row.currentEvent.claimedAirdrop"
            :key="value.symbol"
            type="primary"
          >
            {{ value.symbol }}({{ value.value }}U)
          </el-tag>
        </template>
      </el-table-column>
      <template v-if="active === 'future'">
        <el-table-column
          v-for="item in 15"
          :key="item"
          :label="dayjs(alphaStore.currentTime + mseconds * item).format('MM-DD ddd')"
          min-width="100"
        >
          <template #default="{ row }">
            {{ row.futureEvents[item - 1].points }}
          </template>
        </el-table-column>
      </template>

      <template v-else>
        <el-table-column
          v-for="item in 15"
          :key="item"
          :label="dayjs(alphaStore.currentTime - mseconds * item).format('MM-DD ddd')"
          min-width="100"
        >
          <template #default="{ row }">
            <template v-if="row.historyEvents[item - 1]">
              {{ row.historyEvents[item - 1].points }}
              <el-tag
                v-for="value of row.historyEvents[item - 1].claimedAirdrop"
                :key="value.symbol"
                type="primary"
              >
                {{ value.symbol }}({{ value.value }}U)
              </el-tag>
            </template>
            <template v-else>--</template>
          </template>
        </el-table-column>
      </template>

      <el-table-column fixed="right" label="操作" min-width="80">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="set(row.id)">设置</el-button>
          <el-button link type="primary" size="small" @click="claim(row.id)">领取</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Add ref="add"></Add>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import Add from './components/Add.vue'
import { mseconds, useAlphaStore } from '@/stores/modules/alpha.ts'
import { http } from '@/apis/http.ts'

type FooType = InstanceType<typeof Add>
const addRef = useTemplateRef<FooType>('add')

const active = ref('future')

const alphaStore = useAlphaStore()

onMounted(() => {
  alphaStore.dailyUpdate()
  getKTopPrice()
})

const claim = (id: number) => {
  alphaStore.claimAirdrop(id, {
    symbol: 'WAI',
    value: 60,
  })
}

const set = (id: number) => {

}

const getKTopPrice = async () => {
  // const url = 'https://www.binance.com/bapi/defi/v1/public/alpha-trade/klines?interval=1m&symbol=ALPHA_310USDT'
  // const url = 'https://www.binance.com/bapi/defi/v1/public/alpha-trade/klines?interval=15m&symbol=ALPHA_280USDT&startTime=1752494400000&endTime=1752580800000'
  const url = 'https://www.binance.com/bapi/defi/v1/public/alpha-trade/klines?interval=1m&symbol=ALPHA_280USDT&startTime=1752681600000'
  const result = await http.get(url)
  result.sort((a, b) => a[2] - b[2])
  console.log(result)
}

</script>

<style scoped lang="scss"></style>
