import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class LoadingService {

  stateChange: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  start() {
    this.stateChange.emit(true);
  }

  end() {
    this.stateChange.emit(false);
  }

  getStateChangeEmitter() {
    return this.stateChange;
  }

}
