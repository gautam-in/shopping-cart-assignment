import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, } from 'rxjs/operators';
import { BackendInteractionService } from '../../services/backend-interaction.service';
import { Category } from '../../models/category.model';
import * as productActions from './../actions/product.actions';
import * as productActionsTypes from '../actions/cart.actions.types'
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppEffect {
    @Effect()
    fetchCategories = createEffect(() => {
        return this.actions$.pipe(ofType(productActionsTypes.FETCH_CATEGORIES),
            switchMap(() => {
                return this.dataService.getCategories();
            }),
            map((items: Category[]) => {
                return new productActions.AddCategories(items);
            }));
    });
    constructor(private actions$: Actions, private dataService: BackendInteractionService, private toastr: ToastrService) {

    }
}