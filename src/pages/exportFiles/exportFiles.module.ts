import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ExportFilesPage } from './exportFiles';

@NgModule({
  declarations: [
    ExportFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExportFilesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ExportFilesPage
  ]
})
export class ExportFilesPageModule { }
