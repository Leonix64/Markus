import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats-dashboard',
  templateUrl: './stats-dashboard.component.html',
  styleUrls: ['./stats-dashboard.component.scss'],
})
export class StatsDashboardComponent implements OnInit {

  statsData: any | null = null;

  constructor(
    private statsService: StatsService,
  ) { }

  ngOnInit() {
    this.getStats();
  }

  getStats() {
    this.statsService.getStatistics().subscribe(
      (response) => {
        this.statsData = response;
        console.log('Statistics data loaded:', this.statsData);
      },
      (error) => {
        console.error('Error retrieving statistics data:', error);
      }
    );
  }
}
