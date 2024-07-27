import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.scss'],
})
export class ListProfileComponent  implements OnInit {

  profile: any;

  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe(
      response => {
        console.log('Profile', response);
        this.profile = response;
      },
      err => {
        console.error('Error fetching profile', err);
      }
    );
  }

  goToEdit() {
    this.router.navigate(['/edit-profile']);
  }
}
