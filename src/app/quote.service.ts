import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class QuoteService {
    constructor(private http: Http, private authService: AuthService) {

    }

    addQuote(content: string) {
        const token = this.authService.getToken();
        const body = JSON.stringify({ content: content });
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8000/api/quote?token=' +token, body, { headers: headers });
    }
    
    getQuotes(): Observable<any> {
        return this.http.get('http://localhost:8000/api/quotes')
            .map(
                (response: Response) => {
                    console.log("response,.,,");
                    console.log(response);
                    return response.json().quotes;
                }
            );
    }

    updateQuote(id: number, newContent: string) {
        const token = this.authService.getToken();
        const body = JSON.stringify({ content: newContent });
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8000/api/quote/' + id +'/token='+token, body, { headers: headers })
            .map(
                (response: Response) => response.json()
            );
    }

    deleteQuote(id: number) {
        return this.http.delete('http://localhost:8000/api/quote/' + id);
    }

}