import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fp-pyjs';
  isSidebarActive = true;
  selectedLessonId: string = 'home';
  siteTitle = 'Functional Programming Guide';

  menuItems = [
    { id: 'home', name: 'Home / Overview', url: 'lessons' },
    { id: '1', name: 'Lesson 1: What is Functional Programming?', url: 'les1', quiz: 'quiz/1' },
    { id: '2', name: 'Lesson 2: Basic Concepts', url: 'les2', quiz: 'quiz/2' },
    { id: '3', name: 'Lesson 3: Intermediate Concepts', url: 'les3', quiz: 'quiz/3' },
    { id: '4', name: 'Lesson 4: Advanced Concepts', url: 'les4', quiz: 'quiz/4' },
    { id: '5', name: 'Lesson 5: FP in Practice', url: 'les5', quiz: 'quiz/5' },
    { id: '6', name: 'Lesson 6: Real-World Applications', url: 'les6', quiz: 'quiz/6' },
    { id: '7', name: 'Lesson 7: Advanced Topics', url: 'les7', quiz: 'quiz/7' },
    { id: '8', name: 'Lesson 8: Libraries in JS/Python', url: 'les8', quiz: 'quiz/8' },
    { id: '9', name: 'Lesson 9: Case Studies', url: 'les9', quiz: 'quiz/9' },
    { id: '10', name: 'Lesson 10: Final Project', url: 'les10', quiz: 'quiz/10' },
  ];

  constructor(private router: Router) { }

  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  selectLesson(id: string, url: string): void {
    this.selectedLessonId = id;
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }

  navigate(url: string): void {
    this.router.navigate([url]);
    if (window.innerWidth <= 992) {
      this.isSidebarActive = false;
    }
  }
}

