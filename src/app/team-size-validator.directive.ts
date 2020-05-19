import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appTeamSizeValidator]',
  providers:[{provide:NG_VALIDATORS,useExisting:TeamSizeValidatorDirective,multi:true}]
})
export class TeamSizeValidatorDirective implements Validator{

  constructor() { }

  //@Input('appTeamSizeValidator') teamDiv:number;

  validate(abstractControl:AbstractControl):ValidationErrors|null{
    console.log("vacha");
      let isValid:boolean = abstractControl.value%2 == 0;
      if(isValid) return null;
      else{
        return {divisible:{valid:false}};
      }
  }

}
