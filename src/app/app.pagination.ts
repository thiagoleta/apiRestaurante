import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [NgxPaginationModule],
    exports: [NgxPaginationModule]
})

export class AppPaginationModule {}