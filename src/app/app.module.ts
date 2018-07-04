import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

//routes
import { routes } from './app.routes';

//providers
import { EntityService } from './services/entity.service';
import { Auth } from './auth/auth';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SignUpComponent } from './usuario/sign-up/sign-up.component';
import { SignInComponent } from './usuario/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    HttpModule
  ],
  providers: [
    EntityService,
    Auth , 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }	