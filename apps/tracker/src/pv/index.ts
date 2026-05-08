import type { PvDto, TrackerConfig } from '@en/common/tracker'
import { reportFetch } from '../report'

const reportView = (visitorId: string, config: TrackerConfig) => {
  const isHash = window.location.href.includes('#')
  const body: PvDto = {
    visitorId,
    url: window.location.protocol + '//' + window.location.host,
    referrer: document.referrer || '',
    path: isHash ? '/' + window.location.hash : window.location.pathname,
  }
  void reportFetch(config.baseUrl + config.pv.api, body)
}

export const reportPv = (visitorId: string, config: TrackerConfig) => {
  reportView(visitorId, config)
  window.addEventListener('hashchange', () => {
    reportView(visitorId, config)
  })
  window.addEventListener('popstate', () => {
    reportView(visitorId, config)
  })
  const originalPushState = history.pushState
  history.pushState = function (...args: Parameters<History['pushState']>) {
    originalPushState.apply(this, args)
    reportView(visitorId, config)
  }
  const originalReplaceState = history.replaceState
  history.replaceState = function (...args: Parameters<History['replaceState']>) {
    originalReplaceState.apply(this, args)
    reportView(visitorId, config)
  }
}
