import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizService } from './quiz.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fp-pyjs';
  isSidebarActive = false;
  selectedLessonId: string = 'home';
  siteTitle = 'Functional Programming Guide';

  menuItems = [
    { id: 'home', name: 'Home / Overview', url: 'lessons' },
    { id: '1', name: 'Lesson 1: What is FP?', url: 'les1', quiz: 'quiz/1' },
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

  constructor(private router: Router, public quizService: QuizService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      const lessonMatch = url.match(/\/les(\d+)/);
      const quizMatch = url.match(/\/quiz\/(\d+)/);
      if (lessonMatch) {
        this.selectedLessonId = lessonMatch[1];
      } else if (quizMatch) {
        this.selectedLessonId = quizMatch[1];
      } else if (url.includes('/lessons')) {
        this.selectedLessonId = 'home';
      }
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('participant') != null;
  }

  getUserName(): string {
    return this.quizService.getParticipantName();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/register']);
  }

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

  getCurrentStep() {
    const url = this.router.url;
    if (url.includes('/lessons')) {
      return { type: 'home', num: 0, index: 0 };
    }
    let match = url.match(/\/les(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      return { type: 'lesson', num, index: (num - 1) * 2 + 1 };
    }
    match = url.match(/\/quiz\/(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      return { type: 'quiz', num, index: (num - 1) * 2 + 2 };
    }
    return null;
  }

  getStepUrl(index: number): string {
    if (index === 0) return 'lessons';
    const num = Math.floor((index - 1) / 2) + 1;
    const subStep = (index - 1) % 2;
    if (subStep === 0) return `les${num}`;
    return `quiz/${num}`;
  }

  hasPreviousStep(): boolean {
    const step = this.getCurrentStep();
    return step !== null && step.index > 0;
  }

  hasNextStep(): boolean {
    const step = this.getCurrentStep();
    return step !== null && step.index < 20; // 0 (home) + 10 lessons * 2 steps (lesson page + quiz page) = 20 max index
  }

  goToPreviousStep(): void {
    const step = this.getCurrentStep();
    if (step && this.hasPreviousStep()) {
      const prevUrl = this.getStepUrl(step.index - 1);
      const prevLessonId = step.index - 1 === 0 ? 'home' : (Math.floor((step.index - 2) / 2) + 1).toString();
      this.selectedLessonId = prevLessonId;
      this.router.navigate([prevUrl]);
    }
  }

  goToNextStep(): void {
    const step = this.getCurrentStep();
    if (step && this.hasNextStep()) {
      const nextUrl = this.getStepUrl(step.index + 1);
      const nextLessonId = (Math.floor(step.index / 2) + 1).toString();
      this.selectedLessonId = nextLessonId;
      this.router.navigate([nextUrl]);
    }
  }

  getPreviousButtonText(): string {
    const step = this.getCurrentStep();
    if (!step) return 'Previous';
    if (step.type === 'lesson') {
      return step.num === 1 ? 'Back to Home' : 'Back to Quiz';
    }
    if (step.type === 'quiz') return 'Back to Lesson';
    return 'Previous';
  }

  getNextButtonText(): string {
    const step = this.getCurrentStep();
    if (!step) return 'Next';
    if (step.type === 'home') return 'Start Lesson 1';
    if (step.type === 'lesson') return 'Go to Quiz';
    if (step.type === 'quiz') return 'Next Lesson';
    return 'Next';
  }

  getStepIndicatorText(): string {
    const step = this.getCurrentStep();
    if (!step) return '';
    if (step.type === 'home') return 'Home / Overview';
    const typeLabel = step.type === 'lesson' ? 'Content' : 'Quiz';
    return `Lesson ${step.num} of 10: ${typeLabel}`;
  }
}
