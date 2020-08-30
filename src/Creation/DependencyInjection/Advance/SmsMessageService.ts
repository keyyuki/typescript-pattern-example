import { injectable } from 'inversify';
import { MessageServiceInterface } from './MessageService.interface';

@injectable()
export class SmsMessageService implements MessageServiceInterface {
  sendMessage = (message: string): void => {
    console.log('This from SMS service: ', message);
  };
}
