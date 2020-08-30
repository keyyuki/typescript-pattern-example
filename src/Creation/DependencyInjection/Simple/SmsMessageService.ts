import { MessageServiceInterface } from './MessageService.interface';

export class SmsMessageService implements MessageServiceInterface {
  sendMessage = (message: string): void => {
    console.log('This from SMS service: ', message);
  };
}
