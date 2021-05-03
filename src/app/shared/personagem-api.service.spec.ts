/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonagemApiService } from './personagem-api.service';

describe('Service: PersonagemApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonagemApiService]
    });
  });

  it('should ...', inject([PersonagemApiService], (service: PersonagemApiService) => {
    expect(service).toBeTruthy();
  }));
});
