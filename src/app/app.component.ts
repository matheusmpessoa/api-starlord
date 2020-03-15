import { Component, OnInit } from '@angular/core';
import { StarlordService } from './starlord.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  messageError: string;
  createReqStarlordService: any;
  responseObj: Array<{}>;

  constructor(
    public starlordService: StarlordService,
  ) { }

  ngOnInit() {
    this.createListStarlord();
  }

  ngOnDestroy() {
    this.createReqStarlordService.unsubscribe();
  }

  createListStarlord() {
    this.createReqStarlordService = this.starlordService.getStarlord()
      .subscribe(
        response => {
          if (response) {
            console.log(response);
            this.responseObj = response;
          }
        },
        error => {
          this.messageError = "Error. Try again";
        }
      )
  }
}
