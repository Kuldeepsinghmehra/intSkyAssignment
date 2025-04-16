import { Component } from '@angular/core';
import { RemainderService } from 'src/app/Service/remainder.service';
@Component({
  selector: 'app-remainder-list',
  templateUrl: './remainder-list.component.html',
  styleUrls: ['./remainder-list.component.css']
})
export class RemainderListComponent {
  reminders$ = this.reminderService.reminders$;

  constructor(private reminderService: RemainderService) {}

}
