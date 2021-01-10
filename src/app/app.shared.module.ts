import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonButtonComponent } from './shared/components/common-button/common-button.component';
import { ParagraphComponent } from './shared/components/paragraph/paragraph.component';
import { HeadingComponent } from './shared/components/heading/heading.component';
import { FigureComponent } from './shared/components/figure/figure.component';
import { SkipToMainComponent } from './shared/components/skip-to-main/skip-to-main.component';
import { RouterUrlService } from './shared/services/routerUrl.service';
import { ErrorComponent } from './core/components/error/error.component';



@NgModule({
    imports: [CommonModule],
    declarations: [
        CommonButtonComponent,
        ParagraphComponent,
        HeadingComponent,
        FigureComponent,
        SkipToMainComponent,
        ErrorComponent
    ],
    exports: [CommonButtonComponent, ParagraphComponent, HeadingComponent, FigureComponent, SkipToMainComponent, ErrorComponent],
    providers: [RouterUrlService]
})
export class SharedModule {

}
