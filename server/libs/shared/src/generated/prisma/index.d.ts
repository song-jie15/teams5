
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Visitor
 * 
 */
export type Visitor = $Result.DefaultSelection<Prisma.$VisitorPayload>
/**
 * Model PageView
 * 
 */
export type PageView = $Result.DefaultSelection<Prisma.$PageViewPayload>
/**
 * Model TrackEvent
 * 
 */
export type TrackEvent = $Result.DefaultSelection<Prisma.$TrackEventPayload>
/**
 * Model PerformanceEntry
 * 
 */
export type PerformanceEntry = $Result.DefaultSelection<Prisma.$PerformanceEntryPayload>
/**
 * Model ErrorEntry
 * 
 */
export type ErrorEntry = $Result.DefaultSelection<Prisma.$ErrorEntryPayload>
/**
 * Model WordBookRecord
 * 
 */
export type WordBookRecord = $Result.DefaultSelection<Prisma.$WordBookRecordPayload>
/**
 * Model WordBook
 * 
 */
export type WordBook = $Result.DefaultSelection<Prisma.$WordBookPayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>
/**
 * Model CourseRecord
 * 
 */
export type CourseRecord = $Result.DefaultSelection<Prisma.$CourseRecordPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TradeStatus: {
  NOT_PAY: 'NOT_PAY',
  WAIT_BUYER_PAY: 'WAIT_BUYER_PAY',
  TRADE_CLOSED: 'TRADE_CLOSED',
  TRADE_SUCCESS: 'TRADE_SUCCESS',
  TRADE_FINISHED: 'TRADE_FINISHED'
};

export type TradeStatus = (typeof TradeStatus)[keyof typeof TradeStatus]

}

export type TradeStatus = $Enums.TradeStatus

export const TradeStatus: typeof $Enums.TradeStatus

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.visitor`: Exposes CRUD operations for the **Visitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitor.findMany()
    * ```
    */
  get visitor(): Prisma.VisitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageView`: Exposes CRUD operations for the **PageView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViews
    * const pageViews = await prisma.pageView.findMany()
    * ```
    */
  get pageView(): Prisma.PageViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackEvent`: Exposes CRUD operations for the **TrackEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackEvents
    * const trackEvents = await prisma.trackEvent.findMany()
    * ```
    */
  get trackEvent(): Prisma.TrackEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.performanceEntry`: Exposes CRUD operations for the **PerformanceEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerformanceEntries
    * const performanceEntries = await prisma.performanceEntry.findMany()
    * ```
    */
  get performanceEntry(): Prisma.PerformanceEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.errorEntry`: Exposes CRUD operations for the **ErrorEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorEntries
    * const errorEntries = await prisma.errorEntry.findMany()
    * ```
    */
  get errorEntry(): Prisma.ErrorEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wordBookRecord`: Exposes CRUD operations for the **WordBookRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordBookRecords
    * const wordBookRecords = await prisma.wordBookRecord.findMany()
    * ```
    */
  get wordBookRecord(): Prisma.WordBookRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wordBook`: Exposes CRUD operations for the **WordBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordBooks
    * const wordBooks = await prisma.wordBook.findMany()
    * ```
    */
  get wordBook(): Prisma.WordBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseRecord`: Exposes CRUD operations for the **CourseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseRecords
    * const courseRecords = await prisma.courseRecord.findMany()
    * ```
    */
  get courseRecord(): Prisma.CourseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Visitor: 'Visitor',
    PageView: 'PageView',
    TrackEvent: 'TrackEvent',
    PerformanceEntry: 'PerformanceEntry',
    ErrorEntry: 'ErrorEntry',
    WordBookRecord: 'WordBookRecord',
    WordBook: 'WordBook',
    PaymentRecord: 'PaymentRecord',
    CourseRecord: 'CourseRecord',
    Course: 'Course'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "visitor" | "pageView" | "trackEvent" | "performanceEntry" | "errorEntry" | "wordBookRecord" | "wordBook" | "paymentRecord" | "courseRecord" | "course"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Visitor: {
        payload: Prisma.$VisitorPayload<ExtArgs>
        fields: Prisma.VisitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findFirst: {
            args: Prisma.VisitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          findMany: {
            args: Prisma.VisitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          create: {
            args: Prisma.VisitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          createMany: {
            args: Prisma.VisitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          delete: {
            args: Prisma.VisitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          update: {
            args: Prisma.VisitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          deleteMany: {
            args: Prisma.VisitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>[]
          }
          upsert: {
            args: Prisma.VisitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitorPayload>
          }
          aggregate: {
            args: Prisma.VisitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitor>
          }
          groupBy: {
            args: Prisma.VisitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitorCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorCountAggregateOutputType> | number
          }
        }
      }
      PageView: {
        payload: Prisma.$PageViewPayload<ExtArgs>
        fields: Prisma.PageViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findFirst: {
            args: Prisma.PageViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findMany: {
            args: Prisma.PageViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          create: {
            args: Prisma.PageViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          createMany: {
            args: Prisma.PageViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          delete: {
            args: Prisma.PageViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          update: {
            args: Prisma.PageViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          deleteMany: {
            args: Prisma.PageViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          upsert: {
            args: Prisma.PageViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          aggregate: {
            args: Prisma.PageViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageView>
          }
          groupBy: {
            args: Prisma.PageViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageViewCountArgs<ExtArgs>
            result: $Utils.Optional<PageViewCountAggregateOutputType> | number
          }
        }
      }
      TrackEvent: {
        payload: Prisma.$TrackEventPayload<ExtArgs>
        fields: Prisma.TrackEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          findFirst: {
            args: Prisma.TrackEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          findMany: {
            args: Prisma.TrackEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>[]
          }
          create: {
            args: Prisma.TrackEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          createMany: {
            args: Prisma.TrackEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>[]
          }
          delete: {
            args: Prisma.TrackEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          update: {
            args: Prisma.TrackEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          deleteMany: {
            args: Prisma.TrackEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>[]
          }
          upsert: {
            args: Prisma.TrackEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackEventPayload>
          }
          aggregate: {
            args: Prisma.TrackEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackEvent>
          }
          groupBy: {
            args: Prisma.TrackEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackEventCountArgs<ExtArgs>
            result: $Utils.Optional<TrackEventCountAggregateOutputType> | number
          }
        }
      }
      PerformanceEntry: {
        payload: Prisma.$PerformanceEntryPayload<ExtArgs>
        fields: Prisma.PerformanceEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformanceEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformanceEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          findFirst: {
            args: Prisma.PerformanceEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformanceEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          findMany: {
            args: Prisma.PerformanceEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>[]
          }
          create: {
            args: Prisma.PerformanceEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          createMany: {
            args: Prisma.PerformanceEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformanceEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>[]
          }
          delete: {
            args: Prisma.PerformanceEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          update: {
            args: Prisma.PerformanceEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          deleteMany: {
            args: Prisma.PerformanceEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformanceEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerformanceEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>[]
          }
          upsert: {
            args: Prisma.PerformanceEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceEntryPayload>
          }
          aggregate: {
            args: Prisma.PerformanceEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformanceEntry>
          }
          groupBy: {
            args: Prisma.PerformanceEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformanceEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformanceEntryCountArgs<ExtArgs>
            result: $Utils.Optional<PerformanceEntryCountAggregateOutputType> | number
          }
        }
      }
      ErrorEntry: {
        payload: Prisma.$ErrorEntryPayload<ExtArgs>
        fields: Prisma.ErrorEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          findFirst: {
            args: Prisma.ErrorEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          findMany: {
            args: Prisma.ErrorEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>[]
          }
          create: {
            args: Prisma.ErrorEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          createMany: {
            args: Prisma.ErrorEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>[]
          }
          delete: {
            args: Prisma.ErrorEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          update: {
            args: Prisma.ErrorEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          deleteMany: {
            args: Prisma.ErrorEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>[]
          }
          upsert: {
            args: Prisma.ErrorEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorEntryPayload>
          }
          aggregate: {
            args: Prisma.ErrorEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorEntry>
          }
          groupBy: {
            args: Prisma.ErrorEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorEntryCountAggregateOutputType> | number
          }
        }
      }
      WordBookRecord: {
        payload: Prisma.$WordBookRecordPayload<ExtArgs>
        fields: Prisma.WordBookRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordBookRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordBookRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          findFirst: {
            args: Prisma.WordBookRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordBookRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          findMany: {
            args: Prisma.WordBookRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>[]
          }
          create: {
            args: Prisma.WordBookRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          createMany: {
            args: Prisma.WordBookRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordBookRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>[]
          }
          delete: {
            args: Prisma.WordBookRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          update: {
            args: Prisma.WordBookRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          deleteMany: {
            args: Prisma.WordBookRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordBookRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordBookRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>[]
          }
          upsert: {
            args: Prisma.WordBookRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookRecordPayload>
          }
          aggregate: {
            args: Prisma.WordBookRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWordBookRecord>
          }
          groupBy: {
            args: Prisma.WordBookRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordBookRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordBookRecordCountArgs<ExtArgs>
            result: $Utils.Optional<WordBookRecordCountAggregateOutputType> | number
          }
        }
      }
      WordBook: {
        payload: Prisma.$WordBookPayload<ExtArgs>
        fields: Prisma.WordBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          findFirst: {
            args: Prisma.WordBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          findMany: {
            args: Prisma.WordBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>[]
          }
          create: {
            args: Prisma.WordBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          createMany: {
            args: Prisma.WordBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>[]
          }
          delete: {
            args: Prisma.WordBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          update: {
            args: Prisma.WordBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          deleteMany: {
            args: Prisma.WordBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>[]
          }
          upsert: {
            args: Prisma.WordBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordBookPayload>
          }
          aggregate: {
            args: Prisma.WordBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWordBook>
          }
          groupBy: {
            args: Prisma.WordBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordBookCountArgs<ExtArgs>
            result: $Utils.Optional<WordBookCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
      CourseRecord: {
        payload: Prisma.$CourseRecordPayload<ExtArgs>
        fields: Prisma.CourseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          findFirst: {
            args: Prisma.CourseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          findMany: {
            args: Prisma.CourseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>[]
          }
          create: {
            args: Prisma.CourseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          createMany: {
            args: Prisma.CourseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>[]
          }
          delete: {
            args: Prisma.CourseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          update: {
            args: Prisma.CourseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          deleteMany: {
            args: Prisma.CourseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>[]
          }
          upsert: {
            args: Prisma.CourseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseRecordPayload>
          }
          aggregate: {
            args: Prisma.CourseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseRecord>
          }
          groupBy: {
            args: Prisma.CourseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CourseRecordCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    visitor?: VisitorOmit
    pageView?: PageViewOmit
    trackEvent?: TrackEventOmit
    performanceEntry?: PerformanceEntryOmit
    errorEntry?: ErrorEntryOmit
    wordBookRecord?: WordBookRecordOmit
    wordBook?: WordBookOmit
    paymentRecord?: PaymentRecordOmit
    courseRecord?: CourseRecordOmit
    course?: CourseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    wordBookRecords: number
    paymentRecords: number
    courseRecords: number
    visitors: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordBookRecords?: boolean | UserCountOutputTypeCountWordBookRecordsArgs
    paymentRecords?: boolean | UserCountOutputTypeCountPaymentRecordsArgs
    courseRecords?: boolean | UserCountOutputTypeCountCourseRecordsArgs
    visitors?: boolean | UserCountOutputTypeCountVisitorsArgs
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
  export type UserCountOutputTypeCountWordBookRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordBookRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVisitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
  }


  /**
   * Count Type VisitorCountOutputType
   */

  export type VisitorCountOutputType = {
    pageViews: number
    trackEvents: number
    performanceEntries: number
    errorEntries: number
  }

  export type VisitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageViews?: boolean | VisitorCountOutputTypeCountPageViewsArgs
    trackEvents?: boolean | VisitorCountOutputTypeCountTrackEventsArgs
    performanceEntries?: boolean | VisitorCountOutputTypeCountPerformanceEntriesArgs
    errorEntries?: boolean | VisitorCountOutputTypeCountErrorEntriesArgs
  }

  // Custom InputTypes
  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisitorCountOutputType
     */
    select?: VisitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountPageViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewWhereInput
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountTrackEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackEventWhereInput
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountPerformanceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceEntryWhereInput
  }

  /**
   * VisitorCountOutputType without action
   */
  export type VisitorCountOutputTypeCountErrorEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorEntryWhereInput
  }


  /**
   * Count Type WordBookCountOutputType
   */

  export type WordBookCountOutputType = {
    wordBookRecords: number
  }

  export type WordBookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordBookRecords?: boolean | WordBookCountOutputTypeCountWordBookRecordsArgs
  }

  // Custom InputTypes
  /**
   * WordBookCountOutputType without action
   */
  export type WordBookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookCountOutputType
     */
    select?: WordBookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordBookCountOutputType without action
   */
  export type WordBookCountOutputTypeCountWordBookRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordBookRecordWhereInput
  }


  /**
   * Count Type PaymentRecordCountOutputType
   */

  export type PaymentRecordCountOutputType = {
    courseRecords: number
  }

  export type PaymentRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseRecords?: boolean | PaymentRecordCountOutputTypeCountCourseRecordsArgs
  }

  // Custom InputTypes
  /**
   * PaymentRecordCountOutputType without action
   */
  export type PaymentRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecordCountOutputType
     */
    select?: PaymentRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentRecordCountOutputType without action
   */
  export type PaymentRecordCountOutputTypeCountCourseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRecordWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseRecords: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseRecords?: boolean | CourseCountOutputTypeCountCourseRecordsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRecordWhereInput
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
    wordNumber: number | null
    dayNumber: number | null
  }

  export type UserSumAggregateOutputType = {
    wordNumber: number | null
    dayNumber: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    address: string | null
    avatar: string | null
    bio: string | null
    isTimingTask: boolean | null
    timingTaskTime: string | null
    wordNumber: number | null
    dayNumber: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    address: string | null
    avatar: string | null
    bio: string | null
    isTimingTask: boolean | null
    timingTaskTime: string | null
    wordNumber: number | null
    dayNumber: number | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    address: number
    avatar: number
    bio: number
    isTimingTask: number
    timingTaskTime: number
    wordNumber: number
    dayNumber: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    wordNumber?: true
    dayNumber?: true
  }

  export type UserSumAggregateInputType = {
    wordNumber?: true
    dayNumber?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    avatar?: true
    bio?: true
    isTimingTask?: true
    timingTaskTime?: true
    wordNumber?: true
    dayNumber?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    avatar?: true
    bio?: true
    isTimingTask?: true
    timingTaskTime?: true
    wordNumber?: true
    dayNumber?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    address?: true
    avatar?: true
    bio?: true
    isTimingTask?: true
    timingTaskTime?: true
    wordNumber?: true
    dayNumber?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    name: string
    email: string | null
    phone: string
    password: string
    address: string | null
    avatar: string | null
    bio: string | null
    isTimingTask: boolean
    timingTaskTime: string
    wordNumber: number
    dayNumber: number
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    avatar?: boolean
    bio?: boolean
    isTimingTask?: boolean
    timingTaskTime?: boolean
    wordNumber?: boolean
    dayNumber?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordBookRecords?: boolean | User$wordBookRecordsArgs<ExtArgs>
    paymentRecords?: boolean | User$paymentRecordsArgs<ExtArgs>
    courseRecords?: boolean | User$courseRecordsArgs<ExtArgs>
    visitors?: boolean | User$visitorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    avatar?: boolean
    bio?: boolean
    isTimingTask?: boolean
    timingTaskTime?: boolean
    wordNumber?: boolean
    dayNumber?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    avatar?: boolean
    bio?: boolean
    isTimingTask?: boolean
    timingTaskTime?: boolean
    wordNumber?: boolean
    dayNumber?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    avatar?: boolean
    bio?: boolean
    isTimingTask?: boolean
    timingTaskTime?: boolean
    wordNumber?: boolean
    dayNumber?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "address" | "avatar" | "bio" | "isTimingTask" | "timingTaskTime" | "wordNumber" | "dayNumber" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordBookRecords?: boolean | User$wordBookRecordsArgs<ExtArgs>
    paymentRecords?: boolean | User$paymentRecordsArgs<ExtArgs>
    courseRecords?: boolean | User$courseRecordsArgs<ExtArgs>
    visitors?: boolean | User$visitorsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wordBookRecords: Prisma.$WordBookRecordPayload<ExtArgs>[]
      paymentRecords: Prisma.$PaymentRecordPayload<ExtArgs>[]
      courseRecords: Prisma.$CourseRecordPayload<ExtArgs>[]
      visitors: Prisma.$VisitorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string
      password: string
      address: string | null
      avatar: string | null
      bio: string | null
      isTimingTask: boolean
      timingTaskTime: string
      wordNumber: number
      dayNumber: number
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    wordBookRecords<T extends User$wordBookRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordBookRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentRecords<T extends User$paymentRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseRecords<T extends User$courseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$courseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visitors<T extends User$visitorsArgs<ExtArgs> = {}>(args?: Subset<T, User$visitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly isTimingTask: FieldRef<"User", 'Boolean'>
    readonly timingTaskTime: FieldRef<"User", 'String'>
    readonly wordNumber: FieldRef<"User", 'Int'>
    readonly dayNumber: FieldRef<"User", 'Int'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.wordBookRecords
   */
  export type User$wordBookRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    where?: WordBookRecordWhereInput
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    cursor?: WordBookRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordBookRecordScalarFieldEnum | WordBookRecordScalarFieldEnum[]
  }

  /**
   * User.paymentRecords
   */
  export type User$paymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * User.courseRecords
   */
  export type User$courseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    where?: CourseRecordWhereInput
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    cursor?: CourseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * User.visitors
   */
  export type User$visitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    cursor?: VisitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
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
   * Model Visitor
   */

  export type AggregateVisitor = {
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  export type VisitorMinAggregateOutputType = {
    id: string | null
    anonymousId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    browser: string | null
    os: string | null
    device: string | null
  }

  export type VisitorMaxAggregateOutputType = {
    id: string | null
    anonymousId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    browser: string | null
    os: string | null
    device: string | null
  }

  export type VisitorCountAggregateOutputType = {
    id: number
    anonymousId: number
    userId: number
    createdAt: number
    updatedAt: number
    browser: number
    os: number
    device: number
    _all: number
  }


  export type VisitorMinAggregateInputType = {
    id?: true
    anonymousId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    browser?: true
    os?: true
    device?: true
  }

  export type VisitorMaxAggregateInputType = {
    id?: true
    anonymousId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    browser?: true
    os?: true
    device?: true
  }

  export type VisitorCountAggregateInputType = {
    id?: true
    anonymousId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    browser?: true
    os?: true
    device?: true
    _all?: true
  }

  export type VisitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitor to aggregate.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visitors
    **/
    _count?: true | VisitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorMaxAggregateInputType
  }

  export type GetVisitorAggregateType<T extends VisitorAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitor[P]>
      : GetScalarType<T[P], AggregateVisitor[P]>
  }




  export type VisitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitorWhereInput
    orderBy?: VisitorOrderByWithAggregationInput | VisitorOrderByWithAggregationInput[]
    by: VisitorScalarFieldEnum[] | VisitorScalarFieldEnum
    having?: VisitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorCountAggregateInputType | true
    _min?: VisitorMinAggregateInputType
    _max?: VisitorMaxAggregateInputType
  }

  export type VisitorGroupByOutputType = {
    id: string
    anonymousId: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    browser: string | null
    os: string | null
    device: string | null
    _count: VisitorCountAggregateOutputType | null
    _min: VisitorMinAggregateOutputType | null
    _max: VisitorMaxAggregateOutputType | null
  }

  type GetVisitorGroupByPayload<T extends VisitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorGroupByOutputType[P]>
        }
      >
    >


  export type VisitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anonymousId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    user?: boolean | Visitor$userArgs<ExtArgs>
    pageViews?: boolean | Visitor$pageViewsArgs<ExtArgs>
    trackEvents?: boolean | Visitor$trackEventsArgs<ExtArgs>
    performanceEntries?: boolean | Visitor$performanceEntriesArgs<ExtArgs>
    errorEntries?: boolean | Visitor$errorEntriesArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anonymousId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    user?: boolean | Visitor$userArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anonymousId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    user?: boolean | Visitor$userArgs<ExtArgs>
  }, ExtArgs["result"]["visitor"]>

  export type VisitorSelectScalar = {
    id?: boolean
    anonymousId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
  }

  export type VisitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anonymousId" | "userId" | "createdAt" | "updatedAt" | "browser" | "os" | "device", ExtArgs["result"]["visitor"]>
  export type VisitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Visitor$userArgs<ExtArgs>
    pageViews?: boolean | Visitor$pageViewsArgs<ExtArgs>
    trackEvents?: boolean | Visitor$trackEventsArgs<ExtArgs>
    performanceEntries?: boolean | Visitor$performanceEntriesArgs<ExtArgs>
    errorEntries?: boolean | Visitor$errorEntriesArgs<ExtArgs>
    _count?: boolean | VisitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Visitor$userArgs<ExtArgs>
  }
  export type VisitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Visitor$userArgs<ExtArgs>
  }

  export type $VisitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visitor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      pageViews: Prisma.$PageViewPayload<ExtArgs>[]
      trackEvents: Prisma.$TrackEventPayload<ExtArgs>[]
      performanceEntries: Prisma.$PerformanceEntryPayload<ExtArgs>[]
      errorEntries: Prisma.$ErrorEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anonymousId: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
      browser: string | null
      os: string | null
      device: string | null
    }, ExtArgs["result"]["visitor"]>
    composites: {}
  }

  type VisitorGetPayload<S extends boolean | null | undefined | VisitorDefaultArgs> = $Result.GetResult<Prisma.$VisitorPayload, S>

  type VisitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorCountAggregateInputType | true
    }

  export interface VisitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visitor'], meta: { name: 'Visitor' } }
    /**
     * Find zero or one Visitor that matches the filter.
     * @param {VisitorFindUniqueArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitorFindUniqueArgs>(args: SelectSubset<T, VisitorFindUniqueArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitorFindUniqueOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitorFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitorFindFirstArgs>(args?: SelectSubset<T, VisitorFindFirstArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindFirstOrThrowArgs} args - Arguments to find a Visitor
     * @example
     * // Get one Visitor
     * const visitor = await prisma.visitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitorFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitor.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorWithIdOnly = await prisma.visitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitorFindManyArgs>(args?: SelectSubset<T, VisitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitor.
     * @param {VisitorCreateArgs} args - Arguments to create a Visitor.
     * @example
     * // Create one Visitor
     * const Visitor = await prisma.visitor.create({
     *   data: {
     *     // ... data to create a Visitor
     *   }
     * })
     * 
     */
    create<T extends VisitorCreateArgs>(args: SelectSubset<T, VisitorCreateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {VisitorCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitorCreateManyArgs>(args?: SelectSubset<T, VisitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visitors and returns the data saved in the database.
     * @param {VisitorCreateManyAndReturnArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitor = await prisma.visitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisitorCreateManyAndReturnArgs>(args?: SelectSubset<T, VisitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visitor.
     * @param {VisitorDeleteArgs} args - Arguments to delete one Visitor.
     * @example
     * // Delete one Visitor
     * const Visitor = await prisma.visitor.delete({
     *   where: {
     *     // ... filter to delete one Visitor
     *   }
     * })
     * 
     */
    delete<T extends VisitorDeleteArgs>(args: SelectSubset<T, VisitorDeleteArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitor.
     * @param {VisitorUpdateArgs} args - Arguments to update one Visitor.
     * @example
     * // Update one Visitor
     * const visitor = await prisma.visitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitorUpdateArgs>(args: SelectSubset<T, VisitorUpdateArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {VisitorDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitorDeleteManyArgs>(args?: SelectSubset<T, VisitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitorUpdateManyArgs>(args: SelectSubset<T, VisitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors and returns the data updated in the database.
     * @param {VisitorUpdateManyAndReturnArgs} args - Arguments to update many Visitors.
     * @example
     * // Update many Visitors
     * const visitor = await prisma.visitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visitors and only return the `id`
     * const visitorWithIdOnly = await prisma.visitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VisitorUpdateManyAndReturnArgs>(args: SelectSubset<T, VisitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visitor.
     * @param {VisitorUpsertArgs} args - Arguments to update or create a Visitor.
     * @example
     * // Update or create a Visitor
     * const visitor = await prisma.visitor.upsert({
     *   create: {
     *     // ... data to create a Visitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitor we want to update
     *   }
     * })
     */
    upsert<T extends VisitorUpsertArgs>(args: SelectSubset<T, VisitorUpsertArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitor.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends VisitorCountArgs>(
      args?: Subset<T, VisitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorAggregateArgs>(args: Subset<T, VisitorAggregateArgs>): Prisma.PrismaPromise<GetVisitorAggregateType<T>>

    /**
     * Group by Visitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorGroupByArgs} args - Group by arguments.
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
      T extends VisitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitorGroupByArgs['orderBy'] }
        : { orderBy?: VisitorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visitor model
   */
  readonly fields: VisitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Visitor$userArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pageViews<T extends Visitor$pageViewsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$pageViewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackEvents<T extends Visitor$trackEventsArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$trackEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    performanceEntries<T extends Visitor$performanceEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$performanceEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    errorEntries<T extends Visitor$errorEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Visitor$errorEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Visitor model
   */
  interface VisitorFieldRefs {
    readonly id: FieldRef<"Visitor", 'String'>
    readonly anonymousId: FieldRef<"Visitor", 'String'>
    readonly userId: FieldRef<"Visitor", 'String'>
    readonly createdAt: FieldRef<"Visitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Visitor", 'DateTime'>
    readonly browser: FieldRef<"Visitor", 'String'>
    readonly os: FieldRef<"Visitor", 'String'>
    readonly device: FieldRef<"Visitor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Visitor findUnique
   */
  export type VisitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findUniqueOrThrow
   */
  export type VisitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor findFirst
   */
  export type VisitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findFirstOrThrow
   */
  export type VisitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitor to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visitors.
     */
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor findMany
   */
  export type VisitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter, which Visitors to fetch.
     */
    where?: VisitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visitors to fetch.
     */
    orderBy?: VisitorOrderByWithRelationInput | VisitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visitors.
     */
    cursor?: VisitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visitors.
     */
    skip?: number
    distinct?: VisitorScalarFieldEnum | VisitorScalarFieldEnum[]
  }

  /**
   * Visitor create
   */
  export type VisitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Visitor.
     */
    data: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
  }

  /**
   * Visitor createMany
   */
  export type VisitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visitor createManyAndReturn
   */
  export type VisitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to create many Visitors.
     */
    data: VisitorCreateManyInput | VisitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor update
   */
  export type VisitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Visitor.
     */
    data: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
    /**
     * Choose, which Visitor to update.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor updateMany
   */
  export type VisitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
  }

  /**
   * Visitor updateManyAndReturn
   */
  export type VisitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * The data used to update Visitors.
     */
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyInput>
    /**
     * Filter which Visitors to update
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visitor upsert
   */
  export type VisitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Visitor to update in case it exists.
     */
    where: VisitorWhereUniqueInput
    /**
     * In case the Visitor found by the `where` argument doesn't exist, create a new Visitor with this data.
     */
    create: XOR<VisitorCreateInput, VisitorUncheckedCreateInput>
    /**
     * In case the Visitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitorUpdateInput, VisitorUncheckedUpdateInput>
  }

  /**
   * Visitor delete
   */
  export type VisitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
    /**
     * Filter which Visitor to delete.
     */
    where: VisitorWhereUniqueInput
  }

  /**
   * Visitor deleteMany
   */
  export type VisitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visitors to delete
     */
    where?: VisitorWhereInput
    /**
     * Limit how many Visitors to delete.
     */
    limit?: number
  }

  /**
   * Visitor.user
   */
  export type Visitor$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Visitor.pageViews
   */
  export type Visitor$pageViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    where?: PageViewWhereInput
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    cursor?: PageViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * Visitor.trackEvents
   */
  export type Visitor$trackEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    where?: TrackEventWhereInput
    orderBy?: TrackEventOrderByWithRelationInput | TrackEventOrderByWithRelationInput[]
    cursor?: TrackEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackEventScalarFieldEnum | TrackEventScalarFieldEnum[]
  }

  /**
   * Visitor.performanceEntries
   */
  export type Visitor$performanceEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    where?: PerformanceEntryWhereInput
    orderBy?: PerformanceEntryOrderByWithRelationInput | PerformanceEntryOrderByWithRelationInput[]
    cursor?: PerformanceEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerformanceEntryScalarFieldEnum | PerformanceEntryScalarFieldEnum[]
  }

  /**
   * Visitor.errorEntries
   */
  export type Visitor$errorEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    where?: ErrorEntryWhereInput
    orderBy?: ErrorEntryOrderByWithRelationInput | ErrorEntryOrderByWithRelationInput[]
    cursor?: ErrorEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErrorEntryScalarFieldEnum | ErrorEntryScalarFieldEnum[]
  }

  /**
   * Visitor without action
   */
  export type VisitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visitor
     */
    select?: VisitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visitor
     */
    omit?: VisitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitorInclude<ExtArgs> | null
  }


  /**
   * Model PageView
   */

  export type AggregatePageView = {
    _count: PageViewCountAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  export type PageViewMinAggregateOutputType = {
    id: string | null
    visitorId: string | null
    url: string | null
    referrer: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageViewMaxAggregateOutputType = {
    id: string | null
    visitorId: string | null
    url: string | null
    referrer: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageViewCountAggregateOutputType = {
    id: number
    visitorId: number
    url: number
    referrer: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageViewMinAggregateInputType = {
    id?: true
    visitorId?: true
    url?: true
    referrer?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageViewMaxAggregateInputType = {
    id?: true
    visitorId?: true
    url?: true
    referrer?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageViewCountAggregateInputType = {
    id?: true
    visitorId?: true
    url?: true
    referrer?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageView to aggregate.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViews
    **/
    _count?: true | PageViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewMaxAggregateInputType
  }

  export type GetPageViewAggregateType<T extends PageViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePageView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageView[P]>
      : GetScalarType<T[P], AggregatePageView[P]>
  }




  export type PageViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewWhereInput
    orderBy?: PageViewOrderByWithAggregationInput | PageViewOrderByWithAggregationInput[]
    by: PageViewScalarFieldEnum[] | PageViewScalarFieldEnum
    having?: PageViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageViewCountAggregateInputType | true
    _min?: PageViewMinAggregateInputType
    _max?: PageViewMaxAggregateInputType
  }

  export type PageViewGroupByOutputType = {
    id: string
    visitorId: string
    url: string
    referrer: string | null
    path: string
    createdAt: Date
    updatedAt: Date
    _count: PageViewCountAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  type GetPageViewGroupByPayload<T extends PageViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewGroupByOutputType[P]>
        }
      >
    >


  export type PageViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    url?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    url?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    url?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectScalar = {
    id?: boolean
    visitorId?: boolean
    url?: boolean
    referrer?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "url" | "referrer" | "path" | "createdAt" | "updatedAt", ExtArgs["result"]["pageView"]>
  export type PageViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PageViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PageViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $PageViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageView"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitorId: string
      url: string
      referrer: string | null
      path: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pageView"]>
    composites: {}
  }

  type PageViewGetPayload<S extends boolean | null | undefined | PageViewDefaultArgs> = $Result.GetResult<Prisma.$PageViewPayload, S>

  type PageViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageViewCountAggregateInputType | true
    }

  export interface PageViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageView'], meta: { name: 'PageView' } }
    /**
     * Find zero or one PageView that matches the filter.
     * @param {PageViewFindUniqueArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageViewFindUniqueArgs>(args: SelectSubset<T, PageViewFindUniqueArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageViewFindUniqueOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageViewFindUniqueOrThrowArgs>(args: SelectSubset<T, PageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageViewFindFirstArgs>(args?: SelectSubset<T, PageViewFindFirstArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageViewFindFirstOrThrowArgs>(args?: SelectSubset<T, PageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViews
     * const pageViews = await prisma.pageView.findMany()
     * 
     * // Get first 10 PageViews
     * const pageViews = await prisma.pageView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewWithIdOnly = await prisma.pageView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageViewFindManyArgs>(args?: SelectSubset<T, PageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageView.
     * @param {PageViewCreateArgs} args - Arguments to create a PageView.
     * @example
     * // Create one PageView
     * const PageView = await prisma.pageView.create({
     *   data: {
     *     // ... data to create a PageView
     *   }
     * })
     * 
     */
    create<T extends PageViewCreateArgs>(args: SelectSubset<T, PageViewCreateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageViews.
     * @param {PageViewCreateManyArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageViewCreateManyArgs>(args?: SelectSubset<T, PageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageViews and returns the data saved in the database.
     * @param {PageViewCreateManyAndReturnArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageViewCreateManyAndReturnArgs>(args?: SelectSubset<T, PageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageView.
     * @param {PageViewDeleteArgs} args - Arguments to delete one PageView.
     * @example
     * // Delete one PageView
     * const PageView = await prisma.pageView.delete({
     *   where: {
     *     // ... filter to delete one PageView
     *   }
     * })
     * 
     */
    delete<T extends PageViewDeleteArgs>(args: SelectSubset<T, PageViewDeleteArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageView.
     * @param {PageViewUpdateArgs} args - Arguments to update one PageView.
     * @example
     * // Update one PageView
     * const pageView = await prisma.pageView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageViewUpdateArgs>(args: SelectSubset<T, PageViewUpdateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageViews.
     * @param {PageViewDeleteManyArgs} args - Arguments to filter PageViews to delete.
     * @example
     * // Delete a few PageViews
     * const { count } = await prisma.pageView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageViewDeleteManyArgs>(args?: SelectSubset<T, PageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageViewUpdateManyArgs>(args: SelectSubset<T, PageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews and returns the data updated in the database.
     * @param {PageViewUpdateManyAndReturnArgs} args - Arguments to update many PageViews.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageViewUpdateManyAndReturnArgs>(args: SelectSubset<T, PageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageView.
     * @param {PageViewUpsertArgs} args - Arguments to update or create a PageView.
     * @example
     * // Update or create a PageView
     * const pageView = await prisma.pageView.upsert({
     *   create: {
     *     // ... data to create a PageView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageView we want to update
     *   }
     * })
     */
    upsert<T extends PageViewUpsertArgs>(args: SelectSubset<T, PageViewUpsertArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewCountArgs} args - Arguments to filter PageViews to count.
     * @example
     * // Count the number of PageViews
     * const count = await prisma.pageView.count({
     *   where: {
     *     // ... the filter for the PageViews we want to count
     *   }
     * })
    **/
    count<T extends PageViewCountArgs>(
      args?: Subset<T, PageViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageViewAggregateArgs>(args: Subset<T, PageViewAggregateArgs>): Prisma.PrismaPromise<GetPageViewAggregateType<T>>

    /**
     * Group by PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewGroupByArgs} args - Group by arguments.
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
      T extends PageViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewGroupByArgs['orderBy'] }
        : { orderBy?: PageViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageView model
   */
  readonly fields: PageViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PageView model
   */
  interface PageViewFieldRefs {
    readonly id: FieldRef<"PageView", 'String'>
    readonly visitorId: FieldRef<"PageView", 'String'>
    readonly url: FieldRef<"PageView", 'String'>
    readonly referrer: FieldRef<"PageView", 'String'>
    readonly path: FieldRef<"PageView", 'String'>
    readonly createdAt: FieldRef<"PageView", 'DateTime'>
    readonly updatedAt: FieldRef<"PageView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageView findUnique
   */
  export type PageViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findUniqueOrThrow
   */
  export type PageViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findFirst
   */
  export type PageViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView findFirstOrThrow
   */
  export type PageViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView findMany
   */
  export type PageViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView create
   */
  export type PageViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * The data needed to create a PageView.
     */
    data: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
  }

  /**
   * PageView createMany
   */
  export type PageViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageView createManyAndReturn
   */
  export type PageViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageView update
   */
  export type PageViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * The data needed to update a PageView.
     */
    data: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
    /**
     * Choose, which PageView to update.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView updateMany
   */
  export type PageViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
  }

  /**
   * PageView updateManyAndReturn
   */
  export type PageViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageView upsert
   */
  export type PageViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * The filter to search for the PageView to update in case it exists.
     */
    where: PageViewWhereUniqueInput
    /**
     * In case the PageView found by the `where` argument doesn't exist, create a new PageView with this data.
     */
    create: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
    /**
     * In case the PageView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
  }

  /**
   * PageView delete
   */
  export type PageViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
    /**
     * Filter which PageView to delete.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView deleteMany
   */
  export type PageViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViews to delete
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to delete.
     */
    limit?: number
  }

  /**
   * PageView without action
   */
  export type PageViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageViewInclude<ExtArgs> | null
  }


  /**
   * Model TrackEvent
   */

  export type AggregateTrackEvent = {
    _count: TrackEventCountAggregateOutputType | null
    _min: TrackEventMinAggregateOutputType | null
    _max: TrackEventMaxAggregateOutputType | null
  }

  export type TrackEventMinAggregateOutputType = {
    id: string | null
    visitorId: string | null
    event: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackEventMaxAggregateOutputType = {
    id: string | null
    visitorId: string | null
    event: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackEventCountAggregateOutputType = {
    id: number
    visitorId: number
    event: number
    payload: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrackEventMinAggregateInputType = {
    id?: true
    visitorId?: true
    event?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackEventMaxAggregateInputType = {
    id?: true
    visitorId?: true
    event?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackEventCountAggregateInputType = {
    id?: true
    visitorId?: true
    event?: true
    payload?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrackEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackEvent to aggregate.
     */
    where?: TrackEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEvents to fetch.
     */
    orderBy?: TrackEventOrderByWithRelationInput | TrackEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackEvents
    **/
    _count?: true | TrackEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackEventMaxAggregateInputType
  }

  export type GetTrackEventAggregateType<T extends TrackEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackEvent[P]>
      : GetScalarType<T[P], AggregateTrackEvent[P]>
  }




  export type TrackEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackEventWhereInput
    orderBy?: TrackEventOrderByWithAggregationInput | TrackEventOrderByWithAggregationInput[]
    by: TrackEventScalarFieldEnum[] | TrackEventScalarFieldEnum
    having?: TrackEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackEventCountAggregateInputType | true
    _min?: TrackEventMinAggregateInputType
    _max?: TrackEventMaxAggregateInputType
  }

  export type TrackEventGroupByOutputType = {
    id: string
    visitorId: string
    event: string
    payload: JsonValue | null
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: TrackEventCountAggregateOutputType | null
    _min: TrackEventMinAggregateOutputType | null
    _max: TrackEventMaxAggregateOutputType | null
  }

  type GetTrackEventGroupByPayload<T extends TrackEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackEventGroupByOutputType[P]>
            : GetScalarType<T[P], TrackEventGroupByOutputType[P]>
        }
      >
    >


  export type TrackEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    event?: boolean
    payload?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackEvent"]>

  export type TrackEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    event?: boolean
    payload?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackEvent"]>

  export type TrackEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    event?: boolean
    payload?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackEvent"]>

  export type TrackEventSelectScalar = {
    id?: boolean
    visitorId?: boolean
    event?: boolean
    payload?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrackEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "event" | "payload" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["trackEvent"]>
  export type TrackEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type TrackEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type TrackEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $TrackEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackEvent"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitorId: string
      event: string
      payload: Prisma.JsonValue | null
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trackEvent"]>
    composites: {}
  }

  type TrackEventGetPayload<S extends boolean | null | undefined | TrackEventDefaultArgs> = $Result.GetResult<Prisma.$TrackEventPayload, S>

  type TrackEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackEventCountAggregateInputType | true
    }

  export interface TrackEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackEvent'], meta: { name: 'TrackEvent' } }
    /**
     * Find zero or one TrackEvent that matches the filter.
     * @param {TrackEventFindUniqueArgs} args - Arguments to find a TrackEvent
     * @example
     * // Get one TrackEvent
     * const trackEvent = await prisma.trackEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackEventFindUniqueArgs>(args: SelectSubset<T, TrackEventFindUniqueArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackEventFindUniqueOrThrowArgs} args - Arguments to find a TrackEvent
     * @example
     * // Get one TrackEvent
     * const trackEvent = await prisma.trackEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventFindFirstArgs} args - Arguments to find a TrackEvent
     * @example
     * // Get one TrackEvent
     * const trackEvent = await prisma.trackEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackEventFindFirstArgs>(args?: SelectSubset<T, TrackEventFindFirstArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventFindFirstOrThrowArgs} args - Arguments to find a TrackEvent
     * @example
     * // Get one TrackEvent
     * const trackEvent = await prisma.trackEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackEvents
     * const trackEvents = await prisma.trackEvent.findMany()
     * 
     * // Get first 10 TrackEvents
     * const trackEvents = await prisma.trackEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackEventWithIdOnly = await prisma.trackEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackEventFindManyArgs>(args?: SelectSubset<T, TrackEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackEvent.
     * @param {TrackEventCreateArgs} args - Arguments to create a TrackEvent.
     * @example
     * // Create one TrackEvent
     * const TrackEvent = await prisma.trackEvent.create({
     *   data: {
     *     // ... data to create a TrackEvent
     *   }
     * })
     * 
     */
    create<T extends TrackEventCreateArgs>(args: SelectSubset<T, TrackEventCreateArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackEvents.
     * @param {TrackEventCreateManyArgs} args - Arguments to create many TrackEvents.
     * @example
     * // Create many TrackEvents
     * const trackEvent = await prisma.trackEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackEventCreateManyArgs>(args?: SelectSubset<T, TrackEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackEvents and returns the data saved in the database.
     * @param {TrackEventCreateManyAndReturnArgs} args - Arguments to create many TrackEvents.
     * @example
     * // Create many TrackEvents
     * const trackEvent = await prisma.trackEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackEvents and only return the `id`
     * const trackEventWithIdOnly = await prisma.trackEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackEvent.
     * @param {TrackEventDeleteArgs} args - Arguments to delete one TrackEvent.
     * @example
     * // Delete one TrackEvent
     * const TrackEvent = await prisma.trackEvent.delete({
     *   where: {
     *     // ... filter to delete one TrackEvent
     *   }
     * })
     * 
     */
    delete<T extends TrackEventDeleteArgs>(args: SelectSubset<T, TrackEventDeleteArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackEvent.
     * @param {TrackEventUpdateArgs} args - Arguments to update one TrackEvent.
     * @example
     * // Update one TrackEvent
     * const trackEvent = await prisma.trackEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackEventUpdateArgs>(args: SelectSubset<T, TrackEventUpdateArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackEvents.
     * @param {TrackEventDeleteManyArgs} args - Arguments to filter TrackEvents to delete.
     * @example
     * // Delete a few TrackEvents
     * const { count } = await prisma.trackEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackEventDeleteManyArgs>(args?: SelectSubset<T, TrackEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackEvents
     * const trackEvent = await prisma.trackEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackEventUpdateManyArgs>(args: SelectSubset<T, TrackEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackEvents and returns the data updated in the database.
     * @param {TrackEventUpdateManyAndReturnArgs} args - Arguments to update many TrackEvents.
     * @example
     * // Update many TrackEvents
     * const trackEvent = await prisma.trackEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackEvents and only return the `id`
     * const trackEventWithIdOnly = await prisma.trackEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackEvent.
     * @param {TrackEventUpsertArgs} args - Arguments to update or create a TrackEvent.
     * @example
     * // Update or create a TrackEvent
     * const trackEvent = await prisma.trackEvent.upsert({
     *   create: {
     *     // ... data to create a TrackEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackEvent we want to update
     *   }
     * })
     */
    upsert<T extends TrackEventUpsertArgs>(args: SelectSubset<T, TrackEventUpsertArgs<ExtArgs>>): Prisma__TrackEventClient<$Result.GetResult<Prisma.$TrackEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventCountArgs} args - Arguments to filter TrackEvents to count.
     * @example
     * // Count the number of TrackEvents
     * const count = await prisma.trackEvent.count({
     *   where: {
     *     // ... the filter for the TrackEvents we want to count
     *   }
     * })
    **/
    count<T extends TrackEventCountArgs>(
      args?: Subset<T, TrackEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackEventAggregateArgs>(args: Subset<T, TrackEventAggregateArgs>): Prisma.PrismaPromise<GetTrackEventAggregateType<T>>

    /**
     * Group by TrackEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackEventGroupByArgs} args - Group by arguments.
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
      T extends TrackEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackEventGroupByArgs['orderBy'] }
        : { orderBy?: TrackEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackEvent model
   */
  readonly fields: TrackEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrackEvent model
   */
  interface TrackEventFieldRefs {
    readonly id: FieldRef<"TrackEvent", 'String'>
    readonly visitorId: FieldRef<"TrackEvent", 'String'>
    readonly event: FieldRef<"TrackEvent", 'String'>
    readonly payload: FieldRef<"TrackEvent", 'Json'>
    readonly url: FieldRef<"TrackEvent", 'String'>
    readonly createdAt: FieldRef<"TrackEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"TrackEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackEvent findUnique
   */
  export type TrackEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackEvent to fetch.
     */
    where: TrackEventWhereUniqueInput
  }

  /**
   * TrackEvent findUniqueOrThrow
   */
  export type TrackEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackEvent to fetch.
     */
    where: TrackEventWhereUniqueInput
  }

  /**
   * TrackEvent findFirst
   */
  export type TrackEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackEvent to fetch.
     */
    where?: TrackEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEvents to fetch.
     */
    orderBy?: TrackEventOrderByWithRelationInput | TrackEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackEvents.
     */
    cursor?: TrackEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackEvents.
     */
    distinct?: TrackEventScalarFieldEnum | TrackEventScalarFieldEnum[]
  }

  /**
   * TrackEvent findFirstOrThrow
   */
  export type TrackEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackEvent to fetch.
     */
    where?: TrackEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEvents to fetch.
     */
    orderBy?: TrackEventOrderByWithRelationInput | TrackEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackEvents.
     */
    cursor?: TrackEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackEvents.
     */
    distinct?: TrackEventScalarFieldEnum | TrackEventScalarFieldEnum[]
  }

  /**
   * TrackEvent findMany
   */
  export type TrackEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter, which TrackEvents to fetch.
     */
    where?: TrackEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackEvents to fetch.
     */
    orderBy?: TrackEventOrderByWithRelationInput | TrackEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackEvents.
     */
    cursor?: TrackEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackEvents.
     */
    skip?: number
    distinct?: TrackEventScalarFieldEnum | TrackEventScalarFieldEnum[]
  }

  /**
   * TrackEvent create
   */
  export type TrackEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackEvent.
     */
    data: XOR<TrackEventCreateInput, TrackEventUncheckedCreateInput>
  }

  /**
   * TrackEvent createMany
   */
  export type TrackEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackEvents.
     */
    data: TrackEventCreateManyInput | TrackEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackEvent createManyAndReturn
   */
  export type TrackEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * The data used to create many TrackEvents.
     */
    data: TrackEventCreateManyInput | TrackEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackEvent update
   */
  export type TrackEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackEvent.
     */
    data: XOR<TrackEventUpdateInput, TrackEventUncheckedUpdateInput>
    /**
     * Choose, which TrackEvent to update.
     */
    where: TrackEventWhereUniqueInput
  }

  /**
   * TrackEvent updateMany
   */
  export type TrackEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackEvents.
     */
    data: XOR<TrackEventUpdateManyMutationInput, TrackEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackEvents to update
     */
    where?: TrackEventWhereInput
    /**
     * Limit how many TrackEvents to update.
     */
    limit?: number
  }

  /**
   * TrackEvent updateManyAndReturn
   */
  export type TrackEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * The data used to update TrackEvents.
     */
    data: XOR<TrackEventUpdateManyMutationInput, TrackEventUncheckedUpdateManyInput>
    /**
     * Filter which TrackEvents to update
     */
    where?: TrackEventWhereInput
    /**
     * Limit how many TrackEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackEvent upsert
   */
  export type TrackEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackEvent to update in case it exists.
     */
    where: TrackEventWhereUniqueInput
    /**
     * In case the TrackEvent found by the `where` argument doesn't exist, create a new TrackEvent with this data.
     */
    create: XOR<TrackEventCreateInput, TrackEventUncheckedCreateInput>
    /**
     * In case the TrackEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackEventUpdateInput, TrackEventUncheckedUpdateInput>
  }

  /**
   * TrackEvent delete
   */
  export type TrackEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
    /**
     * Filter which TrackEvent to delete.
     */
    where: TrackEventWhereUniqueInput
  }

  /**
   * TrackEvent deleteMany
   */
  export type TrackEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackEvents to delete
     */
    where?: TrackEventWhereInput
    /**
     * Limit how many TrackEvents to delete.
     */
    limit?: number
  }

  /**
   * TrackEvent without action
   */
  export type TrackEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackEvent
     */
    select?: TrackEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackEvent
     */
    omit?: TrackEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackEventInclude<ExtArgs> | null
  }


  /**
   * Model PerformanceEntry
   */

  export type AggregatePerformanceEntry = {
    _count: PerformanceEntryCountAggregateOutputType | null
    _avg: PerformanceEntryAvgAggregateOutputType | null
    _sum: PerformanceEntrySumAggregateOutputType | null
    _min: PerformanceEntryMinAggregateOutputType | null
    _max: PerformanceEntryMaxAggregateOutputType | null
  }

  export type PerformanceEntryAvgAggregateOutputType = {
    fp: number | null
    fcp: number | null
    lcp: number | null
    inp: number | null
    cls: number | null
  }

  export type PerformanceEntrySumAggregateOutputType = {
    fp: number | null
    fcp: number | null
    lcp: number | null
    inp: number | null
    cls: number | null
  }

  export type PerformanceEntryMinAggregateOutputType = {
    id: string | null
    visitorId: string | null
    fp: number | null
    fcp: number | null
    lcp: number | null
    inp: number | null
    cls: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerformanceEntryMaxAggregateOutputType = {
    id: string | null
    visitorId: string | null
    fp: number | null
    fcp: number | null
    lcp: number | null
    inp: number | null
    cls: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerformanceEntryCountAggregateOutputType = {
    id: number
    visitorId: number
    fp: number
    fcp: number
    lcp: number
    inp: number
    cls: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PerformanceEntryAvgAggregateInputType = {
    fp?: true
    fcp?: true
    lcp?: true
    inp?: true
    cls?: true
  }

  export type PerformanceEntrySumAggregateInputType = {
    fp?: true
    fcp?: true
    lcp?: true
    inp?: true
    cls?: true
  }

  export type PerformanceEntryMinAggregateInputType = {
    id?: true
    visitorId?: true
    fp?: true
    fcp?: true
    lcp?: true
    inp?: true
    cls?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerformanceEntryMaxAggregateInputType = {
    id?: true
    visitorId?: true
    fp?: true
    fcp?: true
    lcp?: true
    inp?: true
    cls?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerformanceEntryCountAggregateInputType = {
    id?: true
    visitorId?: true
    fp?: true
    fcp?: true
    lcp?: true
    inp?: true
    cls?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PerformanceEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceEntry to aggregate.
     */
    where?: PerformanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceEntries to fetch.
     */
    orderBy?: PerformanceEntryOrderByWithRelationInput | PerformanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerformanceEntries
    **/
    _count?: true | PerformanceEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformanceEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformanceEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformanceEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformanceEntryMaxAggregateInputType
  }

  export type GetPerformanceEntryAggregateType<T extends PerformanceEntryAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformanceEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformanceEntry[P]>
      : GetScalarType<T[P], AggregatePerformanceEntry[P]>
  }




  export type PerformanceEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceEntryWhereInput
    orderBy?: PerformanceEntryOrderByWithAggregationInput | PerformanceEntryOrderByWithAggregationInput[]
    by: PerformanceEntryScalarFieldEnum[] | PerformanceEntryScalarFieldEnum
    having?: PerformanceEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformanceEntryCountAggregateInputType | true
    _avg?: PerformanceEntryAvgAggregateInputType
    _sum?: PerformanceEntrySumAggregateInputType
    _min?: PerformanceEntryMinAggregateInputType
    _max?: PerformanceEntryMaxAggregateInputType
  }

  export type PerformanceEntryGroupByOutputType = {
    id: string
    visitorId: string
    fp: number | null
    fcp: number | null
    lcp: number | null
    inp: number | null
    cls: number | null
    createdAt: Date
    updatedAt: Date
    _count: PerformanceEntryCountAggregateOutputType | null
    _avg: PerformanceEntryAvgAggregateOutputType | null
    _sum: PerformanceEntrySumAggregateOutputType | null
    _min: PerformanceEntryMinAggregateOutputType | null
    _max: PerformanceEntryMaxAggregateOutputType | null
  }

  type GetPerformanceEntryGroupByPayload<T extends PerformanceEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformanceEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceEntryGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceEntryGroupByOutputType[P]>
        }
      >
    >


  export type PerformanceEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    fp?: boolean
    fcp?: boolean
    lcp?: boolean
    inp?: boolean
    cls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceEntry"]>

  export type PerformanceEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    fp?: boolean
    fcp?: boolean
    lcp?: boolean
    inp?: boolean
    cls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceEntry"]>

  export type PerformanceEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    fp?: boolean
    fcp?: boolean
    lcp?: boolean
    inp?: boolean
    cls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["performanceEntry"]>

  export type PerformanceEntrySelectScalar = {
    id?: boolean
    visitorId?: boolean
    fp?: boolean
    fcp?: boolean
    lcp?: boolean
    inp?: boolean
    cls?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerformanceEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "fp" | "fcp" | "lcp" | "inp" | "cls" | "createdAt" | "updatedAt", ExtArgs["result"]["performanceEntry"]>
  export type PerformanceEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PerformanceEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type PerformanceEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $PerformanceEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerformanceEntry"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitorId: string
      fp: number | null
      fcp: number | null
      lcp: number | null
      inp: number | null
      cls: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["performanceEntry"]>
    composites: {}
  }

  type PerformanceEntryGetPayload<S extends boolean | null | undefined | PerformanceEntryDefaultArgs> = $Result.GetResult<Prisma.$PerformanceEntryPayload, S>

  type PerformanceEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerformanceEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerformanceEntryCountAggregateInputType | true
    }

  export interface PerformanceEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerformanceEntry'], meta: { name: 'PerformanceEntry' } }
    /**
     * Find zero or one PerformanceEntry that matches the filter.
     * @param {PerformanceEntryFindUniqueArgs} args - Arguments to find a PerformanceEntry
     * @example
     * // Get one PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceEntryFindUniqueArgs>(args: SelectSubset<T, PerformanceEntryFindUniqueArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerformanceEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerformanceEntryFindUniqueOrThrowArgs} args - Arguments to find a PerformanceEntry
     * @example
     * // Get one PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformanceEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryFindFirstArgs} args - Arguments to find a PerformanceEntry
     * @example
     * // Get one PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceEntryFindFirstArgs>(args?: SelectSubset<T, PerformanceEntryFindFirstArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerformanceEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryFindFirstOrThrowArgs} args - Arguments to find a PerformanceEntry
     * @example
     * // Get one PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformanceEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerformanceEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerformanceEntries
     * const performanceEntries = await prisma.performanceEntry.findMany()
     * 
     * // Get first 10 PerformanceEntries
     * const performanceEntries = await prisma.performanceEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performanceEntryWithIdOnly = await prisma.performanceEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerformanceEntryFindManyArgs>(args?: SelectSubset<T, PerformanceEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerformanceEntry.
     * @param {PerformanceEntryCreateArgs} args - Arguments to create a PerformanceEntry.
     * @example
     * // Create one PerformanceEntry
     * const PerformanceEntry = await prisma.performanceEntry.create({
     *   data: {
     *     // ... data to create a PerformanceEntry
     *   }
     * })
     * 
     */
    create<T extends PerformanceEntryCreateArgs>(args: SelectSubset<T, PerformanceEntryCreateArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerformanceEntries.
     * @param {PerformanceEntryCreateManyArgs} args - Arguments to create many PerformanceEntries.
     * @example
     * // Create many PerformanceEntries
     * const performanceEntry = await prisma.performanceEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformanceEntryCreateManyArgs>(args?: SelectSubset<T, PerformanceEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerformanceEntries and returns the data saved in the database.
     * @param {PerformanceEntryCreateManyAndReturnArgs} args - Arguments to create many PerformanceEntries.
     * @example
     * // Create many PerformanceEntries
     * const performanceEntry = await prisma.performanceEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerformanceEntries and only return the `id`
     * const performanceEntryWithIdOnly = await prisma.performanceEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerformanceEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, PerformanceEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PerformanceEntry.
     * @param {PerformanceEntryDeleteArgs} args - Arguments to delete one PerformanceEntry.
     * @example
     * // Delete one PerformanceEntry
     * const PerformanceEntry = await prisma.performanceEntry.delete({
     *   where: {
     *     // ... filter to delete one PerformanceEntry
     *   }
     * })
     * 
     */
    delete<T extends PerformanceEntryDeleteArgs>(args: SelectSubset<T, PerformanceEntryDeleteArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerformanceEntry.
     * @param {PerformanceEntryUpdateArgs} args - Arguments to update one PerformanceEntry.
     * @example
     * // Update one PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformanceEntryUpdateArgs>(args: SelectSubset<T, PerformanceEntryUpdateArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerformanceEntries.
     * @param {PerformanceEntryDeleteManyArgs} args - Arguments to filter PerformanceEntries to delete.
     * @example
     * // Delete a few PerformanceEntries
     * const { count } = await prisma.performanceEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformanceEntryDeleteManyArgs>(args?: SelectSubset<T, PerformanceEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerformanceEntries
     * const performanceEntry = await prisma.performanceEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformanceEntryUpdateManyArgs>(args: SelectSubset<T, PerformanceEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceEntries and returns the data updated in the database.
     * @param {PerformanceEntryUpdateManyAndReturnArgs} args - Arguments to update many PerformanceEntries.
     * @example
     * // Update many PerformanceEntries
     * const performanceEntry = await prisma.performanceEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PerformanceEntries and only return the `id`
     * const performanceEntryWithIdOnly = await prisma.performanceEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerformanceEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, PerformanceEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PerformanceEntry.
     * @param {PerformanceEntryUpsertArgs} args - Arguments to update or create a PerformanceEntry.
     * @example
     * // Update or create a PerformanceEntry
     * const performanceEntry = await prisma.performanceEntry.upsert({
     *   create: {
     *     // ... data to create a PerformanceEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerformanceEntry we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceEntryUpsertArgs>(args: SelectSubset<T, PerformanceEntryUpsertArgs<ExtArgs>>): Prisma__PerformanceEntryClient<$Result.GetResult<Prisma.$PerformanceEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerformanceEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryCountArgs} args - Arguments to filter PerformanceEntries to count.
     * @example
     * // Count the number of PerformanceEntries
     * const count = await prisma.performanceEntry.count({
     *   where: {
     *     // ... the filter for the PerformanceEntries we want to count
     *   }
     * })
    **/
    count<T extends PerformanceEntryCountArgs>(
      args?: Subset<T, PerformanceEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerformanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerformanceEntryAggregateArgs>(args: Subset<T, PerformanceEntryAggregateArgs>): Prisma.PrismaPromise<GetPerformanceEntryAggregateType<T>>

    /**
     * Group by PerformanceEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceEntryGroupByArgs} args - Group by arguments.
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
      T extends PerformanceEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceEntryGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerformanceEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerformanceEntry model
   */
  readonly fields: PerformanceEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerformanceEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PerformanceEntry model
   */
  interface PerformanceEntryFieldRefs {
    readonly id: FieldRef<"PerformanceEntry", 'String'>
    readonly visitorId: FieldRef<"PerformanceEntry", 'String'>
    readonly fp: FieldRef<"PerformanceEntry", 'Float'>
    readonly fcp: FieldRef<"PerformanceEntry", 'Float'>
    readonly lcp: FieldRef<"PerformanceEntry", 'Float'>
    readonly inp: FieldRef<"PerformanceEntry", 'Float'>
    readonly cls: FieldRef<"PerformanceEntry", 'Float'>
    readonly createdAt: FieldRef<"PerformanceEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"PerformanceEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerformanceEntry findUnique
   */
  export type PerformanceEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceEntry to fetch.
     */
    where: PerformanceEntryWhereUniqueInput
  }

  /**
   * PerformanceEntry findUniqueOrThrow
   */
  export type PerformanceEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceEntry to fetch.
     */
    where: PerformanceEntryWhereUniqueInput
  }

  /**
   * PerformanceEntry findFirst
   */
  export type PerformanceEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceEntry to fetch.
     */
    where?: PerformanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceEntries to fetch.
     */
    orderBy?: PerformanceEntryOrderByWithRelationInput | PerformanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceEntries.
     */
    cursor?: PerformanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceEntries.
     */
    distinct?: PerformanceEntryScalarFieldEnum | PerformanceEntryScalarFieldEnum[]
  }

  /**
   * PerformanceEntry findFirstOrThrow
   */
  export type PerformanceEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceEntry to fetch.
     */
    where?: PerformanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceEntries to fetch.
     */
    orderBy?: PerformanceEntryOrderByWithRelationInput | PerformanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceEntries.
     */
    cursor?: PerformanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceEntries.
     */
    distinct?: PerformanceEntryScalarFieldEnum | PerformanceEntryScalarFieldEnum[]
  }

  /**
   * PerformanceEntry findMany
   */
  export type PerformanceEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter, which PerformanceEntries to fetch.
     */
    where?: PerformanceEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceEntries to fetch.
     */
    orderBy?: PerformanceEntryOrderByWithRelationInput | PerformanceEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerformanceEntries.
     */
    cursor?: PerformanceEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceEntries.
     */
    skip?: number
    distinct?: PerformanceEntryScalarFieldEnum | PerformanceEntryScalarFieldEnum[]
  }

  /**
   * PerformanceEntry create
   */
  export type PerformanceEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a PerformanceEntry.
     */
    data: XOR<PerformanceEntryCreateInput, PerformanceEntryUncheckedCreateInput>
  }

  /**
   * PerformanceEntry createMany
   */
  export type PerformanceEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerformanceEntries.
     */
    data: PerformanceEntryCreateManyInput | PerformanceEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerformanceEntry createManyAndReturn
   */
  export type PerformanceEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * The data used to create many PerformanceEntries.
     */
    data: PerformanceEntryCreateManyInput | PerformanceEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceEntry update
   */
  export type PerformanceEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a PerformanceEntry.
     */
    data: XOR<PerformanceEntryUpdateInput, PerformanceEntryUncheckedUpdateInput>
    /**
     * Choose, which PerformanceEntry to update.
     */
    where: PerformanceEntryWhereUniqueInput
  }

  /**
   * PerformanceEntry updateMany
   */
  export type PerformanceEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerformanceEntries.
     */
    data: XOR<PerformanceEntryUpdateManyMutationInput, PerformanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceEntries to update
     */
    where?: PerformanceEntryWhereInput
    /**
     * Limit how many PerformanceEntries to update.
     */
    limit?: number
  }

  /**
   * PerformanceEntry updateManyAndReturn
   */
  export type PerformanceEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * The data used to update PerformanceEntries.
     */
    data: XOR<PerformanceEntryUpdateManyMutationInput, PerformanceEntryUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceEntries to update
     */
    where?: PerformanceEntryWhereInput
    /**
     * Limit how many PerformanceEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerformanceEntry upsert
   */
  export type PerformanceEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the PerformanceEntry to update in case it exists.
     */
    where: PerformanceEntryWhereUniqueInput
    /**
     * In case the PerformanceEntry found by the `where` argument doesn't exist, create a new PerformanceEntry with this data.
     */
    create: XOR<PerformanceEntryCreateInput, PerformanceEntryUncheckedCreateInput>
    /**
     * In case the PerformanceEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceEntryUpdateInput, PerformanceEntryUncheckedUpdateInput>
  }

  /**
   * PerformanceEntry delete
   */
  export type PerformanceEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
    /**
     * Filter which PerformanceEntry to delete.
     */
    where: PerformanceEntryWhereUniqueInput
  }

  /**
   * PerformanceEntry deleteMany
   */
  export type PerformanceEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceEntries to delete
     */
    where?: PerformanceEntryWhereInput
    /**
     * Limit how many PerformanceEntries to delete.
     */
    limit?: number
  }

  /**
   * PerformanceEntry without action
   */
  export type PerformanceEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceEntry
     */
    select?: PerformanceEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerformanceEntry
     */
    omit?: PerformanceEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerformanceEntryInclude<ExtArgs> | null
  }


  /**
   * Model ErrorEntry
   */

  export type AggregateErrorEntry = {
    _count: ErrorEntryCountAggregateOutputType | null
    _min: ErrorEntryMinAggregateOutputType | null
    _max: ErrorEntryMaxAggregateOutputType | null
  }

  export type ErrorEntryMinAggregateOutputType = {
    id: string | null
    visitorId: string | null
    error: string | null
    message: string | null
    stack: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ErrorEntryMaxAggregateOutputType = {
    id: string | null
    visitorId: string | null
    error: string | null
    message: string | null
    stack: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ErrorEntryCountAggregateOutputType = {
    id: number
    visitorId: number
    error: number
    message: number
    stack: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ErrorEntryMinAggregateInputType = {
    id?: true
    visitorId?: true
    error?: true
    message?: true
    stack?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ErrorEntryMaxAggregateInputType = {
    id?: true
    visitorId?: true
    error?: true
    message?: true
    stack?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ErrorEntryCountAggregateInputType = {
    id?: true
    visitorId?: true
    error?: true
    message?: true
    stack?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ErrorEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorEntry to aggregate.
     */
    where?: ErrorEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorEntries to fetch.
     */
    orderBy?: ErrorEntryOrderByWithRelationInput | ErrorEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorEntries
    **/
    _count?: true | ErrorEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorEntryMaxAggregateInputType
  }

  export type GetErrorEntryAggregateType<T extends ErrorEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorEntry[P]>
      : GetScalarType<T[P], AggregateErrorEntry[P]>
  }




  export type ErrorEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorEntryWhereInput
    orderBy?: ErrorEntryOrderByWithAggregationInput | ErrorEntryOrderByWithAggregationInput[]
    by: ErrorEntryScalarFieldEnum[] | ErrorEntryScalarFieldEnum
    having?: ErrorEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorEntryCountAggregateInputType | true
    _min?: ErrorEntryMinAggregateInputType
    _max?: ErrorEntryMaxAggregateInputType
  }

  export type ErrorEntryGroupByOutputType = {
    id: string
    visitorId: string
    error: string
    message: string | null
    stack: string | null
    url: string | null
    createdAt: Date
    updatedAt: Date
    _count: ErrorEntryCountAggregateOutputType | null
    _min: ErrorEntryMinAggregateOutputType | null
    _max: ErrorEntryMaxAggregateOutputType | null
  }

  type GetErrorEntryGroupByPayload<T extends ErrorEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorEntryGroupByOutputType[P]>
        }
      >
    >


  export type ErrorEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    error?: boolean
    message?: boolean
    stack?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorEntry"]>

  export type ErrorEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    error?: boolean
    message?: boolean
    stack?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorEntry"]>

  export type ErrorEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitorId?: boolean
    error?: boolean
    message?: boolean
    stack?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorEntry"]>

  export type ErrorEntrySelectScalar = {
    id?: boolean
    visitorId?: boolean
    error?: boolean
    message?: boolean
    stack?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ErrorEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitorId" | "error" | "message" | "stack" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["errorEntry"]>
  export type ErrorEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type ErrorEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }
  export type ErrorEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visitor?: boolean | VisitorDefaultArgs<ExtArgs>
  }

  export type $ErrorEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorEntry"
    objects: {
      visitor: Prisma.$VisitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      visitorId: string
      error: string
      message: string | null
      stack: string | null
      url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["errorEntry"]>
    composites: {}
  }

  type ErrorEntryGetPayload<S extends boolean | null | undefined | ErrorEntryDefaultArgs> = $Result.GetResult<Prisma.$ErrorEntryPayload, S>

  type ErrorEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorEntryCountAggregateInputType | true
    }

  export interface ErrorEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorEntry'], meta: { name: 'ErrorEntry' } }
    /**
     * Find zero or one ErrorEntry that matches the filter.
     * @param {ErrorEntryFindUniqueArgs} args - Arguments to find a ErrorEntry
     * @example
     * // Get one ErrorEntry
     * const errorEntry = await prisma.errorEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorEntryFindUniqueArgs>(args: SelectSubset<T, ErrorEntryFindUniqueArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ErrorEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorEntryFindUniqueOrThrowArgs} args - Arguments to find a ErrorEntry
     * @example
     * // Get one ErrorEntry
     * const errorEntry = await prisma.errorEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryFindFirstArgs} args - Arguments to find a ErrorEntry
     * @example
     * // Get one ErrorEntry
     * const errorEntry = await prisma.errorEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorEntryFindFirstArgs>(args?: SelectSubset<T, ErrorEntryFindFirstArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryFindFirstOrThrowArgs} args - Arguments to find a ErrorEntry
     * @example
     * // Get one ErrorEntry
     * const errorEntry = await prisma.errorEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ErrorEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorEntries
     * const errorEntries = await prisma.errorEntry.findMany()
     * 
     * // Get first 10 ErrorEntries
     * const errorEntries = await prisma.errorEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorEntryWithIdOnly = await prisma.errorEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorEntryFindManyArgs>(args?: SelectSubset<T, ErrorEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ErrorEntry.
     * @param {ErrorEntryCreateArgs} args - Arguments to create a ErrorEntry.
     * @example
     * // Create one ErrorEntry
     * const ErrorEntry = await prisma.errorEntry.create({
     *   data: {
     *     // ... data to create a ErrorEntry
     *   }
     * })
     * 
     */
    create<T extends ErrorEntryCreateArgs>(args: SelectSubset<T, ErrorEntryCreateArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ErrorEntries.
     * @param {ErrorEntryCreateManyArgs} args - Arguments to create many ErrorEntries.
     * @example
     * // Create many ErrorEntries
     * const errorEntry = await prisma.errorEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorEntryCreateManyArgs>(args?: SelectSubset<T, ErrorEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ErrorEntries and returns the data saved in the database.
     * @param {ErrorEntryCreateManyAndReturnArgs} args - Arguments to create many ErrorEntries.
     * @example
     * // Create many ErrorEntries
     * const errorEntry = await prisma.errorEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ErrorEntries and only return the `id`
     * const errorEntryWithIdOnly = await prisma.errorEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ErrorEntry.
     * @param {ErrorEntryDeleteArgs} args - Arguments to delete one ErrorEntry.
     * @example
     * // Delete one ErrorEntry
     * const ErrorEntry = await prisma.errorEntry.delete({
     *   where: {
     *     // ... filter to delete one ErrorEntry
     *   }
     * })
     * 
     */
    delete<T extends ErrorEntryDeleteArgs>(args: SelectSubset<T, ErrorEntryDeleteArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ErrorEntry.
     * @param {ErrorEntryUpdateArgs} args - Arguments to update one ErrorEntry.
     * @example
     * // Update one ErrorEntry
     * const errorEntry = await prisma.errorEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorEntryUpdateArgs>(args: SelectSubset<T, ErrorEntryUpdateArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ErrorEntries.
     * @param {ErrorEntryDeleteManyArgs} args - Arguments to filter ErrorEntries to delete.
     * @example
     * // Delete a few ErrorEntries
     * const { count } = await prisma.errorEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorEntryDeleteManyArgs>(args?: SelectSubset<T, ErrorEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorEntries
     * const errorEntry = await prisma.errorEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorEntryUpdateManyArgs>(args: SelectSubset<T, ErrorEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorEntries and returns the data updated in the database.
     * @param {ErrorEntryUpdateManyAndReturnArgs} args - Arguments to update many ErrorEntries.
     * @example
     * // Update many ErrorEntries
     * const errorEntry = await prisma.errorEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ErrorEntries and only return the `id`
     * const errorEntryWithIdOnly = await prisma.errorEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ErrorEntry.
     * @param {ErrorEntryUpsertArgs} args - Arguments to update or create a ErrorEntry.
     * @example
     * // Update or create a ErrorEntry
     * const errorEntry = await prisma.errorEntry.upsert({
     *   create: {
     *     // ... data to create a ErrorEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorEntry we want to update
     *   }
     * })
     */
    upsert<T extends ErrorEntryUpsertArgs>(args: SelectSubset<T, ErrorEntryUpsertArgs<ExtArgs>>): Prisma__ErrorEntryClient<$Result.GetResult<Prisma.$ErrorEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ErrorEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryCountArgs} args - Arguments to filter ErrorEntries to count.
     * @example
     * // Count the number of ErrorEntries
     * const count = await prisma.errorEntry.count({
     *   where: {
     *     // ... the filter for the ErrorEntries we want to count
     *   }
     * })
    **/
    count<T extends ErrorEntryCountArgs>(
      args?: Subset<T, ErrorEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ErrorEntryAggregateArgs>(args: Subset<T, ErrorEntryAggregateArgs>): Prisma.PrismaPromise<GetErrorEntryAggregateType<T>>

    /**
     * Group by ErrorEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorEntryGroupByArgs} args - Group by arguments.
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
      T extends ErrorEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorEntryGroupByArgs['orderBy'] }
        : { orderBy?: ErrorEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ErrorEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorEntry model
   */
  readonly fields: ErrorEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    visitor<T extends VisitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisitorDefaultArgs<ExtArgs>>): Prisma__VisitorClient<$Result.GetResult<Prisma.$VisitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ErrorEntry model
   */
  interface ErrorEntryFieldRefs {
    readonly id: FieldRef<"ErrorEntry", 'String'>
    readonly visitorId: FieldRef<"ErrorEntry", 'String'>
    readonly error: FieldRef<"ErrorEntry", 'String'>
    readonly message: FieldRef<"ErrorEntry", 'String'>
    readonly stack: FieldRef<"ErrorEntry", 'String'>
    readonly url: FieldRef<"ErrorEntry", 'String'>
    readonly createdAt: FieldRef<"ErrorEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"ErrorEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ErrorEntry findUnique
   */
  export type ErrorEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter, which ErrorEntry to fetch.
     */
    where: ErrorEntryWhereUniqueInput
  }

  /**
   * ErrorEntry findUniqueOrThrow
   */
  export type ErrorEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter, which ErrorEntry to fetch.
     */
    where: ErrorEntryWhereUniqueInput
  }

  /**
   * ErrorEntry findFirst
   */
  export type ErrorEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter, which ErrorEntry to fetch.
     */
    where?: ErrorEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorEntries to fetch.
     */
    orderBy?: ErrorEntryOrderByWithRelationInput | ErrorEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorEntries.
     */
    cursor?: ErrorEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorEntries.
     */
    distinct?: ErrorEntryScalarFieldEnum | ErrorEntryScalarFieldEnum[]
  }

  /**
   * ErrorEntry findFirstOrThrow
   */
  export type ErrorEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter, which ErrorEntry to fetch.
     */
    where?: ErrorEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorEntries to fetch.
     */
    orderBy?: ErrorEntryOrderByWithRelationInput | ErrorEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorEntries.
     */
    cursor?: ErrorEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorEntries.
     */
    distinct?: ErrorEntryScalarFieldEnum | ErrorEntryScalarFieldEnum[]
  }

  /**
   * ErrorEntry findMany
   */
  export type ErrorEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter, which ErrorEntries to fetch.
     */
    where?: ErrorEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorEntries to fetch.
     */
    orderBy?: ErrorEntryOrderByWithRelationInput | ErrorEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorEntries.
     */
    cursor?: ErrorEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorEntries.
     */
    skip?: number
    distinct?: ErrorEntryScalarFieldEnum | ErrorEntryScalarFieldEnum[]
  }

  /**
   * ErrorEntry create
   */
  export type ErrorEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ErrorEntry.
     */
    data: XOR<ErrorEntryCreateInput, ErrorEntryUncheckedCreateInput>
  }

  /**
   * ErrorEntry createMany
   */
  export type ErrorEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorEntries.
     */
    data: ErrorEntryCreateManyInput | ErrorEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorEntry createManyAndReturn
   */
  export type ErrorEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ErrorEntries.
     */
    data: ErrorEntryCreateManyInput | ErrorEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorEntry update
   */
  export type ErrorEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ErrorEntry.
     */
    data: XOR<ErrorEntryUpdateInput, ErrorEntryUncheckedUpdateInput>
    /**
     * Choose, which ErrorEntry to update.
     */
    where: ErrorEntryWhereUniqueInput
  }

  /**
   * ErrorEntry updateMany
   */
  export type ErrorEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorEntries.
     */
    data: XOR<ErrorEntryUpdateManyMutationInput, ErrorEntryUncheckedUpdateManyInput>
    /**
     * Filter which ErrorEntries to update
     */
    where?: ErrorEntryWhereInput
    /**
     * Limit how many ErrorEntries to update.
     */
    limit?: number
  }

  /**
   * ErrorEntry updateManyAndReturn
   */
  export type ErrorEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * The data used to update ErrorEntries.
     */
    data: XOR<ErrorEntryUpdateManyMutationInput, ErrorEntryUncheckedUpdateManyInput>
    /**
     * Filter which ErrorEntries to update
     */
    where?: ErrorEntryWhereInput
    /**
     * Limit how many ErrorEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorEntry upsert
   */
  export type ErrorEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ErrorEntry to update in case it exists.
     */
    where: ErrorEntryWhereUniqueInput
    /**
     * In case the ErrorEntry found by the `where` argument doesn't exist, create a new ErrorEntry with this data.
     */
    create: XOR<ErrorEntryCreateInput, ErrorEntryUncheckedCreateInput>
    /**
     * In case the ErrorEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorEntryUpdateInput, ErrorEntryUncheckedUpdateInput>
  }

  /**
   * ErrorEntry delete
   */
  export type ErrorEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
    /**
     * Filter which ErrorEntry to delete.
     */
    where: ErrorEntryWhereUniqueInput
  }

  /**
   * ErrorEntry deleteMany
   */
  export type ErrorEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorEntries to delete
     */
    where?: ErrorEntryWhereInput
    /**
     * Limit how many ErrorEntries to delete.
     */
    limit?: number
  }

  /**
   * ErrorEntry without action
   */
  export type ErrorEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorEntry
     */
    select?: ErrorEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorEntry
     */
    omit?: ErrorEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorEntryInclude<ExtArgs> | null
  }


  /**
   * Model WordBookRecord
   */

  export type AggregateWordBookRecord = {
    _count: WordBookRecordCountAggregateOutputType | null
    _min: WordBookRecordMinAggregateOutputType | null
    _max: WordBookRecordMaxAggregateOutputType | null
  }

  export type WordBookRecordMinAggregateOutputType = {
    id: string | null
    wordId: string | null
    isMaster: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WordBookRecordMaxAggregateOutputType = {
    id: string | null
    wordId: string | null
    isMaster: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WordBookRecordCountAggregateOutputType = {
    id: number
    wordId: number
    isMaster: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type WordBookRecordMinAggregateInputType = {
    id?: true
    wordId?: true
    isMaster?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WordBookRecordMaxAggregateInputType = {
    id?: true
    wordId?: true
    isMaster?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WordBookRecordCountAggregateInputType = {
    id?: true
    wordId?: true
    isMaster?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type WordBookRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordBookRecord to aggregate.
     */
    where?: WordBookRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBookRecords to fetch.
     */
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordBookRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBookRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBookRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordBookRecords
    **/
    _count?: true | WordBookRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordBookRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordBookRecordMaxAggregateInputType
  }

  export type GetWordBookRecordAggregateType<T extends WordBookRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateWordBookRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordBookRecord[P]>
      : GetScalarType<T[P], AggregateWordBookRecord[P]>
  }




  export type WordBookRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordBookRecordWhereInput
    orderBy?: WordBookRecordOrderByWithAggregationInput | WordBookRecordOrderByWithAggregationInput[]
    by: WordBookRecordScalarFieldEnum[] | WordBookRecordScalarFieldEnum
    having?: WordBookRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordBookRecordCountAggregateInputType | true
    _min?: WordBookRecordMinAggregateInputType
    _max?: WordBookRecordMaxAggregateInputType
  }

  export type WordBookRecordGroupByOutputType = {
    id: string
    wordId: string
    isMaster: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: WordBookRecordCountAggregateOutputType | null
    _min: WordBookRecordMinAggregateOutputType | null
    _max: WordBookRecordMaxAggregateOutputType | null
  }

  type GetWordBookRecordGroupByPayload<T extends WordBookRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordBookRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordBookRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordBookRecordGroupByOutputType[P]>
            : GetScalarType<T[P], WordBookRecordGroupByOutputType[P]>
        }
      >
    >


  export type WordBookRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    isMaster?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordBookRecord"]>

  export type WordBookRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    isMaster?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordBookRecord"]>

  export type WordBookRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wordId?: boolean
    isMaster?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordBookRecord"]>

  export type WordBookRecordSelectScalar = {
    id?: boolean
    wordId?: boolean
    isMaster?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type WordBookRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wordId" | "isMaster" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["wordBookRecord"]>
  export type WordBookRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }
  export type WordBookRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }
  export type WordBookRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordBookDefaultArgs<ExtArgs>
  }

  export type $WordBookRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WordBookRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordBookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wordId: string
      isMaster: boolean
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["wordBookRecord"]>
    composites: {}
  }

  type WordBookRecordGetPayload<S extends boolean | null | undefined | WordBookRecordDefaultArgs> = $Result.GetResult<Prisma.$WordBookRecordPayload, S>

  type WordBookRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordBookRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordBookRecordCountAggregateInputType | true
    }

  export interface WordBookRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordBookRecord'], meta: { name: 'WordBookRecord' } }
    /**
     * Find zero or one WordBookRecord that matches the filter.
     * @param {WordBookRecordFindUniqueArgs} args - Arguments to find a WordBookRecord
     * @example
     * // Get one WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordBookRecordFindUniqueArgs>(args: SelectSubset<T, WordBookRecordFindUniqueArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WordBookRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordBookRecordFindUniqueOrThrowArgs} args - Arguments to find a WordBookRecord
     * @example
     * // Get one WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordBookRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordBookRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordBookRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordFindFirstArgs} args - Arguments to find a WordBookRecord
     * @example
     * // Get one WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordBookRecordFindFirstArgs>(args?: SelectSubset<T, WordBookRecordFindFirstArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordBookRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordFindFirstOrThrowArgs} args - Arguments to find a WordBookRecord
     * @example
     * // Get one WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordBookRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordBookRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WordBookRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordBookRecords
     * const wordBookRecords = await prisma.wordBookRecord.findMany()
     * 
     * // Get first 10 WordBookRecords
     * const wordBookRecords = await prisma.wordBookRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordBookRecordWithIdOnly = await prisma.wordBookRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordBookRecordFindManyArgs>(args?: SelectSubset<T, WordBookRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WordBookRecord.
     * @param {WordBookRecordCreateArgs} args - Arguments to create a WordBookRecord.
     * @example
     * // Create one WordBookRecord
     * const WordBookRecord = await prisma.wordBookRecord.create({
     *   data: {
     *     // ... data to create a WordBookRecord
     *   }
     * })
     * 
     */
    create<T extends WordBookRecordCreateArgs>(args: SelectSubset<T, WordBookRecordCreateArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WordBookRecords.
     * @param {WordBookRecordCreateManyArgs} args - Arguments to create many WordBookRecords.
     * @example
     * // Create many WordBookRecords
     * const wordBookRecord = await prisma.wordBookRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordBookRecordCreateManyArgs>(args?: SelectSubset<T, WordBookRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WordBookRecords and returns the data saved in the database.
     * @param {WordBookRecordCreateManyAndReturnArgs} args - Arguments to create many WordBookRecords.
     * @example
     * // Create many WordBookRecords
     * const wordBookRecord = await prisma.wordBookRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WordBookRecords and only return the `id`
     * const wordBookRecordWithIdOnly = await prisma.wordBookRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordBookRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordBookRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WordBookRecord.
     * @param {WordBookRecordDeleteArgs} args - Arguments to delete one WordBookRecord.
     * @example
     * // Delete one WordBookRecord
     * const WordBookRecord = await prisma.wordBookRecord.delete({
     *   where: {
     *     // ... filter to delete one WordBookRecord
     *   }
     * })
     * 
     */
    delete<T extends WordBookRecordDeleteArgs>(args: SelectSubset<T, WordBookRecordDeleteArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WordBookRecord.
     * @param {WordBookRecordUpdateArgs} args - Arguments to update one WordBookRecord.
     * @example
     * // Update one WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordBookRecordUpdateArgs>(args: SelectSubset<T, WordBookRecordUpdateArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WordBookRecords.
     * @param {WordBookRecordDeleteManyArgs} args - Arguments to filter WordBookRecords to delete.
     * @example
     * // Delete a few WordBookRecords
     * const { count } = await prisma.wordBookRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordBookRecordDeleteManyArgs>(args?: SelectSubset<T, WordBookRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordBookRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordBookRecords
     * const wordBookRecord = await prisma.wordBookRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordBookRecordUpdateManyArgs>(args: SelectSubset<T, WordBookRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordBookRecords and returns the data updated in the database.
     * @param {WordBookRecordUpdateManyAndReturnArgs} args - Arguments to update many WordBookRecords.
     * @example
     * // Update many WordBookRecords
     * const wordBookRecord = await prisma.wordBookRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WordBookRecords and only return the `id`
     * const wordBookRecordWithIdOnly = await prisma.wordBookRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordBookRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordBookRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WordBookRecord.
     * @param {WordBookRecordUpsertArgs} args - Arguments to update or create a WordBookRecord.
     * @example
     * // Update or create a WordBookRecord
     * const wordBookRecord = await prisma.wordBookRecord.upsert({
     *   create: {
     *     // ... data to create a WordBookRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordBookRecord we want to update
     *   }
     * })
     */
    upsert<T extends WordBookRecordUpsertArgs>(args: SelectSubset<T, WordBookRecordUpsertArgs<ExtArgs>>): Prisma__WordBookRecordClient<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WordBookRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordCountArgs} args - Arguments to filter WordBookRecords to count.
     * @example
     * // Count the number of WordBookRecords
     * const count = await prisma.wordBookRecord.count({
     *   where: {
     *     // ... the filter for the WordBookRecords we want to count
     *   }
     * })
    **/
    count<T extends WordBookRecordCountArgs>(
      args?: Subset<T, WordBookRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordBookRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordBookRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordBookRecordAggregateArgs>(args: Subset<T, WordBookRecordAggregateArgs>): Prisma.PrismaPromise<GetWordBookRecordAggregateType<T>>

    /**
     * Group by WordBookRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookRecordGroupByArgs} args - Group by arguments.
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
      T extends WordBookRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordBookRecordGroupByArgs['orderBy'] }
        : { orderBy?: WordBookRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordBookRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordBookRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WordBookRecord model
   */
  readonly fields: WordBookRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WordBookRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordBookRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    word<T extends WordBookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordBookDefaultArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WordBookRecord model
   */
  interface WordBookRecordFieldRefs {
    readonly id: FieldRef<"WordBookRecord", 'String'>
    readonly wordId: FieldRef<"WordBookRecord", 'String'>
    readonly isMaster: FieldRef<"WordBookRecord", 'Boolean'>
    readonly createdAt: FieldRef<"WordBookRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"WordBookRecord", 'DateTime'>
    readonly userId: FieldRef<"WordBookRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WordBookRecord findUnique
   */
  export type WordBookRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter, which WordBookRecord to fetch.
     */
    where: WordBookRecordWhereUniqueInput
  }

  /**
   * WordBookRecord findUniqueOrThrow
   */
  export type WordBookRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter, which WordBookRecord to fetch.
     */
    where: WordBookRecordWhereUniqueInput
  }

  /**
   * WordBookRecord findFirst
   */
  export type WordBookRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter, which WordBookRecord to fetch.
     */
    where?: WordBookRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBookRecords to fetch.
     */
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordBookRecords.
     */
    cursor?: WordBookRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBookRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBookRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordBookRecords.
     */
    distinct?: WordBookRecordScalarFieldEnum | WordBookRecordScalarFieldEnum[]
  }

  /**
   * WordBookRecord findFirstOrThrow
   */
  export type WordBookRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter, which WordBookRecord to fetch.
     */
    where?: WordBookRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBookRecords to fetch.
     */
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordBookRecords.
     */
    cursor?: WordBookRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBookRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBookRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordBookRecords.
     */
    distinct?: WordBookRecordScalarFieldEnum | WordBookRecordScalarFieldEnum[]
  }

  /**
   * WordBookRecord findMany
   */
  export type WordBookRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter, which WordBookRecords to fetch.
     */
    where?: WordBookRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBookRecords to fetch.
     */
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordBookRecords.
     */
    cursor?: WordBookRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBookRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBookRecords.
     */
    skip?: number
    distinct?: WordBookRecordScalarFieldEnum | WordBookRecordScalarFieldEnum[]
  }

  /**
   * WordBookRecord create
   */
  export type WordBookRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a WordBookRecord.
     */
    data: XOR<WordBookRecordCreateInput, WordBookRecordUncheckedCreateInput>
  }

  /**
   * WordBookRecord createMany
   */
  export type WordBookRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordBookRecords.
     */
    data: WordBookRecordCreateManyInput | WordBookRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordBookRecord createManyAndReturn
   */
  export type WordBookRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * The data used to create many WordBookRecords.
     */
    data: WordBookRecordCreateManyInput | WordBookRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WordBookRecord update
   */
  export type WordBookRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a WordBookRecord.
     */
    data: XOR<WordBookRecordUpdateInput, WordBookRecordUncheckedUpdateInput>
    /**
     * Choose, which WordBookRecord to update.
     */
    where: WordBookRecordWhereUniqueInput
  }

  /**
   * WordBookRecord updateMany
   */
  export type WordBookRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordBookRecords.
     */
    data: XOR<WordBookRecordUpdateManyMutationInput, WordBookRecordUncheckedUpdateManyInput>
    /**
     * Filter which WordBookRecords to update
     */
    where?: WordBookRecordWhereInput
    /**
     * Limit how many WordBookRecords to update.
     */
    limit?: number
  }

  /**
   * WordBookRecord updateManyAndReturn
   */
  export type WordBookRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * The data used to update WordBookRecords.
     */
    data: XOR<WordBookRecordUpdateManyMutationInput, WordBookRecordUncheckedUpdateManyInput>
    /**
     * Filter which WordBookRecords to update
     */
    where?: WordBookRecordWhereInput
    /**
     * Limit how many WordBookRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WordBookRecord upsert
   */
  export type WordBookRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the WordBookRecord to update in case it exists.
     */
    where: WordBookRecordWhereUniqueInput
    /**
     * In case the WordBookRecord found by the `where` argument doesn't exist, create a new WordBookRecord with this data.
     */
    create: XOR<WordBookRecordCreateInput, WordBookRecordUncheckedCreateInput>
    /**
     * In case the WordBookRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordBookRecordUpdateInput, WordBookRecordUncheckedUpdateInput>
  }

  /**
   * WordBookRecord delete
   */
  export type WordBookRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    /**
     * Filter which WordBookRecord to delete.
     */
    where: WordBookRecordWhereUniqueInput
  }

  /**
   * WordBookRecord deleteMany
   */
  export type WordBookRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordBookRecords to delete
     */
    where?: WordBookRecordWhereInput
    /**
     * Limit how many WordBookRecords to delete.
     */
    limit?: number
  }

  /**
   * WordBookRecord without action
   */
  export type WordBookRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
  }


  /**
   * Model WordBook
   */

  export type AggregateWordBook = {
    _count: WordBookCountAggregateOutputType | null
    _min: WordBookMinAggregateOutputType | null
    _max: WordBookMaxAggregateOutputType | null
  }

  export type WordBookMinAggregateOutputType = {
    id: string | null
    word: string | null
    phonetic: string | null
    definition: string | null
    translation: string | null
    pos: string | null
    collins: string | null
    oxford: string | null
    tag: string | null
    bnc: string | null
    frq: string | null
    exchange: string | null
    gk: boolean | null
    zk: boolean | null
    gre: boolean | null
    toefl: boolean | null
    ielts: boolean | null
    cet6: boolean | null
    cet4: boolean | null
    ky: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordBookMaxAggregateOutputType = {
    id: string | null
    word: string | null
    phonetic: string | null
    definition: string | null
    translation: string | null
    pos: string | null
    collins: string | null
    oxford: string | null
    tag: string | null
    bnc: string | null
    frq: string | null
    exchange: string | null
    gk: boolean | null
    zk: boolean | null
    gre: boolean | null
    toefl: boolean | null
    ielts: boolean | null
    cet6: boolean | null
    cet4: boolean | null
    ky: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WordBookCountAggregateOutputType = {
    id: number
    word: number
    phonetic: number
    definition: number
    translation: number
    pos: number
    collins: number
    oxford: number
    tag: number
    bnc: number
    frq: number
    exchange: number
    gk: number
    zk: number
    gre: number
    toefl: number
    ielts: number
    cet6: number
    cet4: number
    ky: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WordBookMinAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    definition?: true
    translation?: true
    pos?: true
    collins?: true
    oxford?: true
    tag?: true
    bnc?: true
    frq?: true
    exchange?: true
    gk?: true
    zk?: true
    gre?: true
    toefl?: true
    ielts?: true
    cet6?: true
    cet4?: true
    ky?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordBookMaxAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    definition?: true
    translation?: true
    pos?: true
    collins?: true
    oxford?: true
    tag?: true
    bnc?: true
    frq?: true
    exchange?: true
    gk?: true
    zk?: true
    gre?: true
    toefl?: true
    ielts?: true
    cet6?: true
    cet4?: true
    ky?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WordBookCountAggregateInputType = {
    id?: true
    word?: true
    phonetic?: true
    definition?: true
    translation?: true
    pos?: true
    collins?: true
    oxford?: true
    tag?: true
    bnc?: true
    frq?: true
    exchange?: true
    gk?: true
    zk?: true
    gre?: true
    toefl?: true
    ielts?: true
    cet6?: true
    cet4?: true
    ky?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WordBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordBook to aggregate.
     */
    where?: WordBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBooks to fetch.
     */
    orderBy?: WordBookOrderByWithRelationInput | WordBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordBooks
    **/
    _count?: true | WordBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordBookMaxAggregateInputType
  }

  export type GetWordBookAggregateType<T extends WordBookAggregateArgs> = {
        [P in keyof T & keyof AggregateWordBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordBook[P]>
      : GetScalarType<T[P], AggregateWordBook[P]>
  }




  export type WordBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordBookWhereInput
    orderBy?: WordBookOrderByWithAggregationInput | WordBookOrderByWithAggregationInput[]
    by: WordBookScalarFieldEnum[] | WordBookScalarFieldEnum
    having?: WordBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordBookCountAggregateInputType | true
    _min?: WordBookMinAggregateInputType
    _max?: WordBookMaxAggregateInputType
  }

  export type WordBookGroupByOutputType = {
    id: string
    word: string
    phonetic: string | null
    definition: string | null
    translation: string | null
    pos: string | null
    collins: string | null
    oxford: string | null
    tag: string | null
    bnc: string | null
    frq: string | null
    exchange: string | null
    gk: boolean | null
    zk: boolean | null
    gre: boolean | null
    toefl: boolean | null
    ielts: boolean | null
    cet6: boolean | null
    cet4: boolean | null
    ky: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: WordBookCountAggregateOutputType | null
    _min: WordBookMinAggregateOutputType | null
    _max: WordBookMaxAggregateOutputType | null
  }

  type GetWordBookGroupByPayload<T extends WordBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordBookGroupByOutputType[P]>
            : GetScalarType<T[P], WordBookGroupByOutputType[P]>
        }
      >
    >


  export type WordBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    definition?: boolean
    translation?: boolean
    pos?: boolean
    collins?: boolean
    oxford?: boolean
    tag?: boolean
    bnc?: boolean
    frq?: boolean
    exchange?: boolean
    gk?: boolean
    zk?: boolean
    gre?: boolean
    toefl?: boolean
    ielts?: boolean
    cet6?: boolean
    cet4?: boolean
    ky?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wordBookRecords?: boolean | WordBook$wordBookRecordsArgs<ExtArgs>
    _count?: boolean | WordBookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wordBook"]>

  export type WordBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    definition?: boolean
    translation?: boolean
    pos?: boolean
    collins?: boolean
    oxford?: boolean
    tag?: boolean
    bnc?: boolean
    frq?: boolean
    exchange?: boolean
    gk?: boolean
    zk?: boolean
    gre?: boolean
    toefl?: boolean
    ielts?: boolean
    cet6?: boolean
    cet4?: boolean
    ky?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wordBook"]>

  export type WordBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    phonetic?: boolean
    definition?: boolean
    translation?: boolean
    pos?: boolean
    collins?: boolean
    oxford?: boolean
    tag?: boolean
    bnc?: boolean
    frq?: boolean
    exchange?: boolean
    gk?: boolean
    zk?: boolean
    gre?: boolean
    toefl?: boolean
    ielts?: boolean
    cet6?: boolean
    cet4?: boolean
    ky?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wordBook"]>

  export type WordBookSelectScalar = {
    id?: boolean
    word?: boolean
    phonetic?: boolean
    definition?: boolean
    translation?: boolean
    pos?: boolean
    collins?: boolean
    oxford?: boolean
    tag?: boolean
    bnc?: boolean
    frq?: boolean
    exchange?: boolean
    gk?: boolean
    zk?: boolean
    gre?: boolean
    toefl?: boolean
    ielts?: boolean
    cet6?: boolean
    cet4?: boolean
    ky?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WordBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "phonetic" | "definition" | "translation" | "pos" | "collins" | "oxford" | "tag" | "bnc" | "frq" | "exchange" | "gk" | "zk" | "gre" | "toefl" | "ielts" | "cet6" | "cet4" | "ky" | "createdAt" | "updatedAt", ExtArgs["result"]["wordBook"]>
  export type WordBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wordBookRecords?: boolean | WordBook$wordBookRecordsArgs<ExtArgs>
    _count?: boolean | WordBookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WordBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WordBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WordBook"
    objects: {
      wordBookRecords: Prisma.$WordBookRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      phonetic: string | null
      definition: string | null
      translation: string | null
      pos: string | null
      collins: string | null
      oxford: string | null
      tag: string | null
      bnc: string | null
      frq: string | null
      exchange: string | null
      gk: boolean | null
      zk: boolean | null
      gre: boolean | null
      toefl: boolean | null
      ielts: boolean | null
      cet6: boolean | null
      cet4: boolean | null
      ky: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wordBook"]>
    composites: {}
  }

  type WordBookGetPayload<S extends boolean | null | undefined | WordBookDefaultArgs> = $Result.GetResult<Prisma.$WordBookPayload, S>

  type WordBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordBookCountAggregateInputType | true
    }

  export interface WordBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordBook'], meta: { name: 'WordBook' } }
    /**
     * Find zero or one WordBook that matches the filter.
     * @param {WordBookFindUniqueArgs} args - Arguments to find a WordBook
     * @example
     * // Get one WordBook
     * const wordBook = await prisma.wordBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordBookFindUniqueArgs>(args: SelectSubset<T, WordBookFindUniqueArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WordBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordBookFindUniqueOrThrowArgs} args - Arguments to find a WordBook
     * @example
     * // Get one WordBook
     * const wordBook = await prisma.wordBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordBookFindUniqueOrThrowArgs>(args: SelectSubset<T, WordBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookFindFirstArgs} args - Arguments to find a WordBook
     * @example
     * // Get one WordBook
     * const wordBook = await prisma.wordBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordBookFindFirstArgs>(args?: SelectSubset<T, WordBookFindFirstArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WordBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookFindFirstOrThrowArgs} args - Arguments to find a WordBook
     * @example
     * // Get one WordBook
     * const wordBook = await prisma.wordBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordBookFindFirstOrThrowArgs>(args?: SelectSubset<T, WordBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WordBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordBooks
     * const wordBooks = await prisma.wordBook.findMany()
     * 
     * // Get first 10 WordBooks
     * const wordBooks = await prisma.wordBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordBookWithIdOnly = await prisma.wordBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WordBookFindManyArgs>(args?: SelectSubset<T, WordBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WordBook.
     * @param {WordBookCreateArgs} args - Arguments to create a WordBook.
     * @example
     * // Create one WordBook
     * const WordBook = await prisma.wordBook.create({
     *   data: {
     *     // ... data to create a WordBook
     *   }
     * })
     * 
     */
    create<T extends WordBookCreateArgs>(args: SelectSubset<T, WordBookCreateArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WordBooks.
     * @param {WordBookCreateManyArgs} args - Arguments to create many WordBooks.
     * @example
     * // Create many WordBooks
     * const wordBook = await prisma.wordBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordBookCreateManyArgs>(args?: SelectSubset<T, WordBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WordBooks and returns the data saved in the database.
     * @param {WordBookCreateManyAndReturnArgs} args - Arguments to create many WordBooks.
     * @example
     * // Create many WordBooks
     * const wordBook = await prisma.wordBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WordBooks and only return the `id`
     * const wordBookWithIdOnly = await prisma.wordBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordBookCreateManyAndReturnArgs>(args?: SelectSubset<T, WordBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WordBook.
     * @param {WordBookDeleteArgs} args - Arguments to delete one WordBook.
     * @example
     * // Delete one WordBook
     * const WordBook = await prisma.wordBook.delete({
     *   where: {
     *     // ... filter to delete one WordBook
     *   }
     * })
     * 
     */
    delete<T extends WordBookDeleteArgs>(args: SelectSubset<T, WordBookDeleteArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WordBook.
     * @param {WordBookUpdateArgs} args - Arguments to update one WordBook.
     * @example
     * // Update one WordBook
     * const wordBook = await prisma.wordBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordBookUpdateArgs>(args: SelectSubset<T, WordBookUpdateArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WordBooks.
     * @param {WordBookDeleteManyArgs} args - Arguments to filter WordBooks to delete.
     * @example
     * // Delete a few WordBooks
     * const { count } = await prisma.wordBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordBookDeleteManyArgs>(args?: SelectSubset<T, WordBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordBooks
     * const wordBook = await prisma.wordBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordBookUpdateManyArgs>(args: SelectSubset<T, WordBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordBooks and returns the data updated in the database.
     * @param {WordBookUpdateManyAndReturnArgs} args - Arguments to update many WordBooks.
     * @example
     * // Update many WordBooks
     * const wordBook = await prisma.wordBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WordBooks and only return the `id`
     * const wordBookWithIdOnly = await prisma.wordBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WordBookUpdateManyAndReturnArgs>(args: SelectSubset<T, WordBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WordBook.
     * @param {WordBookUpsertArgs} args - Arguments to update or create a WordBook.
     * @example
     * // Update or create a WordBook
     * const wordBook = await prisma.wordBook.upsert({
     *   create: {
     *     // ... data to create a WordBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordBook we want to update
     *   }
     * })
     */
    upsert<T extends WordBookUpsertArgs>(args: SelectSubset<T, WordBookUpsertArgs<ExtArgs>>): Prisma__WordBookClient<$Result.GetResult<Prisma.$WordBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WordBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookCountArgs} args - Arguments to filter WordBooks to count.
     * @example
     * // Count the number of WordBooks
     * const count = await prisma.wordBook.count({
     *   where: {
     *     // ... the filter for the WordBooks we want to count
     *   }
     * })
    **/
    count<T extends WordBookCountArgs>(
      args?: Subset<T, WordBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordBookAggregateArgs>(args: Subset<T, WordBookAggregateArgs>): Prisma.PrismaPromise<GetWordBookAggregateType<T>>

    /**
     * Group by WordBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordBookGroupByArgs} args - Group by arguments.
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
      T extends WordBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordBookGroupByArgs['orderBy'] }
        : { orderBy?: WordBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WordBook model
   */
  readonly fields: WordBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WordBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wordBookRecords<T extends WordBook$wordBookRecordsArgs<ExtArgs> = {}>(args?: Subset<T, WordBook$wordBookRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordBookRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WordBook model
   */
  interface WordBookFieldRefs {
    readonly id: FieldRef<"WordBook", 'String'>
    readonly word: FieldRef<"WordBook", 'String'>
    readonly phonetic: FieldRef<"WordBook", 'String'>
    readonly definition: FieldRef<"WordBook", 'String'>
    readonly translation: FieldRef<"WordBook", 'String'>
    readonly pos: FieldRef<"WordBook", 'String'>
    readonly collins: FieldRef<"WordBook", 'String'>
    readonly oxford: FieldRef<"WordBook", 'String'>
    readonly tag: FieldRef<"WordBook", 'String'>
    readonly bnc: FieldRef<"WordBook", 'String'>
    readonly frq: FieldRef<"WordBook", 'String'>
    readonly exchange: FieldRef<"WordBook", 'String'>
    readonly gk: FieldRef<"WordBook", 'Boolean'>
    readonly zk: FieldRef<"WordBook", 'Boolean'>
    readonly gre: FieldRef<"WordBook", 'Boolean'>
    readonly toefl: FieldRef<"WordBook", 'Boolean'>
    readonly ielts: FieldRef<"WordBook", 'Boolean'>
    readonly cet6: FieldRef<"WordBook", 'Boolean'>
    readonly cet4: FieldRef<"WordBook", 'Boolean'>
    readonly ky: FieldRef<"WordBook", 'Boolean'>
    readonly createdAt: FieldRef<"WordBook", 'DateTime'>
    readonly updatedAt: FieldRef<"WordBook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WordBook findUnique
   */
  export type WordBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter, which WordBook to fetch.
     */
    where: WordBookWhereUniqueInput
  }

  /**
   * WordBook findUniqueOrThrow
   */
  export type WordBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter, which WordBook to fetch.
     */
    where: WordBookWhereUniqueInput
  }

  /**
   * WordBook findFirst
   */
  export type WordBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter, which WordBook to fetch.
     */
    where?: WordBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBooks to fetch.
     */
    orderBy?: WordBookOrderByWithRelationInput | WordBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordBooks.
     */
    cursor?: WordBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordBooks.
     */
    distinct?: WordBookScalarFieldEnum | WordBookScalarFieldEnum[]
  }

  /**
   * WordBook findFirstOrThrow
   */
  export type WordBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter, which WordBook to fetch.
     */
    where?: WordBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBooks to fetch.
     */
    orderBy?: WordBookOrderByWithRelationInput | WordBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordBooks.
     */
    cursor?: WordBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordBooks.
     */
    distinct?: WordBookScalarFieldEnum | WordBookScalarFieldEnum[]
  }

  /**
   * WordBook findMany
   */
  export type WordBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter, which WordBooks to fetch.
     */
    where?: WordBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordBooks to fetch.
     */
    orderBy?: WordBookOrderByWithRelationInput | WordBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordBooks.
     */
    cursor?: WordBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordBooks.
     */
    skip?: number
    distinct?: WordBookScalarFieldEnum | WordBookScalarFieldEnum[]
  }

  /**
   * WordBook create
   */
  export type WordBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * The data needed to create a WordBook.
     */
    data: XOR<WordBookCreateInput, WordBookUncheckedCreateInput>
  }

  /**
   * WordBook createMany
   */
  export type WordBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordBooks.
     */
    data: WordBookCreateManyInput | WordBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordBook createManyAndReturn
   */
  export type WordBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * The data used to create many WordBooks.
     */
    data: WordBookCreateManyInput | WordBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WordBook update
   */
  export type WordBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * The data needed to update a WordBook.
     */
    data: XOR<WordBookUpdateInput, WordBookUncheckedUpdateInput>
    /**
     * Choose, which WordBook to update.
     */
    where: WordBookWhereUniqueInput
  }

  /**
   * WordBook updateMany
   */
  export type WordBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordBooks.
     */
    data: XOR<WordBookUpdateManyMutationInput, WordBookUncheckedUpdateManyInput>
    /**
     * Filter which WordBooks to update
     */
    where?: WordBookWhereInput
    /**
     * Limit how many WordBooks to update.
     */
    limit?: number
  }

  /**
   * WordBook updateManyAndReturn
   */
  export type WordBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * The data used to update WordBooks.
     */
    data: XOR<WordBookUpdateManyMutationInput, WordBookUncheckedUpdateManyInput>
    /**
     * Filter which WordBooks to update
     */
    where?: WordBookWhereInput
    /**
     * Limit how many WordBooks to update.
     */
    limit?: number
  }

  /**
   * WordBook upsert
   */
  export type WordBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * The filter to search for the WordBook to update in case it exists.
     */
    where: WordBookWhereUniqueInput
    /**
     * In case the WordBook found by the `where` argument doesn't exist, create a new WordBook with this data.
     */
    create: XOR<WordBookCreateInput, WordBookUncheckedCreateInput>
    /**
     * In case the WordBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordBookUpdateInput, WordBookUncheckedUpdateInput>
  }

  /**
   * WordBook delete
   */
  export type WordBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
    /**
     * Filter which WordBook to delete.
     */
    where: WordBookWhereUniqueInput
  }

  /**
   * WordBook deleteMany
   */
  export type WordBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordBooks to delete
     */
    where?: WordBookWhereInput
    /**
     * Limit how many WordBooks to delete.
     */
    limit?: number
  }

  /**
   * WordBook.wordBookRecords
   */
  export type WordBook$wordBookRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBookRecord
     */
    select?: WordBookRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBookRecord
     */
    omit?: WordBookRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookRecordInclude<ExtArgs> | null
    where?: WordBookRecordWhereInput
    orderBy?: WordBookRecordOrderByWithRelationInput | WordBookRecordOrderByWithRelationInput[]
    cursor?: WordBookRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordBookRecordScalarFieldEnum | WordBookRecordScalarFieldEnum[]
  }

  /**
   * WordBook without action
   */
  export type WordBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordBook
     */
    select?: WordBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WordBook
     */
    omit?: WordBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordBookInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tradeNo: string | null
    outTradeNo: string | null
    amount: Decimal | null
    subject: string | null
    body: string | null
    tradeStatus: $Enums.TradeStatus | null
    sendPayTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tradeNo: string | null
    outTradeNo: string | null
    amount: Decimal | null
    subject: string | null
    body: string | null
    tradeStatus: $Enums.TradeStatus | null
    sendPayTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    userId: number
    tradeNo: number
    outTradeNo: number
    amount: number
    subject: number
    body: number
    tradeStatus: number
    sendPayTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    amount?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    userId?: true
    tradeNo?: true
    outTradeNo?: true
    amount?: true
    subject?: true
    body?: true
    tradeStatus?: true
    sendPayTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    tradeNo?: true
    outTradeNo?: true
    amount?: true
    subject?: true
    body?: true
    tradeStatus?: true
    sendPayTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    userId?: true
    tradeNo?: true
    outTradeNo?: true
    amount?: true
    subject?: true
    body?: true
    tradeStatus?: true
    sendPayTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: string
    userId: string
    tradeNo: string | null
    outTradeNo: string
    amount: Decimal
    subject: string
    body: string
    tradeStatus: $Enums.TradeStatus
    sendPayTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tradeNo?: boolean
    outTradeNo?: boolean
    amount?: boolean
    subject?: boolean
    body?: boolean
    tradeStatus?: boolean
    sendPayTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseRecords?: boolean | PaymentRecord$courseRecordsArgs<ExtArgs>
    _count?: boolean | PaymentRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tradeNo?: boolean
    outTradeNo?: boolean
    amount?: boolean
    subject?: boolean
    body?: boolean
    tradeStatus?: boolean
    sendPayTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tradeNo?: boolean
    outTradeNo?: boolean
    amount?: boolean
    subject?: boolean
    body?: boolean
    tradeStatus?: boolean
    sendPayTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    tradeNo?: boolean
    outTradeNo?: boolean
    amount?: boolean
    subject?: boolean
    body?: boolean
    tradeStatus?: boolean
    sendPayTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tradeNo" | "outTradeNo" | "amount" | "subject" | "body" | "tradeStatus" | "sendPayTime" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentRecord"]>
  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseRecords?: boolean | PaymentRecord$courseRecordsArgs<ExtArgs>
    _count?: boolean | PaymentRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courseRecords: Prisma.$CourseRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tradeNo: string | null
      outTradeNo: string
      amount: Prisma.Decimal
      subject: string
      body: string
      tradeStatus: $Enums.TradeStatus
      sendPayTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRecords and returns the data saved in the database.
     * @param {PaymentRecordCreateManyAndReturnArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords and returns the data updated in the database.
     * @param {PaymentRecordUpdateManyAndReturnArgs} args - Arguments to update many PaymentRecords.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
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
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseRecords<T extends PaymentRecord$courseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, PaymentRecord$courseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PaymentRecord model
   */
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'String'>
    readonly userId: FieldRef<"PaymentRecord", 'String'>
    readonly tradeNo: FieldRef<"PaymentRecord", 'String'>
    readonly outTradeNo: FieldRef<"PaymentRecord", 'String'>
    readonly amount: FieldRef<"PaymentRecord", 'Decimal'>
    readonly subject: FieldRef<"PaymentRecord", 'String'>
    readonly body: FieldRef<"PaymentRecord", 'String'>
    readonly tradeStatus: FieldRef<"PaymentRecord", 'TradeStatus'>
    readonly sendPayTime: FieldRef<"PaymentRecord", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord createManyAndReturn
   */
  export type PaymentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
  }

  /**
   * PaymentRecord updateManyAndReturn
   */
  export type PaymentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to delete.
     */
    limit?: number
  }

  /**
   * PaymentRecord.courseRecords
   */
  export type PaymentRecord$courseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    where?: CourseRecordWhereInput
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    cursor?: CourseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Model CourseRecord
   */

  export type AggregateCourseRecord = {
    _count: CourseRecordCountAggregateOutputType | null
    _min: CourseRecordMinAggregateOutputType | null
    _max: CourseRecordMaxAggregateOutputType | null
  }

  export type CourseRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    isPurchased: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentRecordId: string | null
  }

  export type CourseRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    isPurchased: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentRecordId: string | null
  }

  export type CourseRecordCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    isPurchased: number
    createdAt: number
    updatedAt: number
    paymentRecordId: number
    _all: number
  }


  export type CourseRecordMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    isPurchased?: true
    createdAt?: true
    updatedAt?: true
    paymentRecordId?: true
  }

  export type CourseRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    isPurchased?: true
    createdAt?: true
    updatedAt?: true
    paymentRecordId?: true
  }

  export type CourseRecordCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    isPurchased?: true
    createdAt?: true
    updatedAt?: true
    paymentRecordId?: true
    _all?: true
  }

  export type CourseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRecord to aggregate.
     */
    where?: CourseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRecords to fetch.
     */
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseRecords
    **/
    _count?: true | CourseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseRecordMaxAggregateInputType
  }

  export type GetCourseRecordAggregateType<T extends CourseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseRecord[P]>
      : GetScalarType<T[P], AggregateCourseRecord[P]>
  }




  export type CourseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRecordWhereInput
    orderBy?: CourseRecordOrderByWithAggregationInput | CourseRecordOrderByWithAggregationInput[]
    by: CourseRecordScalarFieldEnum[] | CourseRecordScalarFieldEnum
    having?: CourseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseRecordCountAggregateInputType | true
    _min?: CourseRecordMinAggregateInputType
    _max?: CourseRecordMaxAggregateInputType
  }

  export type CourseRecordGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    isPurchased: boolean
    createdAt: Date
    updatedAt: Date
    paymentRecordId: string | null
    _count: CourseRecordCountAggregateOutputType | null
    _min: CourseRecordMinAggregateOutputType | null
    _max: CourseRecordMaxAggregateOutputType | null
  }

  type GetCourseRecordGroupByPayload<T extends CourseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CourseRecordGroupByOutputType[P]>
        }
      >
    >


  export type CourseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    isPurchased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentRecordId?: boolean
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseRecord"]>

  export type CourseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    isPurchased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentRecordId?: boolean
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseRecord"]>

  export type CourseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    isPurchased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentRecordId?: boolean
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseRecord"]>

  export type CourseRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    isPurchased?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentRecordId?: boolean
  }

  export type CourseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "isPurchased" | "createdAt" | "updatedAt" | "paymentRecordId", ExtArgs["result"]["courseRecord"]>
  export type CourseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentRecord?: boolean | CourseRecord$paymentRecordArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseRecord"
    objects: {
      paymentRecord: Prisma.$PaymentRecordPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      isPurchased: boolean
      createdAt: Date
      updatedAt: Date
      paymentRecordId: string | null
    }, ExtArgs["result"]["courseRecord"]>
    composites: {}
  }

  type CourseRecordGetPayload<S extends boolean | null | undefined | CourseRecordDefaultArgs> = $Result.GetResult<Prisma.$CourseRecordPayload, S>

  type CourseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseRecordCountAggregateInputType | true
    }

  export interface CourseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseRecord'], meta: { name: 'CourseRecord' } }
    /**
     * Find zero or one CourseRecord that matches the filter.
     * @param {CourseRecordFindUniqueArgs} args - Arguments to find a CourseRecord
     * @example
     * // Get one CourseRecord
     * const courseRecord = await prisma.courseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseRecordFindUniqueArgs>(args: SelectSubset<T, CourseRecordFindUniqueArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseRecordFindUniqueOrThrowArgs} args - Arguments to find a CourseRecord
     * @example
     * // Get one CourseRecord
     * const courseRecord = await prisma.courseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordFindFirstArgs} args - Arguments to find a CourseRecord
     * @example
     * // Get one CourseRecord
     * const courseRecord = await prisma.courseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseRecordFindFirstArgs>(args?: SelectSubset<T, CourseRecordFindFirstArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordFindFirstOrThrowArgs} args - Arguments to find a CourseRecord
     * @example
     * // Get one CourseRecord
     * const courseRecord = await prisma.courseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseRecords
     * const courseRecords = await prisma.courseRecord.findMany()
     * 
     * // Get first 10 CourseRecords
     * const courseRecords = await prisma.courseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseRecordWithIdOnly = await prisma.courseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseRecordFindManyArgs>(args?: SelectSubset<T, CourseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseRecord.
     * @param {CourseRecordCreateArgs} args - Arguments to create a CourseRecord.
     * @example
     * // Create one CourseRecord
     * const CourseRecord = await prisma.courseRecord.create({
     *   data: {
     *     // ... data to create a CourseRecord
     *   }
     * })
     * 
     */
    create<T extends CourseRecordCreateArgs>(args: SelectSubset<T, CourseRecordCreateArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseRecords.
     * @param {CourseRecordCreateManyArgs} args - Arguments to create many CourseRecords.
     * @example
     * // Create many CourseRecords
     * const courseRecord = await prisma.courseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseRecordCreateManyArgs>(args?: SelectSubset<T, CourseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseRecords and returns the data saved in the database.
     * @param {CourseRecordCreateManyAndReturnArgs} args - Arguments to create many CourseRecords.
     * @example
     * // Create many CourseRecords
     * const courseRecord = await prisma.courseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseRecords and only return the `id`
     * const courseRecordWithIdOnly = await prisma.courseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseRecord.
     * @param {CourseRecordDeleteArgs} args - Arguments to delete one CourseRecord.
     * @example
     * // Delete one CourseRecord
     * const CourseRecord = await prisma.courseRecord.delete({
     *   where: {
     *     // ... filter to delete one CourseRecord
     *   }
     * })
     * 
     */
    delete<T extends CourseRecordDeleteArgs>(args: SelectSubset<T, CourseRecordDeleteArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseRecord.
     * @param {CourseRecordUpdateArgs} args - Arguments to update one CourseRecord.
     * @example
     * // Update one CourseRecord
     * const courseRecord = await prisma.courseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseRecordUpdateArgs>(args: SelectSubset<T, CourseRecordUpdateArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseRecords.
     * @param {CourseRecordDeleteManyArgs} args - Arguments to filter CourseRecords to delete.
     * @example
     * // Delete a few CourseRecords
     * const { count } = await prisma.courseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseRecordDeleteManyArgs>(args?: SelectSubset<T, CourseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseRecords
     * const courseRecord = await prisma.courseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseRecordUpdateManyArgs>(args: SelectSubset<T, CourseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseRecords and returns the data updated in the database.
     * @param {CourseRecordUpdateManyAndReturnArgs} args - Arguments to update many CourseRecords.
     * @example
     * // Update many CourseRecords
     * const courseRecord = await prisma.courseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseRecords and only return the `id`
     * const courseRecordWithIdOnly = await prisma.courseRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseRecord.
     * @param {CourseRecordUpsertArgs} args - Arguments to update or create a CourseRecord.
     * @example
     * // Update or create a CourseRecord
     * const courseRecord = await prisma.courseRecord.upsert({
     *   create: {
     *     // ... data to create a CourseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseRecord we want to update
     *   }
     * })
     */
    upsert<T extends CourseRecordUpsertArgs>(args: SelectSubset<T, CourseRecordUpsertArgs<ExtArgs>>): Prisma__CourseRecordClient<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordCountArgs} args - Arguments to filter CourseRecords to count.
     * @example
     * // Count the number of CourseRecords
     * const count = await prisma.courseRecord.count({
     *   where: {
     *     // ... the filter for the CourseRecords we want to count
     *   }
     * })
    **/
    count<T extends CourseRecordCountArgs>(
      args?: Subset<T, CourseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseRecordAggregateArgs>(args: Subset<T, CourseRecordAggregateArgs>): Prisma.PrismaPromise<GetCourseRecordAggregateType<T>>

    /**
     * Group by CourseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRecordGroupByArgs} args - Group by arguments.
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
      T extends CourseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseRecordGroupByArgs['orderBy'] }
        : { orderBy?: CourseRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseRecord model
   */
  readonly fields: CourseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paymentRecord<T extends CourseRecord$paymentRecordArgs<ExtArgs> = {}>(args?: Subset<T, CourseRecord$paymentRecordArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CourseRecord model
   */
  interface CourseRecordFieldRefs {
    readonly id: FieldRef<"CourseRecord", 'String'>
    readonly userId: FieldRef<"CourseRecord", 'String'>
    readonly courseId: FieldRef<"CourseRecord", 'String'>
    readonly isPurchased: FieldRef<"CourseRecord", 'Boolean'>
    readonly createdAt: FieldRef<"CourseRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseRecord", 'DateTime'>
    readonly paymentRecordId: FieldRef<"CourseRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseRecord findUnique
   */
  export type CourseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter, which CourseRecord to fetch.
     */
    where: CourseRecordWhereUniqueInput
  }

  /**
   * CourseRecord findUniqueOrThrow
   */
  export type CourseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter, which CourseRecord to fetch.
     */
    where: CourseRecordWhereUniqueInput
  }

  /**
   * CourseRecord findFirst
   */
  export type CourseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter, which CourseRecord to fetch.
     */
    where?: CourseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRecords to fetch.
     */
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRecords.
     */
    cursor?: CourseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRecords.
     */
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * CourseRecord findFirstOrThrow
   */
  export type CourseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter, which CourseRecord to fetch.
     */
    where?: CourseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRecords to fetch.
     */
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRecords.
     */
    cursor?: CourseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRecords.
     */
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * CourseRecord findMany
   */
  export type CourseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter, which CourseRecords to fetch.
     */
    where?: CourseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRecords to fetch.
     */
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseRecords.
     */
    cursor?: CourseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRecords.
     */
    skip?: number
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * CourseRecord create
   */
  export type CourseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseRecord.
     */
    data: XOR<CourseRecordCreateInput, CourseRecordUncheckedCreateInput>
  }

  /**
   * CourseRecord createMany
   */
  export type CourseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseRecords.
     */
    data: CourseRecordCreateManyInput | CourseRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseRecord createManyAndReturn
   */
  export type CourseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many CourseRecords.
     */
    data: CourseRecordCreateManyInput | CourseRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseRecord update
   */
  export type CourseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseRecord.
     */
    data: XOR<CourseRecordUpdateInput, CourseRecordUncheckedUpdateInput>
    /**
     * Choose, which CourseRecord to update.
     */
    where: CourseRecordWhereUniqueInput
  }

  /**
   * CourseRecord updateMany
   */
  export type CourseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseRecords.
     */
    data: XOR<CourseRecordUpdateManyMutationInput, CourseRecordUncheckedUpdateManyInput>
    /**
     * Filter which CourseRecords to update
     */
    where?: CourseRecordWhereInput
    /**
     * Limit how many CourseRecords to update.
     */
    limit?: number
  }

  /**
   * CourseRecord updateManyAndReturn
   */
  export type CourseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * The data used to update CourseRecords.
     */
    data: XOR<CourseRecordUpdateManyMutationInput, CourseRecordUncheckedUpdateManyInput>
    /**
     * Filter which CourseRecords to update
     */
    where?: CourseRecordWhereInput
    /**
     * Limit how many CourseRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseRecord upsert
   */
  export type CourseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseRecord to update in case it exists.
     */
    where: CourseRecordWhereUniqueInput
    /**
     * In case the CourseRecord found by the `where` argument doesn't exist, create a new CourseRecord with this data.
     */
    create: XOR<CourseRecordCreateInput, CourseRecordUncheckedCreateInput>
    /**
     * In case the CourseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseRecordUpdateInput, CourseRecordUncheckedUpdateInput>
  }

  /**
   * CourseRecord delete
   */
  export type CourseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    /**
     * Filter which CourseRecord to delete.
     */
    where: CourseRecordWhereUniqueInput
  }

  /**
   * CourseRecord deleteMany
   */
  export type CourseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRecords to delete
     */
    where?: CourseRecordWhereInput
    /**
     * Limit how many CourseRecords to delete.
     */
    limit?: number
  }

  /**
   * CourseRecord.paymentRecord
   */
  export type CourseRecord$paymentRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
  }

  /**
   * CourseRecord without action
   */
  export type CourseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    price: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    description: string | null
    teacher: string | null
    url: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: string | null
    description: string | null
    teacher: string | null
    url: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    value: number
    description: number
    teacher: number
    url: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    description?: true
    teacher?: true
    url?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    description?: true
    teacher?: true
    url?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    description?: true
    teacher?: true
    url?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    value: string
    description: string | null
    teacher: string
    url: string
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    teacher?: boolean
    url?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseRecords?: boolean | Course$courseRecordsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    teacher?: boolean
    url?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    teacher?: boolean
    url?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    description?: boolean
    teacher?: boolean
    url?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "description" | "teacher" | "url" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseRecords?: boolean | Course$courseRecordsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      courseRecords: Prisma.$CourseRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: string
      description: string | null
      teacher: string
      url: string
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseRecords<T extends Course$courseRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly value: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly teacher: FieldRef<"Course", 'String'>
    readonly url: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Decimal'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseRecords
   */
  export type Course$courseRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRecord
     */
    select?: CourseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseRecord
     */
    omit?: CourseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseRecordInclude<ExtArgs> | null
    where?: CourseRecordWhereInput
    orderBy?: CourseRecordOrderByWithRelationInput | CourseRecordOrderByWithRelationInput[]
    cursor?: CourseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRecordScalarFieldEnum | CourseRecordScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    address: 'address',
    avatar: 'avatar',
    bio: 'bio',
    isTimingTask: 'isTimingTask',
    timingTaskTime: 'timingTaskTime',
    wordNumber: 'wordNumber',
    dayNumber: 'dayNumber',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VisitorScalarFieldEnum: {
    id: 'id',
    anonymousId: 'anonymousId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    browser: 'browser',
    os: 'os',
    device: 'device'
  };

  export type VisitorScalarFieldEnum = (typeof VisitorScalarFieldEnum)[keyof typeof VisitorScalarFieldEnum]


  export const PageViewScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    url: 'url',
    referrer: 'referrer',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageViewScalarFieldEnum = (typeof PageViewScalarFieldEnum)[keyof typeof PageViewScalarFieldEnum]


  export const TrackEventScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    event: 'event',
    payload: 'payload',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrackEventScalarFieldEnum = (typeof TrackEventScalarFieldEnum)[keyof typeof TrackEventScalarFieldEnum]


  export const PerformanceEntryScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    fp: 'fp',
    fcp: 'fcp',
    lcp: 'lcp',
    inp: 'inp',
    cls: 'cls',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerformanceEntryScalarFieldEnum = (typeof PerformanceEntryScalarFieldEnum)[keyof typeof PerformanceEntryScalarFieldEnum]


  export const ErrorEntryScalarFieldEnum: {
    id: 'id',
    visitorId: 'visitorId',
    error: 'error',
    message: 'message',
    stack: 'stack',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ErrorEntryScalarFieldEnum = (typeof ErrorEntryScalarFieldEnum)[keyof typeof ErrorEntryScalarFieldEnum]


  export const WordBookRecordScalarFieldEnum: {
    id: 'id',
    wordId: 'wordId',
    isMaster: 'isMaster',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type WordBookRecordScalarFieldEnum = (typeof WordBookRecordScalarFieldEnum)[keyof typeof WordBookRecordScalarFieldEnum]


  export const WordBookScalarFieldEnum: {
    id: 'id',
    word: 'word',
    phonetic: 'phonetic',
    definition: 'definition',
    translation: 'translation',
    pos: 'pos',
    collins: 'collins',
    oxford: 'oxford',
    tag: 'tag',
    bnc: 'bnc',
    frq: 'frq',
    exchange: 'exchange',
    gk: 'gk',
    zk: 'zk',
    gre: 'gre',
    toefl: 'toefl',
    ielts: 'ielts',
    cet6: 'cet6',
    cet4: 'cet4',
    ky: 'ky',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WordBookScalarFieldEnum = (typeof WordBookScalarFieldEnum)[keyof typeof WordBookScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tradeNo: 'tradeNo',
    outTradeNo: 'outTradeNo',
    amount: 'amount',
    subject: 'subject',
    body: 'body',
    tradeStatus: 'tradeStatus',
    sendPayTime: 'sendPayTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const CourseRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    isPurchased: 'isPurchased',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentRecordId: 'paymentRecordId'
  };

  export type CourseRecordScalarFieldEnum = (typeof CourseRecordScalarFieldEnum)[keyof typeof CourseRecordScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    description: 'description',
    teacher: 'teacher',
    url: 'url',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TradeStatus'
   */
  export type EnumTradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeStatus'>
    


  /**
   * Reference to a field of type 'TradeStatus[]'
   */
  export type ListEnumTradeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isTimingTask?: BoolFilter<"User"> | boolean
    timingTaskTime?: StringFilter<"User"> | string
    wordNumber?: IntFilter<"User"> | number
    dayNumber?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wordBookRecords?: WordBookRecordListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
    courseRecords?: CourseRecordListRelationFilter
    visitors?: VisitorListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isTimingTask?: SortOrder
    timingTaskTime?: SortOrder
    wordNumber?: SortOrder
    dayNumber?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordBookRecords?: WordBookRecordOrderByRelationAggregateInput
    paymentRecords?: PaymentRecordOrderByRelationAggregateInput
    courseRecords?: CourseRecordOrderByRelationAggregateInput
    visitors?: VisitorOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    isTimingTask?: BoolFilter<"User"> | boolean
    timingTaskTime?: StringFilter<"User"> | string
    wordNumber?: IntFilter<"User"> | number
    dayNumber?: IntFilter<"User"> | number
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wordBookRecords?: WordBookRecordListRelationFilter
    paymentRecords?: PaymentRecordListRelationFilter
    courseRecords?: CourseRecordListRelationFilter
    visitors?: VisitorListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isTimingTask?: SortOrder
    timingTaskTime?: SortOrder
    wordNumber?: SortOrder
    dayNumber?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTimingTask?: BoolWithAggregatesFilter<"User"> | boolean
    timingTaskTime?: StringWithAggregatesFilter<"User"> | string
    wordNumber?: IntWithAggregatesFilter<"User"> | number
    dayNumber?: IntWithAggregatesFilter<"User"> | number
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VisitorWhereInput = {
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    id?: StringFilter<"Visitor"> | string
    anonymousId?: StringFilter<"Visitor"> | string
    userId?: StringNullableFilter<"Visitor"> | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    browser?: StringNullableFilter<"Visitor"> | string | null
    os?: StringNullableFilter<"Visitor"> | string | null
    device?: StringNullableFilter<"Visitor"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pageViews?: PageViewListRelationFilter
    trackEvents?: TrackEventListRelationFilter
    performanceEntries?: PerformanceEntryListRelationFilter
    errorEntries?: ErrorEntryListRelationFilter
  }

  export type VisitorOrderByWithRelationInput = {
    id?: SortOrder
    anonymousId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    pageViews?: PageViewOrderByRelationAggregateInput
    trackEvents?: TrackEventOrderByRelationAggregateInput
    performanceEntries?: PerformanceEntryOrderByRelationAggregateInput
    errorEntries?: ErrorEntryOrderByRelationAggregateInput
  }

  export type VisitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    anonymousId?: string
    AND?: VisitorWhereInput | VisitorWhereInput[]
    OR?: VisitorWhereInput[]
    NOT?: VisitorWhereInput | VisitorWhereInput[]
    userId?: StringNullableFilter<"Visitor"> | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    browser?: StringNullableFilter<"Visitor"> | string | null
    os?: StringNullableFilter<"Visitor"> | string | null
    device?: StringNullableFilter<"Visitor"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    pageViews?: PageViewListRelationFilter
    trackEvents?: TrackEventListRelationFilter
    performanceEntries?: PerformanceEntryListRelationFilter
    errorEntries?: ErrorEntryListRelationFilter
  }, "id" | "anonymousId">

  export type VisitorOrderByWithAggregationInput = {
    id?: SortOrder
    anonymousId?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    _count?: VisitorCountOrderByAggregateInput
    _max?: VisitorMaxOrderByAggregateInput
    _min?: VisitorMinOrderByAggregateInput
  }

  export type VisitorScalarWhereWithAggregatesInput = {
    AND?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    OR?: VisitorScalarWhereWithAggregatesInput[]
    NOT?: VisitorScalarWhereWithAggregatesInput | VisitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visitor"> | string
    anonymousId?: StringWithAggregatesFilter<"Visitor"> | string
    userId?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visitor"> | Date | string
    browser?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    os?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
    device?: StringNullableWithAggregatesFilter<"Visitor"> | string | null
  }

  export type PageViewWhereInput = {
    AND?: PageViewWhereInput | PageViewWhereInput[]
    OR?: PageViewWhereInput[]
    NOT?: PageViewWhereInput | PageViewWhereInput[]
    id?: StringFilter<"PageView"> | string
    visitorId?: StringFilter<"PageView"> | string
    url?: StringFilter<"PageView"> | string
    referrer?: StringNullableFilter<"PageView"> | string | null
    path?: StringFilter<"PageView"> | string
    createdAt?: DateTimeFilter<"PageView"> | Date | string
    updatedAt?: DateTimeFilter<"PageView"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type PageViewOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    url?: SortOrder
    referrer?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type PageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PageViewWhereInput | PageViewWhereInput[]
    OR?: PageViewWhereInput[]
    NOT?: PageViewWhereInput | PageViewWhereInput[]
    visitorId?: StringFilter<"PageView"> | string
    url?: StringFilter<"PageView"> | string
    referrer?: StringNullableFilter<"PageView"> | string | null
    path?: StringFilter<"PageView"> | string
    createdAt?: DateTimeFilter<"PageView"> | Date | string
    updatedAt?: DateTimeFilter<"PageView"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id">

  export type PageViewOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    url?: SortOrder
    referrer?: SortOrderInput | SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageViewCountOrderByAggregateInput
    _max?: PageViewMaxOrderByAggregateInput
    _min?: PageViewMinOrderByAggregateInput
  }

  export type PageViewScalarWhereWithAggregatesInput = {
    AND?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[]
    OR?: PageViewScalarWhereWithAggregatesInput[]
    NOT?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageView"> | string
    visitorId?: StringWithAggregatesFilter<"PageView"> | string
    url?: StringWithAggregatesFilter<"PageView"> | string
    referrer?: StringNullableWithAggregatesFilter<"PageView"> | string | null
    path?: StringWithAggregatesFilter<"PageView"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PageView"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageView"> | Date | string
  }

  export type TrackEventWhereInput = {
    AND?: TrackEventWhereInput | TrackEventWhereInput[]
    OR?: TrackEventWhereInput[]
    NOT?: TrackEventWhereInput | TrackEventWhereInput[]
    id?: StringFilter<"TrackEvent"> | string
    visitorId?: StringFilter<"TrackEvent"> | string
    event?: StringFilter<"TrackEvent"> | string
    payload?: JsonNullableFilter<"TrackEvent">
    url?: StringNullableFilter<"TrackEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TrackEvent"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type TrackEventOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    event?: SortOrder
    payload?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type TrackEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackEventWhereInput | TrackEventWhereInput[]
    OR?: TrackEventWhereInput[]
    NOT?: TrackEventWhereInput | TrackEventWhereInput[]
    visitorId?: StringFilter<"TrackEvent"> | string
    event?: StringFilter<"TrackEvent"> | string
    payload?: JsonNullableFilter<"TrackEvent">
    url?: StringNullableFilter<"TrackEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TrackEvent"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id">

  export type TrackEventOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    event?: SortOrder
    payload?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrackEventCountOrderByAggregateInput
    _max?: TrackEventMaxOrderByAggregateInput
    _min?: TrackEventMinOrderByAggregateInput
  }

  export type TrackEventScalarWhereWithAggregatesInput = {
    AND?: TrackEventScalarWhereWithAggregatesInput | TrackEventScalarWhereWithAggregatesInput[]
    OR?: TrackEventScalarWhereWithAggregatesInput[]
    NOT?: TrackEventScalarWhereWithAggregatesInput | TrackEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackEvent"> | string
    visitorId?: StringWithAggregatesFilter<"TrackEvent"> | string
    event?: StringWithAggregatesFilter<"TrackEvent"> | string
    payload?: JsonNullableWithAggregatesFilter<"TrackEvent">
    url?: StringNullableWithAggregatesFilter<"TrackEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TrackEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrackEvent"> | Date | string
  }

  export type PerformanceEntryWhereInput = {
    AND?: PerformanceEntryWhereInput | PerformanceEntryWhereInput[]
    OR?: PerformanceEntryWhereInput[]
    NOT?: PerformanceEntryWhereInput | PerformanceEntryWhereInput[]
    id?: StringFilter<"PerformanceEntry"> | string
    visitorId?: StringFilter<"PerformanceEntry"> | string
    fp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    fcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    lcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    inp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    cls?: FloatNullableFilter<"PerformanceEntry"> | number | null
    createdAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type PerformanceEntryOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    fp?: SortOrderInput | SortOrder
    fcp?: SortOrderInput | SortOrder
    lcp?: SortOrderInput | SortOrder
    inp?: SortOrderInput | SortOrder
    cls?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type PerformanceEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PerformanceEntryWhereInput | PerformanceEntryWhereInput[]
    OR?: PerformanceEntryWhereInput[]
    NOT?: PerformanceEntryWhereInput | PerformanceEntryWhereInput[]
    visitorId?: StringFilter<"PerformanceEntry"> | string
    fp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    fcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    lcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    inp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    cls?: FloatNullableFilter<"PerformanceEntry"> | number | null
    createdAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id">

  export type PerformanceEntryOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    fp?: SortOrderInput | SortOrder
    fcp?: SortOrderInput | SortOrder
    lcp?: SortOrderInput | SortOrder
    inp?: SortOrderInput | SortOrder
    cls?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PerformanceEntryCountOrderByAggregateInput
    _avg?: PerformanceEntryAvgOrderByAggregateInput
    _max?: PerformanceEntryMaxOrderByAggregateInput
    _min?: PerformanceEntryMinOrderByAggregateInput
    _sum?: PerformanceEntrySumOrderByAggregateInput
  }

  export type PerformanceEntryScalarWhereWithAggregatesInput = {
    AND?: PerformanceEntryScalarWhereWithAggregatesInput | PerformanceEntryScalarWhereWithAggregatesInput[]
    OR?: PerformanceEntryScalarWhereWithAggregatesInput[]
    NOT?: PerformanceEntryScalarWhereWithAggregatesInput | PerformanceEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerformanceEntry"> | string
    visitorId?: StringWithAggregatesFilter<"PerformanceEntry"> | string
    fp?: FloatNullableWithAggregatesFilter<"PerformanceEntry"> | number | null
    fcp?: FloatNullableWithAggregatesFilter<"PerformanceEntry"> | number | null
    lcp?: FloatNullableWithAggregatesFilter<"PerformanceEntry"> | number | null
    inp?: FloatNullableWithAggregatesFilter<"PerformanceEntry"> | number | null
    cls?: FloatNullableWithAggregatesFilter<"PerformanceEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PerformanceEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PerformanceEntry"> | Date | string
  }

  export type ErrorEntryWhereInput = {
    AND?: ErrorEntryWhereInput | ErrorEntryWhereInput[]
    OR?: ErrorEntryWhereInput[]
    NOT?: ErrorEntryWhereInput | ErrorEntryWhereInput[]
    id?: StringFilter<"ErrorEntry"> | string
    visitorId?: StringFilter<"ErrorEntry"> | string
    error?: StringFilter<"ErrorEntry"> | string
    message?: StringNullableFilter<"ErrorEntry"> | string | null
    stack?: StringNullableFilter<"ErrorEntry"> | string | null
    url?: StringNullableFilter<"ErrorEntry"> | string | null
    createdAt?: DateTimeFilter<"ErrorEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ErrorEntry"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }

  export type ErrorEntryOrderByWithRelationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    error?: SortOrder
    message?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    visitor?: VisitorOrderByWithRelationInput
  }

  export type ErrorEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ErrorEntryWhereInput | ErrorEntryWhereInput[]
    OR?: ErrorEntryWhereInput[]
    NOT?: ErrorEntryWhereInput | ErrorEntryWhereInput[]
    visitorId?: StringFilter<"ErrorEntry"> | string
    error?: StringFilter<"ErrorEntry"> | string
    message?: StringNullableFilter<"ErrorEntry"> | string | null
    stack?: StringNullableFilter<"ErrorEntry"> | string | null
    url?: StringNullableFilter<"ErrorEntry"> | string | null
    createdAt?: DateTimeFilter<"ErrorEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ErrorEntry"> | Date | string
    visitor?: XOR<VisitorScalarRelationFilter, VisitorWhereInput>
  }, "id">

  export type ErrorEntryOrderByWithAggregationInput = {
    id?: SortOrder
    visitorId?: SortOrder
    error?: SortOrder
    message?: SortOrderInput | SortOrder
    stack?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ErrorEntryCountOrderByAggregateInput
    _max?: ErrorEntryMaxOrderByAggregateInput
    _min?: ErrorEntryMinOrderByAggregateInput
  }

  export type ErrorEntryScalarWhereWithAggregatesInput = {
    AND?: ErrorEntryScalarWhereWithAggregatesInput | ErrorEntryScalarWhereWithAggregatesInput[]
    OR?: ErrorEntryScalarWhereWithAggregatesInput[]
    NOT?: ErrorEntryScalarWhereWithAggregatesInput | ErrorEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ErrorEntry"> | string
    visitorId?: StringWithAggregatesFilter<"ErrorEntry"> | string
    error?: StringWithAggregatesFilter<"ErrorEntry"> | string
    message?: StringNullableWithAggregatesFilter<"ErrorEntry"> | string | null
    stack?: StringNullableWithAggregatesFilter<"ErrorEntry"> | string | null
    url?: StringNullableWithAggregatesFilter<"ErrorEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ErrorEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ErrorEntry"> | Date | string
  }

  export type WordBookRecordWhereInput = {
    AND?: WordBookRecordWhereInput | WordBookRecordWhereInput[]
    OR?: WordBookRecordWhereInput[]
    NOT?: WordBookRecordWhereInput | WordBookRecordWhereInput[]
    id?: StringFilter<"WordBookRecord"> | string
    wordId?: StringFilter<"WordBookRecord"> | string
    isMaster?: BoolFilter<"WordBookRecord"> | boolean
    createdAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    updatedAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    userId?: StringFilter<"WordBookRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordBookScalarRelationFilter, WordBookWhereInput>
  }

  export type WordBookRecordOrderByWithRelationInput = {
    id?: SortOrder
    wordId?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordBookOrderByWithRelationInput
  }

  export type WordBookRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_wordId?: WordBookRecordUserIdWordIdCompoundUniqueInput
    AND?: WordBookRecordWhereInput | WordBookRecordWhereInput[]
    OR?: WordBookRecordWhereInput[]
    NOT?: WordBookRecordWhereInput | WordBookRecordWhereInput[]
    wordId?: StringFilter<"WordBookRecord"> | string
    isMaster?: BoolFilter<"WordBookRecord"> | boolean
    createdAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    updatedAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    userId?: StringFilter<"WordBookRecord"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordBookScalarRelationFilter, WordBookWhereInput>
  }, "id" | "userId_wordId">

  export type WordBookRecordOrderByWithAggregationInput = {
    id?: SortOrder
    wordId?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: WordBookRecordCountOrderByAggregateInput
    _max?: WordBookRecordMaxOrderByAggregateInput
    _min?: WordBookRecordMinOrderByAggregateInput
  }

  export type WordBookRecordScalarWhereWithAggregatesInput = {
    AND?: WordBookRecordScalarWhereWithAggregatesInput | WordBookRecordScalarWhereWithAggregatesInput[]
    OR?: WordBookRecordScalarWhereWithAggregatesInput[]
    NOT?: WordBookRecordScalarWhereWithAggregatesInput | WordBookRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WordBookRecord"> | string
    wordId?: StringWithAggregatesFilter<"WordBookRecord"> | string
    isMaster?: BoolWithAggregatesFilter<"WordBookRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WordBookRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WordBookRecord"> | Date | string
    userId?: StringWithAggregatesFilter<"WordBookRecord"> | string
  }

  export type WordBookWhereInput = {
    AND?: WordBookWhereInput | WordBookWhereInput[]
    OR?: WordBookWhereInput[]
    NOT?: WordBookWhereInput | WordBookWhereInput[]
    id?: StringFilter<"WordBook"> | string
    word?: StringFilter<"WordBook"> | string
    phonetic?: StringNullableFilter<"WordBook"> | string | null
    definition?: StringNullableFilter<"WordBook"> | string | null
    translation?: StringNullableFilter<"WordBook"> | string | null
    pos?: StringNullableFilter<"WordBook"> | string | null
    collins?: StringNullableFilter<"WordBook"> | string | null
    oxford?: StringNullableFilter<"WordBook"> | string | null
    tag?: StringNullableFilter<"WordBook"> | string | null
    bnc?: StringNullableFilter<"WordBook"> | string | null
    frq?: StringNullableFilter<"WordBook"> | string | null
    exchange?: StringNullableFilter<"WordBook"> | string | null
    gk?: BoolNullableFilter<"WordBook"> | boolean | null
    zk?: BoolNullableFilter<"WordBook"> | boolean | null
    gre?: BoolNullableFilter<"WordBook"> | boolean | null
    toefl?: BoolNullableFilter<"WordBook"> | boolean | null
    ielts?: BoolNullableFilter<"WordBook"> | boolean | null
    cet6?: BoolNullableFilter<"WordBook"> | boolean | null
    cet4?: BoolNullableFilter<"WordBook"> | boolean | null
    ky?: BoolNullableFilter<"WordBook"> | boolean | null
    createdAt?: DateTimeFilter<"WordBook"> | Date | string
    updatedAt?: DateTimeFilter<"WordBook"> | Date | string
    wordBookRecords?: WordBookRecordListRelationFilter
  }

  export type WordBookOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    translation?: SortOrderInput | SortOrder
    pos?: SortOrderInput | SortOrder
    collins?: SortOrderInput | SortOrder
    oxford?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    bnc?: SortOrderInput | SortOrder
    frq?: SortOrderInput | SortOrder
    exchange?: SortOrderInput | SortOrder
    gk?: SortOrderInput | SortOrder
    zk?: SortOrderInput | SortOrder
    gre?: SortOrderInput | SortOrder
    toefl?: SortOrderInput | SortOrder
    ielts?: SortOrderInput | SortOrder
    cet6?: SortOrderInput | SortOrder
    cet4?: SortOrderInput | SortOrder
    ky?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wordBookRecords?: WordBookRecordOrderByRelationAggregateInput
  }

  export type WordBookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WordBookWhereInput | WordBookWhereInput[]
    OR?: WordBookWhereInput[]
    NOT?: WordBookWhereInput | WordBookWhereInput[]
    word?: StringFilter<"WordBook"> | string
    phonetic?: StringNullableFilter<"WordBook"> | string | null
    definition?: StringNullableFilter<"WordBook"> | string | null
    translation?: StringNullableFilter<"WordBook"> | string | null
    pos?: StringNullableFilter<"WordBook"> | string | null
    collins?: StringNullableFilter<"WordBook"> | string | null
    oxford?: StringNullableFilter<"WordBook"> | string | null
    tag?: StringNullableFilter<"WordBook"> | string | null
    bnc?: StringNullableFilter<"WordBook"> | string | null
    frq?: StringNullableFilter<"WordBook"> | string | null
    exchange?: StringNullableFilter<"WordBook"> | string | null
    gk?: BoolNullableFilter<"WordBook"> | boolean | null
    zk?: BoolNullableFilter<"WordBook"> | boolean | null
    gre?: BoolNullableFilter<"WordBook"> | boolean | null
    toefl?: BoolNullableFilter<"WordBook"> | boolean | null
    ielts?: BoolNullableFilter<"WordBook"> | boolean | null
    cet6?: BoolNullableFilter<"WordBook"> | boolean | null
    cet4?: BoolNullableFilter<"WordBook"> | boolean | null
    ky?: BoolNullableFilter<"WordBook"> | boolean | null
    createdAt?: DateTimeFilter<"WordBook"> | Date | string
    updatedAt?: DateTimeFilter<"WordBook"> | Date | string
    wordBookRecords?: WordBookRecordListRelationFilter
  }, "id">

  export type WordBookOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    translation?: SortOrderInput | SortOrder
    pos?: SortOrderInput | SortOrder
    collins?: SortOrderInput | SortOrder
    oxford?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    bnc?: SortOrderInput | SortOrder
    frq?: SortOrderInput | SortOrder
    exchange?: SortOrderInput | SortOrder
    gk?: SortOrderInput | SortOrder
    zk?: SortOrderInput | SortOrder
    gre?: SortOrderInput | SortOrder
    toefl?: SortOrderInput | SortOrder
    ielts?: SortOrderInput | SortOrder
    cet6?: SortOrderInput | SortOrder
    cet4?: SortOrderInput | SortOrder
    ky?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WordBookCountOrderByAggregateInput
    _max?: WordBookMaxOrderByAggregateInput
    _min?: WordBookMinOrderByAggregateInput
  }

  export type WordBookScalarWhereWithAggregatesInput = {
    AND?: WordBookScalarWhereWithAggregatesInput | WordBookScalarWhereWithAggregatesInput[]
    OR?: WordBookScalarWhereWithAggregatesInput[]
    NOT?: WordBookScalarWhereWithAggregatesInput | WordBookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WordBook"> | string
    word?: StringWithAggregatesFilter<"WordBook"> | string
    phonetic?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    definition?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    translation?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    pos?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    collins?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    oxford?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    tag?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    bnc?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    frq?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    exchange?: StringNullableWithAggregatesFilter<"WordBook"> | string | null
    gk?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    zk?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    gre?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    toefl?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    ielts?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    cet6?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    cet4?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    ky?: BoolNullableWithAggregatesFilter<"WordBook"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"WordBook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WordBook"> | Date | string
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    userId?: StringFilter<"PaymentRecord"> | string
    tradeNo?: StringNullableFilter<"PaymentRecord"> | string | null
    outTradeNo?: StringFilter<"PaymentRecord"> | string
    amount?: DecimalFilter<"PaymentRecord"> | Decimal | DecimalJsLike | number | string
    subject?: StringFilter<"PaymentRecord"> | string
    body?: StringFilter<"PaymentRecord"> | string
    tradeStatus?: EnumTradeStatusFilter<"PaymentRecord"> | $Enums.TradeStatus
    sendPayTime?: DateTimeNullableFilter<"PaymentRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseRecords?: CourseRecordListRelationFilter
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tradeNo?: SortOrderInput | SortOrder
    outTradeNo?: SortOrder
    amount?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    tradeStatus?: SortOrder
    sendPayTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    courseRecords?: CourseRecordOrderByRelationAggregateInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    outTradeNo?: string
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    userId?: StringFilter<"PaymentRecord"> | string
    tradeNo?: StringNullableFilter<"PaymentRecord"> | string | null
    amount?: DecimalFilter<"PaymentRecord"> | Decimal | DecimalJsLike | number | string
    subject?: StringFilter<"PaymentRecord"> | string
    body?: StringFilter<"PaymentRecord"> | string
    tradeStatus?: EnumTradeStatusFilter<"PaymentRecord"> | $Enums.TradeStatus
    sendPayTime?: DateTimeNullableFilter<"PaymentRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courseRecords?: CourseRecordListRelationFilter
  }, "id" | "outTradeNo">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tradeNo?: SortOrderInput | SortOrder
    outTradeNo?: SortOrder
    amount?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    tradeStatus?: SortOrder
    sendPayTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentRecord"> | string
    userId?: StringWithAggregatesFilter<"PaymentRecord"> | string
    tradeNo?: StringNullableWithAggregatesFilter<"PaymentRecord"> | string | null
    outTradeNo?: StringWithAggregatesFilter<"PaymentRecord"> | string
    amount?: DecimalWithAggregatesFilter<"PaymentRecord"> | Decimal | DecimalJsLike | number | string
    subject?: StringWithAggregatesFilter<"PaymentRecord"> | string
    body?: StringWithAggregatesFilter<"PaymentRecord"> | string
    tradeStatus?: EnumTradeStatusWithAggregatesFilter<"PaymentRecord"> | $Enums.TradeStatus
    sendPayTime?: DateTimeNullableWithAggregatesFilter<"PaymentRecord"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
  }

  export type CourseRecordWhereInput = {
    AND?: CourseRecordWhereInput | CourseRecordWhereInput[]
    OR?: CourseRecordWhereInput[]
    NOT?: CourseRecordWhereInput | CourseRecordWhereInput[]
    id?: StringFilter<"CourseRecord"> | string
    userId?: StringFilter<"CourseRecord"> | string
    courseId?: StringFilter<"CourseRecord"> | string
    isPurchased?: BoolFilter<"CourseRecord"> | boolean
    createdAt?: DateTimeFilter<"CourseRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CourseRecord"> | Date | string
    paymentRecordId?: StringNullableFilter<"CourseRecord"> | string | null
    paymentRecord?: XOR<PaymentRecordNullableScalarRelationFilter, PaymentRecordWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    isPurchased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentRecordId?: SortOrderInput | SortOrder
    paymentRecord?: PaymentRecordOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CourseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: CourseRecordUserIdCourseIdCompoundUniqueInput
    AND?: CourseRecordWhereInput | CourseRecordWhereInput[]
    OR?: CourseRecordWhereInput[]
    NOT?: CourseRecordWhereInput | CourseRecordWhereInput[]
    userId?: StringFilter<"CourseRecord"> | string
    courseId?: StringFilter<"CourseRecord"> | string
    isPurchased?: BoolFilter<"CourseRecord"> | boolean
    createdAt?: DateTimeFilter<"CourseRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CourseRecord"> | Date | string
    paymentRecordId?: StringNullableFilter<"CourseRecord"> | string | null
    paymentRecord?: XOR<PaymentRecordNullableScalarRelationFilter, PaymentRecordWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type CourseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    isPurchased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentRecordId?: SortOrderInput | SortOrder
    _count?: CourseRecordCountOrderByAggregateInput
    _max?: CourseRecordMaxOrderByAggregateInput
    _min?: CourseRecordMinOrderByAggregateInput
  }

  export type CourseRecordScalarWhereWithAggregatesInput = {
    AND?: CourseRecordScalarWhereWithAggregatesInput | CourseRecordScalarWhereWithAggregatesInput[]
    OR?: CourseRecordScalarWhereWithAggregatesInput[]
    NOT?: CourseRecordScalarWhereWithAggregatesInput | CourseRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseRecord"> | string
    userId?: StringWithAggregatesFilter<"CourseRecord"> | string
    courseId?: StringWithAggregatesFilter<"CourseRecord"> | string
    isPurchased?: BoolWithAggregatesFilter<"CourseRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CourseRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseRecord"> | Date | string
    paymentRecordId?: StringNullableWithAggregatesFilter<"CourseRecord"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    value?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    teacher?: StringFilter<"Course"> | string
    url?: StringFilter<"Course"> | string
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    courseRecords?: CourseRecordListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    teacher?: SortOrder
    url?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseRecords?: CourseRecordOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    value?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    teacher?: StringFilter<"Course"> | string
    url?: StringFilter<"Course"> | string
    price?: DecimalFilter<"Course"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    courseRecords?: CourseRecordListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    teacher?: SortOrder
    url?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    value?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    teacher?: StringWithAggregatesFilter<"Course"> | string
    url?: StringWithAggregatesFilter<"Course"> | string
    price?: DecimalWithAggregatesFilter<"Course"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordCreateNestedManyWithoutUserInput
    visitors?: VisitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordUncheckedCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutUserInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUpdateManyWithoutUserNestedInput
    visitors?: VisitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUncheckedUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutUserNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitorCreateInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    user?: UserCreateNestedOneWithoutVisitorsInput
    pageViews?: PageViewCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewUncheckedCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventUncheckedCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutVisitorsNestedInput
    pageViews?: PageViewUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUncheckedUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUncheckedUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateManyInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
  }

  export type VisitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewCreateInput = {
    id?: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutPageViewsInput
  }

  export type PageViewUncheckedCreateInput = {
    id?: string
    visitorId: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutPageViewsNestedInput
  }

  export type PageViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewCreateManyInput = {
    id?: string
    visitorId: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventCreateInput = {
    id?: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutTrackEventsInput
  }

  export type TrackEventUncheckedCreateInput = {
    id?: string
    visitorId: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutTrackEventsNestedInput
  }

  export type TrackEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventCreateManyInput = {
    id?: string
    visitorId: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryCreateInput = {
    id?: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutPerformanceEntriesInput
  }

  export type PerformanceEntryUncheckedCreateInput = {
    id?: string
    visitorId: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutPerformanceEntriesNestedInput
  }

  export type PerformanceEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryCreateManyInput = {
    id?: string
    visitorId: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryCreateInput = {
    id?: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visitor: VisitorCreateNestedOneWithoutErrorEntriesInput
  }

  export type ErrorEntryUncheckedCreateInput = {
    id?: string
    visitorId: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visitor?: VisitorUpdateOneRequiredWithoutErrorEntriesNestedInput
  }

  export type ErrorEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryCreateManyInput = {
    id?: string
    visitorId: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    visitorId?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookRecordCreateInput = {
    id?: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWordBookRecordsInput
    word: WordBookCreateNestedOneWithoutWordBookRecordsInput
  }

  export type WordBookRecordUncheckedCreateInput = {
    id?: string
    wordId: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WordBookRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordBookRecordsNestedInput
    word?: WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput
  }

  export type WordBookRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WordBookRecordCreateManyInput = {
    id?: string
    wordId: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WordBookRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WordBookCreateInput = {
    id?: string
    word: string
    phonetic?: string | null
    definition?: string | null
    translation?: string | null
    pos?: string | null
    collins?: string | null
    oxford?: string | null
    tag?: string | null
    bnc?: string | null
    frq?: string | null
    exchange?: string | null
    gk?: boolean | null
    zk?: boolean | null
    gre?: boolean | null
    toefl?: boolean | null
    ielts?: boolean | null
    cet6?: boolean | null
    cet4?: boolean | null
    ky?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordCreateNestedManyWithoutWordInput
  }

  export type WordBookUncheckedCreateInput = {
    id?: string
    word: string
    phonetic?: string | null
    definition?: string | null
    translation?: string | null
    pos?: string | null
    collins?: string | null
    oxford?: string | null
    tag?: string | null
    bnc?: string | null
    frq?: string | null
    exchange?: string | null
    gk?: boolean | null
    zk?: boolean | null
    gre?: boolean | null
    toefl?: boolean | null
    ielts?: boolean | null
    cet6?: boolean | null
    cet4?: boolean | null
    ky?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordBookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUpdateManyWithoutWordNestedInput
  }

  export type WordBookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordBookCreateManyInput = {
    id?: string
    word: string
    phonetic?: string | null
    definition?: string | null
    translation?: string | null
    pos?: string | null
    collins?: string | null
    oxford?: string | null
    tag?: string | null
    bnc?: string | null
    frq?: string | null
    exchange?: string | null
    gk?: boolean | null
    zk?: boolean | null
    gre?: boolean | null
    toefl?: boolean | null
    ielts?: boolean | null
    cet6?: boolean | null
    cet4?: boolean | null
    ky?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordBookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateInput = {
    id?: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentRecordsInput
    courseRecords?: CourseRecordCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: string
    userId: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentRecordsNestedInput
    courseRecords?: CourseRecordUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordCreateManyInput = {
    id?: string
    userId: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordCreateInput = {
    id?: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecord?: PaymentRecordCreateNestedOneWithoutCourseRecordsInput
    user: UserCreateNestedOneWithoutCourseRecordsInput
    course: CourseCreateNestedOneWithoutCourseRecordsInput
  }

  export type CourseRecordUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type CourseRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecord?: PaymentRecordUpdateOneWithoutCourseRecordsNestedInput
    user?: UserUpdateOneRequiredWithoutCourseRecordsNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseRecordsNestedInput
  }

  export type CourseRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseRecordCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type CourseRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    value: string
    description?: string | null
    teacher: string
    url: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseRecords?: CourseRecordCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    value: string
    description?: string | null
    teacher: string
    url: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRecords?: CourseRecordUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    value: string
    description?: string | null
    teacher: string
    url: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WordBookRecordListRelationFilter = {
    every?: WordBookRecordWhereInput
    some?: WordBookRecordWhereInput
    none?: WordBookRecordWhereInput
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type CourseRecordListRelationFilter = {
    every?: CourseRecordWhereInput
    some?: CourseRecordWhereInput
    none?: CourseRecordWhereInput
  }

  export type VisitorListRelationFilter = {
    every?: VisitorWhereInput
    some?: VisitorWhereInput
    none?: VisitorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WordBookRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isTimingTask?: SortOrder
    timingTaskTime?: SortOrder
    wordNumber?: SortOrder
    dayNumber?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    wordNumber?: SortOrder
    dayNumber?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isTimingTask?: SortOrder
    timingTaskTime?: SortOrder
    wordNumber?: SortOrder
    dayNumber?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    isTimingTask?: SortOrder
    timingTaskTime?: SortOrder
    wordNumber?: SortOrder
    dayNumber?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    wordNumber?: SortOrder
    dayNumber?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PageViewListRelationFilter = {
    every?: PageViewWhereInput
    some?: PageViewWhereInput
    none?: PageViewWhereInput
  }

  export type TrackEventListRelationFilter = {
    every?: TrackEventWhereInput
    some?: TrackEventWhereInput
    none?: TrackEventWhereInput
  }

  export type PerformanceEntryListRelationFilter = {
    every?: PerformanceEntryWhereInput
    some?: PerformanceEntryWhereInput
    none?: PerformanceEntryWhereInput
  }

  export type ErrorEntryListRelationFilter = {
    every?: ErrorEntryWhereInput
    some?: ErrorEntryWhereInput
    none?: ErrorEntryWhereInput
  }

  export type PageViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerformanceEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ErrorEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitorCountOrderByAggregateInput = {
    id?: SortOrder
    anonymousId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
  }

  export type VisitorMaxOrderByAggregateInput = {
    id?: SortOrder
    anonymousId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
  }

  export type VisitorMinOrderByAggregateInput = {
    id?: SortOrder
    anonymousId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
  }

  export type VisitorScalarRelationFilter = {
    is?: VisitorWhereInput
    isNot?: VisitorWhereInput
  }

  export type PageViewCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    url?: SortOrder
    referrer?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TrackEventCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackEventMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackEventMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    event?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PerformanceEntryCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    fp?: SortOrder
    fcp?: SortOrder
    lcp?: SortOrder
    inp?: SortOrder
    cls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceEntryAvgOrderByAggregateInput = {
    fp?: SortOrder
    fcp?: SortOrder
    lcp?: SortOrder
    inp?: SortOrder
    cls?: SortOrder
  }

  export type PerformanceEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    fp?: SortOrder
    fcp?: SortOrder
    lcp?: SortOrder
    inp?: SortOrder
    cls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceEntryMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    fp?: SortOrder
    fcp?: SortOrder
    lcp?: SortOrder
    inp?: SortOrder
    cls?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerformanceEntrySumOrderByAggregateInput = {
    fp?: SortOrder
    fcp?: SortOrder
    lcp?: SortOrder
    inp?: SortOrder
    cls?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ErrorEntryCountOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    error?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ErrorEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    error?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ErrorEntryMinOrderByAggregateInput = {
    id?: SortOrder
    visitorId?: SortOrder
    error?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WordBookScalarRelationFilter = {
    is?: WordBookWhereInput
    isNot?: WordBookWhereInput
  }

  export type WordBookRecordUserIdWordIdCompoundUniqueInput = {
    userId: string
    wordId: string
  }

  export type WordBookRecordCountOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WordBookRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WordBookRecordMinOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
    isMaster?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WordBookCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    definition?: SortOrder
    translation?: SortOrder
    pos?: SortOrder
    collins?: SortOrder
    oxford?: SortOrder
    tag?: SortOrder
    bnc?: SortOrder
    frq?: SortOrder
    exchange?: SortOrder
    gk?: SortOrder
    zk?: SortOrder
    gre?: SortOrder
    toefl?: SortOrder
    ielts?: SortOrder
    cet6?: SortOrder
    cet4?: SortOrder
    ky?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordBookMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    definition?: SortOrder
    translation?: SortOrder
    pos?: SortOrder
    collins?: SortOrder
    oxford?: SortOrder
    tag?: SortOrder
    bnc?: SortOrder
    frq?: SortOrder
    exchange?: SortOrder
    gk?: SortOrder
    zk?: SortOrder
    gre?: SortOrder
    toefl?: SortOrder
    ielts?: SortOrder
    cet6?: SortOrder
    cet4?: SortOrder
    ky?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WordBookMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    phonetic?: SortOrder
    definition?: SortOrder
    translation?: SortOrder
    pos?: SortOrder
    collins?: SortOrder
    oxford?: SortOrder
    tag?: SortOrder
    bnc?: SortOrder
    frq?: SortOrder
    exchange?: SortOrder
    gk?: SortOrder
    zk?: SortOrder
    gre?: SortOrder
    toefl?: SortOrder
    ielts?: SortOrder
    cet6?: SortOrder
    cet4?: SortOrder
    ky?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumTradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusFilter<$PrismaModel> | $Enums.TradeStatus
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tradeNo?: SortOrder
    outTradeNo?: SortOrder
    amount?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    tradeStatus?: SortOrder
    sendPayTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tradeNo?: SortOrder
    outTradeNo?: SortOrder
    amount?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    tradeStatus?: SortOrder
    sendPayTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tradeNo?: SortOrder
    outTradeNo?: SortOrder
    amount?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    tradeStatus?: SortOrder
    sendPayTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumTradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.TradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeStatusFilter<$PrismaModel>
    _max?: NestedEnumTradeStatusFilter<$PrismaModel>
  }

  export type PaymentRecordNullableScalarRelationFilter = {
    is?: PaymentRecordWhereInput | null
    isNot?: PaymentRecordWhereInput | null
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseRecordUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type CourseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    isPurchased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentRecordId?: SortOrder
  }

  export type CourseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    isPurchased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentRecordId?: SortOrder
  }

  export type CourseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    isPurchased?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentRecordId?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrder
    teacher?: SortOrder
    url?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrder
    teacher?: SortOrder
    url?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    description?: SortOrder
    teacher?: SortOrder
    url?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type WordBookRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput> | WordBookRecordCreateWithoutUserInput[] | WordBookRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutUserInput | WordBookRecordCreateOrConnectWithoutUserInput[]
    createMany?: WordBookRecordCreateManyUserInputEnvelope
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
  }

  export type PaymentRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type CourseRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput> | CourseRecordCreateWithoutUserInput[] | CourseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutUserInput | CourseRecordCreateOrConnectWithoutUserInput[]
    createMany?: CourseRecordCreateManyUserInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type VisitorCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput> | VisitorCreateWithoutUserInput[] | VisitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutUserInput | VisitorCreateOrConnectWithoutUserInput[]
    createMany?: VisitorCreateManyUserInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type WordBookRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput> | WordBookRecordCreateWithoutUserInput[] | WordBookRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutUserInput | WordBookRecordCreateOrConnectWithoutUserInput[]
    createMany?: WordBookRecordCreateManyUserInputEnvelope
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type CourseRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput> | CourseRecordCreateWithoutUserInput[] | CourseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutUserInput | CourseRecordCreateOrConnectWithoutUserInput[]
    createMany?: CourseRecordCreateManyUserInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type VisitorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput> | VisitorCreateWithoutUserInput[] | VisitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutUserInput | VisitorCreateOrConnectWithoutUserInput[]
    createMany?: VisitorCreateManyUserInputEnvelope
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WordBookRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput> | WordBookRecordCreateWithoutUserInput[] | WordBookRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutUserInput | WordBookRecordCreateOrConnectWithoutUserInput[]
    upsert?: WordBookRecordUpsertWithWhereUniqueWithoutUserInput | WordBookRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordBookRecordCreateManyUserInputEnvelope
    set?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    disconnect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    delete?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    update?: WordBookRecordUpdateWithWhereUniqueWithoutUserInput | WordBookRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordBookRecordUpdateManyWithWhereWithoutUserInput | WordBookRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
  }

  export type PaymentRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutUserInput | PaymentRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutUserInput | PaymentRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutUserInput | PaymentRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type CourseRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput> | CourseRecordCreateWithoutUserInput[] | CourseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutUserInput | CourseRecordCreateOrConnectWithoutUserInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutUserInput | CourseRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseRecordCreateManyUserInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutUserInput | CourseRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutUserInput | CourseRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type VisitorUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput> | VisitorCreateWithoutUserInput[] | VisitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutUserInput | VisitorCreateOrConnectWithoutUserInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutUserInput | VisitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitorCreateManyUserInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutUserInput | VisitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutUserInput | VisitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type WordBookRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput> | WordBookRecordCreateWithoutUserInput[] | WordBookRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutUserInput | WordBookRecordCreateOrConnectWithoutUserInput[]
    upsert?: WordBookRecordUpsertWithWhereUniqueWithoutUserInput | WordBookRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WordBookRecordCreateManyUserInputEnvelope
    set?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    disconnect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    delete?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    update?: WordBookRecordUpdateWithWhereUniqueWithoutUserInput | WordBookRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WordBookRecordUpdateManyWithWhereWithoutUserInput | WordBookRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
  }

  export type PaymentRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput> | PaymentRecordCreateWithoutUserInput[] | PaymentRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutUserInput | PaymentRecordCreateOrConnectWithoutUserInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutUserInput | PaymentRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentRecordCreateManyUserInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutUserInput | PaymentRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutUserInput | PaymentRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type CourseRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput> | CourseRecordCreateWithoutUserInput[] | CourseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutUserInput | CourseRecordCreateOrConnectWithoutUserInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutUserInput | CourseRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseRecordCreateManyUserInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutUserInput | CourseRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutUserInput | CourseRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type VisitorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput> | VisitorCreateWithoutUserInput[] | VisitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VisitorCreateOrConnectWithoutUserInput | VisitorCreateOrConnectWithoutUserInput[]
    upsert?: VisitorUpsertWithWhereUniqueWithoutUserInput | VisitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VisitorCreateManyUserInputEnvelope
    set?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    disconnect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    delete?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    connect?: VisitorWhereUniqueInput | VisitorWhereUniqueInput[]
    update?: VisitorUpdateWithWhereUniqueWithoutUserInput | VisitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VisitorUpdateManyWithWhereWithoutUserInput | VisitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVisitorsInput = {
    create?: XOR<UserCreateWithoutVisitorsInput, UserUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitorsInput
    connect?: UserWhereUniqueInput
  }

  export type PageViewCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput> | PageViewCreateWithoutVisitorInput[] | PageViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageViewCreateOrConnectWithoutVisitorInput | PageViewCreateOrConnectWithoutVisitorInput[]
    createMany?: PageViewCreateManyVisitorInputEnvelope
    connect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
  }

  export type TrackEventCreateNestedManyWithoutVisitorInput = {
    create?: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput> | TrackEventCreateWithoutVisitorInput[] | TrackEventUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: TrackEventCreateOrConnectWithoutVisitorInput | TrackEventCreateOrConnectWithoutVisitorInput[]
    createMany?: TrackEventCreateManyVisitorInputEnvelope
    connect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
  }

  export type PerformanceEntryCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput> | PerformanceEntryCreateWithoutVisitorInput[] | PerformanceEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PerformanceEntryCreateOrConnectWithoutVisitorInput | PerformanceEntryCreateOrConnectWithoutVisitorInput[]
    createMany?: PerformanceEntryCreateManyVisitorInputEnvelope
    connect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
  }

  export type ErrorEntryCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput> | ErrorEntryCreateWithoutVisitorInput[] | ErrorEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ErrorEntryCreateOrConnectWithoutVisitorInput | ErrorEntryCreateOrConnectWithoutVisitorInput[]
    createMany?: ErrorEntryCreateManyVisitorInputEnvelope
    connect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
  }

  export type PageViewUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput> | PageViewCreateWithoutVisitorInput[] | PageViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageViewCreateOrConnectWithoutVisitorInput | PageViewCreateOrConnectWithoutVisitorInput[]
    createMany?: PageViewCreateManyVisitorInputEnvelope
    connect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
  }

  export type TrackEventUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput> | TrackEventCreateWithoutVisitorInput[] | TrackEventUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: TrackEventCreateOrConnectWithoutVisitorInput | TrackEventCreateOrConnectWithoutVisitorInput[]
    createMany?: TrackEventCreateManyVisitorInputEnvelope
    connect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
  }

  export type PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput> | PerformanceEntryCreateWithoutVisitorInput[] | PerformanceEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PerformanceEntryCreateOrConnectWithoutVisitorInput | PerformanceEntryCreateOrConnectWithoutVisitorInput[]
    createMany?: PerformanceEntryCreateManyVisitorInputEnvelope
    connect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
  }

  export type ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput = {
    create?: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput> | ErrorEntryCreateWithoutVisitorInput[] | ErrorEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ErrorEntryCreateOrConnectWithoutVisitorInput | ErrorEntryCreateOrConnectWithoutVisitorInput[]
    createMany?: ErrorEntryCreateManyVisitorInputEnvelope
    connect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutVisitorsNestedInput = {
    create?: XOR<UserCreateWithoutVisitorsInput, UserUncheckedCreateWithoutVisitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVisitorsInput
    upsert?: UserUpsertWithoutVisitorsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVisitorsInput, UserUpdateWithoutVisitorsInput>, UserUncheckedUpdateWithoutVisitorsInput>
  }

  export type PageViewUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput> | PageViewCreateWithoutVisitorInput[] | PageViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageViewCreateOrConnectWithoutVisitorInput | PageViewCreateOrConnectWithoutVisitorInput[]
    upsert?: PageViewUpsertWithWhereUniqueWithoutVisitorInput | PageViewUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PageViewCreateManyVisitorInputEnvelope
    set?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    disconnect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    delete?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    connect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    update?: PageViewUpdateWithWhereUniqueWithoutVisitorInput | PageViewUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PageViewUpdateManyWithWhereWithoutVisitorInput | PageViewUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PageViewScalarWhereInput | PageViewScalarWhereInput[]
  }

  export type TrackEventUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput> | TrackEventCreateWithoutVisitorInput[] | TrackEventUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: TrackEventCreateOrConnectWithoutVisitorInput | TrackEventCreateOrConnectWithoutVisitorInput[]
    upsert?: TrackEventUpsertWithWhereUniqueWithoutVisitorInput | TrackEventUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: TrackEventCreateManyVisitorInputEnvelope
    set?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    disconnect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    delete?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    connect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    update?: TrackEventUpdateWithWhereUniqueWithoutVisitorInput | TrackEventUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: TrackEventUpdateManyWithWhereWithoutVisitorInput | TrackEventUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: TrackEventScalarWhereInput | TrackEventScalarWhereInput[]
  }

  export type PerformanceEntryUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput> | PerformanceEntryCreateWithoutVisitorInput[] | PerformanceEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PerformanceEntryCreateOrConnectWithoutVisitorInput | PerformanceEntryCreateOrConnectWithoutVisitorInput[]
    upsert?: PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput | PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PerformanceEntryCreateManyVisitorInputEnvelope
    set?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    disconnect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    delete?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    connect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    update?: PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput | PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PerformanceEntryUpdateManyWithWhereWithoutVisitorInput | PerformanceEntryUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PerformanceEntryScalarWhereInput | PerformanceEntryScalarWhereInput[]
  }

  export type ErrorEntryUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput> | ErrorEntryCreateWithoutVisitorInput[] | ErrorEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ErrorEntryCreateOrConnectWithoutVisitorInput | ErrorEntryCreateOrConnectWithoutVisitorInput[]
    upsert?: ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput | ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ErrorEntryCreateManyVisitorInputEnvelope
    set?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    disconnect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    delete?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    connect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    update?: ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput | ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ErrorEntryUpdateManyWithWhereWithoutVisitorInput | ErrorEntryUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ErrorEntryScalarWhereInput | ErrorEntryScalarWhereInput[]
  }

  export type PageViewUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput> | PageViewCreateWithoutVisitorInput[] | PageViewUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PageViewCreateOrConnectWithoutVisitorInput | PageViewCreateOrConnectWithoutVisitorInput[]
    upsert?: PageViewUpsertWithWhereUniqueWithoutVisitorInput | PageViewUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PageViewCreateManyVisitorInputEnvelope
    set?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    disconnect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    delete?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    connect?: PageViewWhereUniqueInput | PageViewWhereUniqueInput[]
    update?: PageViewUpdateWithWhereUniqueWithoutVisitorInput | PageViewUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PageViewUpdateManyWithWhereWithoutVisitorInput | PageViewUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PageViewScalarWhereInput | PageViewScalarWhereInput[]
  }

  export type TrackEventUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput> | TrackEventCreateWithoutVisitorInput[] | TrackEventUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: TrackEventCreateOrConnectWithoutVisitorInput | TrackEventCreateOrConnectWithoutVisitorInput[]
    upsert?: TrackEventUpsertWithWhereUniqueWithoutVisitorInput | TrackEventUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: TrackEventCreateManyVisitorInputEnvelope
    set?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    disconnect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    delete?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    connect?: TrackEventWhereUniqueInput | TrackEventWhereUniqueInput[]
    update?: TrackEventUpdateWithWhereUniqueWithoutVisitorInput | TrackEventUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: TrackEventUpdateManyWithWhereWithoutVisitorInput | TrackEventUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: TrackEventScalarWhereInput | TrackEventScalarWhereInput[]
  }

  export type PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput> | PerformanceEntryCreateWithoutVisitorInput[] | PerformanceEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: PerformanceEntryCreateOrConnectWithoutVisitorInput | PerformanceEntryCreateOrConnectWithoutVisitorInput[]
    upsert?: PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput | PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: PerformanceEntryCreateManyVisitorInputEnvelope
    set?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    disconnect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    delete?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    connect?: PerformanceEntryWhereUniqueInput | PerformanceEntryWhereUniqueInput[]
    update?: PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput | PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: PerformanceEntryUpdateManyWithWhereWithoutVisitorInput | PerformanceEntryUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: PerformanceEntryScalarWhereInput | PerformanceEntryScalarWhereInput[]
  }

  export type ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput = {
    create?: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput> | ErrorEntryCreateWithoutVisitorInput[] | ErrorEntryUncheckedCreateWithoutVisitorInput[]
    connectOrCreate?: ErrorEntryCreateOrConnectWithoutVisitorInput | ErrorEntryCreateOrConnectWithoutVisitorInput[]
    upsert?: ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput | ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput[]
    createMany?: ErrorEntryCreateManyVisitorInputEnvelope
    set?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    disconnect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    delete?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    connect?: ErrorEntryWhereUniqueInput | ErrorEntryWhereUniqueInput[]
    update?: ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput | ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput[]
    updateMany?: ErrorEntryUpdateManyWithWhereWithoutVisitorInput | ErrorEntryUpdateManyWithWhereWithoutVisitorInput[]
    deleteMany?: ErrorEntryScalarWhereInput | ErrorEntryScalarWhereInput[]
  }

  export type VisitorCreateNestedOneWithoutPageViewsInput = {
    create?: XOR<VisitorCreateWithoutPageViewsInput, VisitorUncheckedCreateWithoutPageViewsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPageViewsInput
    connect?: VisitorWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutPageViewsNestedInput = {
    create?: XOR<VisitorCreateWithoutPageViewsInput, VisitorUncheckedCreateWithoutPageViewsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPageViewsInput
    upsert?: VisitorUpsertWithoutPageViewsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutPageViewsInput, VisitorUpdateWithoutPageViewsInput>, VisitorUncheckedUpdateWithoutPageViewsInput>
  }

  export type VisitorCreateNestedOneWithoutTrackEventsInput = {
    create?: XOR<VisitorCreateWithoutTrackEventsInput, VisitorUncheckedCreateWithoutTrackEventsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutTrackEventsInput
    connect?: VisitorWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutTrackEventsNestedInput = {
    create?: XOR<VisitorCreateWithoutTrackEventsInput, VisitorUncheckedCreateWithoutTrackEventsInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutTrackEventsInput
    upsert?: VisitorUpsertWithoutTrackEventsInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutTrackEventsInput, VisitorUpdateWithoutTrackEventsInput>, VisitorUncheckedUpdateWithoutTrackEventsInput>
  }

  export type VisitorCreateNestedOneWithoutPerformanceEntriesInput = {
    create?: XOR<VisitorCreateWithoutPerformanceEntriesInput, VisitorUncheckedCreateWithoutPerformanceEntriesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPerformanceEntriesInput
    connect?: VisitorWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VisitorUpdateOneRequiredWithoutPerformanceEntriesNestedInput = {
    create?: XOR<VisitorCreateWithoutPerformanceEntriesInput, VisitorUncheckedCreateWithoutPerformanceEntriesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutPerformanceEntriesInput
    upsert?: VisitorUpsertWithoutPerformanceEntriesInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutPerformanceEntriesInput, VisitorUpdateWithoutPerformanceEntriesInput>, VisitorUncheckedUpdateWithoutPerformanceEntriesInput>
  }

  export type VisitorCreateNestedOneWithoutErrorEntriesInput = {
    create?: XOR<VisitorCreateWithoutErrorEntriesInput, VisitorUncheckedCreateWithoutErrorEntriesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutErrorEntriesInput
    connect?: VisitorWhereUniqueInput
  }

  export type VisitorUpdateOneRequiredWithoutErrorEntriesNestedInput = {
    create?: XOR<VisitorCreateWithoutErrorEntriesInput, VisitorUncheckedCreateWithoutErrorEntriesInput>
    connectOrCreate?: VisitorCreateOrConnectWithoutErrorEntriesInput
    upsert?: VisitorUpsertWithoutErrorEntriesInput
    connect?: VisitorWhereUniqueInput
    update?: XOR<XOR<VisitorUpdateToOneWithWhereWithoutErrorEntriesInput, VisitorUpdateWithoutErrorEntriesInput>, VisitorUncheckedUpdateWithoutErrorEntriesInput>
  }

  export type UserCreateNestedOneWithoutWordBookRecordsInput = {
    create?: XOR<UserCreateWithoutWordBookRecordsInput, UserUncheckedCreateWithoutWordBookRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordBookRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type WordBookCreateNestedOneWithoutWordBookRecordsInput = {
    create?: XOR<WordBookCreateWithoutWordBookRecordsInput, WordBookUncheckedCreateWithoutWordBookRecordsInput>
    connectOrCreate?: WordBookCreateOrConnectWithoutWordBookRecordsInput
    connect?: WordBookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWordBookRecordsNestedInput = {
    create?: XOR<UserCreateWithoutWordBookRecordsInput, UserUncheckedCreateWithoutWordBookRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordBookRecordsInput
    upsert?: UserUpsertWithoutWordBookRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWordBookRecordsInput, UserUpdateWithoutWordBookRecordsInput>, UserUncheckedUpdateWithoutWordBookRecordsInput>
  }

  export type WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput = {
    create?: XOR<WordBookCreateWithoutWordBookRecordsInput, WordBookUncheckedCreateWithoutWordBookRecordsInput>
    connectOrCreate?: WordBookCreateOrConnectWithoutWordBookRecordsInput
    upsert?: WordBookUpsertWithoutWordBookRecordsInput
    connect?: WordBookWhereUniqueInput
    update?: XOR<XOR<WordBookUpdateToOneWithWhereWithoutWordBookRecordsInput, WordBookUpdateWithoutWordBookRecordsInput>, WordBookUncheckedUpdateWithoutWordBookRecordsInput>
  }

  export type WordBookRecordCreateNestedManyWithoutWordInput = {
    create?: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput> | WordBookRecordCreateWithoutWordInput[] | WordBookRecordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutWordInput | WordBookRecordCreateOrConnectWithoutWordInput[]
    createMany?: WordBookRecordCreateManyWordInputEnvelope
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
  }

  export type WordBookRecordUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput> | WordBookRecordCreateWithoutWordInput[] | WordBookRecordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutWordInput | WordBookRecordCreateOrConnectWithoutWordInput[]
    createMany?: WordBookRecordCreateManyWordInputEnvelope
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type WordBookRecordUpdateManyWithoutWordNestedInput = {
    create?: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput> | WordBookRecordCreateWithoutWordInput[] | WordBookRecordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutWordInput | WordBookRecordCreateOrConnectWithoutWordInput[]
    upsert?: WordBookRecordUpsertWithWhereUniqueWithoutWordInput | WordBookRecordUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: WordBookRecordCreateManyWordInputEnvelope
    set?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    disconnect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    delete?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    update?: WordBookRecordUpdateWithWhereUniqueWithoutWordInput | WordBookRecordUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: WordBookRecordUpdateManyWithWhereWithoutWordInput | WordBookRecordUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
  }

  export type WordBookRecordUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput> | WordBookRecordCreateWithoutWordInput[] | WordBookRecordUncheckedCreateWithoutWordInput[]
    connectOrCreate?: WordBookRecordCreateOrConnectWithoutWordInput | WordBookRecordCreateOrConnectWithoutWordInput[]
    upsert?: WordBookRecordUpsertWithWhereUniqueWithoutWordInput | WordBookRecordUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: WordBookRecordCreateManyWordInputEnvelope
    set?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    disconnect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    delete?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    connect?: WordBookRecordWhereUniqueInput | WordBookRecordWhereUniqueInput[]
    update?: WordBookRecordUpdateWithWhereUniqueWithoutWordInput | WordBookRecordUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: WordBookRecordUpdateManyWithWhereWithoutWordInput | WordBookRecordUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentRecordsInput = {
    create?: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseRecordCreateNestedManyWithoutPaymentRecordInput = {
    create?: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput> | CourseRecordCreateWithoutPaymentRecordInput[] | CourseRecordUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutPaymentRecordInput | CourseRecordCreateOrConnectWithoutPaymentRecordInput[]
    createMany?: CourseRecordCreateManyPaymentRecordInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type CourseRecordUncheckedCreateNestedManyWithoutPaymentRecordInput = {
    create?: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput> | CourseRecordCreateWithoutPaymentRecordInput[] | CourseRecordUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutPaymentRecordInput | CourseRecordCreateOrConnectWithoutPaymentRecordInput[]
    createMany?: CourseRecordCreateManyPaymentRecordInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumTradeStatusFieldUpdateOperationsInput = {
    set?: $Enums.TradeStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentRecordsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentRecordsInput
    upsert?: UserUpsertWithoutPaymentRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentRecordsInput, UserUpdateWithoutPaymentRecordsInput>, UserUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type CourseRecordUpdateManyWithoutPaymentRecordNestedInput = {
    create?: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput> | CourseRecordCreateWithoutPaymentRecordInput[] | CourseRecordUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutPaymentRecordInput | CourseRecordCreateOrConnectWithoutPaymentRecordInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutPaymentRecordInput | CourseRecordUpsertWithWhereUniqueWithoutPaymentRecordInput[]
    createMany?: CourseRecordCreateManyPaymentRecordInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutPaymentRecordInput | CourseRecordUpdateWithWhereUniqueWithoutPaymentRecordInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutPaymentRecordInput | CourseRecordUpdateManyWithWhereWithoutPaymentRecordInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type CourseRecordUncheckedUpdateManyWithoutPaymentRecordNestedInput = {
    create?: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput> | CourseRecordCreateWithoutPaymentRecordInput[] | CourseRecordUncheckedCreateWithoutPaymentRecordInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutPaymentRecordInput | CourseRecordCreateOrConnectWithoutPaymentRecordInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutPaymentRecordInput | CourseRecordUpsertWithWhereUniqueWithoutPaymentRecordInput[]
    createMany?: CourseRecordCreateManyPaymentRecordInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutPaymentRecordInput | CourseRecordUpdateWithWhereUniqueWithoutPaymentRecordInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutPaymentRecordInput | CourseRecordUpdateManyWithWhereWithoutPaymentRecordInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type PaymentRecordCreateNestedOneWithoutCourseRecordsInput = {
    create?: XOR<PaymentRecordCreateWithoutCourseRecordsInput, PaymentRecordUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCourseRecordsInput
    connect?: PaymentRecordWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCourseRecordsInput = {
    create?: XOR<UserCreateWithoutCourseRecordsInput, UserUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCourseRecordsInput = {
    create?: XOR<CourseCreateWithoutCourseRecordsInput, CourseUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseRecordsInput
    connect?: CourseWhereUniqueInput
  }

  export type PaymentRecordUpdateOneWithoutCourseRecordsNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutCourseRecordsInput, PaymentRecordUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutCourseRecordsInput
    upsert?: PaymentRecordUpsertWithoutCourseRecordsInput
    disconnect?: PaymentRecordWhereInput | boolean
    delete?: PaymentRecordWhereInput | boolean
    connect?: PaymentRecordWhereUniqueInput
    update?: XOR<XOR<PaymentRecordUpdateToOneWithWhereWithoutCourseRecordsInput, PaymentRecordUpdateWithoutCourseRecordsInput>, PaymentRecordUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type UserUpdateOneRequiredWithoutCourseRecordsNestedInput = {
    create?: XOR<UserCreateWithoutCourseRecordsInput, UserUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseRecordsInput
    upsert?: UserUpsertWithoutCourseRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseRecordsInput, UserUpdateWithoutCourseRecordsInput>, UserUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type CourseUpdateOneRequiredWithoutCourseRecordsNestedInput = {
    create?: XOR<CourseCreateWithoutCourseRecordsInput, CourseUncheckedCreateWithoutCourseRecordsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseRecordsInput
    upsert?: CourseUpsertWithoutCourseRecordsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseRecordsInput, CourseUpdateWithoutCourseRecordsInput>, CourseUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type CourseRecordCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput> | CourseRecordCreateWithoutCourseInput[] | CourseRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutCourseInput | CourseRecordCreateOrConnectWithoutCourseInput[]
    createMany?: CourseRecordCreateManyCourseInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type CourseRecordUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput> | CourseRecordCreateWithoutCourseInput[] | CourseRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutCourseInput | CourseRecordCreateOrConnectWithoutCourseInput[]
    createMany?: CourseRecordCreateManyCourseInputEnvelope
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
  }

  export type CourseRecordUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput> | CourseRecordCreateWithoutCourseInput[] | CourseRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutCourseInput | CourseRecordCreateOrConnectWithoutCourseInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutCourseInput | CourseRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseRecordCreateManyCourseInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutCourseInput | CourseRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutCourseInput | CourseRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type CourseRecordUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput> | CourseRecordCreateWithoutCourseInput[] | CourseRecordUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRecordCreateOrConnectWithoutCourseInput | CourseRecordCreateOrConnectWithoutCourseInput[]
    upsert?: CourseRecordUpsertWithWhereUniqueWithoutCourseInput | CourseRecordUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseRecordCreateManyCourseInputEnvelope
    set?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    disconnect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    delete?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    connect?: CourseRecordWhereUniqueInput | CourseRecordWhereUniqueInput[]
    update?: CourseRecordUpdateWithWhereUniqueWithoutCourseInput | CourseRecordUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseRecordUpdateManyWithWhereWithoutCourseInput | CourseRecordUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTradeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusFilter<$PrismaModel> | $Enums.TradeStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeStatus | EnumTradeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeStatus[] | ListEnumTradeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeStatusWithAggregatesFilter<$PrismaModel> | $Enums.TradeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeStatusFilter<$PrismaModel>
    _max?: NestedEnumTradeStatusFilter<$PrismaModel>
  }

  export type WordBookRecordCreateWithoutUserInput = {
    id?: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    word: WordBookCreateNestedOneWithoutWordBookRecordsInput
  }

  export type WordBookRecordUncheckedCreateWithoutUserInput = {
    id?: string
    wordId: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordBookRecordCreateOrConnectWithoutUserInput = {
    where: WordBookRecordWhereUniqueInput
    create: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput>
  }

  export type WordBookRecordCreateManyUserInputEnvelope = {
    data: WordBookRecordCreateManyUserInput | WordBookRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentRecordCreateWithoutUserInput = {
    id?: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseRecords?: CourseRecordCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordUncheckedCreateWithoutUserInput = {
    id?: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutPaymentRecordInput
  }

  export type PaymentRecordCreateOrConnectWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput>
  }

  export type PaymentRecordCreateManyUserInputEnvelope = {
    data: PaymentRecordCreateManyUserInput | PaymentRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseRecordCreateWithoutUserInput = {
    id?: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecord?: PaymentRecordCreateNestedOneWithoutCourseRecordsInput
    course: CourseCreateNestedOneWithoutCourseRecordsInput
  }

  export type CourseRecordUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type CourseRecordCreateOrConnectWithoutUserInput = {
    where: CourseRecordWhereUniqueInput
    create: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput>
  }

  export type CourseRecordCreateManyUserInputEnvelope = {
    data: CourseRecordCreateManyUserInput | CourseRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VisitorCreateWithoutUserInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutUserInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewUncheckedCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventUncheckedCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutUserInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput>
  }

  export type VisitorCreateManyUserInputEnvelope = {
    data: VisitorCreateManyUserInput | VisitorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WordBookRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: WordBookRecordWhereUniqueInput
    update: XOR<WordBookRecordUpdateWithoutUserInput, WordBookRecordUncheckedUpdateWithoutUserInput>
    create: XOR<WordBookRecordCreateWithoutUserInput, WordBookRecordUncheckedCreateWithoutUserInput>
  }

  export type WordBookRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: WordBookRecordWhereUniqueInput
    data: XOR<WordBookRecordUpdateWithoutUserInput, WordBookRecordUncheckedUpdateWithoutUserInput>
  }

  export type WordBookRecordUpdateManyWithWhereWithoutUserInput = {
    where: WordBookRecordScalarWhereInput
    data: XOR<WordBookRecordUpdateManyMutationInput, WordBookRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type WordBookRecordScalarWhereInput = {
    AND?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
    OR?: WordBookRecordScalarWhereInput[]
    NOT?: WordBookRecordScalarWhereInput | WordBookRecordScalarWhereInput[]
    id?: StringFilter<"WordBookRecord"> | string
    wordId?: StringFilter<"WordBookRecord"> | string
    isMaster?: BoolFilter<"WordBookRecord"> | boolean
    createdAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    updatedAt?: DateTimeFilter<"WordBookRecord"> | Date | string
    userId?: StringFilter<"WordBookRecord"> | string
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutUserInput, PaymentRecordUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentRecordCreateWithoutUserInput, PaymentRecordUncheckedCreateWithoutUserInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutUserInput, PaymentRecordUncheckedUpdateWithoutUserInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutUserInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: StringFilter<"PaymentRecord"> | string
    userId?: StringFilter<"PaymentRecord"> | string
    tradeNo?: StringNullableFilter<"PaymentRecord"> | string | null
    outTradeNo?: StringFilter<"PaymentRecord"> | string
    amount?: DecimalFilter<"PaymentRecord"> | Decimal | DecimalJsLike | number | string
    subject?: StringFilter<"PaymentRecord"> | string
    body?: StringFilter<"PaymentRecord"> | string
    tradeStatus?: EnumTradeStatusFilter<"PaymentRecord"> | $Enums.TradeStatus
    sendPayTime?: DateTimeNullableFilter<"PaymentRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentRecord"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentRecord"> | Date | string
  }

  export type CourseRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseRecordWhereUniqueInput
    update: XOR<CourseRecordUpdateWithoutUserInput, CourseRecordUncheckedUpdateWithoutUserInput>
    create: XOR<CourseRecordCreateWithoutUserInput, CourseRecordUncheckedCreateWithoutUserInput>
  }

  export type CourseRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseRecordWhereUniqueInput
    data: XOR<CourseRecordUpdateWithoutUserInput, CourseRecordUncheckedUpdateWithoutUserInput>
  }

  export type CourseRecordUpdateManyWithWhereWithoutUserInput = {
    where: CourseRecordScalarWhereInput
    data: XOR<CourseRecordUpdateManyMutationInput, CourseRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseRecordScalarWhereInput = {
    AND?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
    OR?: CourseRecordScalarWhereInput[]
    NOT?: CourseRecordScalarWhereInput | CourseRecordScalarWhereInput[]
    id?: StringFilter<"CourseRecord"> | string
    userId?: StringFilter<"CourseRecord"> | string
    courseId?: StringFilter<"CourseRecord"> | string
    isPurchased?: BoolFilter<"CourseRecord"> | boolean
    createdAt?: DateTimeFilter<"CourseRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CourseRecord"> | Date | string
    paymentRecordId?: StringNullableFilter<"CourseRecord"> | string | null
  }

  export type VisitorUpsertWithWhereUniqueWithoutUserInput = {
    where: VisitorWhereUniqueInput
    update: XOR<VisitorUpdateWithoutUserInput, VisitorUncheckedUpdateWithoutUserInput>
    create: XOR<VisitorCreateWithoutUserInput, VisitorUncheckedCreateWithoutUserInput>
  }

  export type VisitorUpdateWithWhereUniqueWithoutUserInput = {
    where: VisitorWhereUniqueInput
    data: XOR<VisitorUpdateWithoutUserInput, VisitorUncheckedUpdateWithoutUserInput>
  }

  export type VisitorUpdateManyWithWhereWithoutUserInput = {
    where: VisitorScalarWhereInput
    data: XOR<VisitorUpdateManyMutationInput, VisitorUncheckedUpdateManyWithoutUserInput>
  }

  export type VisitorScalarWhereInput = {
    AND?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    OR?: VisitorScalarWhereInput[]
    NOT?: VisitorScalarWhereInput | VisitorScalarWhereInput[]
    id?: StringFilter<"Visitor"> | string
    anonymousId?: StringFilter<"Visitor"> | string
    userId?: StringNullableFilter<"Visitor"> | string | null
    createdAt?: DateTimeFilter<"Visitor"> | Date | string
    updatedAt?: DateTimeFilter<"Visitor"> | Date | string
    browser?: StringNullableFilter<"Visitor"> | string | null
    os?: StringNullableFilter<"Visitor"> | string | null
    device?: StringNullableFilter<"Visitor"> | string | null
  }

  export type UserCreateWithoutVisitorsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVisitorsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordUncheckedCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVisitorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVisitorsInput, UserUncheckedCreateWithoutVisitorsInput>
  }

  export type PageViewCreateWithoutVisitorInput = {
    id?: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUncheckedCreateWithoutVisitorInput = {
    id?: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewCreateOrConnectWithoutVisitorInput = {
    where: PageViewWhereUniqueInput
    create: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput>
  }

  export type PageViewCreateManyVisitorInputEnvelope = {
    data: PageViewCreateManyVisitorInput | PageViewCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type TrackEventCreateWithoutVisitorInput = {
    id?: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackEventUncheckedCreateWithoutVisitorInput = {
    id?: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackEventCreateOrConnectWithoutVisitorInput = {
    where: TrackEventWhereUniqueInput
    create: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput>
  }

  export type TrackEventCreateManyVisitorInputEnvelope = {
    data: TrackEventCreateManyVisitorInput | TrackEventCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type PerformanceEntryCreateWithoutVisitorInput = {
    id?: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceEntryUncheckedCreateWithoutVisitorInput = {
    id?: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceEntryCreateOrConnectWithoutVisitorInput = {
    where: PerformanceEntryWhereUniqueInput
    create: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput>
  }

  export type PerformanceEntryCreateManyVisitorInputEnvelope = {
    data: PerformanceEntryCreateManyVisitorInput | PerformanceEntryCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type ErrorEntryCreateWithoutVisitorInput = {
    id?: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorEntryUncheckedCreateWithoutVisitorInput = {
    id?: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorEntryCreateOrConnectWithoutVisitorInput = {
    where: ErrorEntryWhereUniqueInput
    create: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput>
  }

  export type ErrorEntryCreateManyVisitorInputEnvelope = {
    data: ErrorEntryCreateManyVisitorInput | ErrorEntryCreateManyVisitorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVisitorsInput = {
    update: XOR<UserUpdateWithoutVisitorsInput, UserUncheckedUpdateWithoutVisitorsInput>
    create: XOR<UserCreateWithoutVisitorsInput, UserUncheckedCreateWithoutVisitorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVisitorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVisitorsInput, UserUncheckedUpdateWithoutVisitorsInput>
  }

  export type UserUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVisitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUncheckedUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PageViewUpsertWithWhereUniqueWithoutVisitorInput = {
    where: PageViewWhereUniqueInput
    update: XOR<PageViewUpdateWithoutVisitorInput, PageViewUncheckedUpdateWithoutVisitorInput>
    create: XOR<PageViewCreateWithoutVisitorInput, PageViewUncheckedCreateWithoutVisitorInput>
  }

  export type PageViewUpdateWithWhereUniqueWithoutVisitorInput = {
    where: PageViewWhereUniqueInput
    data: XOR<PageViewUpdateWithoutVisitorInput, PageViewUncheckedUpdateWithoutVisitorInput>
  }

  export type PageViewUpdateManyWithWhereWithoutVisitorInput = {
    where: PageViewScalarWhereInput
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyWithoutVisitorInput>
  }

  export type PageViewScalarWhereInput = {
    AND?: PageViewScalarWhereInput | PageViewScalarWhereInput[]
    OR?: PageViewScalarWhereInput[]
    NOT?: PageViewScalarWhereInput | PageViewScalarWhereInput[]
    id?: StringFilter<"PageView"> | string
    visitorId?: StringFilter<"PageView"> | string
    url?: StringFilter<"PageView"> | string
    referrer?: StringNullableFilter<"PageView"> | string | null
    path?: StringFilter<"PageView"> | string
    createdAt?: DateTimeFilter<"PageView"> | Date | string
    updatedAt?: DateTimeFilter<"PageView"> | Date | string
  }

  export type TrackEventUpsertWithWhereUniqueWithoutVisitorInput = {
    where: TrackEventWhereUniqueInput
    update: XOR<TrackEventUpdateWithoutVisitorInput, TrackEventUncheckedUpdateWithoutVisitorInput>
    create: XOR<TrackEventCreateWithoutVisitorInput, TrackEventUncheckedCreateWithoutVisitorInput>
  }

  export type TrackEventUpdateWithWhereUniqueWithoutVisitorInput = {
    where: TrackEventWhereUniqueInput
    data: XOR<TrackEventUpdateWithoutVisitorInput, TrackEventUncheckedUpdateWithoutVisitorInput>
  }

  export type TrackEventUpdateManyWithWhereWithoutVisitorInput = {
    where: TrackEventScalarWhereInput
    data: XOR<TrackEventUpdateManyMutationInput, TrackEventUncheckedUpdateManyWithoutVisitorInput>
  }

  export type TrackEventScalarWhereInput = {
    AND?: TrackEventScalarWhereInput | TrackEventScalarWhereInput[]
    OR?: TrackEventScalarWhereInput[]
    NOT?: TrackEventScalarWhereInput | TrackEventScalarWhereInput[]
    id?: StringFilter<"TrackEvent"> | string
    visitorId?: StringFilter<"TrackEvent"> | string
    event?: StringFilter<"TrackEvent"> | string
    payload?: JsonNullableFilter<"TrackEvent">
    url?: StringNullableFilter<"TrackEvent"> | string | null
    createdAt?: DateTimeFilter<"TrackEvent"> | Date | string
    updatedAt?: DateTimeFilter<"TrackEvent"> | Date | string
  }

  export type PerformanceEntryUpsertWithWhereUniqueWithoutVisitorInput = {
    where: PerformanceEntryWhereUniqueInput
    update: XOR<PerformanceEntryUpdateWithoutVisitorInput, PerformanceEntryUncheckedUpdateWithoutVisitorInput>
    create: XOR<PerformanceEntryCreateWithoutVisitorInput, PerformanceEntryUncheckedCreateWithoutVisitorInput>
  }

  export type PerformanceEntryUpdateWithWhereUniqueWithoutVisitorInput = {
    where: PerformanceEntryWhereUniqueInput
    data: XOR<PerformanceEntryUpdateWithoutVisitorInput, PerformanceEntryUncheckedUpdateWithoutVisitorInput>
  }

  export type PerformanceEntryUpdateManyWithWhereWithoutVisitorInput = {
    where: PerformanceEntryScalarWhereInput
    data: XOR<PerformanceEntryUpdateManyMutationInput, PerformanceEntryUncheckedUpdateManyWithoutVisitorInput>
  }

  export type PerformanceEntryScalarWhereInput = {
    AND?: PerformanceEntryScalarWhereInput | PerformanceEntryScalarWhereInput[]
    OR?: PerformanceEntryScalarWhereInput[]
    NOT?: PerformanceEntryScalarWhereInput | PerformanceEntryScalarWhereInput[]
    id?: StringFilter<"PerformanceEntry"> | string
    visitorId?: StringFilter<"PerformanceEntry"> | string
    fp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    fcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    lcp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    inp?: FloatNullableFilter<"PerformanceEntry"> | number | null
    cls?: FloatNullableFilter<"PerformanceEntry"> | number | null
    createdAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
    updatedAt?: DateTimeFilter<"PerformanceEntry"> | Date | string
  }

  export type ErrorEntryUpsertWithWhereUniqueWithoutVisitorInput = {
    where: ErrorEntryWhereUniqueInput
    update: XOR<ErrorEntryUpdateWithoutVisitorInput, ErrorEntryUncheckedUpdateWithoutVisitorInput>
    create: XOR<ErrorEntryCreateWithoutVisitorInput, ErrorEntryUncheckedCreateWithoutVisitorInput>
  }

  export type ErrorEntryUpdateWithWhereUniqueWithoutVisitorInput = {
    where: ErrorEntryWhereUniqueInput
    data: XOR<ErrorEntryUpdateWithoutVisitorInput, ErrorEntryUncheckedUpdateWithoutVisitorInput>
  }

  export type ErrorEntryUpdateManyWithWhereWithoutVisitorInput = {
    where: ErrorEntryScalarWhereInput
    data: XOR<ErrorEntryUpdateManyMutationInput, ErrorEntryUncheckedUpdateManyWithoutVisitorInput>
  }

  export type ErrorEntryScalarWhereInput = {
    AND?: ErrorEntryScalarWhereInput | ErrorEntryScalarWhereInput[]
    OR?: ErrorEntryScalarWhereInput[]
    NOT?: ErrorEntryScalarWhereInput | ErrorEntryScalarWhereInput[]
    id?: StringFilter<"ErrorEntry"> | string
    visitorId?: StringFilter<"ErrorEntry"> | string
    error?: StringFilter<"ErrorEntry"> | string
    message?: StringNullableFilter<"ErrorEntry"> | string | null
    stack?: StringNullableFilter<"ErrorEntry"> | string | null
    url?: StringNullableFilter<"ErrorEntry"> | string | null
    createdAt?: DateTimeFilter<"ErrorEntry"> | Date | string
    updatedAt?: DateTimeFilter<"ErrorEntry"> | Date | string
  }

  export type VisitorCreateWithoutPageViewsInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    user?: UserCreateNestedOneWithoutVisitorsInput
    trackEvents?: TrackEventCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutPageViewsInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    trackEvents?: TrackEventUncheckedCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutPageViewsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutPageViewsInput, VisitorUncheckedCreateWithoutPageViewsInput>
  }

  export type VisitorUpsertWithoutPageViewsInput = {
    update: XOR<VisitorUpdateWithoutPageViewsInput, VisitorUncheckedUpdateWithoutPageViewsInput>
    create: XOR<VisitorCreateWithoutPageViewsInput, VisitorUncheckedCreateWithoutPageViewsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutPageViewsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutPageViewsInput, VisitorUncheckedUpdateWithoutPageViewsInput>
  }

  export type VisitorUpdateWithoutPageViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutVisitorsNestedInput
    trackEvents?: TrackEventUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutPageViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    trackEvents?: TrackEventUncheckedUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateWithoutTrackEventsInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    user?: UserCreateNestedOneWithoutVisitorsInput
    pageViews?: PageViewCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutTrackEventsInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewUncheckedCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutTrackEventsInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutTrackEventsInput, VisitorUncheckedCreateWithoutTrackEventsInput>
  }

  export type VisitorUpsertWithoutTrackEventsInput = {
    update: XOR<VisitorUpdateWithoutTrackEventsInput, VisitorUncheckedUpdateWithoutTrackEventsInput>
    create: XOR<VisitorCreateWithoutTrackEventsInput, VisitorUncheckedCreateWithoutTrackEventsInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutTrackEventsInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutTrackEventsInput, VisitorUncheckedUpdateWithoutTrackEventsInput>
  }

  export type VisitorUpdateWithoutTrackEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutVisitorsNestedInput
    pageViews?: PageViewUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutTrackEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUncheckedUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateWithoutPerformanceEntriesInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    user?: UserCreateNestedOneWithoutVisitorsInput
    pageViews?: PageViewCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutPerformanceEntriesInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewUncheckedCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventUncheckedCreateNestedManyWithoutVisitorInput
    errorEntries?: ErrorEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutPerformanceEntriesInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutPerformanceEntriesInput, VisitorUncheckedCreateWithoutPerformanceEntriesInput>
  }

  export type VisitorUpsertWithoutPerformanceEntriesInput = {
    update: XOR<VisitorUpdateWithoutPerformanceEntriesInput, VisitorUncheckedUpdateWithoutPerformanceEntriesInput>
    create: XOR<VisitorCreateWithoutPerformanceEntriesInput, VisitorUncheckedCreateWithoutPerformanceEntriesInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutPerformanceEntriesInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutPerformanceEntriesInput, VisitorUncheckedUpdateWithoutPerformanceEntriesInput>
  }

  export type VisitorUpdateWithoutPerformanceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutVisitorsNestedInput
    pageViews?: PageViewUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutPerformanceEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUncheckedUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUncheckedUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorCreateWithoutErrorEntriesInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    user?: UserCreateNestedOneWithoutVisitorsInput
    pageViews?: PageViewCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryCreateNestedManyWithoutVisitorInput
  }

  export type VisitorUncheckedCreateWithoutErrorEntriesInput = {
    id?: string
    anonymousId: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
    pageViews?: PageViewUncheckedCreateNestedManyWithoutVisitorInput
    trackEvents?: TrackEventUncheckedCreateNestedManyWithoutVisitorInput
    performanceEntries?: PerformanceEntryUncheckedCreateNestedManyWithoutVisitorInput
  }

  export type VisitorCreateOrConnectWithoutErrorEntriesInput = {
    where: VisitorWhereUniqueInput
    create: XOR<VisitorCreateWithoutErrorEntriesInput, VisitorUncheckedCreateWithoutErrorEntriesInput>
  }

  export type VisitorUpsertWithoutErrorEntriesInput = {
    update: XOR<VisitorUpdateWithoutErrorEntriesInput, VisitorUncheckedUpdateWithoutErrorEntriesInput>
    create: XOR<VisitorCreateWithoutErrorEntriesInput, VisitorUncheckedCreateWithoutErrorEntriesInput>
    where?: VisitorWhereInput
  }

  export type VisitorUpdateToOneWithWhereWithoutErrorEntriesInput = {
    where?: VisitorWhereInput
    data: XOR<VisitorUpdateWithoutErrorEntriesInput, VisitorUncheckedUpdateWithoutErrorEntriesInput>
  }

  export type VisitorUpdateWithoutErrorEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutVisitorsNestedInput
    pageViews?: PageViewUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutErrorEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUncheckedUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUncheckedUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type UserCreateWithoutWordBookRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordCreateNestedManyWithoutUserInput
    visitors?: VisitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordBookRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutUserInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordBookRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordBookRecordsInput, UserUncheckedCreateWithoutWordBookRecordsInput>
  }

  export type WordBookCreateWithoutWordBookRecordsInput = {
    id?: string
    word: string
    phonetic?: string | null
    definition?: string | null
    translation?: string | null
    pos?: string | null
    collins?: string | null
    oxford?: string | null
    tag?: string | null
    bnc?: string | null
    frq?: string | null
    exchange?: string | null
    gk?: boolean | null
    zk?: boolean | null
    gre?: boolean | null
    toefl?: boolean | null
    ielts?: boolean | null
    cet6?: boolean | null
    cet4?: boolean | null
    ky?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordBookUncheckedCreateWithoutWordBookRecordsInput = {
    id?: string
    word: string
    phonetic?: string | null
    definition?: string | null
    translation?: string | null
    pos?: string | null
    collins?: string | null
    oxford?: string | null
    tag?: string | null
    bnc?: string | null
    frq?: string | null
    exchange?: string | null
    gk?: boolean | null
    zk?: boolean | null
    gre?: boolean | null
    toefl?: boolean | null
    ielts?: boolean | null
    cet6?: boolean | null
    cet4?: boolean | null
    ky?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WordBookCreateOrConnectWithoutWordBookRecordsInput = {
    where: WordBookWhereUniqueInput
    create: XOR<WordBookCreateWithoutWordBookRecordsInput, WordBookUncheckedCreateWithoutWordBookRecordsInput>
  }

  export type UserUpsertWithoutWordBookRecordsInput = {
    update: XOR<UserUpdateWithoutWordBookRecordsInput, UserUncheckedUpdateWithoutWordBookRecordsInput>
    create: XOR<UserCreateWithoutWordBookRecordsInput, UserUncheckedCreateWithoutWordBookRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWordBookRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWordBookRecordsInput, UserUncheckedUpdateWithoutWordBookRecordsInput>
  }

  export type UserUpdateWithoutWordBookRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUpdateManyWithoutUserNestedInput
    visitors?: VisitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordBookRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutUserNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WordBookUpsertWithoutWordBookRecordsInput = {
    update: XOR<WordBookUpdateWithoutWordBookRecordsInput, WordBookUncheckedUpdateWithoutWordBookRecordsInput>
    create: XOR<WordBookCreateWithoutWordBookRecordsInput, WordBookUncheckedCreateWithoutWordBookRecordsInput>
    where?: WordBookWhereInput
  }

  export type WordBookUpdateToOneWithWhereWithoutWordBookRecordsInput = {
    where?: WordBookWhereInput
    data: XOR<WordBookUpdateWithoutWordBookRecordsInput, WordBookUncheckedUpdateWithoutWordBookRecordsInput>
  }

  export type WordBookUpdateWithoutWordBookRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookUncheckedUpdateWithoutWordBookRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    phonetic?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: NullableStringFieldUpdateOperationsInput | string | null
    translation?: NullableStringFieldUpdateOperationsInput | string | null
    pos?: NullableStringFieldUpdateOperationsInput | string | null
    collins?: NullableStringFieldUpdateOperationsInput | string | null
    oxford?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    bnc?: NullableStringFieldUpdateOperationsInput | string | null
    frq?: NullableStringFieldUpdateOperationsInput | string | null
    exchange?: NullableStringFieldUpdateOperationsInput | string | null
    gk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    zk?: NullableBoolFieldUpdateOperationsInput | boolean | null
    gre?: NullableBoolFieldUpdateOperationsInput | boolean | null
    toefl?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ielts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet6?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cet4?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ky?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookRecordCreateWithoutWordInput = {
    id?: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWordBookRecordsInput
  }

  export type WordBookRecordUncheckedCreateWithoutWordInput = {
    id?: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WordBookRecordCreateOrConnectWithoutWordInput = {
    where: WordBookRecordWhereUniqueInput
    create: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput>
  }

  export type WordBookRecordCreateManyWordInputEnvelope = {
    data: WordBookRecordCreateManyWordInput | WordBookRecordCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type WordBookRecordUpsertWithWhereUniqueWithoutWordInput = {
    where: WordBookRecordWhereUniqueInput
    update: XOR<WordBookRecordUpdateWithoutWordInput, WordBookRecordUncheckedUpdateWithoutWordInput>
    create: XOR<WordBookRecordCreateWithoutWordInput, WordBookRecordUncheckedCreateWithoutWordInput>
  }

  export type WordBookRecordUpdateWithWhereUniqueWithoutWordInput = {
    where: WordBookRecordWhereUniqueInput
    data: XOR<WordBookRecordUpdateWithoutWordInput, WordBookRecordUncheckedUpdateWithoutWordInput>
  }

  export type WordBookRecordUpdateManyWithWhereWithoutWordInput = {
    where: WordBookRecordScalarWhereInput
    data: XOR<WordBookRecordUpdateManyMutationInput, WordBookRecordUncheckedUpdateManyWithoutWordInput>
  }

  export type UserCreateWithoutPaymentRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordCreateNestedManyWithoutUserInput
    visitors?: VisitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordUncheckedCreateNestedManyWithoutUserInput
    courseRecords?: CourseRecordUncheckedCreateNestedManyWithoutUserInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
  }

  export type CourseRecordCreateWithoutPaymentRecordInput = {
    id?: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCourseRecordsInput
    course: CourseCreateNestedOneWithoutCourseRecordsInput
  }

  export type CourseRecordUncheckedCreateWithoutPaymentRecordInput = {
    id?: string
    userId: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRecordCreateOrConnectWithoutPaymentRecordInput = {
    where: CourseRecordWhereUniqueInput
    create: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput>
  }

  export type CourseRecordCreateManyPaymentRecordInputEnvelope = {
    data: CourseRecordCreateManyPaymentRecordInput | CourseRecordCreateManyPaymentRecordInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentRecordsInput = {
    update: XOR<UserUpdateWithoutPaymentRecordsInput, UserUncheckedUpdateWithoutPaymentRecordsInput>
    create: XOR<UserCreateWithoutPaymentRecordsInput, UserUncheckedCreateWithoutPaymentRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentRecordsInput, UserUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type UserUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUpdateManyWithoutUserNestedInput
    visitors?: VisitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUncheckedUpdateManyWithoutUserNestedInput
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutUserNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseRecordUpsertWithWhereUniqueWithoutPaymentRecordInput = {
    where: CourseRecordWhereUniqueInput
    update: XOR<CourseRecordUpdateWithoutPaymentRecordInput, CourseRecordUncheckedUpdateWithoutPaymentRecordInput>
    create: XOR<CourseRecordCreateWithoutPaymentRecordInput, CourseRecordUncheckedCreateWithoutPaymentRecordInput>
  }

  export type CourseRecordUpdateWithWhereUniqueWithoutPaymentRecordInput = {
    where: CourseRecordWhereUniqueInput
    data: XOR<CourseRecordUpdateWithoutPaymentRecordInput, CourseRecordUncheckedUpdateWithoutPaymentRecordInput>
  }

  export type CourseRecordUpdateManyWithWhereWithoutPaymentRecordInput = {
    where: CourseRecordScalarWhereInput
    data: XOR<CourseRecordUpdateManyMutationInput, CourseRecordUncheckedUpdateManyWithoutPaymentRecordInput>
  }

  export type PaymentRecordCreateWithoutCourseRecordsInput = {
    id?: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateWithoutCourseRecordsInput = {
    id?: string
    userId: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRecordCreateOrConnectWithoutCourseRecordsInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutCourseRecordsInput, PaymentRecordUncheckedCreateWithoutCourseRecordsInput>
  }

  export type UserCreateWithoutCourseRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutUserInput
    visitors?: VisitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseRecordsInput = {
    id?: string
    name: string
    email?: string | null
    phone: string
    password: string
    address?: string | null
    avatar?: string | null
    bio?: string | null
    isTimingTask?: boolean
    timingTaskTime?: string
    wordNumber?: number
    dayNumber?: number
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wordBookRecords?: WordBookRecordUncheckedCreateNestedManyWithoutUserInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutUserInput
    visitors?: VisitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseRecordsInput, UserUncheckedCreateWithoutCourseRecordsInput>
  }

  export type CourseCreateWithoutCourseRecordsInput = {
    id?: string
    name: string
    value: string
    description?: string | null
    teacher: string
    url: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateWithoutCourseRecordsInput = {
    id?: string
    name: string
    value: string
    description?: string | null
    teacher: string
    url: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutCourseRecordsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseRecordsInput, CourseUncheckedCreateWithoutCourseRecordsInput>
  }

  export type PaymentRecordUpsertWithoutCourseRecordsInput = {
    update: XOR<PaymentRecordUpdateWithoutCourseRecordsInput, PaymentRecordUncheckedUpdateWithoutCourseRecordsInput>
    create: XOR<PaymentRecordCreateWithoutCourseRecordsInput, PaymentRecordUncheckedCreateWithoutCourseRecordsInput>
    where?: PaymentRecordWhereInput
  }

  export type PaymentRecordUpdateToOneWithWhereWithoutCourseRecordsInput = {
    where?: PaymentRecordWhereInput
    data: XOR<PaymentRecordUpdateWithoutCourseRecordsInput, PaymentRecordUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type PaymentRecordUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCourseRecordsInput = {
    update: XOR<UserUpdateWithoutCourseRecordsInput, UserUncheckedUpdateWithoutCourseRecordsInput>
    create: XOR<UserCreateWithoutCourseRecordsInput, UserUncheckedCreateWithoutCourseRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseRecordsInput, UserUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type UserUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutUserNestedInput
    visitors?: VisitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isTimingTask?: BoolFieldUpdateOperationsInput | boolean
    timingTaskTime?: StringFieldUpdateOperationsInput | string
    wordNumber?: IntFieldUpdateOperationsInput | number
    dayNumber?: IntFieldUpdateOperationsInput | number
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wordBookRecords?: WordBookRecordUncheckedUpdateManyWithoutUserNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutUserNestedInput
    visitors?: VisitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCourseRecordsInput = {
    update: XOR<CourseUpdateWithoutCourseRecordsInput, CourseUncheckedUpdateWithoutCourseRecordsInput>
    create: XOR<CourseCreateWithoutCourseRecordsInput, CourseUncheckedCreateWithoutCourseRecordsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseRecordsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseRecordsInput, CourseUncheckedUpdateWithoutCourseRecordsInput>
  }

  export type CourseUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutCourseRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordCreateWithoutCourseInput = {
    id?: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecord?: PaymentRecordCreateNestedOneWithoutCourseRecordsInput
    user: UserCreateNestedOneWithoutCourseRecordsInput
  }

  export type CourseRecordUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type CourseRecordCreateOrConnectWithoutCourseInput = {
    where: CourseRecordWhereUniqueInput
    create: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput>
  }

  export type CourseRecordCreateManyCourseInputEnvelope = {
    data: CourseRecordCreateManyCourseInput | CourseRecordCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseRecordUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseRecordWhereUniqueInput
    update: XOR<CourseRecordUpdateWithoutCourseInput, CourseRecordUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseRecordCreateWithoutCourseInput, CourseRecordUncheckedCreateWithoutCourseInput>
  }

  export type CourseRecordUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseRecordWhereUniqueInput
    data: XOR<CourseRecordUpdateWithoutCourseInput, CourseRecordUncheckedUpdateWithoutCourseInput>
  }

  export type CourseRecordUpdateManyWithWhereWithoutCourseInput = {
    where: CourseRecordScalarWhereInput
    data: XOR<CourseRecordUpdateManyMutationInput, CourseRecordUncheckedUpdateManyWithoutCourseInput>
  }

  export type WordBookRecordCreateManyUserInput = {
    id?: string
    wordId: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentRecordCreateManyUserInput = {
    id?: string
    tradeNo?: string | null
    outTradeNo: string
    amount: Decimal | DecimalJsLike | number | string
    subject: string
    body: string
    tradeStatus?: $Enums.TradeStatus
    sendPayTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRecordCreateManyUserInput = {
    id?: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type VisitorCreateManyUserInput = {
    id?: string
    anonymousId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    browser?: string | null
    os?: string | null
    device?: string | null
  }

  export type WordBookRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordBookUpdateOneRequiredWithoutWordBookRecordsNestedInput
  }

  export type WordBookRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRecords?: CourseRecordUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseRecords?: CourseRecordUncheckedUpdateManyWithoutPaymentRecordNestedInput
  }

  export type PaymentRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeNo?: NullableStringFieldUpdateOperationsInput | string | null
    outTradeNo?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    tradeStatus?: EnumTradeStatusFieldUpdateOperationsInput | $Enums.TradeStatus
    sendPayTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecord?: PaymentRecordUpdateOneWithoutCourseRecordsNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseRecordsNestedInput
  }

  export type CourseRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisitorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    pageViews?: PageViewUncheckedUpdateManyWithoutVisitorNestedInput
    trackEvents?: TrackEventUncheckedUpdateManyWithoutVisitorNestedInput
    performanceEntries?: PerformanceEntryUncheckedUpdateManyWithoutVisitorNestedInput
    errorEntries?: ErrorEntryUncheckedUpdateManyWithoutVisitorNestedInput
  }

  export type VisitorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PageViewCreateManyVisitorInput = {
    id?: string
    url: string
    referrer?: string | null
    path: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrackEventCreateManyVisitorInput = {
    id?: string
    event: string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerformanceEntryCreateManyVisitorInput = {
    id?: string
    fp?: number | null
    fcp?: number | null
    lcp?: number | null
    inp?: number | null
    cls?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorEntryCreateManyVisitorInput = {
    id?: string
    error: string
    message?: string | null
    stack?: string | null
    url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    path?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackEventUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: NullableJsonNullValueInput | InputJsonValue
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceEntryUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    fp?: NullableFloatFieldUpdateOperationsInput | number | null
    fcp?: NullableFloatFieldUpdateOperationsInput | number | null
    lcp?: NullableFloatFieldUpdateOperationsInput | number | null
    inp?: NullableFloatFieldUpdateOperationsInput | number | null
    cls?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryUncheckedUpdateWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorEntryUncheckedUpdateManyWithoutVisitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordBookRecordCreateManyWordInput = {
    id?: string
    isMaster?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type WordBookRecordUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWordBookRecordsNestedInput
  }

  export type WordBookRecordUncheckedUpdateWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WordBookRecordUncheckedUpdateManyWithoutWordInput = {
    id?: StringFieldUpdateOperationsInput | string
    isMaster?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRecordCreateManyPaymentRecordInput = {
    id?: string
    userId: string
    courseId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseRecordUpdateWithoutPaymentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCourseRecordsNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseRecordsNestedInput
  }

  export type CourseRecordUncheckedUpdateWithoutPaymentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordUncheckedUpdateManyWithoutPaymentRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseRecordCreateManyCourseInput = {
    id?: string
    userId: string
    isPurchased?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentRecordId?: string | null
  }

  export type CourseRecordUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecord?: PaymentRecordUpdateOneWithoutCourseRecordsNestedInput
    user?: UserUpdateOneRequiredWithoutCourseRecordsNestedInput
  }

  export type CourseRecordUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseRecordUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isPurchased?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentRecordId?: NullableStringFieldUpdateOperationsInput | string | null
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