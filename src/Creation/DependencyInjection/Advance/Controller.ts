import { inject, injectable } from 'inversify';
import { MessageServiceInterface } from './MessageService.interface';

@injectable()
export class Controller {
  @inject('SMSService') private messageService:
    | MessageServiceInterface
    | undefined;

  send = (): void => {
    this.messageService?.sendMessage('hello world');
  };
}
