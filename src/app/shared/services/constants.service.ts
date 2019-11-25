import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService{
    readonly baseAppUrl: string = 'http://localhost:3000/';
    readonly VALID_EMAIL: RegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    readonly VALID_PASSWORD : RegExp = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
}