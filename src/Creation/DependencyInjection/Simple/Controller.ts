import { MessageServiceInterface } from './MessageService.interface';

export class Controller {
  private messageService: MessageServiceInterface;
  constructor(messageService: MessageServiceInterface) {
    this.messageService = messageService;
  }

  send = (): void => {
    this.messageService.sendMessage('hello world');
  };
}
