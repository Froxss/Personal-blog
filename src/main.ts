/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';

// appConfig'e providers'ı ekleyip genişletiyoruz
const configWithProviders = {
  ...appConfig, // Mevcut config değerlerini koruyoruz
  providers: [
    provideHttpClient(), // HttpClient sağlayıcısı
    provideRouter(routes), // Routing kullanıyorsanız route'ları burada sağlayın
  ],
};

// Uygulamanın başlatılması
bootstrapApplication(AppComponent, configWithProviders).catch((err) =>
  console.error(err)
);
