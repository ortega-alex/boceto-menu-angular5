import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//conponent
import { MenuComponent } from "./menu/menu.component"; 
import { Auth } from "./auth/auth";
import { UsuarioComponent } from "./usuario/usuario.component";
import { SignUpComponent } from "./usuario/sign-up/sign-up.component";
import { SignInComponent } from "./usuario/sign-in/sign-in.component";

const appRoutes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
    { path: 'menu', component: MenuComponent,canActivate:[Auth] },
  {
    path: 'signup', component: UsuarioComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UsuarioComponent,
    children: [{ path: '', component: SignInComponent }]
  },
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);