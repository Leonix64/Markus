import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TokenService } from 'src/app/services/token.service';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  tabs: any[] = [];  // Cambia el tipo a 'any[]' para adaptarse a la estructura de las pestañas

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private menu: MenuController,
    private tabsService: TabsService,
  ) { }

  ngOnInit() {
    this.loadTabs();
  }

  loadTabs() {
    this.tabsService.getTabs().subscribe(
      response => {
        this.tabs = response.tabs;
        console.log('Tabs', this.tabs);
      }
    );
  }

  closeMenu() {
    return this.menu.close('start');
  }

  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeRole();
    this.closeMenu().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
