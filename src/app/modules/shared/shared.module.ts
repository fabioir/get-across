import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';

import { LayoutPipe } from './pipes/layout.pipe';

export * from './pipes/layout.model';
export * from './pipes/layout.pipe';

@NgModule({
  declarations: [LayoutPipe],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutPipe]
})
export class SharedModule {}
