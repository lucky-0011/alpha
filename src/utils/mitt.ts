import mitt from 'mitt'

type Events = {
  'event-name': { params1: number; params2: string }
}

const emitter = mitt<Events>()

// emitter.on('event-name', (params) => {})
// emitter.emit('event-name', { params1: 0, params2: '' })

export default emitter

