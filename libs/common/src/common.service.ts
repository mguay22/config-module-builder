import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { MODULE_OPTIONS_TOKEN } from './common.module-definition';
import { CommonModuleOptions } from './common-module-options.interface';

@Injectable()
export class CommonService implements OnModuleInit {
  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private readonly options: CommonModuleOptions,
  ) {}

  onModuleInit() {
    setInterval(async () => {
      const res = await fetch(this.options.url);
      const parsedRes = await res.text();
      console.log(parsedRes);
    }, 1000);
  }
}
