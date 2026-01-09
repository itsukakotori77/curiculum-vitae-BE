// src/common/decorators/validation/is-required-if.decorator.ts
import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator'

/**
 * Decorator that validates a field is required based on another field's value
 * 
 * @param property - The property name to check
 * @param expectedValue - The value that makes this field required
 * @param validationOptions - Optional validation options
 * 
 * @example
 * ```typescript
 * class MyDto {
 *   @IsBoolean()
 *   isActive: boolean;
 * 
 *   @IsRequiredIf('isActive', true)
 *   activationDate?: string;
 * }
 * ```
 */
export function IsRequiredIf(
  property: string,
  expectedValue: any,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return function (target: Object, propertyName: string | symbol) {
    registerDecorator({
      name: 'isRequiredIf',
      target: target.constructor,
      propertyName: propertyName as string,
      constraints: [property, expectedValue],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          const [relatedPropertyName, relatedValue] = args.constraints
          const object = args.object as Record<string, any>
          const relatedPropertyValue = object[relatedPropertyName]
          
          // If the related property matches the expected value,
          // then this field must be present
          if (relatedPropertyValue === relatedValue) {
            return value !== undefined && value !== null && value !== ''
          }
          
          // Otherwise, validation passes
          return true
        },
        
        defaultMessage(args: ValidationArguments): string {
          const [relatedPropertyName, relatedValue] = args.constraints
          return validationOptions?.message as string || 
            `${args.property} harus diisi ketika ${relatedPropertyName} bernilai ${relatedValue}`
        },
      },
    })
  }
}
