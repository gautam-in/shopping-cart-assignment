import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class HttpConfigInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('loginToken');
        let requestWithHeaders = request.clone({
            headers: request.headers.set('Content-Type', 'application/json')
        });

        return next.handle(requestWithHeaders).pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })
        );
    }
}

