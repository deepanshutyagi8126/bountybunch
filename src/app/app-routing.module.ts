import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { OtpComponent } from './otp/otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdvertisementListingComponent } from './advertisement-listing/advertisement-listing.component';
import { AdvertisementRequestComponent } from './advertisement-request/advertisement-request.component';
import { AdvertisementListing1Component } from './advertisement-listing1/advertisement-listing1.component';
import { AdvertisementDetailPageComponent } from './advertisement-detail-page/advertisement-detail-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'advertisement', component: AdvertisementComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'fair-play', component: FairPlayComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'term-condition', component: TermConditionComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details', component: BlogDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'confirm-password', component: ConfirmPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'advertisement-listing', component: AdvertisementListingComponent },
  { path: 'advertisement-request', component: AdvertisementRequestComponent },
  { path: 'advertisement-listing1', component: AdvertisementListing1Component },
  { path: 'advertisement-detail-page', component: AdvertisementDetailPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true,
    anchorScrolling: 'enabled',
    })
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
