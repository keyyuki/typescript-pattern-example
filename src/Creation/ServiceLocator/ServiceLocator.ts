export class ServiceLocator {
  private static SERVICES: Map<string, any> = new Map();

  static getService<T>(serviceClass: { new (...args: any[]): T }): T {
    if (!ServiceLocator.SERVICES.has(serviceClass.name)) {
      try {
        const instance = eval('new ' + serviceClass + '();') as T;
        ServiceLocator.SERVICES.set(serviceClass.name, instance);
      } catch (error) {
        throw 'Not found service';
      }
    }
    return ServiceLocator.SERVICES.get(serviceClass.name);
  }

  static addService(service: Record<string, any>): void {
    ServiceLocator.SERVICES.set(service.constructor.name, service);
  }
}
