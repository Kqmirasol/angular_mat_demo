import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';


@Component({
  selector: 'app-register',
  imports: [ FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule, MatSliderModule, MatSlideToggleModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatIcon , CommonModule, MatRippleModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;
  acceptTerms = false;




  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),  
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),
    acceptTerms: new FormControl(false, Validators.requiredTrue)

  });

  onClickSubmit(data: {
    userName: string;
    email: string;
    password: string;
    gender: string;
    birthDate: Date;
    address: string;
    angularSkillLevel: number;
    acceptTerms: boolean;
  })
  {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.angularSkillLevel = data.angularSkillLevel;
    this.birthDate = data.birthDate;

    if (this.formdata.valid) {
      console.log('Form Submitted!', this.formdata.value);
    } else {
      console.log('Form is not valid!');
    }
  }

  clickEvent(event: Event): void {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  hidePassword: boolean = true;
  hide(): boolean {
    return this.hidePassword;
  }


  alertFormValues(formdata: any) {
    alert(JSON.stringify(formdata.value));
  }
}
