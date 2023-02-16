import { ErrorHandler ,Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'




const resourceUrl='http://localhost:3002/errors'
@Injectable()
export class GlobalErrorHandler extends ErrorHandler{
    constructor(private httpClient:HttpClient) {
        super()

     }

override handleError(error: any): void {
    this.httpClient.post(resourceUrl, error.message).subscribe(()=>{})
}


}