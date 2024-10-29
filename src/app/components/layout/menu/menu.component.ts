import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink:'/'
            
          },
         
          {
              label: 'Ejemplos',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Ejemplo 1',
                      icon: 'pi pi-bolt',
                      routerLink:'signal-ejemplo1'
                  },
                  {
                      label: 'Ejemplo 2',
                      icon: 'pi pi-server',
                      routerLink:'signal-ejemplo2'

                  },
                  {
                      label: 'Ejemplo3',
                      icon: 'pi pi-pencil',
                      routerLink:'signal-ejemplo3'
                  },

                  {
                    label: 'Ejemplo4',
                    icon: 'pi pi-pencil',
                    routerLink:'signal-ejemplo4'
                },
                  //anidameinto en manu//
                  /*{
                      label: 'Templates',
                      icon: 'pi pi-palette',
                      items: [
                          {
                              label: 'Apollo',
                              icon: 'pi pi-palette'
                          },
                          {
                              label: 'Ultima',
                              icon: 'pi pi-palette'
                          
                      ]
                  }*/
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope'
          }
      ]
  }

}


