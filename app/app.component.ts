import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html',
  styleUrls: ['app/css/apps.css']
})
export class AppComponent implements OnInit { 

userForm: FormGroup;

public showDetail = false

constructor(private _formBuilder: FormBuilder) {}

ngOnInit(){
  this.userForm = this._formBuilder.group({
    firstname:['Bola', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastname:['Agbaje', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    
    email: [null,[Validators.pattern('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$')]],
    address:this._formBuilder.group({
      street: [],
      city: [],
      postalcode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
    })
  })
}

  onSelect() {
    this.showDetail = true
  }

  onSubmit(){
    console.log(this.userForm.value);    
  }
}
