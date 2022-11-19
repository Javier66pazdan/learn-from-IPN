import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuizComponent } from 'src/layouts/quiz/quiz.component';




@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [
    BrowserModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QuizComponent],
})
// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     // layout
//     NotificationSidebarComponent,
//     NotificationsComponent,
//     HeaderComponent,
//     HeaderLeftNavbarComponent,
//     HeaderLanguageMenuComponent,
//     HeaderUserMenuComponent,
//     FooterComponent,
//     SidebarComponent,
//     SidebarLogoComponent,
//     SidebarUserPanelComponent,
//     SidebarMenuComponent,
//     UserDetailsComponent,
//     UserImageUploadComponent,
//   ],
//   imports: [AppRoutingModule, SharedModule],
//   providers: [
//     UserNotificationServiceProxy,
//     NotificationService,
//     NgDialogAnimationService,
//     UserStoreService,
//   ],
//   entryComponents: [NotificationSidebarComponent],
// })
export class AppModule {}
