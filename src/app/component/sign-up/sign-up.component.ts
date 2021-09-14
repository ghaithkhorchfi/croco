import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import {confirm} from "src/app/validator/confirm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signUp:FormGroup;
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.signUp=this.formBuilder.group({
      firstName:['',[Validators.minLength(3),Validators.required]],
      lastName:[''],
      email:['',[Validators.email,Validators.required]],
      pwd:[''],
      confirmPwd:['']
      
    },
    {
      validators:confirm('pwd','confirmPwd')
    }
    )
  }
  sign(){
    console.log('user',this.signUp.value);
    this.userService.signUp(this.signUp.value).subscribe();
    

  }

}
