import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordService} from './record.service';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent} from './login/login.component';
import { FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';


// colocammos la estructura del routing. es decir
//la estructura del sitio.  en imports -> RouterModule.forRoot

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
         {
         	path: '',
         	component: LoginComponent
         },
         {
         	path: 'data',
         	component:DataComponent
         },
         {
           path: 'admin',
           component: AdminComponent
         }
    	])
   
  ],
  providers: [RecordService, DataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
