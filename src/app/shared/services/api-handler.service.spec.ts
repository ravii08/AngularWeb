import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiHandlerService } from './api-handler.service';

describe('ApiHandlerService', () => {
  let service: ApiHandlerService;
  let httpCtrl: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        ApiHandlerService
      ]
    });
    service = TestBed.inject(ApiHandlerService);
    httpCtrl = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('check getAPICall if block', () => {
    const url = '/url';
    spyOn(service, 'getAPICall').and.callThrough();
    service.getAPICall(url);
    expect(service.getAPICall).toHaveBeenCalledOnceWith(url)
  });
  it('check getAPICall else block', () => {
    const url = '/url';
    spyOn(service, 'handleError');
    service.getAPICall(url).subscribe(result => 
      fail('failed with some error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(501);
        expect(error.error).toContain('501 error');
      }
    );
    
    
  });
  it('check postAPICall if block', () => {
    const url = '/url';
    const payload = {'user': 'any'};
    spyOn(service, 'postAPICall').and.callThrough();
    service.postAPICall(url, payload);
    expect(service.postAPICall).toHaveBeenCalledOnceWith(url,payload)
  });
  it('check postAPICall else block', () => {
    const url = '/url';
    const payload = {'user': 'any'};
    spyOn(service, 'handleError');
    service.postAPICall(url,payload).subscribe(result => 
      fail('failed with some error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(501);
        expect(error.error).toContain('501 error');
      }
    );
    const request = httpCtrl.expectOne(service.constructAPIUrl(url));
    request.flush('501 error', { status: 501, statusText: 'unavailable request'})
  });
  it('check putAPICall if block', () => {
    const url = '/url';
    const payload = {'user': 'any'};
    spyOn(service, 'putAPICall').and.callThrough();
    service.putAPICall(url, payload);
    expect(service.putAPICall).toHaveBeenCalledOnceWith(url,payload)
  });
  it('check putAPICall else block', () => {
    const url = '/url';
    const payload = {'user': 'any'};
    spyOn(service, 'handleError');
    service.putAPICall(url,payload).subscribe(result => 
      fail('failed with some error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(501);
        expect(error.error).toContain('501 error');
      }
    );
    const request = httpCtrl.expectOne(service.constructAPIUrl(url));
    request.flush('501 error', { status: 501, statusText: 'unavailable request'})
  });
  it('check deleteAPICall if block', () => {
    const url = '/url';
    const params = 'user';
    spyOn(service, 'deleteAPICall').and.callThrough();
    service.deleteAPICall(url, params);
    expect(service.deleteAPICall).toHaveBeenCalledWith(url,params)
  });
  it('check deleteAPICall else block', () => {
    const url = '/url';
    const params = 'user';
    spyOn(service, 'handleError');
    spyOn(service, 'deleteAPICall').and.callThrough();
    service.deleteAPICall(url,params);
    expect(service.deleteAPICall).toHaveBeenCalledWith(url,params)
  });
});
