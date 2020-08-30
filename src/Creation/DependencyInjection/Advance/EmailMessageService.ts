import { injectable } from 'inversify';
import { MessageServiceInterface } from './MessageService.interface';

@injectable()
export class EmailMessageService implements MessageServiceInterface {
  sendMessage = (message: string): void => {
    console.log('This from Email service: ', message);
  };
}
