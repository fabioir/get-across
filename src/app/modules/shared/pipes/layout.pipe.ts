import { Pipe, PipeTransform } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutPipeEnum } from './layout.model';

@Pipe({
  name: 'layout'
})
export class LayoutPipe implements PipeTransform {
  constructor(private breakpointObserver: BreakpointObserver) {}

  transform(value: string): Observable<boolean> {
    switch (value) {
      case LayoutPipeEnum.HANDSET:
        return this.breakpointObserver
          .observe(Breakpoints.Handset)
          .pipe(map((breakpointState) => breakpointState.matches));
      case LayoutPipeEnum.WEB:
        return this.breakpointObserver.observe(Breakpoints.Web).pipe(map((breakpointState) => breakpointState.matches));
      default:
        return null;
    }
  }
}
