import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatCardModule, MatTabsModule, MatInputModule, MatSelectModule, MatCheckboxModule } from '@angular/material';

// Pages
import { AppComponent } from './app.component';
import { CouponDialogComponent } from './components/coupon-dialog';

import { CarrotDetailPage } from './pages/carrot-detail';
import { CheckoutPage } from './pages/checkout';
import { CouponPage } from './pages/coupon';
import { HomePage } from './pages/home';

// Services
import { CarrotService } from './services/carrot.service';

// Routes
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CarrotDetailPage,
    CheckoutPage,
    CouponDialogComponent,
    CouponPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forRoot(ROUTES)
    ],
  providers: [CarrotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
