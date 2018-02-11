import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent,TChangeCell } from './table.component';
import { TableModel } from './table.model';

export { TableComponent } ;
export { TableModel } ;

@NgModule({
  declarations: [
    TableComponent,
    TChangeCell,
  ],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class TableModule {}