import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlibButtonBasicExampleComponent } from './basic/basic.component';
import { AlibButtonAdvanceExampleComponent } from './advance/advance.component';
import { AlibButtonModule } from 'a-lib/button';

@NgModule({
    declarations: [AlibButtonBasicExampleComponent, AlibButtonBasicExampleComponent],
    imports: [CommonModule, AlibButtonModule],
    exports: [AlibButtonAdvanceExampleComponent, AlibButtonAdvanceExampleComponent],
    providers: []
})
export class AlibFooExamplesModule {}