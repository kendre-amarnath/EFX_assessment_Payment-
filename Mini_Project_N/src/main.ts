// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component'; // Main App Component
import { routes } from './app/app.routes'; // Import your routing configuration

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Provide routing to the app
  ]
}).catch((err) => console.error(err));

