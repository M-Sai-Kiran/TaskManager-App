import { Injectable } from '@angular/core';
import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  public compareValidator(controlToValidate:string,controlToCompare:string):ValidatorFn{
      return (formGroup:FormGroup):ValidationErrors|null=>{
        if(!formGroup.get(controlToValidate)) return null; //return null if confirmPassword is null

        if(formGroup.get(controlToValidate).value != formGroup.get(controlToCompare).value){
          formGroup.get(controlToValidate).setErrors({compareValidator:{valid:false}}) ;
          return {compareValidator:{valid:false}};
        } 
        else return null;

      }
  }
}
