import { LayoutPipe } from './layout.pipe';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { LayoutPipeEnum } from './layout.model';

const mockBreakpointState = {
  matches: true
} as BreakpointState;
const mockBreakpointObserver = {
  observe: () => of(mockBreakpointState)
};

describe('LayoutPipe', () => {
  let pipe: LayoutPipe;
  beforeEach(() => {
    pipe = new LayoutPipe((mockBreakpointObserver as any) as BreakpointObserver);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('subscribe to handset layout', () => {
    let result: boolean;
    pipe.transform(LayoutPipeEnum.HANDSET).subscribe((res) => (result = res));
    expect(result).toBeTruthy();
  });
});
