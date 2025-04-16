import { Component } from '@angular/core';
import { RemainderService } from 'src/app/Service/remainder.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-remainder',
  templateUrl: './add-remainder.component.html',
  styleUrls: ['./add-remainder.component.css']
})
export class AddRemainderComponent {
  title = '';
  time = '';
  toastMessage=''

  constructor(private reminderService: RemainderService,private toasterMessage:ToastrService) {}

  addReminder() {
    if (this.title && this.time) {
      this.reminderService.addReminder(this.title, this.time);
      this.title = '';
      this.time = '';
      this.toasterMessage.success("Reminder added successfully!", "Success");
    } else {
      this.toasterMessage.warning("Please Enter Both Title and Time", "Warning");
    }
  }
}
