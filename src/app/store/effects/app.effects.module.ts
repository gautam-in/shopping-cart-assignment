import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/core/store/effects/auth.effects';
import { CartEffects } from 'src/app/shared/store/effects/cart.effects';
import { BannerEffects } from '../../modules/home/store/effects/banner.effects';
import { CategoryEffects } from '../../modules/home/store/effects/category.effects';
import { ProductEffects } from '../../modules/product/store/effects/product.effects';

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
