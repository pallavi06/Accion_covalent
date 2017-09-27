import { Component, OnInit } from '@angular/core';
import { TdLoadingService, LoadingType, LoadingMode } from '@covalent/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  overlayStarSyntax: boolean = false;

  overlayDemo: any = {
    name: '',
    description: '',
  };

  constructor(private _loadingService: TdLoadingService) {}

  ngOnInit(): void {
    this._loadingService.register('overlayStarSyntax');
  }

  toggleOverlayStarSyntax(): void {
    if (this.overlayStarSyntax) {
      this._loadingService.register('overlayStarSyntax');
    } else {
      this._loadingService.resolve('overlayStarSyntax');
    }
    this.overlayStarSyntax = !this.overlayStarSyntax;
  }
}
