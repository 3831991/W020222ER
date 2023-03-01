import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UtilityService } from './utility.service';
import { finalize } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly url = environment.apiUrl;
    private readonly options = { withCredentials: true };

    get<T>(path: string) {
        setTimeout(() => {
            this.utility.loader(true);
        });

        return this.httpClient.get<T>(`${this.url}/${path}`, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    post<T>(path: string, body: any) {
        this.utility.loader(true);

        return this.httpClient.post<T>(`${this.url}/${path}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    put<T>(path: string, body: any) {
        this.utility.loader(true);

        return this.httpClient.put<T>(`${this.url}/${path}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    delete<T>(path: string) {
        this.utility.loader(true);

        return this.httpClient.delete<T>(`${this.url}/${path}`, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }

    constructor(private httpClient: HttpClient, private utility: UtilityService) {

    }

}
