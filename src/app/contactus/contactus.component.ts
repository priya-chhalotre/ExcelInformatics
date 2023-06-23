import { Component } from '@angular/core';
import { FromsdataService } from '../servicess/fromsdata.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Form, FormBuilder} from '@angular/forms';

export interface formdata{
  name:"",email:"",message:""
};

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent {
  users: any;
  result: any;
  form!:Form
  formData:any


  constructor(private userData: FromsdataService, private http: HttpClient, private _fb: FormBuilder) {
    // this.userData.users().subscribe((data) => {
    //   this.users = data;
    // })
    this.formData = this._fb.group({
      name: '',
      email: '',
      message: '',
    })
  }
  ngOnInit() {
    window.scroll(0, 500)
  }
  // onSubmit(contactsForm: NgForm) {
  //   this.userData.saveusers(contactsForm.value).subscribe((result) => {
  //     console.warn(result)
  //     contactsForm.reset();
  //   })
  // }

  onSubmit() {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLScBOLxG9QkQq6nPNGvTmM_NJnIrhABnQ_g4hZW2KU0mGf2cbQ/viewform';
    const payload:any = {
      'entry.92369453': this.formData.controls['name'].value,
      'entry.1256401393': this.formData.controls['email'].value,
      'entry.965965243': 'laptop service issue',
      'entry.627288758': '601,sai capital sb road, pune',
      'entry.2063218993': '7024501645',
      'entry.1217940549': this.formData.controls['message'].value,
    };
    console.log(payload)
    const params=new HttpParams().set('submit','Submit').set('draftResponse',"").set('pageHistory','0').set('1FAIpQLScBOLxG9QkQq6nPNGvTmM_NJnIrhABnQ_g4hZW2KU0mGf2cbQ','');
    this.userData.submitForm(url,payload).subscribe(()=>{
      this.formData={name:"",email:"",message:""}
    })

 
    // this.http.post(url,payload).subscribe(
    //   response=>console.log(response,'response'),
    //   error=>console.log(error,'error')
    // )
}
}