import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from './http.service';
import { UserLogin } from './login/login.interface';
import { UtilityService } from './utility.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'frontend';

    constructor(public utility: UtilityService, private http: HttpService, private router: Router) { }

    ngOnInit() {
        const sub = this.http.get<UserLogin>("login").pipe(finalize(() => {
            if (sub?.unsubscribe) {
                sub.unsubscribe();
            }
        })).subscribe(data => {
            if (data.status == 'error') {
                this.router.navigate(['login']);
            } else {
                this.utility.setUser(data.user);
            }
        });
    }
}
