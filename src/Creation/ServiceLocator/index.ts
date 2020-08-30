import { ServiceLocator } from './ServiceLocator';
import { EmailService } from './EmailSevice';
import { SmsService } from './SmsService';

function main(): void {
  // email service will auto create
  const emailService = ServiceLocator.getService(EmailService);
  emailService.sendEmail();

  // sms-service need id and cannot auto-create
  // it can be add in some part of application
  const smsId = 1001;
  const smsServiceInit = new SmsService(smsId);
  ServiceLocator.addService(smsServiceInit);

  const smsService = ServiceLocator.getService(SmsService);
  smsService.sendSms();
}
main();
