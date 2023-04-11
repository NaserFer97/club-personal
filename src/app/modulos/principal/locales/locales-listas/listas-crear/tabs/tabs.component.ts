import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  tabChanged(event: MatTabChangeEvent): void {
    if (event.index === 0) {
      this.router.navigate(['/listas-crear']);
    } else {
      this.router.navigate(['/listas-beneficios']);
    }
  }

  
}
