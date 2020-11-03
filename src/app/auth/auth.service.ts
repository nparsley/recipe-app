import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


interface AuthResponseData {
    idToken: string;
    email: string;	
    refreshToken: string;	
    expiresIn: string;	
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmK3iX6PiX4-nyLm83YbSlokaWp-q3NW0',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(errorRes => {
                let errorMessage = 'An unknown error occured!';
                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage);
                }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = 'This email exists already';
                }
                return throwError(errorMessage);
        }));
    }
}