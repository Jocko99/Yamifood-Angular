import { reduct } from './../../animations/reduction';
import { IReservation } from './../../interfaces/IReservation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  animations: [
    reduct
  ]
})
export class ReservationComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { 
  }
  public form!: FormGroup

  public people: any[] = [
    {
      value: 0,
      title: "Broj osoba*"
    },
    {
      value: 1,
      title: "1"
    },
    {
      value: 2,
      title: "2"
    },
    {
      value: 3,
      title: "3"
    },
    {
      value: 4,
      title: "4"
    },
    {
      value: 5,
      title: "5"
    },
    {
      value: 6,
      title: "6"
    }
  ];


  initialization(){
    this.form = this.formBuilder.group({
    date: this.formBuilder.control("",[Validators.required]),
    time: this.formBuilder.control("",[Validators.required]),
    peopleNum: this.formBuilder.control("0",[Validators.required,Validators.min(1)]),
    firstName: this.formBuilder.control("",[Validators.required]),
    lastName: this.formBuilder.control("",[Validators.required]),
    phoneNumber: this.formBuilder.control("",[Validators.required,Validators.pattern("^[0-9]{9,10}$")])
    });
  }

    send(){
      if(this.form.valid){
        let data = this.prepareForSend();
        console.log(data)
        alert("Rezervacija je poslata. Podaci u konzoli.");
        this.initialization();
      }else{
        alert("Nisu svi podaci validni");
      }
    }

    prepareForSend(){
      let formData: IReservation = this.form.getRawValue();
      let data: IReservation = {
        date : formData.date,
        time : formData.time,
        peopleNum : formData.peopleNum,
        firstName : formData.firstName,
        lastName : formData.lastName,
        phoneNumber : formData.phoneNumber
      };
      return data;
    }

  ngOnInit(): void {
    this.initialization();
  }

}

