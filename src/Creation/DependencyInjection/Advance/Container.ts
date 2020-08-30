import { Container } from 'inversify';
import { MessageServiceInterface } from './MessageService.interface';
import { EmailMessageService } from './EmailMessageService';
import { SmsMessageService } from './SmsMessageService';
import { Controller } from './Controller';

const container = new Container();
container.bind<MessageServiceInterface>('EmailService').to(EmailMessageService);
container.bind<MessageServiceInterface>('SMSService').to(SmsMessageService);
container.bind<Controller>('Controller').to(Controller);
export { container };
