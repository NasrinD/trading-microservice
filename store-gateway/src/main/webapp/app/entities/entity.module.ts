import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreStoreModule } from './store/store.module';
import { StoreCashDeskModule } from './cash-desk/cash-desk.module';
import { StoreCashDeskApplicationModule } from './cash-desk-application/cash-desk-application.module';
import { StoreCashDeskGUIModule } from './cash-desk-gui/cash-desk-gui.module';
import { StoreCashBoxModule } from './cash-box/cash-box.module';
import { StoreCashBoxControllerModule } from './cash-box-controller/cash-box-controller.module';
import { StorePrinterModule } from './printer/printer.module';
import { StorePrinterControllerModule } from './printer-controller/printer-controller.module';
import { StoreBarCodeScannerModule } from './bar-code-scanner/bar-code-scanner.module';
import { StoreBarCodeScannerControllerModule } from './bar-code-scanner-controller/bar-code-scanner-controller.module';
import { StoreCardReaderModule } from './card-reader/card-reader.module';
import { StoreCardReaderControllerModule } from './card-reader-controller/card-reader-controller.module';
import { StoreReceiptModule } from './receipt/receipt.module';
import { StoreReceiptItemModule } from './receipt-item/receipt-item.module';
import { StoreBankModule } from './bank/bank.module';
import { StoreCustomerModule } from './customer/customer.module';
import { StoreDebitModule } from './debit/debit.module';
import { StoreInventoryModule } from './inventory/inventory.module';
import { StoreStockItemModule } from './stock-item/stock-item.module';
import { StoreProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        StoreStoreModule,
        StoreCashDeskModule,
        StoreCashDeskApplicationModule,
        StoreCashDeskGUIModule,
        StoreCashBoxModule,
        StoreCashBoxControllerModule,
        StorePrinterModule,
        StorePrinterControllerModule,
        StoreBarCodeScannerModule,
        StoreBarCodeScannerControllerModule,
        StoreCardReaderModule,
        StoreCardReaderControllerModule,
        StoreReceiptModule,
        StoreReceiptItemModule,
        StoreBankModule,
        StoreCustomerModule,
        StoreDebitModule,
        StoreInventoryModule,
        StoreStockItemModule,
        StoreProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreEntityModule {}
