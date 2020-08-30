import 'reflect-metadata';
import { container } from './Container';
import { Controller } from './Controller';

function main(): void {
  const controller = container.get<Controller>('Controller');
  controller.send();
}
main();
