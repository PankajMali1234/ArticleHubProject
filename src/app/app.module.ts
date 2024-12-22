import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-Modules';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutComponent } from './admin/layout/layout.component';
import { ConfirmationComponent } from './admin/dialog/confirmation/confirmation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';


const ngxUiLoaderConfig:NgxUiLoaderConfig ={
  text:"Loading....",
  textColor:"white",
  textPosition:"center-center",
  pbColor:"white",
  bgsColor:"white",
  fgsColor:"white",
  fgsType:SPINNER.ballSpinClockwise,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,   
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
