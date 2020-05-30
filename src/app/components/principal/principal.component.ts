import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSidenav, MatDrawerMode } from '@angular/material/sidenav';
import { HeaderService } from 'src/app/header.service';
import { Subscription } from 'rxjs';
import { LayoutPipe } from 'src/app/modules/shared/pipes/layout.pipe';
import { LayoutPipeEnum } from '@get-across-app/shared';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  @ViewChild('getAcrossSidenav') getAcrossSidenav: MatSidenav;

  constructor(private headerService: HeaderService, private layoutPipe: LayoutPipe) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.headerService.subscribeToToggleSidenav().subscribe(() => this.getAcrossSidenav.toggle())
    );
    this.subscriptions.add(
      this.layoutPipe.transform(LayoutPipeEnum.HANDSET).subscribe((handset) => {
        if (this.getAcrossSidenav) {
          const newMode: MatDrawerMode = handset ? 'over' : 'side';
          this.getAcrossSidenav.mode = newMode;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
