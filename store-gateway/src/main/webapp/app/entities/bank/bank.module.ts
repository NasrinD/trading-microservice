import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../../shared';
import {
    BankService,
    BankPopupService,
    BankComponent,
    BankDetailComponent,
    BankDialogComponent,
    BankPopupComponent,
    BankDeletePopupComponent,
    BankDeleteDialogComponent,
    bankRoute,
    bankPopupRoute,
} from './';

const ENTITY_STATES = [
    ...bankRoute,
    ...bankPopupRoute,
];

@NgModule({
    imports: [
        StoreSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BankComponent,
        BankDetailComponent,
        BankDialogComponent,
        BankDeleteDialogComponent,
        BankPopupComponent,
        BankDeletePopupComponent,
    ],
    entryComponents: [
        BankComponent,
        BankDialogComponent,
        BankPopupComponent,
        BankDeleteDialogComponent,
        BankDeletePopupComponent,
    ],
    providers: [
        BankService,
        BankPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreBankModule {}
