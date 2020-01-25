import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PageNotFoundComponent,
    WebviewDirective,
    SideBarComponent,
    MainPanelComponent],
  imports: [CommonModule,
    HttpClientModule,
    TranslateModule,
    FontAwesomeModule,
    FormsModule],
  exports: [TranslateModule,
    WebviewDirective,
    FormsModule,
    SideBarComponent,
    MainPanelComponent
  ]
})
export class SharedModule { }
