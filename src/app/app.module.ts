import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgwWowModule } from 'ngx-wow';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { FairPlayComponent } from './fair-play/fair-play.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { Header2Component } from './header2/header2.component';
import { OtpComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdvertisementListingComponent } from './advertisement-listing/advertisement-listing.component';
import { AdvertisementRequestComponent } from './advertisement-request/advertisement-request.component';
import { AdvertisementListing1Component } from './advertisement-listing1/advertisement-listing1.component';
import { AdvertisementDetailPageComponent } from './advertisement-detail-page/advertisement-detail-page.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdvertisementComponent,
    FaqsComponent,
    ContactUsComponent,
    AboutUsComponent,
    HowToPlayComponent,
    FairPlayComponent,
    PrivacyPolicyComponent,
    TermConditionComponent,
    BlogComponent,
    BlogDetailsComponent,
    LoginComponent,
    Header2Component,
    OtpComponent,
    ForgotPasswordComponent,
    ConfirmPasswordComponent,
    DashboardComponent,
    SidenavComponent,
    ChangePasswordComponent,
    AdvertisementListingComponent,
    AdvertisementRequestComponent,
    AdvertisementListing1Component,
    AdvertisementDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    CarouselModule,
    NgwWowModule,
    Ng2TelInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
