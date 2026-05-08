import type { TrackerConfig } from '@en/common/tracker'
import { getFingerprint } from './src/uv'
import { reportEvent } from './src/event'
import { reportError } from './src/error'
import { reportPv } from './src/pv'
import { reportPerformance } from './src/performance'
import { reportFetch } from './src/report'

export class Tracker {
  private config: TrackerConfig
  private visitorId: string | null = null
  private initPromise: Promise<void> | null = null

  constructor(config: TrackerConfig) {
    this.config = config
    void this.init()
  }

  protected async init() {
    if (this.initPromise) return this.initPromise
    this.initPromise = (async () => {
      try {
        this.visitorId = await getFingerprint(this.config)
        reportEvent(this.visitorId, this.config)
        reportError(this.visitorId, this.config)
        reportPv(this.visitorId, this.config)
        await reportPerformance(this.visitorId, this.config)
      } catch (e) {
        console.error('[tracker] init failed', e)
      }
    })()
    return this.initPromise
  }

  public async setUserId(userId: string) {
    await this.init()
    if (!this.visitorId) return
    const url = this.config.baseUrl + this.config.uv.updateApi
    await reportFetch(url, {
      visitorId: this.visitorId,
      userId,
    })
  }

  public getVisitorId() {
    return this.visitorId
  }
}

export { reportFetch } from './src/report'
export { getFingerprint } from './src/uv'
