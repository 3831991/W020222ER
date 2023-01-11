import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';
import { User } from './user.interface';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    signupForm = new FormGroup({
        fullName: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email,
        ]),
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(12),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
        ]),
    });

    signup() {
        const sub = this.http.post<User>('signup', this.signupForm.value).pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            this.router.navigate(['/login']);
        });
    }

    constructor(private http: HttpService, private router: Router) { }
}
