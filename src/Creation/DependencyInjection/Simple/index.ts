import { SmsMessageService } from './SmsMessageService';
import { Controller } from './Controller';

function main(): void {
  const controller = new Controller(new SmsMessageService()); // can be change to emailService
  controller.send();
}
main();
