import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

interface Event {
  time: string
  timestamp?: number
  points?: number
  balancePoints: number
  tradingPoints: number
  consumePoints: number
  claimedAirdrop?: Airdrop[]
}

interface Airdrop {
  symbol: string
  value?: number
}

export interface Alpha {
  id: number
  name: string
  defaultBalancePoints: number
  defaultTradingPoints: number
  currentEvent: Event
  futureEvents: Event[]
  historyEvents: Event[]
}

const calcPoints = (arr: Event[]) => {
  return arr
    .slice(0, 15)
    .reduce((pre, cur) => pre + cur.balancePoints + cur.tradingPoints - cur.consumePoints, 0)
}

const getCurrentTime = () => {
  console.log(44)
  const now = new Date()
  const currentHours = now.getHours()
  if (currentHours < 8) {
    now.setDate(now.getDate() - 1)
  }
  return now.setHours(8, 0, 0, 0)
}

export const mseconds = 24 * 60 * 60 * 1000



export const useAlphaStore = defineStore(
  'alpha',
  () => {
    const alphaList = ref<Alpha[]>([])

    const currentTime = ref(getCurrentTime())

    // 完善历史数据
    const improveHistoryData = (alpha: Alpha) => {
      while ((alpha.historyEvents[0]!.timestamp as number) < currentTime.value - mseconds) {
        const timestamp = (alpha.historyEvents[0]!.timestamp as number) + mseconds
        alpha.historyEvents.unshift({
          time: dayjs(timestamp).format('YYYY-MM-DD'),
          timestamp,
          points: calcPoints(alpha.historyEvents),
          balancePoints: alpha.defaultBalancePoints,
          tradingPoints: alpha.defaultTradingPoints,
          consumePoints: 0,
          claimedAirdrop: [],
        })
      }
    }

    // 完善当前数据
    const improveCurrentData = (alpha: Alpha) => {
      alpha.currentEvent = {
        time: dayjs(currentTime.value).format('YYYY-MM-DD'),
        timestamp: currentTime.value,
        points: calcPoints(alpha.historyEvents),
        balancePoints: alpha.defaultBalancePoints,
        tradingPoints: alpha.defaultTradingPoints,
        consumePoints: 0,
        claimedAirdrop: [],
      }
    }

    // 完善未来数据
    const improveFutureData = (alpha: Alpha) => {
      alpha.futureEvents = []
      while (alpha.futureEvents.length < 15) {
        const timestamp = currentTime.value + mseconds * (alpha.futureEvents.length + 1)
        alpha.futureEvents.push({
          time: dayjs(timestamp).format('YYYY-MM-DD'),
          timestamp,
          points: calcPoints([...alpha.futureEvents, alpha.currentEvent, ...alpha.historyEvents]),
          balancePoints: alpha.defaultBalancePoints,
          tradingPoints: alpha.defaultTradingPoints,
          consumePoints: 0,
          claimedAirdrop: [],
        })
      }
    }

    // 添加新账号
    const addAlpha = (alpha: Alpha) => {
      alpha.id = alphaList.value.length + 1

      improveHistoryData(alpha)
      improveCurrentData(alpha)
      improveFutureData(alpha)

      alphaList.value.push(alpha)
    }

    // 领取当天空投
    const claimAirdrop = (id: number, airdrop: Airdrop) => {
      const alpha = alphaList.value.find(item => item.id === id)
      if (alpha) {
        alpha.currentEvent = {
          ...alpha.currentEvent,
          claimedAirdrop: [...alpha.currentEvent.claimedAirdrop!, airdrop],
          consumePoints: alpha.currentEvent.consumePoints + 15,
        }

        improveFutureData(alpha)
      }
    }

    // 每日更新数据
    const dailyUpdate = () => {
      const now = getCurrentTime()
      if (now > currentTime.value) {
        currentTime.value = now

        alphaList.value.forEach(item => {
          item.historyEvents.unshift(item.currentEvent)
          improveHistoryData(item)
          improveCurrentData(item)
          improveFutureData(item)
        })
      }
    }

    const updateAlpha = (id: number) => {


    }

    return { alphaList, currentTime, addAlpha, claimAirdrop, dailyUpdate }
  },
  {
    persist: true,
  },
)
