import type { PerformanceDto, TrackerConfig } from '@en/common/tracker'
import { onINP, onCLS } from 'web-vitals'
import { reportFetch } from '../report'

export const reportPerformance = async (visitorId: string, config: TrackerConfig) => {
  let fp = 0
  let fcp = 0
  let inp = 0
  let cls = 0
  let lcp = 0
  const performanceEntries = performance.getEntriesByType('paint')
  const fpEntry = performanceEntries.find((entry) => entry.name === 'first-paint')
  const fcpEntry = performanceEntries.find((entry) => entry.name === 'first-contentful-paint')
  if (fpEntry) {
    fp = fpEntry.startTime
  }
  if (fcpEntry) {
    fcp = fcpEntry.startTime
  }
  let lcpObserver: PerformanceObserver | null = null
  const lcpPromise = new Promise<number>((resolve) => {
    let settled = false
    const done = (v: number) => {
      if (settled) return
      settled = true
      lcpObserver?.disconnect()
      resolve(v)
    }
    lcpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        done(entry.startTime)
      }
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
    setTimeout(() => done(lcp), 3000)
  })
  lcp = await lcpPromise

  onINP(
    (metric) => {
      inp = metric.value
    },
    { reportAllChanges: true },
  )
  onCLS(
    (metric) => {
      cls = metric.value
    },
    { reportAllChanges: true },
  )

  const flush = () => {
    const body: PerformanceDto = {
      visitorId,
      fp,
      fcp,
      lcp,
      inp,
      cls,
    }
    void reportFetch(config.baseUrl + config.performance.api, body)
  }

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flush()
    }
  })
  window.addEventListener('pagehide', flush, { once: true })
}
