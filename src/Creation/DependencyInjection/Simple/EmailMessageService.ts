import { MessageServiceInterface } from './MessageService.interface';

export class EmailMessageService implements MessageServiceInterface {
  sendMessage = (message: string): void => {
    console.log('This from Email service: ', message);
  };
}
