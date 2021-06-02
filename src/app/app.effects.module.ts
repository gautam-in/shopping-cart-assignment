import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { CartEffects } from './cart/store/cart.effects';
import { BannerEffects } from './home/store/banner.effects';
import { CategoryEffects } from './home/store/category.effects';
import { ProductEffects } from './product/store/product.effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      AuthEffects,
      BannerEffects,
      CategoryEffects,
      ProductEffects,
      CartEffects,
    ]),
  ],
  exports: [EffectsModule],
})
export class AppEffectModule {}
