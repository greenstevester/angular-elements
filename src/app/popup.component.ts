import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  template: `
    <span>Popup: {{message}}</span>
    <button (click)="closed.next()">&#x2716;</button>
  `,
  host: {
    '[@state]': 'state',
  },
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styles: [`
    :host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;
      height: 48px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid black;
      font-size: 24px;
      color: yellow;
    }

    button {
      border-radius: 50%;
    }
  `]
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';

  @Output() public closed = new EventEmitter<String>();

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';
    let that =  this;
    setTimeout(function(){
      that.closed.emit('closed');
    }, 2000);
  }
  get message(): string { return this._message; }
  _message: string;

}
