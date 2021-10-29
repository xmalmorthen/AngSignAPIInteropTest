import { Component, OnDestroy, OnInit } from '@angular/core';
import { infoModule } from './interfaces/signAPIInterop.interfaces';
import { SignAPIInteropService } from './services/sign-apiinterop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'signAPIInterop';

  public acconutInfo: infoModule.RootObject | null = null;

  constructor(
    public signAPIInteropService: SignAPIInteropService
  ) {
    
  }

  async ngOnInit() {

    this.acconutInfo = await this.signAPIInteropService.getAccountInfo() as infoModule.RootObject;

  }
  
  ngOnDestroy(): void {
  }


}
