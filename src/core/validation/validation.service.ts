import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ValidationService {
  static validateWithZod<T>(schema: Zod.Schema<T>, data: unknown): T | void {
    const result = schema.safeParse(data);

    if (result.success === false) {
      result.error.errors.forEach((error) => {
        const [field = ''] = error.path;

        Logger.error(`${field}(${error.message})`, ValidationService.name);
      });

      process.exit(0);
    }

    return result.data;
  }
}
