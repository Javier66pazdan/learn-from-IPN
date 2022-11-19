import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material.module';
import { QuizComponent } from './module/quiz/quiz.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MaterialModule , AppRoutingModule],
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
