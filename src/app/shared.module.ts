import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { FilterPipe } from './filter.pipe';

import { SpinnerComponent } from './spinner/spinner.component';
import { EventGlimpseComponent } from './modules/events/components/event-glimpse/event-glimpse.component';
import { NewsGlimpseComponent } from './modules/news/components/news-glimpse/news-glimpse.component';

//FirebaseUIModule
// import { FirebaseUIModule } from 'firebaseui-angular';
// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';

// const firebaseUiAuthConfig: firebaseui.auth.Config = {
//  signInSuccessUrl: '/home',
//  signInFlow: 'popup',
//  signInOptions: [
//    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//    {
//      scopes: [
//        'public_profile',
//        'email',
//        'user_likes',
//        'user_friends'
//      ],
//      customParameters: {
//        'auth_type': 'reauthenticate'
//      },
//      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//    },
//    {
//      requireDisplayName: false,
//      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//    },
//  ],
//  tosUrl: 'https://www.google.com',
//  privacyPolicyUrl: 'https://www.google.com',
//  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
// };

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
    // FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  declarations: [
    FilterPipe,
    SpinnerComponent,
    EventGlimpseComponent,
    NewsGlimpseComponent
  ],
  exports: [
    FilterPipe,
    SpinnerComponent,
    EventGlimpseComponent,
    NewsGlimpseComponent
    // FirebaseUIModule
  ]
})
export class SharedModule { }
