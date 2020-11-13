import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceporService } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS, 
            useClass: AuthInterceporService, 
            multi: true
        }
    ]
})
export class CoreModule {}