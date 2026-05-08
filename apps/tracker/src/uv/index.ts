import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { UAParser } from 'ua-parser-js'
import type { TrackerConfig, UvDto } from '@en/common/tracker'
import { reportFetch } from '../report'

export async function getFingerprint(config: TrackerConfig): Promise<string> {
  const fp = await FingerprintJS.load()
  const result = await fp.get()
  const parser = new UAParser()
  const body: UvDto = {
    anonymousId: result.visitorId,
    userId: config.userId,
    browser: parser.getBrowser().name ?? 'unknown',
    os: [parser.getOS().name, parser.getOS().version].filter(Boolean).join(' ') || 'unknown',
    device: parser.getDevice().model || parser.getDevice().type || 'desktop',
  }
  const json = await reportFetch(config.baseUrl + config.uv.api, body)
  if (json?.data != null && json.success !== false) {
    return String(json.data)
  }
  throw new Error(json?.message || 'UV 注册失败')
}
