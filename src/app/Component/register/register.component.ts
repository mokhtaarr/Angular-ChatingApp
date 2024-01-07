import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any = {}
  @Output() cancelRegister = new EventEmitter();

  constructor(private accontService : AccountService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  register(){
    this.accontService.register(this.model).subscribe({
      next : res =>{
        this.cancel();
      },
      error : error => this.toastr.error(error.error)
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
