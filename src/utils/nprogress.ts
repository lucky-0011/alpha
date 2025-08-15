import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({
  minimum: 0.1,
  trickleSpeed: 300,
  speed: 300,
})

export const start = () => NProgress.start()
export const done = () => NProgress.done()
