import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HomeComponent} from './home/home.component';
import {ItemsComponent} from './items/items.component';
const APP_ROUTES: Routes = [
    { path: 'quotes', component: QuotesComponent },
    { path: '', component: HomeComponent },
    { path: 'new-quote', component: NewQuoteComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'quote/:id', component: SigninComponent },
    { path: 'products', component: ItemsComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);