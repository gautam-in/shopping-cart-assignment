import {Actions,Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import {  catchError, map, switchMap, tap} from 'rxjs/operators';
import { BackendInteractionService } from './backend-interaction.service';
import { Category } from './model/category.model';
import * as productActions from './products/productions-actions';
import * as productActionsTypes from './products/product-actions-types'
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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

    @Effect({dispatch:false})
    addItems = this.actions$.pipe(
        ofType(productActionsTypes.ADD_CART_ITEMS),
        tap((cartItem:productActions.AddCartItems)=>{
            this.toastr.info(cartItem.payload.name + " added successfully")
        })   
    );
    
    constructor(private actions$:Actions,private dataService:BackendInteractionService,private toastr: ToastrService){

    }
}