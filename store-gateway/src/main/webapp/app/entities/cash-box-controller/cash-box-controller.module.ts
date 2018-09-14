import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreSharedModule } from '../../shared';
import {
    CashBoxControllerService,
    CashBoxControllerPopupService,
    CashBoxControllerComponent,
    CashBoxControllerDetailComponent,
    CashBoxControllerDialogComponent,
    CashBoxControllerPopupComponent,
    CashBoxControllerDeletePopupComponent,
    CashBoxControllerDeleteDialogComponent,
    cashBoxControllerRoute,
    cashBoxControllerPopupRoute,
} from './';

const ENTITY_STATES = [
    ...cashBoxControllerRoute,
    ...cashBoxControllerPopupRoute,
];

@NgModule({
    imports: [
        StoreSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CashBoxControllerComponent,
        CashBoxControllerDetailComponent,
        CashBoxControllerDialogComponent,
        CashBoxControllerDeleteDialogComponent,
        CashBoxControllerPopupComponent,
        CashBoxControllerDeletePopupComponent,
    ],
    entryComponents: [
        CashBoxControllerComponent,
        CashBoxControllerDialogComponent,
        CashBoxControllerPopupComponent,
        CashBoxControllerDeleteDialogComponent,
        CashBoxControllerDeletePopupComponent,
    ],
    providers: [
        CashBoxControllerService,
        CashBoxControllerPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreCashBoxControllerModule {}
