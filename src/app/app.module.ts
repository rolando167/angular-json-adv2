import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoDetailsComponent } from './pages/producto-details/producto-details.component';
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ProductosComponent,
    UsuariosComponent,
    ProductoDetailsComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
