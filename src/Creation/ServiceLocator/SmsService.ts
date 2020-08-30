export class SmsService {
  constructor(private smsId: number) {}

  sendSms = (): void => {
    console.log('a sms has send by sms-service ' + this.smsId);
  };
}
