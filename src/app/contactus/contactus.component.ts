import { Component } from '@angular/core';
import { FromsdataService } from '../servicess/fromsdata.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  users: any;
  result: any;
  constructor(private userData: FromsdataService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }
  ngOnInit() {
    window.scroll(0, 500)
  }
  onSubmit(contactsForm :NgForm) {
    this.userData.saveusers(contactsForm.value).subscribe((result) => {
      console.warn(result)
      contactsForm.reset();
    })
  }
}
