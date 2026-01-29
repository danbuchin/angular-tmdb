import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalErrorService } from '../../services/global-error.service';

@Component({
  selector: 'app-error-message',
  imports: [AsyncPipe],
  templateUrl: './error-message.component.html',
})
export class ErrorMessage {
  constructor(public errorService: GlobalErrorService) {}
}
