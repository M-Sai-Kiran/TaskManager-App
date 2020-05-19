import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from '../custom-validators.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private customValidatorService:CustomValidatorsService) { }
  signUpForm:FormGroup;
  ngOnInit(): void {
    // this.signUpForm = new FormGroup({
    //   name : new FormControl(null),
    //   email : new FormControl(null),
    //   password : new FormControl(null),
    //   confirmPassword : new FormControl(null),
    //   gender : new FormControl(null),
    //   recieveNewsLetters : new FormControl(null)
    // })
    this.signUpForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.minLength(3)]],
      email:[null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+[._]*[a-zA-Z0-9]*[@.][a-zA-Z]+$/)]],
      password:[null,[Validators.min(8),Validators.maxLength(50),this.validatePassword]],
      confirmPassword:[null,[Validators.required]],
      gender:[null,Validators.required],
      recieveNewsLetters:null
    },
    {
      validators:[this.customValidatorService.compareValidator('confirmPassword','password')]
    })
  }

  validatePassword(c:FormControl){
    let patternfornum = /[0-9]+/;
    let patternforcaps =  /[A-Z]+/;

    if(!patternfornum.test(c.value)) return {passwordInvalid:'Password should contain numbers' };
    else if(!patternforcaps.test(c.value)) return {passwordInvalid:'Password should contain atleast one Capital letter.'}
    else return null;
  }


  onSubmitClick(){
    this.signUpForm["submitted"]= true;
    alert('submitted')
  }

}
