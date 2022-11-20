import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './module/main/main.component';

const routes: Routes = [
{
    path: '', loadChildren: () => import('./module/main/main.module').then(m => m.MainModule),
  }  ,
  {
    path: 'quiz', loadChildren: () => import('./module/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: '**', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
