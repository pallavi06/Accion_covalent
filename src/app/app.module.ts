import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentLoadingModule } from '@covalent/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentExpansionPanelModule, TdMediaService } from '@covalent/core';
import {MatInputModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {MdCardModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentLoadingModule,
    FormsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentDynamicFormsModule,
    MdCardModule,
    MdListModule
  ],
  providers: [TdMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
