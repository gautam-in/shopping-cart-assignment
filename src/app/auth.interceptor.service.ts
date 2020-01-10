import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any> ,next:HttpHandler){
        // const modifiedReq = req.clone({
        //     headers: req.headers.append('Auth','xyz')
        // });
        return next.handle(req);
    }
}