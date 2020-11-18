import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCarComponent } from './order-car/order-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import { TokenInterceptor } from './interceptors/interceptor';
import { IsLogged } from './guards/isLogged.guard';
import { IsDealer } from './guards/dealer.guard';
import { IsClient } from './guards/client.guard';
import { SendOfferComponent } from './send-offer/send-offer.component';
import { ReadOfferComponent } from './read-offer/read-offer.component';
import { SignatureContractComponent } from './signature-contract/signature-contract.component';
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { SendReceiptComponent } from './send-receipt/send-receipt.component';
import { HandOverCarComponent } from './hand-over-car/hand-over-car.component';
import { DeliverCarComponent } from './deliver-car/deliver-car.component';
import { ReadDocumentsComponent } from './read-documents/read-documents.component';
import { ReadReceiptComponent } from './read-receipt/read-receipt.component';
import { PayComponentComponent } from './pay-component/pay-component.component';

const Routes = [
  {
    component: OrderCarComponent,
    path: "order-car"
  },
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: HomeComponent,
    path: "home"
  },
  {
    component: SendOfferComponent,
    path: "send-offer/:taskId"
  },
  {
    component: ReadOfferComponent,
    path: "read-offer/:taskId"
  },
  {
    component: ReadDocumentsComponent,
    path: "read-documents/:taskId"
  },
  {
    component: ReadReceiptComponent,
    path: "read-receipt/:taskId"
  },
  {
    component: SendDocumentsComponent,
    path: "send-documents/:taskId"
  },
  {
    component: SendReceiptComponent,
    path: "send-receipt/:taskId"
  },
  {
    component: SignatureContractComponent,
    path: "sign-contract/:taskId"
  },
  {
    component: PayComponentComponent,
    path: "pay/:taskId"
  },
  {
    component: HandOverCarComponent,
    path: "handover-car/:taskId"
  },
  {
    component: DeliverCarComponent,
    path: "pickup-car/:taskId"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OrderCarComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SendOfferComponent,
    ReadOfferComponent,
    SignatureContractComponent,
    SendDocumentsComponent,
    SendReceiptComponent,
    HandOverCarComponent,
    DeliverCarComponent,
    ReadDocumentsComponent,
    ReadReceiptComponent,
    PayComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule
  ],
  providers: [
    LoginService,
    IsDealer,
    IsClient,
    IsLogged,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'IsLogged',
      useValue: () => {
        return true;
      } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
