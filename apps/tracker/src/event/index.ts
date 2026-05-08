import type { EventDto, TrackerConfig } from '@en/common/tracker'
import { reportFetch } from '../report'

const nodeName = 'BUTTON'
const spanName = 'SPAN'

export const reportEvent = (visitorId: string, config: TrackerConfig) => {
  document.addEventListener(
    'click',
    (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const sendEvent = () => {
        const rect = target.getBoundingClientRect()
        const body: EventDto = {
          visitorId,
          event: e.type,
          payload: {
            x: rect.left.toFixed(2) || '0',
            y: rect.top.toFixed(2) || '0',
            width: rect.width.toFixed(2) || '0',
            height: rect.height.toFixed(2) || '0',
            text: target.textContent,
          },
          url: window.location.href,
        }
        void reportFetch(config.baseUrl + config.event.api, body)
      }
      if (target.nodeName === nodeName) {
        sendEvent()
      }
      if (target.nodeName === spanName && target.parentElement?.nodeName === nodeName) {
        sendEvent()
      }
    },
    true,
  )
}
