import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"projet-iot-9d0dc","appId":"1:376933682313:web:6744aa8b6a62dc98008a58","databaseURL":"https://projet-iot-9d0dc-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"projet-iot-9d0dc.firebasestorage.app","apiKey":"AIzaSyBwhnCIVAq0dxjHGlVCD5-u50Q5rkVrMXg","authDomain":"projet-iot-9d0dc.firebaseapp.com","messagingSenderId":"376933682313"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
