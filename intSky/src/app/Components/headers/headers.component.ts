import { RemainderService } from './../../Service/remainder.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  constructor(private reminderService: RemainderService) {}
  liveTime$ = this.reminderService.getLiveTime();
  toggleSpeed() {
   const tooglespped= this.reminderService.toggleSpeed();
   console.log("this is toggle speed",tooglespped)
  }

}
