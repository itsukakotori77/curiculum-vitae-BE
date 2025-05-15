
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CVitae
 * 
 */
export type CVitae = $Result.DefaultSelection<Prisma.$CVitaePayload>
/**
 * Model CVitaeEducation
 * 
 */
export type CVitaeEducation = $Result.DefaultSelection<Prisma.$CVitaeEducationPayload>
/**
 * Model CVitaeExperience
 * 
 */
export type CVitaeExperience = $Result.DefaultSelection<Prisma.$CVitaeExperiencePayload>
/**
 * Model CVitaeSkill
 * 
 */
export type CVitaeSkill = $Result.DefaultSelection<Prisma.$CVitaeSkillPayload>
/**
 * Model CVitaeTemplate
 * 
 */
export type CVitaeTemplate = $Result.DefaultSelection<Prisma.$CVitaeTemplatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cVitae`: Exposes CRUD operations for the **CVitae** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVitaes
    * const cVitaes = await prisma.cVitae.findMany()
    * ```
    */
  get cVitae(): Prisma.CVitaeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cVitaeEducation`: Exposes CRUD operations for the **CVitaeEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVitaeEducations
    * const cVitaeEducations = await prisma.cVitaeEducation.findMany()
    * ```
    */
  get cVitaeEducation(): Prisma.CVitaeEducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cVitaeExperience`: Exposes CRUD operations for the **CVitaeExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVitaeExperiences
    * const cVitaeExperiences = await prisma.cVitaeExperience.findMany()
    * ```
    */
  get cVitaeExperience(): Prisma.CVitaeExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cVitaeSkill`: Exposes CRUD operations for the **CVitaeSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVitaeSkills
    * const cVitaeSkills = await prisma.cVitaeSkill.findMany()
    * ```
    */
  get cVitaeSkill(): Prisma.CVitaeSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cVitaeTemplate`: Exposes CRUD operations for the **CVitaeTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVitaeTemplates
    * const cVitaeTemplates = await prisma.cVitaeTemplate.findMany()
    * ```
    */
  get cVitaeTemplate(): Prisma.CVitaeTemplateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CVitae: 'CVitae',
    CVitaeEducation: 'CVitaeEducation',
    CVitaeExperience: 'CVitaeExperience',
    CVitaeSkill: 'CVitaeSkill',
    CVitaeTemplate: 'CVitaeTemplate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cVitae" | "cVitaeEducation" | "cVitaeExperience" | "cVitaeSkill" | "cVitaeTemplate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CVitae: {
        payload: Prisma.$CVitaePayload<ExtArgs>
        fields: Prisma.CVitaeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVitaeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVitaeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          findFirst: {
            args: Prisma.CVitaeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVitaeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          findMany: {
            args: Prisma.CVitaeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>[]
          }
          create: {
            args: Prisma.CVitaeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          createMany: {
            args: Prisma.CVitaeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVitaeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          update: {
            args: Prisma.CVitaeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          deleteMany: {
            args: Prisma.CVitaeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVitaeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVitaeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaePayload>
          }
          aggregate: {
            args: Prisma.CVitaeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVitae>
          }
          groupBy: {
            args: Prisma.CVitaeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVitaeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVitaeCountArgs<ExtArgs>
            result: $Utils.Optional<CVitaeCountAggregateOutputType> | number
          }
        }
      }
      CVitaeEducation: {
        payload: Prisma.$CVitaeEducationPayload<ExtArgs>
        fields: Prisma.CVitaeEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVitaeEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVitaeEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          findFirst: {
            args: Prisma.CVitaeEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVitaeEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          findMany: {
            args: Prisma.CVitaeEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>[]
          }
          create: {
            args: Prisma.CVitaeEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          createMany: {
            args: Prisma.CVitaeEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVitaeEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          update: {
            args: Prisma.CVitaeEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          deleteMany: {
            args: Prisma.CVitaeEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVitaeEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVitaeEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeEducationPayload>
          }
          aggregate: {
            args: Prisma.CVitaeEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVitaeEducation>
          }
          groupBy: {
            args: Prisma.CVitaeEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVitaeEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVitaeEducationCountArgs<ExtArgs>
            result: $Utils.Optional<CVitaeEducationCountAggregateOutputType> | number
          }
        }
      }
      CVitaeExperience: {
        payload: Prisma.$CVitaeExperiencePayload<ExtArgs>
        fields: Prisma.CVitaeExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVitaeExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVitaeExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          findFirst: {
            args: Prisma.CVitaeExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVitaeExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          findMany: {
            args: Prisma.CVitaeExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>[]
          }
          create: {
            args: Prisma.CVitaeExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          createMany: {
            args: Prisma.CVitaeExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVitaeExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          update: {
            args: Prisma.CVitaeExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          deleteMany: {
            args: Prisma.CVitaeExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVitaeExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVitaeExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeExperiencePayload>
          }
          aggregate: {
            args: Prisma.CVitaeExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVitaeExperience>
          }
          groupBy: {
            args: Prisma.CVitaeExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVitaeExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVitaeExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<CVitaeExperienceCountAggregateOutputType> | number
          }
        }
      }
      CVitaeSkill: {
        payload: Prisma.$CVitaeSkillPayload<ExtArgs>
        fields: Prisma.CVitaeSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVitaeSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVitaeSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          findFirst: {
            args: Prisma.CVitaeSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVitaeSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          findMany: {
            args: Prisma.CVitaeSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>[]
          }
          create: {
            args: Prisma.CVitaeSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          createMany: {
            args: Prisma.CVitaeSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVitaeSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          update: {
            args: Prisma.CVitaeSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          deleteMany: {
            args: Prisma.CVitaeSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVitaeSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVitaeSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeSkillPayload>
          }
          aggregate: {
            args: Prisma.CVitaeSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVitaeSkill>
          }
          groupBy: {
            args: Prisma.CVitaeSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVitaeSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVitaeSkillCountArgs<ExtArgs>
            result: $Utils.Optional<CVitaeSkillCountAggregateOutputType> | number
          }
        }
      }
      CVitaeTemplate: {
        payload: Prisma.$CVitaeTemplatePayload<ExtArgs>
        fields: Prisma.CVitaeTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVitaeTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVitaeTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          findFirst: {
            args: Prisma.CVitaeTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVitaeTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          findMany: {
            args: Prisma.CVitaeTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>[]
          }
          create: {
            args: Prisma.CVitaeTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          createMany: {
            args: Prisma.CVitaeTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CVitaeTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          update: {
            args: Prisma.CVitaeTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          deleteMany: {
            args: Prisma.CVitaeTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVitaeTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CVitaeTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVitaeTemplatePayload>
          }
          aggregate: {
            args: Prisma.CVitaeTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCVitaeTemplate>
          }
          groupBy: {
            args: Prisma.CVitaeTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVitaeTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVitaeTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<CVitaeTemplateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cVitae?: CVitaeOmit
    cVitaeEducation?: CVitaeEducationOmit
    cVitaeExperience?: CVitaeExperienceOmit
    cVitaeSkill?: CVitaeSkillOmit
    cVitaeTemplate?: CVitaeTemplateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    CVitae: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CVitae?: boolean | UserCountOutputTypeCountCVitaeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCVitaeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeWhereInput
  }


  /**
   * Count Type CVitaeCountOutputType
   */

  export type CVitaeCountOutputType = {
    CVitaeEducation: number
    CVitaeExperience: number
    CVitaeSkill: number
    CVitaeTemplate: number
  }

  export type CVitaeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CVitaeEducation?: boolean | CVitaeCountOutputTypeCountCVitaeEducationArgs
    CVitaeExperience?: boolean | CVitaeCountOutputTypeCountCVitaeExperienceArgs
    CVitaeSkill?: boolean | CVitaeCountOutputTypeCountCVitaeSkillArgs
    CVitaeTemplate?: boolean | CVitaeCountOutputTypeCountCVitaeTemplateArgs
  }

  // Custom InputTypes
  /**
   * CVitaeCountOutputType without action
   */
  export type CVitaeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeCountOutputType
     */
    select?: CVitaeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CVitaeCountOutputType without action
   */
  export type CVitaeCountOutputTypeCountCVitaeEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeEducationWhereInput
  }

  /**
   * CVitaeCountOutputType without action
   */
  export type CVitaeCountOutputTypeCountCVitaeExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeExperienceWhereInput
  }

  /**
   * CVitaeCountOutputType without action
   */
  export type CVitaeCountOutputTypeCountCVitaeSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeSkillWhereInput
  }

  /**
   * CVitaeCountOutputType without action
   */
  export type CVitaeCountOutputTypeCountCVitaeTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeTemplateWhereInput
  }


  /**
   * Count Type CVitaeTemplateCountOutputType
   */

  export type CVitaeTemplateCountOutputType = {
    CVitae: number
  }

  export type CVitaeTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CVitae?: boolean | CVitaeTemplateCountOutputTypeCountCVitaeArgs
  }

  // Custom InputTypes
  /**
   * CVitaeTemplateCountOutputType without action
   */
  export type CVitaeTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplateCountOutputType
     */
    select?: CVitaeTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CVitaeTemplateCountOutputType without action
   */
  export type CVitaeTemplateCountOutputTypeCountCVitaeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    name: string | null
    password: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    CVitae?: boolean | User$CVitaeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CVitae?: boolean | User$CVitaeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      CVitae: Prisma.$CVitaePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      name: string | null
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CVitae<T extends User$CVitaeArgs<ExtArgs> = {}>(args?: Subset<T, User$CVitaeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.CVitae
   */
  export type User$CVitaeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    where?: CVitaeWhereInput
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    cursor?: CVitaeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeScalarFieldEnum | CVitaeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CVitae
   */

  export type AggregateCVitae = {
    _count: CVitaeCountAggregateOutputType | null
    _avg: CVitaeAvgAggregateOutputType | null
    _sum: CVitaeSumAggregateOutputType | null
    _min: CVitaeMinAggregateOutputType | null
    _max: CVitaeMaxAggregateOutputType | null
  }

  export type CVitaeAvgAggregateOutputType = {
    user_id: number | null
  }

  export type CVitaeSumAggregateOutputType = {
    user_id: bigint | null
  }

  export type CVitaeMinAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeMaxAggregateOutputType = {
    id: string | null
    user_id: bigint | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    email: number
    phone: number
    address: number
    summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CVitaeAvgAggregateInputType = {
    user_id?: true
  }

  export type CVitaeSumAggregateInputType = {
    user_id?: true
  }

  export type CVitaeMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CVitaeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitae to aggregate.
     */
    where?: CVitaeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaes to fetch.
     */
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVitaeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVitaes
    **/
    _count?: true | CVitaeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CVitaeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CVitaeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVitaeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVitaeMaxAggregateInputType
  }

  export type GetCVitaeAggregateType<T extends CVitaeAggregateArgs> = {
        [P in keyof T & keyof AggregateCVitae]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVitae[P]>
      : GetScalarType<T[P], AggregateCVitae[P]>
  }




  export type CVitaeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeWhereInput
    orderBy?: CVitaeOrderByWithAggregationInput | CVitaeOrderByWithAggregationInput[]
    by: CVitaeScalarFieldEnum[] | CVitaeScalarFieldEnum
    having?: CVitaeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVitaeCountAggregateInputType | true
    _avg?: CVitaeAvgAggregateInputType
    _sum?: CVitaeSumAggregateInputType
    _min?: CVitaeMinAggregateInputType
    _max?: CVitaeMaxAggregateInputType
  }

  export type CVitaeGroupByOutputType = {
    id: string
    user_id: bigint
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at: Date
    updated_at: Date
    _count: CVitaeCountAggregateOutputType | null
    _avg: CVitaeAvgAggregateOutputType | null
    _sum: CVitaeSumAggregateOutputType | null
    _min: CVitaeMinAggregateOutputType | null
    _max: CVitaeMaxAggregateOutputType | null
  }

  type GetCVitaeGroupByPayload<T extends CVitaeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVitaeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVitaeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVitaeGroupByOutputType[P]>
            : GetScalarType<T[P], CVitaeGroupByOutputType[P]>
        }
      >
    >


  export type CVitaeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    CVitaeEducation?: boolean | CVitae$CVitaeEducationArgs<ExtArgs>
    CVitaeExperience?: boolean | CVitae$CVitaeExperienceArgs<ExtArgs>
    CVitaeSkill?: boolean | CVitae$CVitaeSkillArgs<ExtArgs>
    CVitaeTemplate?: boolean | CVitae$CVitaeTemplateArgs<ExtArgs>
    _count?: boolean | CVitaeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVitae"]>



  export type CVitaeSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CVitaeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "email" | "phone" | "address" | "summary" | "created_at" | "updated_at", ExtArgs["result"]["cVitae"]>
  export type CVitaeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    CVitaeEducation?: boolean | CVitae$CVitaeEducationArgs<ExtArgs>
    CVitaeExperience?: boolean | CVitae$CVitaeExperienceArgs<ExtArgs>
    CVitaeSkill?: boolean | CVitae$CVitaeSkillArgs<ExtArgs>
    CVitaeTemplate?: boolean | CVitae$CVitaeTemplateArgs<ExtArgs>
    _count?: boolean | CVitaeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CVitaePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVitae"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      CVitaeEducation: Prisma.$CVitaeEducationPayload<ExtArgs>[]
      CVitaeExperience: Prisma.$CVitaeExperiencePayload<ExtArgs>[]
      CVitaeSkill: Prisma.$CVitaeSkillPayload<ExtArgs>[]
      CVitaeTemplate: Prisma.$CVitaeTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: bigint
      name: string
      email: string
      phone: string
      address: string
      summary: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cVitae"]>
    composites: {}
  }

  type CVitaeGetPayload<S extends boolean | null | undefined | CVitaeDefaultArgs> = $Result.GetResult<Prisma.$CVitaePayload, S>

  type CVitaeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVitaeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVitaeCountAggregateInputType | true
    }

  export interface CVitaeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVitae'], meta: { name: 'CVitae' } }
    /**
     * Find zero or one CVitae that matches the filter.
     * @param {CVitaeFindUniqueArgs} args - Arguments to find a CVitae
     * @example
     * // Get one CVitae
     * const cVitae = await prisma.cVitae.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVitaeFindUniqueArgs>(args: SelectSubset<T, CVitaeFindUniqueArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CVitae that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVitaeFindUniqueOrThrowArgs} args - Arguments to find a CVitae
     * @example
     * // Get one CVitae
     * const cVitae = await prisma.cVitae.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVitaeFindUniqueOrThrowArgs>(args: SelectSubset<T, CVitaeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitae that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeFindFirstArgs} args - Arguments to find a CVitae
     * @example
     * // Get one CVitae
     * const cVitae = await prisma.cVitae.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVitaeFindFirstArgs>(args?: SelectSubset<T, CVitaeFindFirstArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitae that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeFindFirstOrThrowArgs} args - Arguments to find a CVitae
     * @example
     * // Get one CVitae
     * const cVitae = await prisma.cVitae.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVitaeFindFirstOrThrowArgs>(args?: SelectSubset<T, CVitaeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVitaes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVitaes
     * const cVitaes = await prisma.cVitae.findMany()
     * 
     * // Get first 10 CVitaes
     * const cVitaes = await prisma.cVitae.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVitaeWithIdOnly = await prisma.cVitae.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVitaeFindManyArgs>(args?: SelectSubset<T, CVitaeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CVitae.
     * @param {CVitaeCreateArgs} args - Arguments to create a CVitae.
     * @example
     * // Create one CVitae
     * const CVitae = await prisma.cVitae.create({
     *   data: {
     *     // ... data to create a CVitae
     *   }
     * })
     * 
     */
    create<T extends CVitaeCreateArgs>(args: SelectSubset<T, CVitaeCreateArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVitaes.
     * @param {CVitaeCreateManyArgs} args - Arguments to create many CVitaes.
     * @example
     * // Create many CVitaes
     * const cVitae = await prisma.cVitae.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVitaeCreateManyArgs>(args?: SelectSubset<T, CVitaeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CVitae.
     * @param {CVitaeDeleteArgs} args - Arguments to delete one CVitae.
     * @example
     * // Delete one CVitae
     * const CVitae = await prisma.cVitae.delete({
     *   where: {
     *     // ... filter to delete one CVitae
     *   }
     * })
     * 
     */
    delete<T extends CVitaeDeleteArgs>(args: SelectSubset<T, CVitaeDeleteArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CVitae.
     * @param {CVitaeUpdateArgs} args - Arguments to update one CVitae.
     * @example
     * // Update one CVitae
     * const cVitae = await prisma.cVitae.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVitaeUpdateArgs>(args: SelectSubset<T, CVitaeUpdateArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVitaes.
     * @param {CVitaeDeleteManyArgs} args - Arguments to filter CVitaes to delete.
     * @example
     * // Delete a few CVitaes
     * const { count } = await prisma.cVitae.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVitaeDeleteManyArgs>(args?: SelectSubset<T, CVitaeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVitaes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVitaes
     * const cVitae = await prisma.cVitae.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVitaeUpdateManyArgs>(args: SelectSubset<T, CVitaeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVitae.
     * @param {CVitaeUpsertArgs} args - Arguments to update or create a CVitae.
     * @example
     * // Update or create a CVitae
     * const cVitae = await prisma.cVitae.upsert({
     *   create: {
     *     // ... data to create a CVitae
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVitae we want to update
     *   }
     * })
     */
    upsert<T extends CVitaeUpsertArgs>(args: SelectSubset<T, CVitaeUpsertArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVitaes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeCountArgs} args - Arguments to filter CVitaes to count.
     * @example
     * // Count the number of CVitaes
     * const count = await prisma.cVitae.count({
     *   where: {
     *     // ... the filter for the CVitaes we want to count
     *   }
     * })
    **/
    count<T extends CVitaeCountArgs>(
      args?: Subset<T, CVitaeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVitaeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVitae.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVitaeAggregateArgs>(args: Subset<T, CVitaeAggregateArgs>): Prisma.PrismaPromise<GetCVitaeAggregateType<T>>

    /**
     * Group by CVitae.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVitaeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVitaeGroupByArgs['orderBy'] }
        : { orderBy?: CVitaeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVitaeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVitaeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVitae model
   */
  readonly fields: CVitaeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVitae.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVitaeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CVitaeEducation<T extends CVitae$CVitaeEducationArgs<ExtArgs> = {}>(args?: Subset<T, CVitae$CVitaeEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CVitaeExperience<T extends CVitae$CVitaeExperienceArgs<ExtArgs> = {}>(args?: Subset<T, CVitae$CVitaeExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CVitaeSkill<T extends CVitae$CVitaeSkillArgs<ExtArgs> = {}>(args?: Subset<T, CVitae$CVitaeSkillArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CVitaeTemplate<T extends CVitae$CVitaeTemplateArgs<ExtArgs> = {}>(args?: Subset<T, CVitae$CVitaeTemplateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVitae model
   */
  interface CVitaeFieldRefs {
    readonly id: FieldRef<"CVitae", 'String'>
    readonly user_id: FieldRef<"CVitae", 'BigInt'>
    readonly name: FieldRef<"CVitae", 'String'>
    readonly email: FieldRef<"CVitae", 'String'>
    readonly phone: FieldRef<"CVitae", 'String'>
    readonly address: FieldRef<"CVitae", 'String'>
    readonly summary: FieldRef<"CVitae", 'String'>
    readonly created_at: FieldRef<"CVitae", 'DateTime'>
    readonly updated_at: FieldRef<"CVitae", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVitae findUnique
   */
  export type CVitaeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter, which CVitae to fetch.
     */
    where: CVitaeWhereUniqueInput
  }

  /**
   * CVitae findUniqueOrThrow
   */
  export type CVitaeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter, which CVitae to fetch.
     */
    where: CVitaeWhereUniqueInput
  }

  /**
   * CVitae findFirst
   */
  export type CVitaeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter, which CVitae to fetch.
     */
    where?: CVitaeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaes to fetch.
     */
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaes.
     */
    cursor?: CVitaeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaes.
     */
    distinct?: CVitaeScalarFieldEnum | CVitaeScalarFieldEnum[]
  }

  /**
   * CVitae findFirstOrThrow
   */
  export type CVitaeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter, which CVitae to fetch.
     */
    where?: CVitaeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaes to fetch.
     */
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaes.
     */
    cursor?: CVitaeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaes.
     */
    distinct?: CVitaeScalarFieldEnum | CVitaeScalarFieldEnum[]
  }

  /**
   * CVitae findMany
   */
  export type CVitaeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter, which CVitaes to fetch.
     */
    where?: CVitaeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaes to fetch.
     */
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVitaes.
     */
    cursor?: CVitaeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaes.
     */
    skip?: number
    distinct?: CVitaeScalarFieldEnum | CVitaeScalarFieldEnum[]
  }

  /**
   * CVitae create
   */
  export type CVitaeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * The data needed to create a CVitae.
     */
    data: XOR<CVitaeCreateInput, CVitaeUncheckedCreateInput>
  }

  /**
   * CVitae createMany
   */
  export type CVitaeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVitaes.
     */
    data: CVitaeCreateManyInput | CVitaeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVitae update
   */
  export type CVitaeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * The data needed to update a CVitae.
     */
    data: XOR<CVitaeUpdateInput, CVitaeUncheckedUpdateInput>
    /**
     * Choose, which CVitae to update.
     */
    where: CVitaeWhereUniqueInput
  }

  /**
   * CVitae updateMany
   */
  export type CVitaeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVitaes.
     */
    data: XOR<CVitaeUpdateManyMutationInput, CVitaeUncheckedUpdateManyInput>
    /**
     * Filter which CVitaes to update
     */
    where?: CVitaeWhereInput
    /**
     * Limit how many CVitaes to update.
     */
    limit?: number
  }

  /**
   * CVitae upsert
   */
  export type CVitaeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * The filter to search for the CVitae to update in case it exists.
     */
    where: CVitaeWhereUniqueInput
    /**
     * In case the CVitae found by the `where` argument doesn't exist, create a new CVitae with this data.
     */
    create: XOR<CVitaeCreateInput, CVitaeUncheckedCreateInput>
    /**
     * In case the CVitae was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVitaeUpdateInput, CVitaeUncheckedUpdateInput>
  }

  /**
   * CVitae delete
   */
  export type CVitaeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    /**
     * Filter which CVitae to delete.
     */
    where: CVitaeWhereUniqueInput
  }

  /**
   * CVitae deleteMany
   */
  export type CVitaeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaes to delete
     */
    where?: CVitaeWhereInput
    /**
     * Limit how many CVitaes to delete.
     */
    limit?: number
  }

  /**
   * CVitae.CVitaeEducation
   */
  export type CVitae$CVitaeEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    where?: CVitaeEducationWhereInput
    orderBy?: CVitaeEducationOrderByWithRelationInput | CVitaeEducationOrderByWithRelationInput[]
    cursor?: CVitaeEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeEducationScalarFieldEnum | CVitaeEducationScalarFieldEnum[]
  }

  /**
   * CVitae.CVitaeExperience
   */
  export type CVitae$CVitaeExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    where?: CVitaeExperienceWhereInput
    orderBy?: CVitaeExperienceOrderByWithRelationInput | CVitaeExperienceOrderByWithRelationInput[]
    cursor?: CVitaeExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeExperienceScalarFieldEnum | CVitaeExperienceScalarFieldEnum[]
  }

  /**
   * CVitae.CVitaeSkill
   */
  export type CVitae$CVitaeSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    where?: CVitaeSkillWhereInput
    orderBy?: CVitaeSkillOrderByWithRelationInput | CVitaeSkillOrderByWithRelationInput[]
    cursor?: CVitaeSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeSkillScalarFieldEnum | CVitaeSkillScalarFieldEnum[]
  }

  /**
   * CVitae.CVitaeTemplate
   */
  export type CVitae$CVitaeTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    where?: CVitaeTemplateWhereInput
    orderBy?: CVitaeTemplateOrderByWithRelationInput | CVitaeTemplateOrderByWithRelationInput[]
    cursor?: CVitaeTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeTemplateScalarFieldEnum | CVitaeTemplateScalarFieldEnum[]
  }

  /**
   * CVitae without action
   */
  export type CVitaeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
  }


  /**
   * Model CVitaeEducation
   */

  export type AggregateCVitaeEducation = {
    _count: CVitaeEducationCountAggregateOutputType | null
    _min: CVitaeEducationMinAggregateOutputType | null
    _max: CVitaeEducationMaxAggregateOutputType | null
  }

  export type CVitaeEducationMinAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    school: string | null
    degree: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeEducationMaxAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    school: string | null
    degree: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeEducationCountAggregateOutputType = {
    id: number
    cvitae_id: number
    school: number
    degree: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CVitaeEducationMinAggregateInputType = {
    id?: true
    cvitae_id?: true
    school?: true
    degree?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeEducationMaxAggregateInputType = {
    id?: true
    cvitae_id?: true
    school?: true
    degree?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeEducationCountAggregateInputType = {
    id?: true
    cvitae_id?: true
    school?: true
    degree?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CVitaeEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeEducation to aggregate.
     */
    where?: CVitaeEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeEducations to fetch.
     */
    orderBy?: CVitaeEducationOrderByWithRelationInput | CVitaeEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVitaeEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVitaeEducations
    **/
    _count?: true | CVitaeEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVitaeEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVitaeEducationMaxAggregateInputType
  }

  export type GetCVitaeEducationAggregateType<T extends CVitaeEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateCVitaeEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVitaeEducation[P]>
      : GetScalarType<T[P], AggregateCVitaeEducation[P]>
  }




  export type CVitaeEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeEducationWhereInput
    orderBy?: CVitaeEducationOrderByWithAggregationInput | CVitaeEducationOrderByWithAggregationInput[]
    by: CVitaeEducationScalarFieldEnum[] | CVitaeEducationScalarFieldEnum
    having?: CVitaeEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVitaeEducationCountAggregateInputType | true
    _min?: CVitaeEducationMinAggregateInputType
    _max?: CVitaeEducationMaxAggregateInputType
  }

  export type CVitaeEducationGroupByOutputType = {
    id: string
    cvitae_id: string
    school: string
    degree: string
    start_date: Date
    end_date: Date
    created_at: Date
    updated_at: Date
    _count: CVitaeEducationCountAggregateOutputType | null
    _min: CVitaeEducationMinAggregateOutputType | null
    _max: CVitaeEducationMaxAggregateOutputType | null
  }

  type GetCVitaeEducationGroupByPayload<T extends CVitaeEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVitaeEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVitaeEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVitaeEducationGroupByOutputType[P]>
            : GetScalarType<T[P], CVitaeEducationGroupByOutputType[P]>
        }
      >
    >


  export type CVitaeEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cvitae_id?: boolean
    school?: boolean
    degree?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVitaeEducation"]>



  export type CVitaeEducationSelectScalar = {
    id?: boolean
    cvitae_id?: boolean
    school?: boolean
    degree?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CVitaeEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cvitae_id" | "school" | "degree" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["cVitaeEducation"]>
  export type CVitaeEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }

  export type $CVitaeEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVitaeEducation"
    objects: {
      cvitae: Prisma.$CVitaePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cvitae_id: string
      school: string
      degree: string
      start_date: Date
      end_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cVitaeEducation"]>
    composites: {}
  }

  type CVitaeEducationGetPayload<S extends boolean | null | undefined | CVitaeEducationDefaultArgs> = $Result.GetResult<Prisma.$CVitaeEducationPayload, S>

  type CVitaeEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVitaeEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVitaeEducationCountAggregateInputType | true
    }

  export interface CVitaeEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVitaeEducation'], meta: { name: 'CVitaeEducation' } }
    /**
     * Find zero or one CVitaeEducation that matches the filter.
     * @param {CVitaeEducationFindUniqueArgs} args - Arguments to find a CVitaeEducation
     * @example
     * // Get one CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVitaeEducationFindUniqueArgs>(args: SelectSubset<T, CVitaeEducationFindUniqueArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CVitaeEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVitaeEducationFindUniqueOrThrowArgs} args - Arguments to find a CVitaeEducation
     * @example
     * // Get one CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVitaeEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, CVitaeEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationFindFirstArgs} args - Arguments to find a CVitaeEducation
     * @example
     * // Get one CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVitaeEducationFindFirstArgs>(args?: SelectSubset<T, CVitaeEducationFindFirstArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationFindFirstOrThrowArgs} args - Arguments to find a CVitaeEducation
     * @example
     * // Get one CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVitaeEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, CVitaeEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVitaeEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVitaeEducations
     * const cVitaeEducations = await prisma.cVitaeEducation.findMany()
     * 
     * // Get first 10 CVitaeEducations
     * const cVitaeEducations = await prisma.cVitaeEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVitaeEducationWithIdOnly = await prisma.cVitaeEducation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVitaeEducationFindManyArgs>(args?: SelectSubset<T, CVitaeEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CVitaeEducation.
     * @param {CVitaeEducationCreateArgs} args - Arguments to create a CVitaeEducation.
     * @example
     * // Create one CVitaeEducation
     * const CVitaeEducation = await prisma.cVitaeEducation.create({
     *   data: {
     *     // ... data to create a CVitaeEducation
     *   }
     * })
     * 
     */
    create<T extends CVitaeEducationCreateArgs>(args: SelectSubset<T, CVitaeEducationCreateArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVitaeEducations.
     * @param {CVitaeEducationCreateManyArgs} args - Arguments to create many CVitaeEducations.
     * @example
     * // Create many CVitaeEducations
     * const cVitaeEducation = await prisma.cVitaeEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVitaeEducationCreateManyArgs>(args?: SelectSubset<T, CVitaeEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CVitaeEducation.
     * @param {CVitaeEducationDeleteArgs} args - Arguments to delete one CVitaeEducation.
     * @example
     * // Delete one CVitaeEducation
     * const CVitaeEducation = await prisma.cVitaeEducation.delete({
     *   where: {
     *     // ... filter to delete one CVitaeEducation
     *   }
     * })
     * 
     */
    delete<T extends CVitaeEducationDeleteArgs>(args: SelectSubset<T, CVitaeEducationDeleteArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CVitaeEducation.
     * @param {CVitaeEducationUpdateArgs} args - Arguments to update one CVitaeEducation.
     * @example
     * // Update one CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVitaeEducationUpdateArgs>(args: SelectSubset<T, CVitaeEducationUpdateArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVitaeEducations.
     * @param {CVitaeEducationDeleteManyArgs} args - Arguments to filter CVitaeEducations to delete.
     * @example
     * // Delete a few CVitaeEducations
     * const { count } = await prisma.cVitaeEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVitaeEducationDeleteManyArgs>(args?: SelectSubset<T, CVitaeEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVitaeEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVitaeEducations
     * const cVitaeEducation = await prisma.cVitaeEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVitaeEducationUpdateManyArgs>(args: SelectSubset<T, CVitaeEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVitaeEducation.
     * @param {CVitaeEducationUpsertArgs} args - Arguments to update or create a CVitaeEducation.
     * @example
     * // Update or create a CVitaeEducation
     * const cVitaeEducation = await prisma.cVitaeEducation.upsert({
     *   create: {
     *     // ... data to create a CVitaeEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVitaeEducation we want to update
     *   }
     * })
     */
    upsert<T extends CVitaeEducationUpsertArgs>(args: SelectSubset<T, CVitaeEducationUpsertArgs<ExtArgs>>): Prisma__CVitaeEducationClient<$Result.GetResult<Prisma.$CVitaeEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVitaeEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationCountArgs} args - Arguments to filter CVitaeEducations to count.
     * @example
     * // Count the number of CVitaeEducations
     * const count = await prisma.cVitaeEducation.count({
     *   where: {
     *     // ... the filter for the CVitaeEducations we want to count
     *   }
     * })
    **/
    count<T extends CVitaeEducationCountArgs>(
      args?: Subset<T, CVitaeEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVitaeEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVitaeEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVitaeEducationAggregateArgs>(args: Subset<T, CVitaeEducationAggregateArgs>): Prisma.PrismaPromise<GetCVitaeEducationAggregateType<T>>

    /**
     * Group by CVitaeEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVitaeEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVitaeEducationGroupByArgs['orderBy'] }
        : { orderBy?: CVitaeEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVitaeEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVitaeEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVitaeEducation model
   */
  readonly fields: CVitaeEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVitaeEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVitaeEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cvitae<T extends CVitaeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVitaeDefaultArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVitaeEducation model
   */
  interface CVitaeEducationFieldRefs {
    readonly id: FieldRef<"CVitaeEducation", 'String'>
    readonly cvitae_id: FieldRef<"CVitaeEducation", 'String'>
    readonly school: FieldRef<"CVitaeEducation", 'String'>
    readonly degree: FieldRef<"CVitaeEducation", 'String'>
    readonly start_date: FieldRef<"CVitaeEducation", 'DateTime'>
    readonly end_date: FieldRef<"CVitaeEducation", 'DateTime'>
    readonly created_at: FieldRef<"CVitaeEducation", 'DateTime'>
    readonly updated_at: FieldRef<"CVitaeEducation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVitaeEducation findUnique
   */
  export type CVitaeEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeEducation to fetch.
     */
    where: CVitaeEducationWhereUniqueInput
  }

  /**
   * CVitaeEducation findUniqueOrThrow
   */
  export type CVitaeEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeEducation to fetch.
     */
    where: CVitaeEducationWhereUniqueInput
  }

  /**
   * CVitaeEducation findFirst
   */
  export type CVitaeEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeEducation to fetch.
     */
    where?: CVitaeEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeEducations to fetch.
     */
    orderBy?: CVitaeEducationOrderByWithRelationInput | CVitaeEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeEducations.
     */
    cursor?: CVitaeEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeEducations.
     */
    distinct?: CVitaeEducationScalarFieldEnum | CVitaeEducationScalarFieldEnum[]
  }

  /**
   * CVitaeEducation findFirstOrThrow
   */
  export type CVitaeEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeEducation to fetch.
     */
    where?: CVitaeEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeEducations to fetch.
     */
    orderBy?: CVitaeEducationOrderByWithRelationInput | CVitaeEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeEducations.
     */
    cursor?: CVitaeEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeEducations.
     */
    distinct?: CVitaeEducationScalarFieldEnum | CVitaeEducationScalarFieldEnum[]
  }

  /**
   * CVitaeEducation findMany
   */
  export type CVitaeEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeEducations to fetch.
     */
    where?: CVitaeEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeEducations to fetch.
     */
    orderBy?: CVitaeEducationOrderByWithRelationInput | CVitaeEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVitaeEducations.
     */
    cursor?: CVitaeEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeEducations.
     */
    skip?: number
    distinct?: CVitaeEducationScalarFieldEnum | CVitaeEducationScalarFieldEnum[]
  }

  /**
   * CVitaeEducation create
   */
  export type CVitaeEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a CVitaeEducation.
     */
    data: XOR<CVitaeEducationCreateInput, CVitaeEducationUncheckedCreateInput>
  }

  /**
   * CVitaeEducation createMany
   */
  export type CVitaeEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVitaeEducations.
     */
    data: CVitaeEducationCreateManyInput | CVitaeEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVitaeEducation update
   */
  export type CVitaeEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a CVitaeEducation.
     */
    data: XOR<CVitaeEducationUpdateInput, CVitaeEducationUncheckedUpdateInput>
    /**
     * Choose, which CVitaeEducation to update.
     */
    where: CVitaeEducationWhereUniqueInput
  }

  /**
   * CVitaeEducation updateMany
   */
  export type CVitaeEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVitaeEducations.
     */
    data: XOR<CVitaeEducationUpdateManyMutationInput, CVitaeEducationUncheckedUpdateManyInput>
    /**
     * Filter which CVitaeEducations to update
     */
    where?: CVitaeEducationWhereInput
    /**
     * Limit how many CVitaeEducations to update.
     */
    limit?: number
  }

  /**
   * CVitaeEducation upsert
   */
  export type CVitaeEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the CVitaeEducation to update in case it exists.
     */
    where: CVitaeEducationWhereUniqueInput
    /**
     * In case the CVitaeEducation found by the `where` argument doesn't exist, create a new CVitaeEducation with this data.
     */
    create: XOR<CVitaeEducationCreateInput, CVitaeEducationUncheckedCreateInput>
    /**
     * In case the CVitaeEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVitaeEducationUpdateInput, CVitaeEducationUncheckedUpdateInput>
  }

  /**
   * CVitaeEducation delete
   */
  export type CVitaeEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
    /**
     * Filter which CVitaeEducation to delete.
     */
    where: CVitaeEducationWhereUniqueInput
  }

  /**
   * CVitaeEducation deleteMany
   */
  export type CVitaeEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeEducations to delete
     */
    where?: CVitaeEducationWhereInput
    /**
     * Limit how many CVitaeEducations to delete.
     */
    limit?: number
  }

  /**
   * CVitaeEducation without action
   */
  export type CVitaeEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeEducation
     */
    select?: CVitaeEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeEducation
     */
    omit?: CVitaeEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeEducationInclude<ExtArgs> | null
  }


  /**
   * Model CVitaeExperience
   */

  export type AggregateCVitaeExperience = {
    _count: CVitaeExperienceCountAggregateOutputType | null
    _min: CVitaeExperienceMinAggregateOutputType | null
    _max: CVitaeExperienceMaxAggregateOutputType | null
  }

  export type CVitaeExperienceMinAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    company: string | null
    position: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeExperienceMaxAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    company: string | null
    position: string | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeExperienceCountAggregateOutputType = {
    id: number
    cvitae_id: number
    company: number
    position: number
    start_date: number
    end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CVitaeExperienceMinAggregateInputType = {
    id?: true
    cvitae_id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeExperienceMaxAggregateInputType = {
    id?: true
    cvitae_id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeExperienceCountAggregateInputType = {
    id?: true
    cvitae_id?: true
    company?: true
    position?: true
    start_date?: true
    end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CVitaeExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeExperience to aggregate.
     */
    where?: CVitaeExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeExperiences to fetch.
     */
    orderBy?: CVitaeExperienceOrderByWithRelationInput | CVitaeExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVitaeExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVitaeExperiences
    **/
    _count?: true | CVitaeExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVitaeExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVitaeExperienceMaxAggregateInputType
  }

  export type GetCVitaeExperienceAggregateType<T extends CVitaeExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateCVitaeExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVitaeExperience[P]>
      : GetScalarType<T[P], AggregateCVitaeExperience[P]>
  }




  export type CVitaeExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeExperienceWhereInput
    orderBy?: CVitaeExperienceOrderByWithAggregationInput | CVitaeExperienceOrderByWithAggregationInput[]
    by: CVitaeExperienceScalarFieldEnum[] | CVitaeExperienceScalarFieldEnum
    having?: CVitaeExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVitaeExperienceCountAggregateInputType | true
    _min?: CVitaeExperienceMinAggregateInputType
    _max?: CVitaeExperienceMaxAggregateInputType
  }

  export type CVitaeExperienceGroupByOutputType = {
    id: string
    cvitae_id: string
    company: string
    position: string
    start_date: Date
    end_date: Date
    created_at: Date
    updated_at: Date
    _count: CVitaeExperienceCountAggregateOutputType | null
    _min: CVitaeExperienceMinAggregateOutputType | null
    _max: CVitaeExperienceMaxAggregateOutputType | null
  }

  type GetCVitaeExperienceGroupByPayload<T extends CVitaeExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVitaeExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVitaeExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVitaeExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], CVitaeExperienceGroupByOutputType[P]>
        }
      >
    >


  export type CVitaeExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cvitae_id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVitaeExperience"]>



  export type CVitaeExperienceSelectScalar = {
    id?: boolean
    cvitae_id?: boolean
    company?: boolean
    position?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CVitaeExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cvitae_id" | "company" | "position" | "start_date" | "end_date" | "created_at" | "updated_at", ExtArgs["result"]["cVitaeExperience"]>
  export type CVitaeExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }

  export type $CVitaeExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVitaeExperience"
    objects: {
      cvitae: Prisma.$CVitaePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cvitae_id: string
      company: string
      position: string
      start_date: Date
      end_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cVitaeExperience"]>
    composites: {}
  }

  type CVitaeExperienceGetPayload<S extends boolean | null | undefined | CVitaeExperienceDefaultArgs> = $Result.GetResult<Prisma.$CVitaeExperiencePayload, S>

  type CVitaeExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVitaeExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVitaeExperienceCountAggregateInputType | true
    }

  export interface CVitaeExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVitaeExperience'], meta: { name: 'CVitaeExperience' } }
    /**
     * Find zero or one CVitaeExperience that matches the filter.
     * @param {CVitaeExperienceFindUniqueArgs} args - Arguments to find a CVitaeExperience
     * @example
     * // Get one CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVitaeExperienceFindUniqueArgs>(args: SelectSubset<T, CVitaeExperienceFindUniqueArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CVitaeExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVitaeExperienceFindUniqueOrThrowArgs} args - Arguments to find a CVitaeExperience
     * @example
     * // Get one CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVitaeExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, CVitaeExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceFindFirstArgs} args - Arguments to find a CVitaeExperience
     * @example
     * // Get one CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVitaeExperienceFindFirstArgs>(args?: SelectSubset<T, CVitaeExperienceFindFirstArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceFindFirstOrThrowArgs} args - Arguments to find a CVitaeExperience
     * @example
     * // Get one CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVitaeExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, CVitaeExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVitaeExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVitaeExperiences
     * const cVitaeExperiences = await prisma.cVitaeExperience.findMany()
     * 
     * // Get first 10 CVitaeExperiences
     * const cVitaeExperiences = await prisma.cVitaeExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVitaeExperienceWithIdOnly = await prisma.cVitaeExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVitaeExperienceFindManyArgs>(args?: SelectSubset<T, CVitaeExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CVitaeExperience.
     * @param {CVitaeExperienceCreateArgs} args - Arguments to create a CVitaeExperience.
     * @example
     * // Create one CVitaeExperience
     * const CVitaeExperience = await prisma.cVitaeExperience.create({
     *   data: {
     *     // ... data to create a CVitaeExperience
     *   }
     * })
     * 
     */
    create<T extends CVitaeExperienceCreateArgs>(args: SelectSubset<T, CVitaeExperienceCreateArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVitaeExperiences.
     * @param {CVitaeExperienceCreateManyArgs} args - Arguments to create many CVitaeExperiences.
     * @example
     * // Create many CVitaeExperiences
     * const cVitaeExperience = await prisma.cVitaeExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVitaeExperienceCreateManyArgs>(args?: SelectSubset<T, CVitaeExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CVitaeExperience.
     * @param {CVitaeExperienceDeleteArgs} args - Arguments to delete one CVitaeExperience.
     * @example
     * // Delete one CVitaeExperience
     * const CVitaeExperience = await prisma.cVitaeExperience.delete({
     *   where: {
     *     // ... filter to delete one CVitaeExperience
     *   }
     * })
     * 
     */
    delete<T extends CVitaeExperienceDeleteArgs>(args: SelectSubset<T, CVitaeExperienceDeleteArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CVitaeExperience.
     * @param {CVitaeExperienceUpdateArgs} args - Arguments to update one CVitaeExperience.
     * @example
     * // Update one CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVitaeExperienceUpdateArgs>(args: SelectSubset<T, CVitaeExperienceUpdateArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVitaeExperiences.
     * @param {CVitaeExperienceDeleteManyArgs} args - Arguments to filter CVitaeExperiences to delete.
     * @example
     * // Delete a few CVitaeExperiences
     * const { count } = await prisma.cVitaeExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVitaeExperienceDeleteManyArgs>(args?: SelectSubset<T, CVitaeExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVitaeExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVitaeExperiences
     * const cVitaeExperience = await prisma.cVitaeExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVitaeExperienceUpdateManyArgs>(args: SelectSubset<T, CVitaeExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVitaeExperience.
     * @param {CVitaeExperienceUpsertArgs} args - Arguments to update or create a CVitaeExperience.
     * @example
     * // Update or create a CVitaeExperience
     * const cVitaeExperience = await prisma.cVitaeExperience.upsert({
     *   create: {
     *     // ... data to create a CVitaeExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVitaeExperience we want to update
     *   }
     * })
     */
    upsert<T extends CVitaeExperienceUpsertArgs>(args: SelectSubset<T, CVitaeExperienceUpsertArgs<ExtArgs>>): Prisma__CVitaeExperienceClient<$Result.GetResult<Prisma.$CVitaeExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVitaeExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceCountArgs} args - Arguments to filter CVitaeExperiences to count.
     * @example
     * // Count the number of CVitaeExperiences
     * const count = await prisma.cVitaeExperience.count({
     *   where: {
     *     // ... the filter for the CVitaeExperiences we want to count
     *   }
     * })
    **/
    count<T extends CVitaeExperienceCountArgs>(
      args?: Subset<T, CVitaeExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVitaeExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVitaeExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVitaeExperienceAggregateArgs>(args: Subset<T, CVitaeExperienceAggregateArgs>): Prisma.PrismaPromise<GetCVitaeExperienceAggregateType<T>>

    /**
     * Group by CVitaeExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVitaeExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVitaeExperienceGroupByArgs['orderBy'] }
        : { orderBy?: CVitaeExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVitaeExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVitaeExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVitaeExperience model
   */
  readonly fields: CVitaeExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVitaeExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVitaeExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cvitae<T extends CVitaeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVitaeDefaultArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVitaeExperience model
   */
  interface CVitaeExperienceFieldRefs {
    readonly id: FieldRef<"CVitaeExperience", 'String'>
    readonly cvitae_id: FieldRef<"CVitaeExperience", 'String'>
    readonly company: FieldRef<"CVitaeExperience", 'String'>
    readonly position: FieldRef<"CVitaeExperience", 'String'>
    readonly start_date: FieldRef<"CVitaeExperience", 'DateTime'>
    readonly end_date: FieldRef<"CVitaeExperience", 'DateTime'>
    readonly created_at: FieldRef<"CVitaeExperience", 'DateTime'>
    readonly updated_at: FieldRef<"CVitaeExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVitaeExperience findUnique
   */
  export type CVitaeExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeExperience to fetch.
     */
    where: CVitaeExperienceWhereUniqueInput
  }

  /**
   * CVitaeExperience findUniqueOrThrow
   */
  export type CVitaeExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeExperience to fetch.
     */
    where: CVitaeExperienceWhereUniqueInput
  }

  /**
   * CVitaeExperience findFirst
   */
  export type CVitaeExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeExperience to fetch.
     */
    where?: CVitaeExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeExperiences to fetch.
     */
    orderBy?: CVitaeExperienceOrderByWithRelationInput | CVitaeExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeExperiences.
     */
    cursor?: CVitaeExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeExperiences.
     */
    distinct?: CVitaeExperienceScalarFieldEnum | CVitaeExperienceScalarFieldEnum[]
  }

  /**
   * CVitaeExperience findFirstOrThrow
   */
  export type CVitaeExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeExperience to fetch.
     */
    where?: CVitaeExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeExperiences to fetch.
     */
    orderBy?: CVitaeExperienceOrderByWithRelationInput | CVitaeExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeExperiences.
     */
    cursor?: CVitaeExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeExperiences.
     */
    distinct?: CVitaeExperienceScalarFieldEnum | CVitaeExperienceScalarFieldEnum[]
  }

  /**
   * CVitaeExperience findMany
   */
  export type CVitaeExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeExperiences to fetch.
     */
    where?: CVitaeExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeExperiences to fetch.
     */
    orderBy?: CVitaeExperienceOrderByWithRelationInput | CVitaeExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVitaeExperiences.
     */
    cursor?: CVitaeExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeExperiences.
     */
    skip?: number
    distinct?: CVitaeExperienceScalarFieldEnum | CVitaeExperienceScalarFieldEnum[]
  }

  /**
   * CVitaeExperience create
   */
  export type CVitaeExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a CVitaeExperience.
     */
    data: XOR<CVitaeExperienceCreateInput, CVitaeExperienceUncheckedCreateInput>
  }

  /**
   * CVitaeExperience createMany
   */
  export type CVitaeExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVitaeExperiences.
     */
    data: CVitaeExperienceCreateManyInput | CVitaeExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVitaeExperience update
   */
  export type CVitaeExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a CVitaeExperience.
     */
    data: XOR<CVitaeExperienceUpdateInput, CVitaeExperienceUncheckedUpdateInput>
    /**
     * Choose, which CVitaeExperience to update.
     */
    where: CVitaeExperienceWhereUniqueInput
  }

  /**
   * CVitaeExperience updateMany
   */
  export type CVitaeExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVitaeExperiences.
     */
    data: XOR<CVitaeExperienceUpdateManyMutationInput, CVitaeExperienceUncheckedUpdateManyInput>
    /**
     * Filter which CVitaeExperiences to update
     */
    where?: CVitaeExperienceWhereInput
    /**
     * Limit how many CVitaeExperiences to update.
     */
    limit?: number
  }

  /**
   * CVitaeExperience upsert
   */
  export type CVitaeExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the CVitaeExperience to update in case it exists.
     */
    where: CVitaeExperienceWhereUniqueInput
    /**
     * In case the CVitaeExperience found by the `where` argument doesn't exist, create a new CVitaeExperience with this data.
     */
    create: XOR<CVitaeExperienceCreateInput, CVitaeExperienceUncheckedCreateInput>
    /**
     * In case the CVitaeExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVitaeExperienceUpdateInput, CVitaeExperienceUncheckedUpdateInput>
  }

  /**
   * CVitaeExperience delete
   */
  export type CVitaeExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
    /**
     * Filter which CVitaeExperience to delete.
     */
    where: CVitaeExperienceWhereUniqueInput
  }

  /**
   * CVitaeExperience deleteMany
   */
  export type CVitaeExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeExperiences to delete
     */
    where?: CVitaeExperienceWhereInput
    /**
     * Limit how many CVitaeExperiences to delete.
     */
    limit?: number
  }

  /**
   * CVitaeExperience without action
   */
  export type CVitaeExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeExperience
     */
    select?: CVitaeExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeExperience
     */
    omit?: CVitaeExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeExperienceInclude<ExtArgs> | null
  }


  /**
   * Model CVitaeSkill
   */

  export type AggregateCVitaeSkill = {
    _count: CVitaeSkillCountAggregateOutputType | null
    _avg: CVitaeSkillAvgAggregateOutputType | null
    _sum: CVitaeSkillSumAggregateOutputType | null
    _min: CVitaeSkillMinAggregateOutputType | null
    _max: CVitaeSkillMaxAggregateOutputType | null
  }

  export type CVitaeSkillAvgAggregateOutputType = {
    level: number | null
  }

  export type CVitaeSkillSumAggregateOutputType = {
    level: number | null
  }

  export type CVitaeSkillMinAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    skill: string | null
    level: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeSkillMaxAggregateOutputType = {
    id: string | null
    cvitae_id: string | null
    skill: string | null
    level: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeSkillCountAggregateOutputType = {
    id: number
    cvitae_id: number
    skill: number
    level: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CVitaeSkillAvgAggregateInputType = {
    level?: true
  }

  export type CVitaeSkillSumAggregateInputType = {
    level?: true
  }

  export type CVitaeSkillMinAggregateInputType = {
    id?: true
    cvitae_id?: true
    skill?: true
    level?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeSkillMaxAggregateInputType = {
    id?: true
    cvitae_id?: true
    skill?: true
    level?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeSkillCountAggregateInputType = {
    id?: true
    cvitae_id?: true
    skill?: true
    level?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CVitaeSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeSkill to aggregate.
     */
    where?: CVitaeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeSkills to fetch.
     */
    orderBy?: CVitaeSkillOrderByWithRelationInput | CVitaeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVitaeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVitaeSkills
    **/
    _count?: true | CVitaeSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CVitaeSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CVitaeSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVitaeSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVitaeSkillMaxAggregateInputType
  }

  export type GetCVitaeSkillAggregateType<T extends CVitaeSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateCVitaeSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVitaeSkill[P]>
      : GetScalarType<T[P], AggregateCVitaeSkill[P]>
  }




  export type CVitaeSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeSkillWhereInput
    orderBy?: CVitaeSkillOrderByWithAggregationInput | CVitaeSkillOrderByWithAggregationInput[]
    by: CVitaeSkillScalarFieldEnum[] | CVitaeSkillScalarFieldEnum
    having?: CVitaeSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVitaeSkillCountAggregateInputType | true
    _avg?: CVitaeSkillAvgAggregateInputType
    _sum?: CVitaeSkillSumAggregateInputType
    _min?: CVitaeSkillMinAggregateInputType
    _max?: CVitaeSkillMaxAggregateInputType
  }

  export type CVitaeSkillGroupByOutputType = {
    id: string
    cvitae_id: string
    skill: string
    level: number
    created_at: Date
    updated_at: Date
    _count: CVitaeSkillCountAggregateOutputType | null
    _avg: CVitaeSkillAvgAggregateOutputType | null
    _sum: CVitaeSkillSumAggregateOutputType | null
    _min: CVitaeSkillMinAggregateOutputType | null
    _max: CVitaeSkillMaxAggregateOutputType | null
  }

  type GetCVitaeSkillGroupByPayload<T extends CVitaeSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVitaeSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVitaeSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVitaeSkillGroupByOutputType[P]>
            : GetScalarType<T[P], CVitaeSkillGroupByOutputType[P]>
        }
      >
    >


  export type CVitaeSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cvitae_id?: boolean
    skill?: boolean
    level?: boolean
    created_at?: boolean
    updated_at?: boolean
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVitaeSkill"]>



  export type CVitaeSkillSelectScalar = {
    id?: boolean
    cvitae_id?: boolean
    skill?: boolean
    level?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CVitaeSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cvitae_id" | "skill" | "level" | "created_at" | "updated_at", ExtArgs["result"]["cVitaeSkill"]>
  export type CVitaeSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvitae?: boolean | CVitaeDefaultArgs<ExtArgs>
  }

  export type $CVitaeSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVitaeSkill"
    objects: {
      cvitae: Prisma.$CVitaePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cvitae_id: string
      skill: string
      level: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cVitaeSkill"]>
    composites: {}
  }

  type CVitaeSkillGetPayload<S extends boolean | null | undefined | CVitaeSkillDefaultArgs> = $Result.GetResult<Prisma.$CVitaeSkillPayload, S>

  type CVitaeSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVitaeSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVitaeSkillCountAggregateInputType | true
    }

  export interface CVitaeSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVitaeSkill'], meta: { name: 'CVitaeSkill' } }
    /**
     * Find zero or one CVitaeSkill that matches the filter.
     * @param {CVitaeSkillFindUniqueArgs} args - Arguments to find a CVitaeSkill
     * @example
     * // Get one CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVitaeSkillFindUniqueArgs>(args: SelectSubset<T, CVitaeSkillFindUniqueArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CVitaeSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVitaeSkillFindUniqueOrThrowArgs} args - Arguments to find a CVitaeSkill
     * @example
     * // Get one CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVitaeSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, CVitaeSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillFindFirstArgs} args - Arguments to find a CVitaeSkill
     * @example
     * // Get one CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVitaeSkillFindFirstArgs>(args?: SelectSubset<T, CVitaeSkillFindFirstArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillFindFirstOrThrowArgs} args - Arguments to find a CVitaeSkill
     * @example
     * // Get one CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVitaeSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, CVitaeSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVitaeSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVitaeSkills
     * const cVitaeSkills = await prisma.cVitaeSkill.findMany()
     * 
     * // Get first 10 CVitaeSkills
     * const cVitaeSkills = await prisma.cVitaeSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVitaeSkillWithIdOnly = await prisma.cVitaeSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVitaeSkillFindManyArgs>(args?: SelectSubset<T, CVitaeSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CVitaeSkill.
     * @param {CVitaeSkillCreateArgs} args - Arguments to create a CVitaeSkill.
     * @example
     * // Create one CVitaeSkill
     * const CVitaeSkill = await prisma.cVitaeSkill.create({
     *   data: {
     *     // ... data to create a CVitaeSkill
     *   }
     * })
     * 
     */
    create<T extends CVitaeSkillCreateArgs>(args: SelectSubset<T, CVitaeSkillCreateArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVitaeSkills.
     * @param {CVitaeSkillCreateManyArgs} args - Arguments to create many CVitaeSkills.
     * @example
     * // Create many CVitaeSkills
     * const cVitaeSkill = await prisma.cVitaeSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVitaeSkillCreateManyArgs>(args?: SelectSubset<T, CVitaeSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CVitaeSkill.
     * @param {CVitaeSkillDeleteArgs} args - Arguments to delete one CVitaeSkill.
     * @example
     * // Delete one CVitaeSkill
     * const CVitaeSkill = await prisma.cVitaeSkill.delete({
     *   where: {
     *     // ... filter to delete one CVitaeSkill
     *   }
     * })
     * 
     */
    delete<T extends CVitaeSkillDeleteArgs>(args: SelectSubset<T, CVitaeSkillDeleteArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CVitaeSkill.
     * @param {CVitaeSkillUpdateArgs} args - Arguments to update one CVitaeSkill.
     * @example
     * // Update one CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVitaeSkillUpdateArgs>(args: SelectSubset<T, CVitaeSkillUpdateArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVitaeSkills.
     * @param {CVitaeSkillDeleteManyArgs} args - Arguments to filter CVitaeSkills to delete.
     * @example
     * // Delete a few CVitaeSkills
     * const { count } = await prisma.cVitaeSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVitaeSkillDeleteManyArgs>(args?: SelectSubset<T, CVitaeSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVitaeSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVitaeSkills
     * const cVitaeSkill = await prisma.cVitaeSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVitaeSkillUpdateManyArgs>(args: SelectSubset<T, CVitaeSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVitaeSkill.
     * @param {CVitaeSkillUpsertArgs} args - Arguments to update or create a CVitaeSkill.
     * @example
     * // Update or create a CVitaeSkill
     * const cVitaeSkill = await prisma.cVitaeSkill.upsert({
     *   create: {
     *     // ... data to create a CVitaeSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVitaeSkill we want to update
     *   }
     * })
     */
    upsert<T extends CVitaeSkillUpsertArgs>(args: SelectSubset<T, CVitaeSkillUpsertArgs<ExtArgs>>): Prisma__CVitaeSkillClient<$Result.GetResult<Prisma.$CVitaeSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVitaeSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillCountArgs} args - Arguments to filter CVitaeSkills to count.
     * @example
     * // Count the number of CVitaeSkills
     * const count = await prisma.cVitaeSkill.count({
     *   where: {
     *     // ... the filter for the CVitaeSkills we want to count
     *   }
     * })
    **/
    count<T extends CVitaeSkillCountArgs>(
      args?: Subset<T, CVitaeSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVitaeSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVitaeSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVitaeSkillAggregateArgs>(args: Subset<T, CVitaeSkillAggregateArgs>): Prisma.PrismaPromise<GetCVitaeSkillAggregateType<T>>

    /**
     * Group by CVitaeSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVitaeSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVitaeSkillGroupByArgs['orderBy'] }
        : { orderBy?: CVitaeSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVitaeSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVitaeSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVitaeSkill model
   */
  readonly fields: CVitaeSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVitaeSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVitaeSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cvitae<T extends CVitaeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVitaeDefaultArgs<ExtArgs>>): Prisma__CVitaeClient<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVitaeSkill model
   */
  interface CVitaeSkillFieldRefs {
    readonly id: FieldRef<"CVitaeSkill", 'String'>
    readonly cvitae_id: FieldRef<"CVitaeSkill", 'String'>
    readonly skill: FieldRef<"CVitaeSkill", 'String'>
    readonly level: FieldRef<"CVitaeSkill", 'Int'>
    readonly created_at: FieldRef<"CVitaeSkill", 'DateTime'>
    readonly updated_at: FieldRef<"CVitaeSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVitaeSkill findUnique
   */
  export type CVitaeSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeSkill to fetch.
     */
    where: CVitaeSkillWhereUniqueInput
  }

  /**
   * CVitaeSkill findUniqueOrThrow
   */
  export type CVitaeSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeSkill to fetch.
     */
    where: CVitaeSkillWhereUniqueInput
  }

  /**
   * CVitaeSkill findFirst
   */
  export type CVitaeSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeSkill to fetch.
     */
    where?: CVitaeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeSkills to fetch.
     */
    orderBy?: CVitaeSkillOrderByWithRelationInput | CVitaeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeSkills.
     */
    cursor?: CVitaeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeSkills.
     */
    distinct?: CVitaeSkillScalarFieldEnum | CVitaeSkillScalarFieldEnum[]
  }

  /**
   * CVitaeSkill findFirstOrThrow
   */
  export type CVitaeSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeSkill to fetch.
     */
    where?: CVitaeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeSkills to fetch.
     */
    orderBy?: CVitaeSkillOrderByWithRelationInput | CVitaeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeSkills.
     */
    cursor?: CVitaeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeSkills.
     */
    distinct?: CVitaeSkillScalarFieldEnum | CVitaeSkillScalarFieldEnum[]
  }

  /**
   * CVitaeSkill findMany
   */
  export type CVitaeSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeSkills to fetch.
     */
    where?: CVitaeSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeSkills to fetch.
     */
    orderBy?: CVitaeSkillOrderByWithRelationInput | CVitaeSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVitaeSkills.
     */
    cursor?: CVitaeSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeSkills.
     */
    skip?: number
    distinct?: CVitaeSkillScalarFieldEnum | CVitaeSkillScalarFieldEnum[]
  }

  /**
   * CVitaeSkill create
   */
  export type CVitaeSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a CVitaeSkill.
     */
    data: XOR<CVitaeSkillCreateInput, CVitaeSkillUncheckedCreateInput>
  }

  /**
   * CVitaeSkill createMany
   */
  export type CVitaeSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVitaeSkills.
     */
    data: CVitaeSkillCreateManyInput | CVitaeSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVitaeSkill update
   */
  export type CVitaeSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a CVitaeSkill.
     */
    data: XOR<CVitaeSkillUpdateInput, CVitaeSkillUncheckedUpdateInput>
    /**
     * Choose, which CVitaeSkill to update.
     */
    where: CVitaeSkillWhereUniqueInput
  }

  /**
   * CVitaeSkill updateMany
   */
  export type CVitaeSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVitaeSkills.
     */
    data: XOR<CVitaeSkillUpdateManyMutationInput, CVitaeSkillUncheckedUpdateManyInput>
    /**
     * Filter which CVitaeSkills to update
     */
    where?: CVitaeSkillWhereInput
    /**
     * Limit how many CVitaeSkills to update.
     */
    limit?: number
  }

  /**
   * CVitaeSkill upsert
   */
  export type CVitaeSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the CVitaeSkill to update in case it exists.
     */
    where: CVitaeSkillWhereUniqueInput
    /**
     * In case the CVitaeSkill found by the `where` argument doesn't exist, create a new CVitaeSkill with this data.
     */
    create: XOR<CVitaeSkillCreateInput, CVitaeSkillUncheckedCreateInput>
    /**
     * In case the CVitaeSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVitaeSkillUpdateInput, CVitaeSkillUncheckedUpdateInput>
  }

  /**
   * CVitaeSkill delete
   */
  export type CVitaeSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
    /**
     * Filter which CVitaeSkill to delete.
     */
    where: CVitaeSkillWhereUniqueInput
  }

  /**
   * CVitaeSkill deleteMany
   */
  export type CVitaeSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeSkills to delete
     */
    where?: CVitaeSkillWhereInput
    /**
     * Limit how many CVitaeSkills to delete.
     */
    limit?: number
  }

  /**
   * CVitaeSkill without action
   */
  export type CVitaeSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeSkill
     */
    select?: CVitaeSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeSkill
     */
    omit?: CVitaeSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeSkillInclude<ExtArgs> | null
  }


  /**
   * Model CVitaeTemplate
   */

  export type AggregateCVitaeTemplate = {
    _count: CVitaeTemplateCountAggregateOutputType | null
    _min: CVitaeTemplateMinAggregateOutputType | null
    _max: CVitaeTemplateMaxAggregateOutputType | null
  }

  export type CVitaeTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CVitaeTemplateCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CVitaeTemplateMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CVitaeTemplateCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CVitaeTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeTemplate to aggregate.
     */
    where?: CVitaeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeTemplates to fetch.
     */
    orderBy?: CVitaeTemplateOrderByWithRelationInput | CVitaeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVitaeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVitaeTemplates
    **/
    _count?: true | CVitaeTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVitaeTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVitaeTemplateMaxAggregateInputType
  }

  export type GetCVitaeTemplateAggregateType<T extends CVitaeTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateCVitaeTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCVitaeTemplate[P]>
      : GetScalarType<T[P], AggregateCVitaeTemplate[P]>
  }




  export type CVitaeTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVitaeTemplateWhereInput
    orderBy?: CVitaeTemplateOrderByWithAggregationInput | CVitaeTemplateOrderByWithAggregationInput[]
    by: CVitaeTemplateScalarFieldEnum[] | CVitaeTemplateScalarFieldEnum
    having?: CVitaeTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVitaeTemplateCountAggregateInputType | true
    _min?: CVitaeTemplateMinAggregateInputType
    _max?: CVitaeTemplateMaxAggregateInputType
  }

  export type CVitaeTemplateGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: CVitaeTemplateCountAggregateOutputType | null
    _min: CVitaeTemplateMinAggregateOutputType | null
    _max: CVitaeTemplateMaxAggregateOutputType | null
  }

  type GetCVitaeTemplateGroupByPayload<T extends CVitaeTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVitaeTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVitaeTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVitaeTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], CVitaeTemplateGroupByOutputType[P]>
        }
      >
    >


  export type CVitaeTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    CVitae?: boolean | CVitaeTemplate$CVitaeArgs<ExtArgs>
    _count?: boolean | CVitaeTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cVitaeTemplate"]>



  export type CVitaeTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CVitaeTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["cVitaeTemplate"]>
  export type CVitaeTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CVitae?: boolean | CVitaeTemplate$CVitaeArgs<ExtArgs>
    _count?: boolean | CVitaeTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CVitaeTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CVitaeTemplate"
    objects: {
      CVitae: Prisma.$CVitaePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cVitaeTemplate"]>
    composites: {}
  }

  type CVitaeTemplateGetPayload<S extends boolean | null | undefined | CVitaeTemplateDefaultArgs> = $Result.GetResult<Prisma.$CVitaeTemplatePayload, S>

  type CVitaeTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVitaeTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVitaeTemplateCountAggregateInputType | true
    }

  export interface CVitaeTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CVitaeTemplate'], meta: { name: 'CVitaeTemplate' } }
    /**
     * Find zero or one CVitaeTemplate that matches the filter.
     * @param {CVitaeTemplateFindUniqueArgs} args - Arguments to find a CVitaeTemplate
     * @example
     * // Get one CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVitaeTemplateFindUniqueArgs>(args: SelectSubset<T, CVitaeTemplateFindUniqueArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CVitaeTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVitaeTemplateFindUniqueOrThrowArgs} args - Arguments to find a CVitaeTemplate
     * @example
     * // Get one CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVitaeTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, CVitaeTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateFindFirstArgs} args - Arguments to find a CVitaeTemplate
     * @example
     * // Get one CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVitaeTemplateFindFirstArgs>(args?: SelectSubset<T, CVitaeTemplateFindFirstArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CVitaeTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateFindFirstOrThrowArgs} args - Arguments to find a CVitaeTemplate
     * @example
     * // Get one CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVitaeTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, CVitaeTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CVitaeTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVitaeTemplates
     * const cVitaeTemplates = await prisma.cVitaeTemplate.findMany()
     * 
     * // Get first 10 CVitaeTemplates
     * const cVitaeTemplates = await prisma.cVitaeTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVitaeTemplateWithIdOnly = await prisma.cVitaeTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVitaeTemplateFindManyArgs>(args?: SelectSubset<T, CVitaeTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CVitaeTemplate.
     * @param {CVitaeTemplateCreateArgs} args - Arguments to create a CVitaeTemplate.
     * @example
     * // Create one CVitaeTemplate
     * const CVitaeTemplate = await prisma.cVitaeTemplate.create({
     *   data: {
     *     // ... data to create a CVitaeTemplate
     *   }
     * })
     * 
     */
    create<T extends CVitaeTemplateCreateArgs>(args: SelectSubset<T, CVitaeTemplateCreateArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CVitaeTemplates.
     * @param {CVitaeTemplateCreateManyArgs} args - Arguments to create many CVitaeTemplates.
     * @example
     * // Create many CVitaeTemplates
     * const cVitaeTemplate = await prisma.cVitaeTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVitaeTemplateCreateManyArgs>(args?: SelectSubset<T, CVitaeTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CVitaeTemplate.
     * @param {CVitaeTemplateDeleteArgs} args - Arguments to delete one CVitaeTemplate.
     * @example
     * // Delete one CVitaeTemplate
     * const CVitaeTemplate = await prisma.cVitaeTemplate.delete({
     *   where: {
     *     // ... filter to delete one CVitaeTemplate
     *   }
     * })
     * 
     */
    delete<T extends CVitaeTemplateDeleteArgs>(args: SelectSubset<T, CVitaeTemplateDeleteArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CVitaeTemplate.
     * @param {CVitaeTemplateUpdateArgs} args - Arguments to update one CVitaeTemplate.
     * @example
     * // Update one CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVitaeTemplateUpdateArgs>(args: SelectSubset<T, CVitaeTemplateUpdateArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CVitaeTemplates.
     * @param {CVitaeTemplateDeleteManyArgs} args - Arguments to filter CVitaeTemplates to delete.
     * @example
     * // Delete a few CVitaeTemplates
     * const { count } = await prisma.cVitaeTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVitaeTemplateDeleteManyArgs>(args?: SelectSubset<T, CVitaeTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVitaeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVitaeTemplates
     * const cVitaeTemplate = await prisma.cVitaeTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVitaeTemplateUpdateManyArgs>(args: SelectSubset<T, CVitaeTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CVitaeTemplate.
     * @param {CVitaeTemplateUpsertArgs} args - Arguments to update or create a CVitaeTemplate.
     * @example
     * // Update or create a CVitaeTemplate
     * const cVitaeTemplate = await prisma.cVitaeTemplate.upsert({
     *   create: {
     *     // ... data to create a CVitaeTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CVitaeTemplate we want to update
     *   }
     * })
     */
    upsert<T extends CVitaeTemplateUpsertArgs>(args: SelectSubset<T, CVitaeTemplateUpsertArgs<ExtArgs>>): Prisma__CVitaeTemplateClient<$Result.GetResult<Prisma.$CVitaeTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CVitaeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateCountArgs} args - Arguments to filter CVitaeTemplates to count.
     * @example
     * // Count the number of CVitaeTemplates
     * const count = await prisma.cVitaeTemplate.count({
     *   where: {
     *     // ... the filter for the CVitaeTemplates we want to count
     *   }
     * })
    **/
    count<T extends CVitaeTemplateCountArgs>(
      args?: Subset<T, CVitaeTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVitaeTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CVitaeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVitaeTemplateAggregateArgs>(args: Subset<T, CVitaeTemplateAggregateArgs>): Prisma.PrismaPromise<GetCVitaeTemplateAggregateType<T>>

    /**
     * Group by CVitaeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVitaeTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVitaeTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVitaeTemplateGroupByArgs['orderBy'] }
        : { orderBy?: CVitaeTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVitaeTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVitaeTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CVitaeTemplate model
   */
  readonly fields: CVitaeTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CVitaeTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVitaeTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CVitae<T extends CVitaeTemplate$CVitaeArgs<ExtArgs> = {}>(args?: Subset<T, CVitaeTemplate$CVitaeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVitaePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CVitaeTemplate model
   */
  interface CVitaeTemplateFieldRefs {
    readonly id: FieldRef<"CVitaeTemplate", 'String'>
    readonly name: FieldRef<"CVitaeTemplate", 'String'>
    readonly created_at: FieldRef<"CVitaeTemplate", 'DateTime'>
    readonly updated_at: FieldRef<"CVitaeTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CVitaeTemplate findUnique
   */
  export type CVitaeTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeTemplate to fetch.
     */
    where: CVitaeTemplateWhereUniqueInput
  }

  /**
   * CVitaeTemplate findUniqueOrThrow
   */
  export type CVitaeTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeTemplate to fetch.
     */
    where: CVitaeTemplateWhereUniqueInput
  }

  /**
   * CVitaeTemplate findFirst
   */
  export type CVitaeTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeTemplate to fetch.
     */
    where?: CVitaeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeTemplates to fetch.
     */
    orderBy?: CVitaeTemplateOrderByWithRelationInput | CVitaeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeTemplates.
     */
    cursor?: CVitaeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeTemplates.
     */
    distinct?: CVitaeTemplateScalarFieldEnum | CVitaeTemplateScalarFieldEnum[]
  }

  /**
   * CVitaeTemplate findFirstOrThrow
   */
  export type CVitaeTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeTemplate to fetch.
     */
    where?: CVitaeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeTemplates to fetch.
     */
    orderBy?: CVitaeTemplateOrderByWithRelationInput | CVitaeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVitaeTemplates.
     */
    cursor?: CVitaeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVitaeTemplates.
     */
    distinct?: CVitaeTemplateScalarFieldEnum | CVitaeTemplateScalarFieldEnum[]
  }

  /**
   * CVitaeTemplate findMany
   */
  export type CVitaeTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter, which CVitaeTemplates to fetch.
     */
    where?: CVitaeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVitaeTemplates to fetch.
     */
    orderBy?: CVitaeTemplateOrderByWithRelationInput | CVitaeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVitaeTemplates.
     */
    cursor?: CVitaeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVitaeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVitaeTemplates.
     */
    skip?: number
    distinct?: CVitaeTemplateScalarFieldEnum | CVitaeTemplateScalarFieldEnum[]
  }

  /**
   * CVitaeTemplate create
   */
  export type CVitaeTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a CVitaeTemplate.
     */
    data: XOR<CVitaeTemplateCreateInput, CVitaeTemplateUncheckedCreateInput>
  }

  /**
   * CVitaeTemplate createMany
   */
  export type CVitaeTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVitaeTemplates.
     */
    data: CVitaeTemplateCreateManyInput | CVitaeTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CVitaeTemplate update
   */
  export type CVitaeTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a CVitaeTemplate.
     */
    data: XOR<CVitaeTemplateUpdateInput, CVitaeTemplateUncheckedUpdateInput>
    /**
     * Choose, which CVitaeTemplate to update.
     */
    where: CVitaeTemplateWhereUniqueInput
  }

  /**
   * CVitaeTemplate updateMany
   */
  export type CVitaeTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVitaeTemplates.
     */
    data: XOR<CVitaeTemplateUpdateManyMutationInput, CVitaeTemplateUncheckedUpdateManyInput>
    /**
     * Filter which CVitaeTemplates to update
     */
    where?: CVitaeTemplateWhereInput
    /**
     * Limit how many CVitaeTemplates to update.
     */
    limit?: number
  }

  /**
   * CVitaeTemplate upsert
   */
  export type CVitaeTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the CVitaeTemplate to update in case it exists.
     */
    where: CVitaeTemplateWhereUniqueInput
    /**
     * In case the CVitaeTemplate found by the `where` argument doesn't exist, create a new CVitaeTemplate with this data.
     */
    create: XOR<CVitaeTemplateCreateInput, CVitaeTemplateUncheckedCreateInput>
    /**
     * In case the CVitaeTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVitaeTemplateUpdateInput, CVitaeTemplateUncheckedUpdateInput>
  }

  /**
   * CVitaeTemplate delete
   */
  export type CVitaeTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
    /**
     * Filter which CVitaeTemplate to delete.
     */
    where: CVitaeTemplateWhereUniqueInput
  }

  /**
   * CVitaeTemplate deleteMany
   */
  export type CVitaeTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVitaeTemplates to delete
     */
    where?: CVitaeTemplateWhereInput
    /**
     * Limit how many CVitaeTemplates to delete.
     */
    limit?: number
  }

  /**
   * CVitaeTemplate.CVitae
   */
  export type CVitaeTemplate$CVitaeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitae
     */
    select?: CVitaeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitae
     */
    omit?: CVitaeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeInclude<ExtArgs> | null
    where?: CVitaeWhereInput
    orderBy?: CVitaeOrderByWithRelationInput | CVitaeOrderByWithRelationInput[]
    cursor?: CVitaeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVitaeScalarFieldEnum | CVitaeScalarFieldEnum[]
  }

  /**
   * CVitaeTemplate without action
   */
  export type CVitaeTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVitaeTemplate
     */
    select?: CVitaeTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CVitaeTemplate
     */
    omit?: CVitaeTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVitaeTemplateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CVitaeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    summary: 'summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CVitaeScalarFieldEnum = (typeof CVitaeScalarFieldEnum)[keyof typeof CVitaeScalarFieldEnum]


  export const CVitaeEducationScalarFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    school: 'school',
    degree: 'degree',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CVitaeEducationScalarFieldEnum = (typeof CVitaeEducationScalarFieldEnum)[keyof typeof CVitaeEducationScalarFieldEnum]


  export const CVitaeExperienceScalarFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    company: 'company',
    position: 'position',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CVitaeExperienceScalarFieldEnum = (typeof CVitaeExperienceScalarFieldEnum)[keyof typeof CVitaeExperienceScalarFieldEnum]


  export const CVitaeSkillScalarFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    skill: 'skill',
    level: 'level',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CVitaeSkillScalarFieldEnum = (typeof CVitaeSkillScalarFieldEnum)[keyof typeof CVitaeSkillScalarFieldEnum]


  export const CVitaeTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CVitaeTemplateScalarFieldEnum = (typeof CVitaeTemplateScalarFieldEnum)[keyof typeof CVitaeTemplateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CVitaeOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    summary: 'summary'
  };

  export type CVitaeOrderByRelevanceFieldEnum = (typeof CVitaeOrderByRelevanceFieldEnum)[keyof typeof CVitaeOrderByRelevanceFieldEnum]


  export const CVitaeEducationOrderByRelevanceFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    school: 'school',
    degree: 'degree'
  };

  export type CVitaeEducationOrderByRelevanceFieldEnum = (typeof CVitaeEducationOrderByRelevanceFieldEnum)[keyof typeof CVitaeEducationOrderByRelevanceFieldEnum]


  export const CVitaeExperienceOrderByRelevanceFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    company: 'company',
    position: 'position'
  };

  export type CVitaeExperienceOrderByRelevanceFieldEnum = (typeof CVitaeExperienceOrderByRelevanceFieldEnum)[keyof typeof CVitaeExperienceOrderByRelevanceFieldEnum]


  export const CVitaeSkillOrderByRelevanceFieldEnum: {
    id: 'id',
    cvitae_id: 'cvitae_id',
    skill: 'skill'
  };

  export type CVitaeSkillOrderByRelevanceFieldEnum = (typeof CVitaeSkillOrderByRelevanceFieldEnum)[keyof typeof CVitaeSkillOrderByRelevanceFieldEnum]


  export const CVitaeTemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CVitaeTemplateOrderByRelevanceFieldEnum = (typeof CVitaeTemplateOrderByRelevanceFieldEnum)[keyof typeof CVitaeTemplateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    CVitae?: CVitaeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    CVitae?: CVitaeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    CVitae?: CVitaeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CVitaeWhereInput = {
    AND?: CVitaeWhereInput | CVitaeWhereInput[]
    OR?: CVitaeWhereInput[]
    NOT?: CVitaeWhereInput | CVitaeWhereInput[]
    id?: StringFilter<"CVitae"> | string
    user_id?: BigIntFilter<"CVitae"> | bigint | number
    name?: StringFilter<"CVitae"> | string
    email?: StringFilter<"CVitae"> | string
    phone?: StringFilter<"CVitae"> | string
    address?: StringFilter<"CVitae"> | string
    summary?: StringFilter<"CVitae"> | string
    created_at?: DateTimeFilter<"CVitae"> | Date | string
    updated_at?: DateTimeFilter<"CVitae"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CVitaeEducation?: CVitaeEducationListRelationFilter
    CVitaeExperience?: CVitaeExperienceListRelationFilter
    CVitaeSkill?: CVitaeSkillListRelationFilter
    CVitaeTemplate?: CVitaeTemplateListRelationFilter
  }

  export type CVitaeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    CVitaeEducation?: CVitaeEducationOrderByRelationAggregateInput
    CVitaeExperience?: CVitaeExperienceOrderByRelationAggregateInput
    CVitaeSkill?: CVitaeSkillOrderByRelationAggregateInput
    CVitaeTemplate?: CVitaeTemplateOrderByRelationAggregateInput
    _relevance?: CVitaeOrderByRelevanceInput
  }

  export type CVitaeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CVitaeWhereInput | CVitaeWhereInput[]
    OR?: CVitaeWhereInput[]
    NOT?: CVitaeWhereInput | CVitaeWhereInput[]
    user_id?: BigIntFilter<"CVitae"> | bigint | number
    name?: StringFilter<"CVitae"> | string
    email?: StringFilter<"CVitae"> | string
    phone?: StringFilter<"CVitae"> | string
    address?: StringFilter<"CVitae"> | string
    summary?: StringFilter<"CVitae"> | string
    created_at?: DateTimeFilter<"CVitae"> | Date | string
    updated_at?: DateTimeFilter<"CVitae"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CVitaeEducation?: CVitaeEducationListRelationFilter
    CVitaeExperience?: CVitaeExperienceListRelationFilter
    CVitaeSkill?: CVitaeSkillListRelationFilter
    CVitaeTemplate?: CVitaeTemplateListRelationFilter
  }, "id">

  export type CVitaeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CVitaeCountOrderByAggregateInput
    _avg?: CVitaeAvgOrderByAggregateInput
    _max?: CVitaeMaxOrderByAggregateInput
    _min?: CVitaeMinOrderByAggregateInput
    _sum?: CVitaeSumOrderByAggregateInput
  }

  export type CVitaeScalarWhereWithAggregatesInput = {
    AND?: CVitaeScalarWhereWithAggregatesInput | CVitaeScalarWhereWithAggregatesInput[]
    OR?: CVitaeScalarWhereWithAggregatesInput[]
    NOT?: CVitaeScalarWhereWithAggregatesInput | CVitaeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CVitae"> | string
    user_id?: BigIntWithAggregatesFilter<"CVitae"> | bigint | number
    name?: StringWithAggregatesFilter<"CVitae"> | string
    email?: StringWithAggregatesFilter<"CVitae"> | string
    phone?: StringWithAggregatesFilter<"CVitae"> | string
    address?: StringWithAggregatesFilter<"CVitae"> | string
    summary?: StringWithAggregatesFilter<"CVitae"> | string
    created_at?: DateTimeWithAggregatesFilter<"CVitae"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CVitae"> | Date | string
  }

  export type CVitaeEducationWhereInput = {
    AND?: CVitaeEducationWhereInput | CVitaeEducationWhereInput[]
    OR?: CVitaeEducationWhereInput[]
    NOT?: CVitaeEducationWhereInput | CVitaeEducationWhereInput[]
    id?: StringFilter<"CVitaeEducation"> | string
    cvitae_id?: StringFilter<"CVitaeEducation"> | string
    school?: StringFilter<"CVitaeEducation"> | string
    degree?: StringFilter<"CVitaeEducation"> | string
    start_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    end_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    created_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }

  export type CVitaeEducationOrderByWithRelationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cvitae?: CVitaeOrderByWithRelationInput
    _relevance?: CVitaeEducationOrderByRelevanceInput
  }

  export type CVitaeEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CVitaeEducationWhereInput | CVitaeEducationWhereInput[]
    OR?: CVitaeEducationWhereInput[]
    NOT?: CVitaeEducationWhereInput | CVitaeEducationWhereInput[]
    cvitae_id?: StringFilter<"CVitaeEducation"> | string
    school?: StringFilter<"CVitaeEducation"> | string
    degree?: StringFilter<"CVitaeEducation"> | string
    start_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    end_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    created_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }, "id">

  export type CVitaeEducationOrderByWithAggregationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CVitaeEducationCountOrderByAggregateInput
    _max?: CVitaeEducationMaxOrderByAggregateInput
    _min?: CVitaeEducationMinOrderByAggregateInput
  }

  export type CVitaeEducationScalarWhereWithAggregatesInput = {
    AND?: CVitaeEducationScalarWhereWithAggregatesInput | CVitaeEducationScalarWhereWithAggregatesInput[]
    OR?: CVitaeEducationScalarWhereWithAggregatesInput[]
    NOT?: CVitaeEducationScalarWhereWithAggregatesInput | CVitaeEducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CVitaeEducation"> | string
    cvitae_id?: StringWithAggregatesFilter<"CVitaeEducation"> | string
    school?: StringWithAggregatesFilter<"CVitaeEducation"> | string
    degree?: StringWithAggregatesFilter<"CVitaeEducation"> | string
    start_date?: DateTimeWithAggregatesFilter<"CVitaeEducation"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"CVitaeEducation"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"CVitaeEducation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CVitaeEducation"> | Date | string
  }

  export type CVitaeExperienceWhereInput = {
    AND?: CVitaeExperienceWhereInput | CVitaeExperienceWhereInput[]
    OR?: CVitaeExperienceWhereInput[]
    NOT?: CVitaeExperienceWhereInput | CVitaeExperienceWhereInput[]
    id?: StringFilter<"CVitaeExperience"> | string
    cvitae_id?: StringFilter<"CVitaeExperience"> | string
    company?: StringFilter<"CVitaeExperience"> | string
    position?: StringFilter<"CVitaeExperience"> | string
    start_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    end_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    created_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }

  export type CVitaeExperienceOrderByWithRelationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cvitae?: CVitaeOrderByWithRelationInput
    _relevance?: CVitaeExperienceOrderByRelevanceInput
  }

  export type CVitaeExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CVitaeExperienceWhereInput | CVitaeExperienceWhereInput[]
    OR?: CVitaeExperienceWhereInput[]
    NOT?: CVitaeExperienceWhereInput | CVitaeExperienceWhereInput[]
    cvitae_id?: StringFilter<"CVitaeExperience"> | string
    company?: StringFilter<"CVitaeExperience"> | string
    position?: StringFilter<"CVitaeExperience"> | string
    start_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    end_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    created_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }, "id">

  export type CVitaeExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CVitaeExperienceCountOrderByAggregateInput
    _max?: CVitaeExperienceMaxOrderByAggregateInput
    _min?: CVitaeExperienceMinOrderByAggregateInput
  }

  export type CVitaeExperienceScalarWhereWithAggregatesInput = {
    AND?: CVitaeExperienceScalarWhereWithAggregatesInput | CVitaeExperienceScalarWhereWithAggregatesInput[]
    OR?: CVitaeExperienceScalarWhereWithAggregatesInput[]
    NOT?: CVitaeExperienceScalarWhereWithAggregatesInput | CVitaeExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CVitaeExperience"> | string
    cvitae_id?: StringWithAggregatesFilter<"CVitaeExperience"> | string
    company?: StringWithAggregatesFilter<"CVitaeExperience"> | string
    position?: StringWithAggregatesFilter<"CVitaeExperience"> | string
    start_date?: DateTimeWithAggregatesFilter<"CVitaeExperience"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"CVitaeExperience"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"CVitaeExperience"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CVitaeExperience"> | Date | string
  }

  export type CVitaeSkillWhereInput = {
    AND?: CVitaeSkillWhereInput | CVitaeSkillWhereInput[]
    OR?: CVitaeSkillWhereInput[]
    NOT?: CVitaeSkillWhereInput | CVitaeSkillWhereInput[]
    id?: StringFilter<"CVitaeSkill"> | string
    cvitae_id?: StringFilter<"CVitaeSkill"> | string
    skill?: StringFilter<"CVitaeSkill"> | string
    level?: IntFilter<"CVitaeSkill"> | number
    created_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }

  export type CVitaeSkillOrderByWithRelationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cvitae?: CVitaeOrderByWithRelationInput
    _relevance?: CVitaeSkillOrderByRelevanceInput
  }

  export type CVitaeSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CVitaeSkillWhereInput | CVitaeSkillWhereInput[]
    OR?: CVitaeSkillWhereInput[]
    NOT?: CVitaeSkillWhereInput | CVitaeSkillWhereInput[]
    cvitae_id?: StringFilter<"CVitaeSkill"> | string
    skill?: StringFilter<"CVitaeSkill"> | string
    level?: IntFilter<"CVitaeSkill"> | number
    created_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
    cvitae?: XOR<CVitaeScalarRelationFilter, CVitaeWhereInput>
  }, "id">

  export type CVitaeSkillOrderByWithAggregationInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CVitaeSkillCountOrderByAggregateInput
    _avg?: CVitaeSkillAvgOrderByAggregateInput
    _max?: CVitaeSkillMaxOrderByAggregateInput
    _min?: CVitaeSkillMinOrderByAggregateInput
    _sum?: CVitaeSkillSumOrderByAggregateInput
  }

  export type CVitaeSkillScalarWhereWithAggregatesInput = {
    AND?: CVitaeSkillScalarWhereWithAggregatesInput | CVitaeSkillScalarWhereWithAggregatesInput[]
    OR?: CVitaeSkillScalarWhereWithAggregatesInput[]
    NOT?: CVitaeSkillScalarWhereWithAggregatesInput | CVitaeSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CVitaeSkill"> | string
    cvitae_id?: StringWithAggregatesFilter<"CVitaeSkill"> | string
    skill?: StringWithAggregatesFilter<"CVitaeSkill"> | string
    level?: IntWithAggregatesFilter<"CVitaeSkill"> | number
    created_at?: DateTimeWithAggregatesFilter<"CVitaeSkill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CVitaeSkill"> | Date | string
  }

  export type CVitaeTemplateWhereInput = {
    AND?: CVitaeTemplateWhereInput | CVitaeTemplateWhereInput[]
    OR?: CVitaeTemplateWhereInput[]
    NOT?: CVitaeTemplateWhereInput | CVitaeTemplateWhereInput[]
    id?: StringFilter<"CVitaeTemplate"> | string
    name?: StringFilter<"CVitaeTemplate"> | string
    created_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
    CVitae?: CVitaeListRelationFilter
  }

  export type CVitaeTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    CVitae?: CVitaeOrderByRelationAggregateInput
    _relevance?: CVitaeTemplateOrderByRelevanceInput
  }

  export type CVitaeTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CVitaeTemplateWhereInput | CVitaeTemplateWhereInput[]
    OR?: CVitaeTemplateWhereInput[]
    NOT?: CVitaeTemplateWhereInput | CVitaeTemplateWhereInput[]
    name?: StringFilter<"CVitaeTemplate"> | string
    created_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
    CVitae?: CVitaeListRelationFilter
  }, "id">

  export type CVitaeTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CVitaeTemplateCountOrderByAggregateInput
    _max?: CVitaeTemplateMaxOrderByAggregateInput
    _min?: CVitaeTemplateMinOrderByAggregateInput
  }

  export type CVitaeTemplateScalarWhereWithAggregatesInput = {
    AND?: CVitaeTemplateScalarWhereWithAggregatesInput | CVitaeTemplateScalarWhereWithAggregatesInput[]
    OR?: CVitaeTemplateScalarWhereWithAggregatesInput[]
    NOT?: CVitaeTemplateScalarWhereWithAggregatesInput | CVitaeTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CVitaeTemplate"> | string
    name?: StringWithAggregatesFilter<"CVitaeTemplate"> | string
    created_at?: DateTimeWithAggregatesFilter<"CVitaeTemplate"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CVitaeTemplate"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitae?: CVitaeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitae?: CVitaeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitae?: CVitaeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitae?: CVitaeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCVitaeInput
    CVitaeEducation?: CVitaeEducationCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUncheckedCreateInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCVitaeNestedInput
    CVitaeEducation?: CVitaeEducationUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeCreateManyInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationCreateInput = {
    id?: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    cvitae: CVitaeCreateNestedOneWithoutCVitaeEducationInput
  }

  export type CVitaeEducationUncheckedCreateInput = {
    id?: string
    cvitae_id: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeEducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvitae?: CVitaeUpdateOneRequiredWithoutCVitaeEducationNestedInput
  }

  export type CVitaeEducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationCreateManyInput = {
    id?: string
    cvitae_id: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeEducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceCreateInput = {
    id?: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    cvitae: CVitaeCreateNestedOneWithoutCVitaeExperienceInput
  }

  export type CVitaeExperienceUncheckedCreateInput = {
    id?: string
    cvitae_id: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvitae?: CVitaeUpdateOneRequiredWithoutCVitaeExperienceNestedInput
  }

  export type CVitaeExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceCreateManyInput = {
    id?: string
    cvitae_id: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillCreateInput = {
    id?: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
    cvitae: CVitaeCreateNestedOneWithoutCVitaeSkillInput
  }

  export type CVitaeSkillUncheckedCreateInput = {
    id?: string
    cvitae_id: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cvitae?: CVitaeUpdateOneRequiredWithoutCVitaeSkillNestedInput
  }

  export type CVitaeSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillCreateManyInput = {
    id?: string
    cvitae_id: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cvitae_id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeTemplateCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitae?: CVitaeCreateNestedManyWithoutCVitaeTemplateInput
  }

  export type CVitaeTemplateUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitae?: CVitaeUncheckedCreateNestedManyWithoutCVitaeTemplateInput
  }

  export type CVitaeTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitae?: CVitaeUpdateManyWithoutCVitaeTemplateNestedInput
  }

  export type CVitaeTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitae?: CVitaeUncheckedUpdateManyWithoutCVitaeTemplateNestedInput
  }

  export type CVitaeTemplateCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CVitaeListRelationFilter = {
    every?: CVitaeWhereInput
    some?: CVitaeWhereInput
    none?: CVitaeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CVitaeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CVitaeEducationListRelationFilter = {
    every?: CVitaeEducationWhereInput
    some?: CVitaeEducationWhereInput
    none?: CVitaeEducationWhereInput
  }

  export type CVitaeExperienceListRelationFilter = {
    every?: CVitaeExperienceWhereInput
    some?: CVitaeExperienceWhereInput
    none?: CVitaeExperienceWhereInput
  }

  export type CVitaeSkillListRelationFilter = {
    every?: CVitaeSkillWhereInput
    some?: CVitaeSkillWhereInput
    none?: CVitaeSkillWhereInput
  }

  export type CVitaeTemplateListRelationFilter = {
    every?: CVitaeTemplateWhereInput
    some?: CVitaeTemplateWhereInput
    none?: CVitaeTemplateWhereInput
  }

  export type CVitaeEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVitaeExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVitaeSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVitaeTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVitaeOrderByRelevanceInput = {
    fields: CVitaeOrderByRelevanceFieldEnum | CVitaeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVitaeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CVitaeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type CVitaeScalarRelationFilter = {
    is?: CVitaeWhereInput
    isNot?: CVitaeWhereInput
  }

  export type CVitaeEducationOrderByRelevanceInput = {
    fields: CVitaeEducationOrderByRelevanceFieldEnum | CVitaeEducationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVitaeEducationCountOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeEducationMinOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeExperienceOrderByRelevanceInput = {
    fields: CVitaeExperienceOrderByRelevanceFieldEnum | CVitaeExperienceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVitaeExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CVitaeSkillOrderByRelevanceInput = {
    fields: CVitaeSkillOrderByRelevanceFieldEnum | CVitaeSkillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVitaeSkillCountOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeSkillAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type CVitaeSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeSkillMinOrderByAggregateInput = {
    id?: SortOrder
    cvitae_id?: SortOrder
    skill?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeSkillSumOrderByAggregateInput = {
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CVitaeTemplateOrderByRelevanceInput = {
    fields: CVitaeTemplateOrderByRelevanceFieldEnum | CVitaeTemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CVitaeTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CVitaeCreateNestedManyWithoutUserInput = {
    create?: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput> | CVitaeCreateWithoutUserInput[] | CVitaeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutUserInput | CVitaeCreateOrConnectWithoutUserInput[]
    createMany?: CVitaeCreateManyUserInputEnvelope
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
  }

  export type CVitaeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput> | CVitaeCreateWithoutUserInput[] | CVitaeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutUserInput | CVitaeCreateOrConnectWithoutUserInput[]
    createMany?: CVitaeCreateManyUserInputEnvelope
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CVitaeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput> | CVitaeCreateWithoutUserInput[] | CVitaeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutUserInput | CVitaeCreateOrConnectWithoutUserInput[]
    upsert?: CVitaeUpsertWithWhereUniqueWithoutUserInput | CVitaeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVitaeCreateManyUserInputEnvelope
    set?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    disconnect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    delete?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    update?: CVitaeUpdateWithWhereUniqueWithoutUserInput | CVitaeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVitaeUpdateManyWithWhereWithoutUserInput | CVitaeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
  }

  export type CVitaeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput> | CVitaeCreateWithoutUserInput[] | CVitaeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutUserInput | CVitaeCreateOrConnectWithoutUserInput[]
    upsert?: CVitaeUpsertWithWhereUniqueWithoutUserInput | CVitaeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CVitaeCreateManyUserInputEnvelope
    set?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    disconnect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    delete?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    update?: CVitaeUpdateWithWhereUniqueWithoutUserInput | CVitaeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CVitaeUpdateManyWithWhereWithoutUserInput | CVitaeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCVitaeInput = {
    create?: XOR<UserCreateWithoutCVitaeInput, UserUncheckedCreateWithoutCVitaeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCVitaeInput
    connect?: UserWhereUniqueInput
  }

  export type CVitaeEducationCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput> | CVitaeEducationCreateWithoutCvitaeInput[] | CVitaeEducationUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeEducationCreateOrConnectWithoutCvitaeInput | CVitaeEducationCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeEducationCreateManyCvitaeInputEnvelope
    connect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
  }

  export type CVitaeExperienceCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput> | CVitaeExperienceCreateWithoutCvitaeInput[] | CVitaeExperienceUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeExperienceCreateOrConnectWithoutCvitaeInput | CVitaeExperienceCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeExperienceCreateManyCvitaeInputEnvelope
    connect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
  }

  export type CVitaeSkillCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput> | CVitaeSkillCreateWithoutCvitaeInput[] | CVitaeSkillUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeSkillCreateOrConnectWithoutCvitaeInput | CVitaeSkillCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeSkillCreateManyCvitaeInputEnvelope
    connect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
  }

  export type CVitaeTemplateCreateNestedManyWithoutCVitaeInput = {
    create?: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput> | CVitaeTemplateCreateWithoutCVitaeInput[] | CVitaeTemplateUncheckedCreateWithoutCVitaeInput[]
    connectOrCreate?: CVitaeTemplateCreateOrConnectWithoutCVitaeInput | CVitaeTemplateCreateOrConnectWithoutCVitaeInput[]
    connect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
  }

  export type CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput> | CVitaeEducationCreateWithoutCvitaeInput[] | CVitaeEducationUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeEducationCreateOrConnectWithoutCvitaeInput | CVitaeEducationCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeEducationCreateManyCvitaeInputEnvelope
    connect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
  }

  export type CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput> | CVitaeExperienceCreateWithoutCvitaeInput[] | CVitaeExperienceUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeExperienceCreateOrConnectWithoutCvitaeInput | CVitaeExperienceCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeExperienceCreateManyCvitaeInputEnvelope
    connect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
  }

  export type CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput = {
    create?: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput> | CVitaeSkillCreateWithoutCvitaeInput[] | CVitaeSkillUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeSkillCreateOrConnectWithoutCvitaeInput | CVitaeSkillCreateOrConnectWithoutCvitaeInput[]
    createMany?: CVitaeSkillCreateManyCvitaeInputEnvelope
    connect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
  }

  export type CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput = {
    create?: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput> | CVitaeTemplateCreateWithoutCVitaeInput[] | CVitaeTemplateUncheckedCreateWithoutCVitaeInput[]
    connectOrCreate?: CVitaeTemplateCreateOrConnectWithoutCVitaeInput | CVitaeTemplateCreateOrConnectWithoutCVitaeInput[]
    connect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCVitaeNestedInput = {
    create?: XOR<UserCreateWithoutCVitaeInput, UserUncheckedCreateWithoutCVitaeInput>
    connectOrCreate?: UserCreateOrConnectWithoutCVitaeInput
    upsert?: UserUpsertWithoutCVitaeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCVitaeInput, UserUpdateWithoutCVitaeInput>, UserUncheckedUpdateWithoutCVitaeInput>
  }

  export type CVitaeEducationUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput> | CVitaeEducationCreateWithoutCvitaeInput[] | CVitaeEducationUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeEducationCreateOrConnectWithoutCvitaeInput | CVitaeEducationCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeEducationUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeEducationUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeEducationCreateManyCvitaeInputEnvelope
    set?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    disconnect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    delete?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    connect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    update?: CVitaeEducationUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeEducationUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeEducationUpdateManyWithWhereWithoutCvitaeInput | CVitaeEducationUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeEducationScalarWhereInput | CVitaeEducationScalarWhereInput[]
  }

  export type CVitaeExperienceUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput> | CVitaeExperienceCreateWithoutCvitaeInput[] | CVitaeExperienceUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeExperienceCreateOrConnectWithoutCvitaeInput | CVitaeExperienceCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeExperienceUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeExperienceUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeExperienceCreateManyCvitaeInputEnvelope
    set?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    disconnect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    delete?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    connect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    update?: CVitaeExperienceUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeExperienceUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeExperienceUpdateManyWithWhereWithoutCvitaeInput | CVitaeExperienceUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeExperienceScalarWhereInput | CVitaeExperienceScalarWhereInput[]
  }

  export type CVitaeSkillUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput> | CVitaeSkillCreateWithoutCvitaeInput[] | CVitaeSkillUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeSkillCreateOrConnectWithoutCvitaeInput | CVitaeSkillCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeSkillUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeSkillUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeSkillCreateManyCvitaeInputEnvelope
    set?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    disconnect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    delete?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    connect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    update?: CVitaeSkillUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeSkillUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeSkillUpdateManyWithWhereWithoutCvitaeInput | CVitaeSkillUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeSkillScalarWhereInput | CVitaeSkillScalarWhereInput[]
  }

  export type CVitaeTemplateUpdateManyWithoutCVitaeNestedInput = {
    create?: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput> | CVitaeTemplateCreateWithoutCVitaeInput[] | CVitaeTemplateUncheckedCreateWithoutCVitaeInput[]
    connectOrCreate?: CVitaeTemplateCreateOrConnectWithoutCVitaeInput | CVitaeTemplateCreateOrConnectWithoutCVitaeInput[]
    upsert?: CVitaeTemplateUpsertWithWhereUniqueWithoutCVitaeInput | CVitaeTemplateUpsertWithWhereUniqueWithoutCVitaeInput[]
    set?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    disconnect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    delete?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    connect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    update?: CVitaeTemplateUpdateWithWhereUniqueWithoutCVitaeInput | CVitaeTemplateUpdateWithWhereUniqueWithoutCVitaeInput[]
    updateMany?: CVitaeTemplateUpdateManyWithWhereWithoutCVitaeInput | CVitaeTemplateUpdateManyWithWhereWithoutCVitaeInput[]
    deleteMany?: CVitaeTemplateScalarWhereInput | CVitaeTemplateScalarWhereInput[]
  }

  export type CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput> | CVitaeEducationCreateWithoutCvitaeInput[] | CVitaeEducationUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeEducationCreateOrConnectWithoutCvitaeInput | CVitaeEducationCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeEducationUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeEducationUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeEducationCreateManyCvitaeInputEnvelope
    set?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    disconnect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    delete?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    connect?: CVitaeEducationWhereUniqueInput | CVitaeEducationWhereUniqueInput[]
    update?: CVitaeEducationUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeEducationUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeEducationUpdateManyWithWhereWithoutCvitaeInput | CVitaeEducationUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeEducationScalarWhereInput | CVitaeEducationScalarWhereInput[]
  }

  export type CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput> | CVitaeExperienceCreateWithoutCvitaeInput[] | CVitaeExperienceUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeExperienceCreateOrConnectWithoutCvitaeInput | CVitaeExperienceCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeExperienceUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeExperienceUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeExperienceCreateManyCvitaeInputEnvelope
    set?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    disconnect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    delete?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    connect?: CVitaeExperienceWhereUniqueInput | CVitaeExperienceWhereUniqueInput[]
    update?: CVitaeExperienceUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeExperienceUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeExperienceUpdateManyWithWhereWithoutCvitaeInput | CVitaeExperienceUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeExperienceScalarWhereInput | CVitaeExperienceScalarWhereInput[]
  }

  export type CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput = {
    create?: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput> | CVitaeSkillCreateWithoutCvitaeInput[] | CVitaeSkillUncheckedCreateWithoutCvitaeInput[]
    connectOrCreate?: CVitaeSkillCreateOrConnectWithoutCvitaeInput | CVitaeSkillCreateOrConnectWithoutCvitaeInput[]
    upsert?: CVitaeSkillUpsertWithWhereUniqueWithoutCvitaeInput | CVitaeSkillUpsertWithWhereUniqueWithoutCvitaeInput[]
    createMany?: CVitaeSkillCreateManyCvitaeInputEnvelope
    set?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    disconnect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    delete?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    connect?: CVitaeSkillWhereUniqueInput | CVitaeSkillWhereUniqueInput[]
    update?: CVitaeSkillUpdateWithWhereUniqueWithoutCvitaeInput | CVitaeSkillUpdateWithWhereUniqueWithoutCvitaeInput[]
    updateMany?: CVitaeSkillUpdateManyWithWhereWithoutCvitaeInput | CVitaeSkillUpdateManyWithWhereWithoutCvitaeInput[]
    deleteMany?: CVitaeSkillScalarWhereInput | CVitaeSkillScalarWhereInput[]
  }

  export type CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput = {
    create?: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput> | CVitaeTemplateCreateWithoutCVitaeInput[] | CVitaeTemplateUncheckedCreateWithoutCVitaeInput[]
    connectOrCreate?: CVitaeTemplateCreateOrConnectWithoutCVitaeInput | CVitaeTemplateCreateOrConnectWithoutCVitaeInput[]
    upsert?: CVitaeTemplateUpsertWithWhereUniqueWithoutCVitaeInput | CVitaeTemplateUpsertWithWhereUniqueWithoutCVitaeInput[]
    set?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    disconnect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    delete?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    connect?: CVitaeTemplateWhereUniqueInput | CVitaeTemplateWhereUniqueInput[]
    update?: CVitaeTemplateUpdateWithWhereUniqueWithoutCVitaeInput | CVitaeTemplateUpdateWithWhereUniqueWithoutCVitaeInput[]
    updateMany?: CVitaeTemplateUpdateManyWithWhereWithoutCVitaeInput | CVitaeTemplateUpdateManyWithWhereWithoutCVitaeInput[]
    deleteMany?: CVitaeTemplateScalarWhereInput | CVitaeTemplateScalarWhereInput[]
  }

  export type CVitaeCreateNestedOneWithoutCVitaeEducationInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeEducationInput, CVitaeUncheckedCreateWithoutCVitaeEducationInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeEducationInput
    connect?: CVitaeWhereUniqueInput
  }

  export type CVitaeUpdateOneRequiredWithoutCVitaeEducationNestedInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeEducationInput, CVitaeUncheckedCreateWithoutCVitaeEducationInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeEducationInput
    upsert?: CVitaeUpsertWithoutCVitaeEducationInput
    connect?: CVitaeWhereUniqueInput
    update?: XOR<XOR<CVitaeUpdateToOneWithWhereWithoutCVitaeEducationInput, CVitaeUpdateWithoutCVitaeEducationInput>, CVitaeUncheckedUpdateWithoutCVitaeEducationInput>
  }

  export type CVitaeCreateNestedOneWithoutCVitaeExperienceInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeExperienceInput, CVitaeUncheckedCreateWithoutCVitaeExperienceInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeExperienceInput
    connect?: CVitaeWhereUniqueInput
  }

  export type CVitaeUpdateOneRequiredWithoutCVitaeExperienceNestedInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeExperienceInput, CVitaeUncheckedCreateWithoutCVitaeExperienceInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeExperienceInput
    upsert?: CVitaeUpsertWithoutCVitaeExperienceInput
    connect?: CVitaeWhereUniqueInput
    update?: XOR<XOR<CVitaeUpdateToOneWithWhereWithoutCVitaeExperienceInput, CVitaeUpdateWithoutCVitaeExperienceInput>, CVitaeUncheckedUpdateWithoutCVitaeExperienceInput>
  }

  export type CVitaeCreateNestedOneWithoutCVitaeSkillInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeSkillInput, CVitaeUncheckedCreateWithoutCVitaeSkillInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeSkillInput
    connect?: CVitaeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CVitaeUpdateOneRequiredWithoutCVitaeSkillNestedInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeSkillInput, CVitaeUncheckedCreateWithoutCVitaeSkillInput>
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeSkillInput
    upsert?: CVitaeUpsertWithoutCVitaeSkillInput
    connect?: CVitaeWhereUniqueInput
    update?: XOR<XOR<CVitaeUpdateToOneWithWhereWithoutCVitaeSkillInput, CVitaeUpdateWithoutCVitaeSkillInput>, CVitaeUncheckedUpdateWithoutCVitaeSkillInput>
  }

  export type CVitaeCreateNestedManyWithoutCVitaeTemplateInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput> | CVitaeCreateWithoutCVitaeTemplateInput[] | CVitaeUncheckedCreateWithoutCVitaeTemplateInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeTemplateInput | CVitaeCreateOrConnectWithoutCVitaeTemplateInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
  }

  export type CVitaeUncheckedCreateNestedManyWithoutCVitaeTemplateInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput> | CVitaeCreateWithoutCVitaeTemplateInput[] | CVitaeUncheckedCreateWithoutCVitaeTemplateInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeTemplateInput | CVitaeCreateOrConnectWithoutCVitaeTemplateInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
  }

  export type CVitaeUpdateManyWithoutCVitaeTemplateNestedInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput> | CVitaeCreateWithoutCVitaeTemplateInput[] | CVitaeUncheckedCreateWithoutCVitaeTemplateInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeTemplateInput | CVitaeCreateOrConnectWithoutCVitaeTemplateInput[]
    upsert?: CVitaeUpsertWithWhereUniqueWithoutCVitaeTemplateInput | CVitaeUpsertWithWhereUniqueWithoutCVitaeTemplateInput[]
    set?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    disconnect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    delete?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    update?: CVitaeUpdateWithWhereUniqueWithoutCVitaeTemplateInput | CVitaeUpdateWithWhereUniqueWithoutCVitaeTemplateInput[]
    updateMany?: CVitaeUpdateManyWithWhereWithoutCVitaeTemplateInput | CVitaeUpdateManyWithWhereWithoutCVitaeTemplateInput[]
    deleteMany?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
  }

  export type CVitaeUncheckedUpdateManyWithoutCVitaeTemplateNestedInput = {
    create?: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput> | CVitaeCreateWithoutCVitaeTemplateInput[] | CVitaeUncheckedCreateWithoutCVitaeTemplateInput[]
    connectOrCreate?: CVitaeCreateOrConnectWithoutCVitaeTemplateInput | CVitaeCreateOrConnectWithoutCVitaeTemplateInput[]
    upsert?: CVitaeUpsertWithWhereUniqueWithoutCVitaeTemplateInput | CVitaeUpsertWithWhereUniqueWithoutCVitaeTemplateInput[]
    set?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    disconnect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    delete?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    connect?: CVitaeWhereUniqueInput | CVitaeWhereUniqueInput[]
    update?: CVitaeUpdateWithWhereUniqueWithoutCVitaeTemplateInput | CVitaeUpdateWithWhereUniqueWithoutCVitaeTemplateInput[]
    updateMany?: CVitaeUpdateManyWithWhereWithoutCVitaeTemplateInput | CVitaeUpdateManyWithWhereWithoutCVitaeTemplateInput[]
    deleteMany?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CVitaeCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeCreateOrConnectWithoutUserInput = {
    where: CVitaeWhereUniqueInput
    create: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput>
  }

  export type CVitaeCreateManyUserInputEnvelope = {
    data: CVitaeCreateManyUserInput | CVitaeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CVitaeUpsertWithWhereUniqueWithoutUserInput = {
    where: CVitaeWhereUniqueInput
    update: XOR<CVitaeUpdateWithoutUserInput, CVitaeUncheckedUpdateWithoutUserInput>
    create: XOR<CVitaeCreateWithoutUserInput, CVitaeUncheckedCreateWithoutUserInput>
  }

  export type CVitaeUpdateWithWhereUniqueWithoutUserInput = {
    where: CVitaeWhereUniqueInput
    data: XOR<CVitaeUpdateWithoutUserInput, CVitaeUncheckedUpdateWithoutUserInput>
  }

  export type CVitaeUpdateManyWithWhereWithoutUserInput = {
    where: CVitaeScalarWhereInput
    data: XOR<CVitaeUpdateManyMutationInput, CVitaeUncheckedUpdateManyWithoutUserInput>
  }

  export type CVitaeScalarWhereInput = {
    AND?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
    OR?: CVitaeScalarWhereInput[]
    NOT?: CVitaeScalarWhereInput | CVitaeScalarWhereInput[]
    id?: StringFilter<"CVitae"> | string
    user_id?: BigIntFilter<"CVitae"> | bigint | number
    name?: StringFilter<"CVitae"> | string
    email?: StringFilter<"CVitae"> | string
    phone?: StringFilter<"CVitae"> | string
    address?: StringFilter<"CVitae"> | string
    summary?: StringFilter<"CVitae"> | string
    created_at?: DateTimeFilter<"CVitae"> | Date | string
    updated_at?: DateTimeFilter<"CVitae"> | Date | string
  }

  export type UserCreateWithoutCVitaeInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutCVitaeInput = {
    id?: bigint | number
    email: string
    name?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutCVitaeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCVitaeInput, UserUncheckedCreateWithoutCVitaeInput>
  }

  export type CVitaeEducationCreateWithoutCvitaeInput = {
    id?: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeEducationUncheckedCreateWithoutCvitaeInput = {
    id?: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeEducationCreateOrConnectWithoutCvitaeInput = {
    where: CVitaeEducationWhereUniqueInput
    create: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeEducationCreateManyCvitaeInputEnvelope = {
    data: CVitaeEducationCreateManyCvitaeInput | CVitaeEducationCreateManyCvitaeInput[]
    skipDuplicates?: boolean
  }

  export type CVitaeExperienceCreateWithoutCvitaeInput = {
    id?: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeExperienceUncheckedCreateWithoutCvitaeInput = {
    id?: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeExperienceCreateOrConnectWithoutCvitaeInput = {
    where: CVitaeExperienceWhereUniqueInput
    create: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeExperienceCreateManyCvitaeInputEnvelope = {
    data: CVitaeExperienceCreateManyCvitaeInput | CVitaeExperienceCreateManyCvitaeInput[]
    skipDuplicates?: boolean
  }

  export type CVitaeSkillCreateWithoutCvitaeInput = {
    id?: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeSkillUncheckedCreateWithoutCvitaeInput = {
    id?: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeSkillCreateOrConnectWithoutCvitaeInput = {
    where: CVitaeSkillWhereUniqueInput
    create: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeSkillCreateManyCvitaeInputEnvelope = {
    data: CVitaeSkillCreateManyCvitaeInput | CVitaeSkillCreateManyCvitaeInput[]
    skipDuplicates?: boolean
  }

  export type CVitaeTemplateCreateWithoutCVitaeInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeTemplateUncheckedCreateWithoutCVitaeInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeTemplateCreateOrConnectWithoutCVitaeInput = {
    where: CVitaeTemplateWhereUniqueInput
    create: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput>
  }

  export type UserUpsertWithoutCVitaeInput = {
    update: XOR<UserUpdateWithoutCVitaeInput, UserUncheckedUpdateWithoutCVitaeInput>
    create: XOR<UserCreateWithoutCVitaeInput, UserUncheckedCreateWithoutCVitaeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCVitaeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCVitaeInput, UserUncheckedUpdateWithoutCVitaeInput>
  }

  export type UserUpdateWithoutCVitaeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCVitaeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationUpsertWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeEducationWhereUniqueInput
    update: XOR<CVitaeEducationUpdateWithoutCvitaeInput, CVitaeEducationUncheckedUpdateWithoutCvitaeInput>
    create: XOR<CVitaeEducationCreateWithoutCvitaeInput, CVitaeEducationUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeEducationUpdateWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeEducationWhereUniqueInput
    data: XOR<CVitaeEducationUpdateWithoutCvitaeInput, CVitaeEducationUncheckedUpdateWithoutCvitaeInput>
  }

  export type CVitaeEducationUpdateManyWithWhereWithoutCvitaeInput = {
    where: CVitaeEducationScalarWhereInput
    data: XOR<CVitaeEducationUpdateManyMutationInput, CVitaeEducationUncheckedUpdateManyWithoutCvitaeInput>
  }

  export type CVitaeEducationScalarWhereInput = {
    AND?: CVitaeEducationScalarWhereInput | CVitaeEducationScalarWhereInput[]
    OR?: CVitaeEducationScalarWhereInput[]
    NOT?: CVitaeEducationScalarWhereInput | CVitaeEducationScalarWhereInput[]
    id?: StringFilter<"CVitaeEducation"> | string
    cvitae_id?: StringFilter<"CVitaeEducation"> | string
    school?: StringFilter<"CVitaeEducation"> | string
    degree?: StringFilter<"CVitaeEducation"> | string
    start_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    end_date?: DateTimeFilter<"CVitaeEducation"> | Date | string
    created_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeEducation"> | Date | string
  }

  export type CVitaeExperienceUpsertWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeExperienceWhereUniqueInput
    update: XOR<CVitaeExperienceUpdateWithoutCvitaeInput, CVitaeExperienceUncheckedUpdateWithoutCvitaeInput>
    create: XOR<CVitaeExperienceCreateWithoutCvitaeInput, CVitaeExperienceUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeExperienceUpdateWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeExperienceWhereUniqueInput
    data: XOR<CVitaeExperienceUpdateWithoutCvitaeInput, CVitaeExperienceUncheckedUpdateWithoutCvitaeInput>
  }

  export type CVitaeExperienceUpdateManyWithWhereWithoutCvitaeInput = {
    where: CVitaeExperienceScalarWhereInput
    data: XOR<CVitaeExperienceUpdateManyMutationInput, CVitaeExperienceUncheckedUpdateManyWithoutCvitaeInput>
  }

  export type CVitaeExperienceScalarWhereInput = {
    AND?: CVitaeExperienceScalarWhereInput | CVitaeExperienceScalarWhereInput[]
    OR?: CVitaeExperienceScalarWhereInput[]
    NOT?: CVitaeExperienceScalarWhereInput | CVitaeExperienceScalarWhereInput[]
    id?: StringFilter<"CVitaeExperience"> | string
    cvitae_id?: StringFilter<"CVitaeExperience"> | string
    company?: StringFilter<"CVitaeExperience"> | string
    position?: StringFilter<"CVitaeExperience"> | string
    start_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    end_date?: DateTimeFilter<"CVitaeExperience"> | Date | string
    created_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeExperience"> | Date | string
  }

  export type CVitaeSkillUpsertWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeSkillWhereUniqueInput
    update: XOR<CVitaeSkillUpdateWithoutCvitaeInput, CVitaeSkillUncheckedUpdateWithoutCvitaeInput>
    create: XOR<CVitaeSkillCreateWithoutCvitaeInput, CVitaeSkillUncheckedCreateWithoutCvitaeInput>
  }

  export type CVitaeSkillUpdateWithWhereUniqueWithoutCvitaeInput = {
    where: CVitaeSkillWhereUniqueInput
    data: XOR<CVitaeSkillUpdateWithoutCvitaeInput, CVitaeSkillUncheckedUpdateWithoutCvitaeInput>
  }

  export type CVitaeSkillUpdateManyWithWhereWithoutCvitaeInput = {
    where: CVitaeSkillScalarWhereInput
    data: XOR<CVitaeSkillUpdateManyMutationInput, CVitaeSkillUncheckedUpdateManyWithoutCvitaeInput>
  }

  export type CVitaeSkillScalarWhereInput = {
    AND?: CVitaeSkillScalarWhereInput | CVitaeSkillScalarWhereInput[]
    OR?: CVitaeSkillScalarWhereInput[]
    NOT?: CVitaeSkillScalarWhereInput | CVitaeSkillScalarWhereInput[]
    id?: StringFilter<"CVitaeSkill"> | string
    cvitae_id?: StringFilter<"CVitaeSkill"> | string
    skill?: StringFilter<"CVitaeSkill"> | string
    level?: IntFilter<"CVitaeSkill"> | number
    created_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeSkill"> | Date | string
  }

  export type CVitaeTemplateUpsertWithWhereUniqueWithoutCVitaeInput = {
    where: CVitaeTemplateWhereUniqueInput
    update: XOR<CVitaeTemplateUpdateWithoutCVitaeInput, CVitaeTemplateUncheckedUpdateWithoutCVitaeInput>
    create: XOR<CVitaeTemplateCreateWithoutCVitaeInput, CVitaeTemplateUncheckedCreateWithoutCVitaeInput>
  }

  export type CVitaeTemplateUpdateWithWhereUniqueWithoutCVitaeInput = {
    where: CVitaeTemplateWhereUniqueInput
    data: XOR<CVitaeTemplateUpdateWithoutCVitaeInput, CVitaeTemplateUncheckedUpdateWithoutCVitaeInput>
  }

  export type CVitaeTemplateUpdateManyWithWhereWithoutCVitaeInput = {
    where: CVitaeTemplateScalarWhereInput
    data: XOR<CVitaeTemplateUpdateManyMutationInput, CVitaeTemplateUncheckedUpdateManyWithoutCVitaeInput>
  }

  export type CVitaeTemplateScalarWhereInput = {
    AND?: CVitaeTemplateScalarWhereInput | CVitaeTemplateScalarWhereInput[]
    OR?: CVitaeTemplateScalarWhereInput[]
    NOT?: CVitaeTemplateScalarWhereInput | CVitaeTemplateScalarWhereInput[]
    id?: StringFilter<"CVitaeTemplate"> | string
    name?: StringFilter<"CVitaeTemplate"> | string
    created_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
    updated_at?: DateTimeFilter<"CVitaeTemplate"> | Date | string
  }

  export type CVitaeCreateWithoutCVitaeEducationInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCVitaeInput
    CVitaeExperience?: CVitaeExperienceCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUncheckedCreateWithoutCVitaeEducationInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeExperience?: CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeCreateOrConnectWithoutCVitaeEducationInput = {
    where: CVitaeWhereUniqueInput
    create: XOR<CVitaeCreateWithoutCVitaeEducationInput, CVitaeUncheckedCreateWithoutCVitaeEducationInput>
  }

  export type CVitaeUpsertWithoutCVitaeEducationInput = {
    update: XOR<CVitaeUpdateWithoutCVitaeEducationInput, CVitaeUncheckedUpdateWithoutCVitaeEducationInput>
    create: XOR<CVitaeCreateWithoutCVitaeEducationInput, CVitaeUncheckedCreateWithoutCVitaeEducationInput>
    where?: CVitaeWhereInput
  }

  export type CVitaeUpdateToOneWithWhereWithoutCVitaeEducationInput = {
    where?: CVitaeWhereInput
    data: XOR<CVitaeUpdateWithoutCVitaeEducationInput, CVitaeUncheckedUpdateWithoutCVitaeEducationInput>
  }

  export type CVitaeUpdateWithoutCVitaeEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCVitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateWithoutCVitaeEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeExperience?: CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeCreateWithoutCVitaeExperienceInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCVitaeInput
    CVitaeEducation?: CVitaeEducationCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUncheckedCreateWithoutCVitaeExperienceInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeCreateOrConnectWithoutCVitaeExperienceInput = {
    where: CVitaeWhereUniqueInput
    create: XOR<CVitaeCreateWithoutCVitaeExperienceInput, CVitaeUncheckedCreateWithoutCVitaeExperienceInput>
  }

  export type CVitaeUpsertWithoutCVitaeExperienceInput = {
    update: XOR<CVitaeUpdateWithoutCVitaeExperienceInput, CVitaeUncheckedUpdateWithoutCVitaeExperienceInput>
    create: XOR<CVitaeCreateWithoutCVitaeExperienceInput, CVitaeUncheckedCreateWithoutCVitaeExperienceInput>
    where?: CVitaeWhereInput
  }

  export type CVitaeUpdateToOneWithWhereWithoutCVitaeExperienceInput = {
    where?: CVitaeWhereInput
    data: XOR<CVitaeUpdateWithoutCVitaeExperienceInput, CVitaeUncheckedUpdateWithoutCVitaeExperienceInput>
  }

  export type CVitaeUpdateWithoutCVitaeExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCVitaeNestedInput
    CVitaeEducation?: CVitaeEducationUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateWithoutCVitaeExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeCreateWithoutCVitaeSkillInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCVitaeInput
    CVitaeEducation?: CVitaeEducationCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeUncheckedCreateWithoutCVitaeSkillInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeTemplate?: CVitaeTemplateUncheckedCreateNestedManyWithoutCVitaeInput
  }

  export type CVitaeCreateOrConnectWithoutCVitaeSkillInput = {
    where: CVitaeWhereUniqueInput
    create: XOR<CVitaeCreateWithoutCVitaeSkillInput, CVitaeUncheckedCreateWithoutCVitaeSkillInput>
  }

  export type CVitaeUpsertWithoutCVitaeSkillInput = {
    update: XOR<CVitaeUpdateWithoutCVitaeSkillInput, CVitaeUncheckedUpdateWithoutCVitaeSkillInput>
    create: XOR<CVitaeCreateWithoutCVitaeSkillInput, CVitaeUncheckedCreateWithoutCVitaeSkillInput>
    where?: CVitaeWhereInput
  }

  export type CVitaeUpdateToOneWithWhereWithoutCVitaeSkillInput = {
    where?: CVitaeWhereInput
    data: XOR<CVitaeUpdateWithoutCVitaeSkillInput, CVitaeUncheckedUpdateWithoutCVitaeSkillInput>
  }

  export type CVitaeUpdateWithoutCVitaeSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCVitaeNestedInput
    CVitaeEducation?: CVitaeEducationUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateWithoutCVitaeSkillInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeCreateWithoutCVitaeTemplateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCVitaeInput
    CVitaeEducation?: CVitaeEducationCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillCreateNestedManyWithoutCvitaeInput
  }

  export type CVitaeUncheckedCreateWithoutCVitaeTemplateInput = {
    id?: string
    user_id: bigint | number
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
    CVitaeEducation?: CVitaeEducationUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeExperience?: CVitaeExperienceUncheckedCreateNestedManyWithoutCvitaeInput
    CVitaeSkill?: CVitaeSkillUncheckedCreateNestedManyWithoutCvitaeInput
  }

  export type CVitaeCreateOrConnectWithoutCVitaeTemplateInput = {
    where: CVitaeWhereUniqueInput
    create: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput>
  }

  export type CVitaeUpsertWithWhereUniqueWithoutCVitaeTemplateInput = {
    where: CVitaeWhereUniqueInput
    update: XOR<CVitaeUpdateWithoutCVitaeTemplateInput, CVitaeUncheckedUpdateWithoutCVitaeTemplateInput>
    create: XOR<CVitaeCreateWithoutCVitaeTemplateInput, CVitaeUncheckedCreateWithoutCVitaeTemplateInput>
  }

  export type CVitaeUpdateWithWhereUniqueWithoutCVitaeTemplateInput = {
    where: CVitaeWhereUniqueInput
    data: XOR<CVitaeUpdateWithoutCVitaeTemplateInput, CVitaeUncheckedUpdateWithoutCVitaeTemplateInput>
  }

  export type CVitaeUpdateManyWithWhereWithoutCVitaeTemplateInput = {
    where: CVitaeScalarWhereInput
    data: XOR<CVitaeUpdateManyMutationInput, CVitaeUncheckedUpdateManyWithoutCVitaeTemplateInput>
  }

  export type CVitaeCreateManyUserInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    summary: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeTemplate?: CVitaeTemplateUncheckedUpdateManyWithoutCVitaeNestedInput
  }

  export type CVitaeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationCreateManyCvitaeInput = {
    id?: string
    school: string
    degree: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeExperienceCreateManyCvitaeInput = {
    id?: string
    company: string
    position: string
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeSkillCreateManyCvitaeInput = {
    id?: string
    skill: string
    level: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CVitaeEducationUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationUncheckedUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeEducationUncheckedUpdateManyWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceUncheckedUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeExperienceUncheckedUpdateManyWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillUncheckedUpdateWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeSkillUncheckedUpdateManyWithoutCvitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    skill?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeTemplateUpdateWithoutCVitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeTemplateUncheckedUpdateWithoutCVitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeTemplateUncheckedUpdateManyWithoutCVitaeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVitaeUpdateWithoutCVitaeTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCVitaeNestedInput
    CVitaeEducation?: CVitaeEducationUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUpdateManyWithoutCvitaeNestedInput
  }

  export type CVitaeUncheckedUpdateWithoutCVitaeTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    CVitaeEducation?: CVitaeEducationUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeExperience?: CVitaeExperienceUncheckedUpdateManyWithoutCvitaeNestedInput
    CVitaeSkill?: CVitaeSkillUncheckedUpdateManyWithoutCvitaeNestedInput
  }

  export type CVitaeUncheckedUpdateManyWithoutCVitaeTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}