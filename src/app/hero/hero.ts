import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-hero',
  imports : [RouterModule],
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  roles = ['Full Stack Developer', 'Angular Developer', 'Problem Solver'];
  currentRole = '';
  index = 0;
  charIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const role = this.roles[this.index];

    if (this.charIndex < role.length) {
      this.currentRole += role.charAt(this.charIndex);
      this.charIndex++;

      setTimeout(() => {
        this.typeEffect();
        this.cdr.detectChanges(); // 👈 NOW it's useful
      }, 100);

    } else {
      setTimeout(() => {
        this.currentRole = '';
        this.charIndex = 0;
        this.index = (this.index + 1) % this.roles.length;
        this.typeEffect();
      }, 1500);
    }
  }
}