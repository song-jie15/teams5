import { Injectable } from '@nestjs/common';
import { PrismaService, ResponseService } from '@libs/shared';
import type {
  UvDto,
  PerformanceDto,
  PvDto,
  EventDto,
  ErrorDto,
  UpdateUvDto,
} from '@en/common/tracker';

@Injectable()
export class TrackerService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly responseService: ResponseService,
  ) {}

  async uv(body: UvDto) {
    const visitor = await this.prismaService.visitor.upsert({
      where: { anonymousId: body.anonymousId },
      create: {
        anonymousId: body.anonymousId,
        userId: body.userId,
        browser: body.browser,
        os: body.os,
        device: body.device,
      },
      update: {
        userId: body.userId,
        browser: body.browser,
        os: body.os,
        device: body.device,
      },
      select: {
        id: true,
      },
    });
    return this.responseService.success(visitor.id);
  }

  async updateUv(body: UpdateUvDto) {
    await this.prismaService.visitor.update({
      where: { id: body.visitorId },
      data: {
        userId: body.userId,
      },
    });
    return this.responseService.success(true);
  }

  async performance(body: PerformanceDto) {
    await this.prismaService.performanceEntry.create({
      data: {
        visitorId: body.visitorId,
        fp: body.fp,
        fcp: body.fcp,
        lcp: body.lcp,
        inp: body.inp,
        cls: body.cls,
      },
    });
    return this.responseService.success(true);
  }

  async pv(body: PvDto) {
    await this.prismaService.pageView.create({
      data: {
        visitorId: body.visitorId,
        url: body.url,
        referrer: body.referrer,
        path: body.path,
      },
    });
    return this.responseService.success(true);
  }

  async event(body: EventDto) {
    await this.prismaService.trackEvent.create({
      data: {
        visitorId: body.visitorId,
        event: body.event,
        payload: body.payload,
        url: body.url,
      },
    });
    return this.responseService.success(true);
  }

  async error(body: ErrorDto) {
    await this.prismaService.errorEntry.create({
      data: {
        visitorId: body.visitorId,
        error: body.error,
        message: body.message,
        stack: body.stack,
        url: body.url,
      },
    });
    return this.responseService.success(true);
  }

  async stats() {
    const [uv, pv, event, error, performance, eventTypes, topPaths] = await Promise.all([
      this.prismaService.visitor.count(),
      this.prismaService.pageView.count(),
      this.prismaService.trackEvent.count(),
      this.prismaService.errorEntry.count(),
      this.prismaService.performanceEntry.count(),
      this.prismaService.trackEvent.groupBy({
        by: ['event'],
        _count: { event: true },
        orderBy: { _count: { event: 'desc' } },
        take: 10,
      }),
      this.prismaService.pageView.groupBy({
        by: ['path'],
        _count: { path: true },
        orderBy: { _count: { path: 'desc' } },
        take: 10,
      }),
    ]);

    return this.responseService.success({
      uv,
      pv,
      event,
      error,
      performance,
      eventTypes: eventTypes.map((item) => ({
        event: item.event,
        count: item._count.event,
      })),
      topPaths: topPaths.map((item) => ({
        path: item.path,
        count: item._count.path,
      })),
    });
  }
}
