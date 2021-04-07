import {Actions,Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import {  catchError, map, switchMap} from 'rxjs/operators';
import { BackendInteractionService } from './backend-interaction.service';
import { Category } from './model/category.model';
import * as productActions from './products/productions-actions';
import * as productActionsTypes from './products/product-actions-types'
import * as authActions from './auth/auth.actions'
import { Injectable } from '@angular/core';

@Injectable()
export class AppEffect{
    @Effect()
    fetchCategories = this.actions$.pipe(ofType(productActionsTypes.FETCH_CATEGORIES),
            switchMap(() => {
                return this.dataService.getCategories()
            }),
            map((items: Category[]) => {
                return new productActions.AddCategories(items)
            }),
            catchError((error)=> of(1,2,3))
    );
    
    constructor(private actions$:Actions,private dataService:BackendInteractionService){

    }
}