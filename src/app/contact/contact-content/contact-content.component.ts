import { reduct } from './../../animations/reduction';
import { IContact } from './../../interfaces/IContact';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.css'],
  animations: [
    reduct
  ]
})
export class ContactContentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public contactForm!: FormGroup

  initialization(){
    this.contactForm = this.formBuilder.group({
    firstName: this.formBuilder.control("",[Validators.required]),
    lastName: this.formBuilder.control("",[Validators.required]),
    phoneNumber: this.formBuilder.control("",[Validators.required,Validators.pattern("^[0-9]{9,10}$")]),
    email: this.formBuilder.control("",[Validators.required,Validators.email]),
    title: this.formBuilder.control("",[Validators.required]),
    content: this.formBuilder.control("",[Validators.required,Validators.minLength(5),Validators.maxLength(1000)])
    });
  }

  sendToAdmin(){
    if(this.contactForm.valid){
      let data = this.prepareForSend();
      console.log(data)
      alert("Uspešno ste kontaktirali administratora. Podaci u konzoli.");
      this.initialization();
    }else{
      alert("Nisu svi podaci validni");
    }
  }

  prepareForSend(){
    let formData: IContact = this.contactForm.getRawValue();
    let data: IContact = {
      firstName : formData.firstName,
      lastName : formData.lastName,
      phoneNumber : formData.phoneNumber,
      content : formData.content,
      title : formData.title,
      email : formData.email
    };
    return data;
  }


  ngOnInit(): void {
    this.initialization()
  }

}
