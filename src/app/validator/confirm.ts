import { FormGroup } from "@angular/forms";

export function confirm(pwd:string,cpwd:string){
    return(formGroup:FormGroup)=>
    { const password= formGroup.controls[pwd]
     const confirmPassword= formGroup.controls[cpwd]
     if(password.value!=confirmPassword.value){
         confirmPassword.setErrors({confirm:true});
     }
     else{
        confirmPassword.setErrors({confirm:null});
     }

    }
}