import { Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { Lessons1Component } from './features/lessons/lessons1/lessons1.component';
import { Lessons2Component } from './features/lessons/lessons2/lessons2.component';
import { Lesson3Component } from './features/lessons/lessons3/lesson3.component';
import { Lesson4Component } from './features/lessons/lessons4/lesson4.component';
import { HomeComponent } from './features/home/home.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { Lessons5Component } from './features/lessons/lessons5/lessons5.component';
import { Lessons8Component } from './features/lessons/lessons8/lessons8.component';
import { Lessons9Component } from './features/lessons/lessons9/lessons9.component';
import { Lessons10Component } from './features/lessons/lessons10/lessons10.component';
import { Lessons6Component } from './features/lessons/lessons6/lessons6.component';
import { Lessons7Component } from './features/lessons/lessons7/lessons7.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { RegisterComponent } from './features/register/register.component';
import { AuthGuard } from './features/auth/auth.guard';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'lessons', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'lessons', component: LessonsComponent },
            { path: 'les1', component: Lessons1Component },
            { path: 'les2', component: Lessons2Component },
            { path: 'les3', component: Lesson3Component },
            { path: 'les4', component: Lesson4Component },
            { path: 'les5', component: Lessons5Component },
            { path: 'les6', component: Lessons6Component },
            { path: 'les7', component: Lessons7Component },
            { path: 'les8', component: Lessons8Component },
            { path: 'les9', component: Lessons9Component },
            { path: 'les10', component: Lessons10Component },
            { path: 'quiz/:lessonId', component: QuizComponent },
            { path: 'quiz-list', component: QuizListComponent }
        ]
    }
];
