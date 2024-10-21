import { Routes } from '@angular/router';
import { SignalEjemplo1Component } from './components/signal-ejemplo1/signal-ejemplo1.component';
import { SignalEjemplo2Component } from './components/signal-ejemplo2/signal-ejemplo2.component';

export const routes: Routes = [
    //se crear el camino p path
    {
        path :'',
        pathMatch:'full', 
        redirectTo: 'signal-ejemplo1'
    },


    // se crea el objeto para la ruta signal ejemplo 2
    {
        path:'signal-ejemplo1',
        component:SignalEjemplo1Component
    },


    {
        path:'signal-ejemplo2',
        component:SignalEjemplo2Component
    },




];
