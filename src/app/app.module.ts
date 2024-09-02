/*Normalmente es recomendable los imports que se ordenaran de esta forma: */

/*Aquí irían primero las importaciones de Javascript - en este caso no hay-*/

/*Segundo las importaciones oficiales de Angular: */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Tercero: las importaciones de librerías de terceros: */
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

/*Por último, las importaciones de nuestro código: */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
  ] /*En los imports siempre van a ir palabras tipo palabraModule*/,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
