import { Component } from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
    selector: 'login',
    templateUrl:'./login.component.html'
}) 

export class LoginComponent{
    form = new FormGroup ({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        value3: new FormControl('', Validators.required)
    });
}
