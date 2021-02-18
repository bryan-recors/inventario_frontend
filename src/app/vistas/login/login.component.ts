import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import{ApiService} from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new FormGroup({
    email: new FormControl ('', Validators.required),
    password:new FormControl ('', Validators.required)
  })
  
  constructor(private activerouter:ActivatedRoute, 
    private router:Router, 
    private api:ApiService) { }

  
  ngOnInit(): void {
  }
  
  onLogin(form:UserInterface){
    this.api.loginuser(form).subscribe(data => {
      console.log(data)
      localStorage.setItem("token", data.status)
      this.router.navigate(['/'])
    })
  }

}