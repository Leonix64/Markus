import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TokenService } from 'src/app/services/token.service';
import { TabsService } from 'src/app/services/tabs.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  tabs: any[] = [];
  username: string = '';

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private menu: MenuController,
    private tabsService: TabsService,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.loadTabs();
    this.loadUserName();
  }

  loadTabs() {
    this.tabsService.getTabs().subscribe(
      response => {
        this.tabs = response.tabs;
        console.log('Tabs', this.tabs);
      },
      error => {
        console.error('Error loading tabs', error);
      }
    );
  }

  loadUserName() {
    this.profileService.getProfile().forEach(
      profile => {
        this.username = profile.username;
      }
    )
  }

  closeMenu() {
    return this.menu.close('start');
  }

  logout() {
    this.tokenService.clearAll();
    this.closeMenu().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
