/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JogoVelhaService } from './jogo-velha.service';

describe('Service: JogoVelha', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoVelhaService]
    });
  });

  it('should ...', inject([JogoVelhaService], (service: JogoVelhaService) => {
    expect(service).toBeTruthy();
  }));
});
