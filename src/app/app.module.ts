import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JitsiComponent } from './pages/jitsi/jitsi.component';
// import { JitsiMeetJS } from '@solyd/lib-jitsi-meet';



@NgModule({
  declarations: [
    AppComponent,
    JitsiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
