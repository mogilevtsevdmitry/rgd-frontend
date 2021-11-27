import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'
import { PagesModule } from './pages/pages.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    PagesModule,
    FormsModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:5000/graphql',
        }),
      }
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
