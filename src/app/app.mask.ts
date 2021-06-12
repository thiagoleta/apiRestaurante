import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
    imports: [NgxMaskModule.forRoot()],
    exports: [NgxMaskModule]
})

export class AppMaskModule { }
