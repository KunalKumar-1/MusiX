
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
 * Model Streams
 * 
 */
export type Streams = $Result.DefaultSelection<Prisma.$StreamsPayload>
/**
 * Model Upvotes
 * 
 */
export type Upvotes = $Result.DefaultSelection<Prisma.$UpvotesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StreamType: {
  Spotify: 'Spotify',
  Youtube: 'Youtube'
};

export type StreamType = (typeof StreamType)[keyof typeof StreamType]


export const Provider: {
  Google: 'Google'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const Role: {
  Streamer: 'Streamer',
  EndUser: 'EndUser'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type StreamType = $Enums.StreamType

export const StreamType: typeof $Enums.StreamType

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * `prisma.streams`: Exposes CRUD operations for the **Streams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.streams.findMany()
    * ```
    */
  get streams(): Prisma.StreamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.upvotes`: Exposes CRUD operations for the **Upvotes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Upvotes
    * const upvotes = await prisma.upvotes.findMany()
    * ```
    */
  get upvotes(): Prisma.UpvotesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Streams: 'Streams',
    Upvotes: 'Upvotes'
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
      modelProps: "user" | "streams" | "upvotes"
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
      Streams: {
        payload: Prisma.$StreamsPayload<ExtArgs>
        fields: Prisma.StreamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          findFirst: {
            args: Prisma.StreamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          findMany: {
            args: Prisma.StreamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>[]
          }
          create: {
            args: Prisma.StreamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          createMany: {
            args: Prisma.StreamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>[]
          }
          delete: {
            args: Prisma.StreamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          update: {
            args: Prisma.StreamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          deleteMany: {
            args: Prisma.StreamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>[]
          }
          upsert: {
            args: Prisma.StreamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamsPayload>
          }
          aggregate: {
            args: Prisma.StreamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreams>
          }
          groupBy: {
            args: Prisma.StreamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamsCountArgs<ExtArgs>
            result: $Utils.Optional<StreamsCountAggregateOutputType> | number
          }
        }
      }
      Upvotes: {
        payload: Prisma.$UpvotesPayload<ExtArgs>
        fields: Prisma.UpvotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpvotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpvotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          findFirst: {
            args: Prisma.UpvotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpvotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          findMany: {
            args: Prisma.UpvotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>[]
          }
          create: {
            args: Prisma.UpvotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          createMany: {
            args: Prisma.UpvotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpvotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>[]
          }
          delete: {
            args: Prisma.UpvotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          update: {
            args: Prisma.UpvotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          deleteMany: {
            args: Prisma.UpvotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpvotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpvotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>[]
          }
          upsert: {
            args: Prisma.UpvotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpvotesPayload>
          }
          aggregate: {
            args: Prisma.UpvotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpvotes>
          }
          groupBy: {
            args: Prisma.UpvotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpvotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpvotesCountArgs<ExtArgs>
            result: $Utils.Optional<UpvotesCountAggregateOutputType> | number
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
    streams?: StreamsOmit
    upvotes?: UpvotesOmit
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
    streams: number
    upvotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | UserCountOutputTypeCountStreamsArgs
    upvotes?: boolean | UserCountOutputTypeCountUpvotesArgs
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
  export type UserCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvotesWhereInput
  }


  /**
   * Count Type StreamsCountOutputType
   */

  export type StreamsCountOutputType = {
    upvote: number
  }

  export type StreamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvote?: boolean | StreamsCountOutputTypeCountUpvoteArgs
  }

  // Custom InputTypes
  /**
   * StreamsCountOutputType without action
   */
  export type StreamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamsCountOutputType
     */
    select?: StreamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamsCountOutputType without action
   */
  export type StreamsCountOutputTypeCountUpvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvotesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    provider: $Enums.Provider | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    provider: $Enums.Provider | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    provider: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    provider?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    provider?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    provider?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
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
    avatar?: boolean
    provider?: boolean
    role?: boolean
    streams?: boolean | User$streamsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    provider?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    provider?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    provider?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "avatar" | "provider" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | User$streamsArgs<ExtArgs>
    upvotes?: boolean | User$upvotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      streams: Prisma.$StreamsPayload<ExtArgs>[]
      upvotes: Prisma.$UpvotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      avatar: string
      provider: $Enums.Provider
      role: $Enums.Role
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
    streams<T extends User$streamsArgs<ExtArgs> = {}>(args?: Subset<T, User$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    upvotes<T extends User$upvotesArgs<ExtArgs> = {}>(args?: Subset<T, User$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly avatar: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.streams
   */
  export type User$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    where?: StreamsWhereInput
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    cursor?: StreamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * User.upvotes
   */
  export type User$upvotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    where?: UpvotesWhereInput
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    cursor?: UpvotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvotesScalarFieldEnum | UpvotesScalarFieldEnum[]
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
   * Model Streams
   */

  export type AggregateStreams = {
    _count: StreamsCountAggregateOutputType | null
    _min: StreamsMinAggregateOutputType | null
    _max: StreamsMaxAggregateOutputType | null
  }

  export type StreamsMinAggregateOutputType = {
    id: string | null
    type: $Enums.StreamType | null
    url: string | null
    extractedId: string | null
    title: string | null
    smallImage: string | null
    bigImage: string | null
    active: boolean | null
    userId: string | null
  }

  export type StreamsMaxAggregateOutputType = {
    id: string | null
    type: $Enums.StreamType | null
    url: string | null
    extractedId: string | null
    title: string | null
    smallImage: string | null
    bigImage: string | null
    active: boolean | null
    userId: string | null
  }

  export type StreamsCountAggregateOutputType = {
    id: number
    type: number
    url: number
    extractedId: number
    title: number
    smallImage: number
    bigImage: number
    active: number
    userId: number
    _all: number
  }


  export type StreamsMinAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    title?: true
    smallImage?: true
    bigImage?: true
    active?: true
    userId?: true
  }

  export type StreamsMaxAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    title?: true
    smallImage?: true
    bigImage?: true
    active?: true
    userId?: true
  }

  export type StreamsCountAggregateInputType = {
    id?: true
    type?: true
    url?: true
    extractedId?: true
    title?: true
    smallImage?: true
    bigImage?: true
    active?: true
    userId?: true
    _all?: true
  }

  export type StreamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to aggregate.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamsMaxAggregateInputType
  }

  export type GetStreamsAggregateType<T extends StreamsAggregateArgs> = {
        [P in keyof T & keyof AggregateStreams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreams[P]>
      : GetScalarType<T[P], AggregateStreams[P]>
  }




  export type StreamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamsWhereInput
    orderBy?: StreamsOrderByWithAggregationInput | StreamsOrderByWithAggregationInput[]
    by: StreamsScalarFieldEnum[] | StreamsScalarFieldEnum
    having?: StreamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamsCountAggregateInputType | true
    _min?: StreamsMinAggregateInputType
    _max?: StreamsMaxAggregateInputType
  }

  export type StreamsGroupByOutputType = {
    id: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title: string
    smallImage: string
    bigImage: string
    active: boolean
    userId: string
    _count: StreamsCountAggregateOutputType | null
    _min: StreamsMinAggregateOutputType | null
    _max: StreamsMaxAggregateOutputType | null
  }

  type GetStreamsGroupByPayload<T extends StreamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamsGroupByOutputType[P]>
            : GetScalarType<T[P], StreamsGroupByOutputType[P]>
        }
      >
    >


  export type StreamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    title?: boolean
    smallImage?: boolean
    bigImage?: boolean
    active?: boolean
    userId?: boolean
    upvote?: boolean | Streams$upvoteArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StreamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streams"]>

  export type StreamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    title?: boolean
    smallImage?: boolean
    bigImage?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streams"]>

  export type StreamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    title?: boolean
    smallImage?: boolean
    bigImage?: boolean
    active?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streams"]>

  export type StreamsSelectScalar = {
    id?: boolean
    type?: boolean
    url?: boolean
    extractedId?: boolean
    title?: boolean
    smallImage?: boolean
    bigImage?: boolean
    active?: boolean
    userId?: boolean
  }

  export type StreamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "url" | "extractedId" | "title" | "smallImage" | "bigImage" | "active" | "userId", ExtArgs["result"]["streams"]>
  export type StreamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upvote?: boolean | Streams$upvoteArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StreamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streams"
    objects: {
      upvote: Prisma.$UpvotesPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.StreamType
      url: string
      extractedId: string
      title: string
      smallImage: string
      bigImage: string
      active: boolean
      userId: string
    }, ExtArgs["result"]["streams"]>
    composites: {}
  }

  type StreamsGetPayload<S extends boolean | null | undefined | StreamsDefaultArgs> = $Result.GetResult<Prisma.$StreamsPayload, S>

  type StreamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamsCountAggregateInputType | true
    }

  export interface StreamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streams'], meta: { name: 'Streams' } }
    /**
     * Find zero or one Streams that matches the filter.
     * @param {StreamsFindUniqueArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamsFindUniqueArgs>(args: SelectSubset<T, StreamsFindUniqueArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamsFindUniqueOrThrowArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamsFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindFirstArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamsFindFirstArgs>(args?: SelectSubset<T, StreamsFindFirstArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindFirstOrThrowArgs} args - Arguments to find a Streams
     * @example
     * // Get one Streams
     * const streams = await prisma.streams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamsFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.streams.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.streams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamsWithIdOnly = await prisma.streams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamsFindManyArgs>(args?: SelectSubset<T, StreamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streams.
     * @param {StreamsCreateArgs} args - Arguments to create a Streams.
     * @example
     * // Create one Streams
     * const Streams = await prisma.streams.create({
     *   data: {
     *     // ... data to create a Streams
     *   }
     * })
     * 
     */
    create<T extends StreamsCreateArgs>(args: SelectSubset<T, StreamsCreateArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {StreamsCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const streams = await prisma.streams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamsCreateManyArgs>(args?: SelectSubset<T, StreamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {StreamsCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const streams = await prisma.streams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamsWithIdOnly = await prisma.streams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamsCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streams.
     * @param {StreamsDeleteArgs} args - Arguments to delete one Streams.
     * @example
     * // Delete one Streams
     * const Streams = await prisma.streams.delete({
     *   where: {
     *     // ... filter to delete one Streams
     *   }
     * })
     * 
     */
    delete<T extends StreamsDeleteArgs>(args: SelectSubset<T, StreamsDeleteArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streams.
     * @param {StreamsUpdateArgs} args - Arguments to update one Streams.
     * @example
     * // Update one Streams
     * const streams = await prisma.streams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamsUpdateArgs>(args: SelectSubset<T, StreamsUpdateArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {StreamsDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.streams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamsDeleteManyArgs>(args?: SelectSubset<T, StreamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const streams = await prisma.streams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamsUpdateManyArgs>(args: SelectSubset<T, StreamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {StreamsUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const streams = await prisma.streams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `id`
     * const streamsWithIdOnly = await prisma.streams.updateManyAndReturn({
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
    updateManyAndReturn<T extends StreamsUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streams.
     * @param {StreamsUpsertArgs} args - Arguments to update or create a Streams.
     * @example
     * // Update or create a Streams
     * const streams = await prisma.streams.upsert({
     *   create: {
     *     // ... data to create a Streams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streams we want to update
     *   }
     * })
     */
    upsert<T extends StreamsUpsertArgs>(args: SelectSubset<T, StreamsUpsertArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.streams.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamsCountArgs>(
      args?: Subset<T, StreamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreamsAggregateArgs>(args: Subset<T, StreamsAggregateArgs>): Prisma.PrismaPromise<GetStreamsAggregateType<T>>

    /**
     * Group by Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamsGroupByArgs} args - Group by arguments.
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
      T extends StreamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamsGroupByArgs['orderBy'] }
        : { orderBy?: StreamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streams model
   */
  readonly fields: StreamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    upvote<T extends Streams$upvoteArgs<ExtArgs> = {}>(args?: Subset<T, Streams$upvoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Streams model
   */
  interface StreamsFieldRefs {
    readonly id: FieldRef<"Streams", 'String'>
    readonly type: FieldRef<"Streams", 'StreamType'>
    readonly url: FieldRef<"Streams", 'String'>
    readonly extractedId: FieldRef<"Streams", 'String'>
    readonly title: FieldRef<"Streams", 'String'>
    readonly smallImage: FieldRef<"Streams", 'String'>
    readonly bigImage: FieldRef<"Streams", 'String'>
    readonly active: FieldRef<"Streams", 'Boolean'>
    readonly userId: FieldRef<"Streams", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Streams findUnique
   */
  export type StreamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams findUniqueOrThrow
   */
  export type StreamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams findFirst
   */
  export type StreamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams findFirstOrThrow
   */
  export type StreamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams findMany
   */
  export type StreamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamsOrderByWithRelationInput | StreamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    distinct?: StreamsScalarFieldEnum | StreamsScalarFieldEnum[]
  }

  /**
   * Streams create
   */
  export type StreamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Streams.
     */
    data: XOR<StreamsCreateInput, StreamsUncheckedCreateInput>
  }

  /**
   * Streams createMany
   */
  export type StreamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamsCreateManyInput | StreamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streams createManyAndReturn
   */
  export type StreamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * The data used to create many Streams.
     */
    data: StreamsCreateManyInput | StreamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streams update
   */
  export type StreamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Streams.
     */
    data: XOR<StreamsUpdateInput, StreamsUncheckedUpdateInput>
    /**
     * Choose, which Streams to update.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams updateMany
   */
  export type StreamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamsWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
  }

  /**
   * Streams updateManyAndReturn
   */
  export type StreamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamsWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Streams upsert
   */
  export type StreamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Streams to update in case it exists.
     */
    where: StreamsWhereUniqueInput
    /**
     * In case the Streams found by the `where` argument doesn't exist, create a new Streams with this data.
     */
    create: XOR<StreamsCreateInput, StreamsUncheckedCreateInput>
    /**
     * In case the Streams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamsUpdateInput, StreamsUncheckedUpdateInput>
  }

  /**
   * Streams delete
   */
  export type StreamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
    /**
     * Filter which Streams to delete.
     */
    where: StreamsWhereUniqueInput
  }

  /**
   * Streams deleteMany
   */
  export type StreamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamsWhereInput
    /**
     * Limit how many Streams to delete.
     */
    limit?: number
  }

  /**
   * Streams.upvote
   */
  export type Streams$upvoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    where?: UpvotesWhereInput
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    cursor?: UpvotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpvotesScalarFieldEnum | UpvotesScalarFieldEnum[]
  }

  /**
   * Streams without action
   */
  export type StreamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streams
     */
    select?: StreamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streams
     */
    omit?: StreamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamsInclude<ExtArgs> | null
  }


  /**
   * Model Upvotes
   */

  export type AggregateUpvotes = {
    _count: UpvotesCountAggregateOutputType | null
    _min: UpvotesMinAggregateOutputType | null
    _max: UpvotesMaxAggregateOutputType | null
  }

  export type UpvotesMinAggregateOutputType = {
    id: string | null
    streamId: string | null
    userId: string | null
  }

  export type UpvotesMaxAggregateOutputType = {
    id: string | null
    streamId: string | null
    userId: string | null
  }

  export type UpvotesCountAggregateOutputType = {
    id: number
    streamId: number
    userId: number
    _all: number
  }


  export type UpvotesMinAggregateInputType = {
    id?: true
    streamId?: true
    userId?: true
  }

  export type UpvotesMaxAggregateInputType = {
    id?: true
    streamId?: true
    userId?: true
  }

  export type UpvotesCountAggregateInputType = {
    id?: true
    streamId?: true
    userId?: true
    _all?: true
  }

  export type UpvotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvotes to aggregate.
     */
    where?: UpvotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpvotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Upvotes
    **/
    _count?: true | UpvotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpvotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpvotesMaxAggregateInputType
  }

  export type GetUpvotesAggregateType<T extends UpvotesAggregateArgs> = {
        [P in keyof T & keyof AggregateUpvotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpvotes[P]>
      : GetScalarType<T[P], AggregateUpvotes[P]>
  }




  export type UpvotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpvotesWhereInput
    orderBy?: UpvotesOrderByWithAggregationInput | UpvotesOrderByWithAggregationInput[]
    by: UpvotesScalarFieldEnum[] | UpvotesScalarFieldEnum
    having?: UpvotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpvotesCountAggregateInputType | true
    _min?: UpvotesMinAggregateInputType
    _max?: UpvotesMaxAggregateInputType
  }

  export type UpvotesGroupByOutputType = {
    id: string
    streamId: string
    userId: string
    _count: UpvotesCountAggregateOutputType | null
    _min: UpvotesMinAggregateOutputType | null
    _max: UpvotesMaxAggregateOutputType | null
  }

  type GetUpvotesGroupByPayload<T extends UpvotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpvotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpvotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpvotesGroupByOutputType[P]>
            : GetScalarType<T[P], UpvotesGroupByOutputType[P]>
        }
      >
    >


  export type UpvotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    userId?: boolean
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvotes"]>

  export type UpvotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    userId?: boolean
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvotes"]>

  export type UpvotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamId?: boolean
    userId?: boolean
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["upvotes"]>

  export type UpvotesSelectScalar = {
    id?: boolean
    streamId?: boolean
    userId?: boolean
  }

  export type UpvotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streamId" | "userId", ExtArgs["result"]["upvotes"]>
  export type UpvotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpvotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UpvotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UpvotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Upvotes"
    objects: {
      stream: Prisma.$StreamsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      streamId: string
      userId: string
    }, ExtArgs["result"]["upvotes"]>
    composites: {}
  }

  type UpvotesGetPayload<S extends boolean | null | undefined | UpvotesDefaultArgs> = $Result.GetResult<Prisma.$UpvotesPayload, S>

  type UpvotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpvotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpvotesCountAggregateInputType | true
    }

  export interface UpvotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Upvotes'], meta: { name: 'Upvotes' } }
    /**
     * Find zero or one Upvotes that matches the filter.
     * @param {UpvotesFindUniqueArgs} args - Arguments to find a Upvotes
     * @example
     * // Get one Upvotes
     * const upvotes = await prisma.upvotes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpvotesFindUniqueArgs>(args: SelectSubset<T, UpvotesFindUniqueArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Upvotes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpvotesFindUniqueOrThrowArgs} args - Arguments to find a Upvotes
     * @example
     * // Get one Upvotes
     * const upvotes = await prisma.upvotes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpvotesFindUniqueOrThrowArgs>(args: SelectSubset<T, UpvotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesFindFirstArgs} args - Arguments to find a Upvotes
     * @example
     * // Get one Upvotes
     * const upvotes = await prisma.upvotes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpvotesFindFirstArgs>(args?: SelectSubset<T, UpvotesFindFirstArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Upvotes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesFindFirstOrThrowArgs} args - Arguments to find a Upvotes
     * @example
     * // Get one Upvotes
     * const upvotes = await prisma.upvotes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpvotesFindFirstOrThrowArgs>(args?: SelectSubset<T, UpvotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Upvotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Upvotes
     * const upvotes = await prisma.upvotes.findMany()
     * 
     * // Get first 10 Upvotes
     * const upvotes = await prisma.upvotes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const upvotesWithIdOnly = await prisma.upvotes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpvotesFindManyArgs>(args?: SelectSubset<T, UpvotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Upvotes.
     * @param {UpvotesCreateArgs} args - Arguments to create a Upvotes.
     * @example
     * // Create one Upvotes
     * const Upvotes = await prisma.upvotes.create({
     *   data: {
     *     // ... data to create a Upvotes
     *   }
     * })
     * 
     */
    create<T extends UpvotesCreateArgs>(args: SelectSubset<T, UpvotesCreateArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Upvotes.
     * @param {UpvotesCreateManyArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvotes = await prisma.upvotes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpvotesCreateManyArgs>(args?: SelectSubset<T, UpvotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Upvotes and returns the data saved in the database.
     * @param {UpvotesCreateManyAndReturnArgs} args - Arguments to create many Upvotes.
     * @example
     * // Create many Upvotes
     * const upvotes = await prisma.upvotes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Upvotes and only return the `id`
     * const upvotesWithIdOnly = await prisma.upvotes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpvotesCreateManyAndReturnArgs>(args?: SelectSubset<T, UpvotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Upvotes.
     * @param {UpvotesDeleteArgs} args - Arguments to delete one Upvotes.
     * @example
     * // Delete one Upvotes
     * const Upvotes = await prisma.upvotes.delete({
     *   where: {
     *     // ... filter to delete one Upvotes
     *   }
     * })
     * 
     */
    delete<T extends UpvotesDeleteArgs>(args: SelectSubset<T, UpvotesDeleteArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Upvotes.
     * @param {UpvotesUpdateArgs} args - Arguments to update one Upvotes.
     * @example
     * // Update one Upvotes
     * const upvotes = await prisma.upvotes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpvotesUpdateArgs>(args: SelectSubset<T, UpvotesUpdateArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Upvotes.
     * @param {UpvotesDeleteManyArgs} args - Arguments to filter Upvotes to delete.
     * @example
     * // Delete a few Upvotes
     * const { count } = await prisma.upvotes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpvotesDeleteManyArgs>(args?: SelectSubset<T, UpvotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Upvotes
     * const upvotes = await prisma.upvotes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpvotesUpdateManyArgs>(args: SelectSubset<T, UpvotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Upvotes and returns the data updated in the database.
     * @param {UpvotesUpdateManyAndReturnArgs} args - Arguments to update many Upvotes.
     * @example
     * // Update many Upvotes
     * const upvotes = await prisma.upvotes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Upvotes and only return the `id`
     * const upvotesWithIdOnly = await prisma.upvotes.updateManyAndReturn({
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
    updateManyAndReturn<T extends UpvotesUpdateManyAndReturnArgs>(args: SelectSubset<T, UpvotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Upvotes.
     * @param {UpvotesUpsertArgs} args - Arguments to update or create a Upvotes.
     * @example
     * // Update or create a Upvotes
     * const upvotes = await prisma.upvotes.upsert({
     *   create: {
     *     // ... data to create a Upvotes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Upvotes we want to update
     *   }
     * })
     */
    upsert<T extends UpvotesUpsertArgs>(args: SelectSubset<T, UpvotesUpsertArgs<ExtArgs>>): Prisma__UpvotesClient<$Result.GetResult<Prisma.$UpvotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesCountArgs} args - Arguments to filter Upvotes to count.
     * @example
     * // Count the number of Upvotes
     * const count = await prisma.upvotes.count({
     *   where: {
     *     // ... the filter for the Upvotes we want to count
     *   }
     * })
    **/
    count<T extends UpvotesCountArgs>(
      args?: Subset<T, UpvotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpvotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpvotesAggregateArgs>(args: Subset<T, UpvotesAggregateArgs>): Prisma.PrismaPromise<GetUpvotesAggregateType<T>>

    /**
     * Group by Upvotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpvotesGroupByArgs} args - Group by arguments.
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
      T extends UpvotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpvotesGroupByArgs['orderBy'] }
        : { orderBy?: UpvotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UpvotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpvotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Upvotes model
   */
  readonly fields: UpvotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Upvotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpvotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stream<T extends StreamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamsDefaultArgs<ExtArgs>>): Prisma__StreamsClient<$Result.GetResult<Prisma.$StreamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Upvotes model
   */
  interface UpvotesFieldRefs {
    readonly id: FieldRef<"Upvotes", 'String'>
    readonly streamId: FieldRef<"Upvotes", 'String'>
    readonly userId: FieldRef<"Upvotes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Upvotes findUnique
   */
  export type UpvotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where: UpvotesWhereUniqueInput
  }

  /**
   * Upvotes findUniqueOrThrow
   */
  export type UpvotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where: UpvotesWhereUniqueInput
  }

  /**
   * Upvotes findFirst
   */
  export type UpvotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvotesScalarFieldEnum | UpvotesScalarFieldEnum[]
  }

  /**
   * Upvotes findFirstOrThrow
   */
  export type UpvotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Upvotes.
     */
    cursor?: UpvotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Upvotes.
     */
    distinct?: UpvotesScalarFieldEnum | UpvotesScalarFieldEnum[]
  }

  /**
   * Upvotes findMany
   */
  export type UpvotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter, which Upvotes to fetch.
     */
    where?: UpvotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Upvotes to fetch.
     */
    orderBy?: UpvotesOrderByWithRelationInput | UpvotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Upvotes.
     */
    cursor?: UpvotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Upvotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Upvotes.
     */
    skip?: number
    distinct?: UpvotesScalarFieldEnum | UpvotesScalarFieldEnum[]
  }

  /**
   * Upvotes create
   */
  export type UpvotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Upvotes.
     */
    data: XOR<UpvotesCreateInput, UpvotesUncheckedCreateInput>
  }

  /**
   * Upvotes createMany
   */
  export type UpvotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Upvotes.
     */
    data: UpvotesCreateManyInput | UpvotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Upvotes createManyAndReturn
   */
  export type UpvotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * The data used to create many Upvotes.
     */
    data: UpvotesCreateManyInput | UpvotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvotes update
   */
  export type UpvotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Upvotes.
     */
    data: XOR<UpvotesUpdateInput, UpvotesUncheckedUpdateInput>
    /**
     * Choose, which Upvotes to update.
     */
    where: UpvotesWhereUniqueInput
  }

  /**
   * Upvotes updateMany
   */
  export type UpvotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvotesUpdateManyMutationInput, UpvotesUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvotesWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
  }

  /**
   * Upvotes updateManyAndReturn
   */
  export type UpvotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * The data used to update Upvotes.
     */
    data: XOR<UpvotesUpdateManyMutationInput, UpvotesUncheckedUpdateManyInput>
    /**
     * Filter which Upvotes to update
     */
    where?: UpvotesWhereInput
    /**
     * Limit how many Upvotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Upvotes upsert
   */
  export type UpvotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Upvotes to update in case it exists.
     */
    where: UpvotesWhereUniqueInput
    /**
     * In case the Upvotes found by the `where` argument doesn't exist, create a new Upvotes with this data.
     */
    create: XOR<UpvotesCreateInput, UpvotesUncheckedCreateInput>
    /**
     * In case the Upvotes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpvotesUpdateInput, UpvotesUncheckedUpdateInput>
  }

  /**
   * Upvotes delete
   */
  export type UpvotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
    /**
     * Filter which Upvotes to delete.
     */
    where: UpvotesWhereUniqueInput
  }

  /**
   * Upvotes deleteMany
   */
  export type UpvotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Upvotes to delete
     */
    where?: UpvotesWhereInput
    /**
     * Limit how many Upvotes to delete.
     */
    limit?: number
  }

  /**
   * Upvotes without action
   */
  export type UpvotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Upvotes
     */
    select?: UpvotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Upvotes
     */
    omit?: UpvotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpvotesInclude<ExtArgs> | null
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
    avatar: 'avatar',
    provider: 'provider',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StreamsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    url: 'url',
    extractedId: 'extractedId',
    title: 'title',
    smallImage: 'smallImage',
    bigImage: 'bigImage',
    active: 'active',
    userId: 'userId'
  };

  export type StreamsScalarFieldEnum = (typeof StreamsScalarFieldEnum)[keyof typeof StreamsScalarFieldEnum]


  export const UpvotesScalarFieldEnum: {
    id: 'id',
    streamId: 'streamId',
    userId: 'userId'
  };

  export type UpvotesScalarFieldEnum = (typeof UpvotesScalarFieldEnum)[keyof typeof UpvotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'Provider[]'
   */
  export type ListEnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StreamType'
   */
  export type EnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType'>
    


  /**
   * Reference to a field of type 'StreamType[]'
   */
  export type ListEnumStreamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreamType[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    role?: EnumRoleFilter<"User"> | $Enums.Role
    streams?: StreamsListRelationFilter
    upvotes?: UpvotesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    role?: SortOrder
    streams?: StreamsOrderByRelationAggregateInput
    upvotes?: UpvotesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    role?: EnumRoleFilter<"User"> | $Enums.Role
    streams?: StreamsListRelationFilter
    upvotes?: UpvotesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type StreamsWhereInput = {
    AND?: StreamsWhereInput | StreamsWhereInput[]
    OR?: StreamsWhereInput[]
    NOT?: StreamsWhereInput | StreamsWhereInput[]
    id?: StringFilter<"Streams"> | string
    type?: EnumStreamTypeFilter<"Streams"> | $Enums.StreamType
    url?: StringFilter<"Streams"> | string
    extractedId?: StringFilter<"Streams"> | string
    title?: StringFilter<"Streams"> | string
    smallImage?: StringFilter<"Streams"> | string
    bigImage?: StringFilter<"Streams"> | string
    active?: BoolFilter<"Streams"> | boolean
    userId?: StringFilter<"Streams"> | string
    upvote?: UpvotesListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StreamsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    title?: SortOrder
    smallImage?: SortOrder
    bigImage?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    upvote?: UpvotesOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type StreamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamsWhereInput | StreamsWhereInput[]
    OR?: StreamsWhereInput[]
    NOT?: StreamsWhereInput | StreamsWhereInput[]
    type?: EnumStreamTypeFilter<"Streams"> | $Enums.StreamType
    url?: StringFilter<"Streams"> | string
    extractedId?: StringFilter<"Streams"> | string
    title?: StringFilter<"Streams"> | string
    smallImage?: StringFilter<"Streams"> | string
    bigImage?: StringFilter<"Streams"> | string
    active?: BoolFilter<"Streams"> | boolean
    userId?: StringFilter<"Streams"> | string
    upvote?: UpvotesListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StreamsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    title?: SortOrder
    smallImage?: SortOrder
    bigImage?: SortOrder
    active?: SortOrder
    userId?: SortOrder
    _count?: StreamsCountOrderByAggregateInput
    _max?: StreamsMaxOrderByAggregateInput
    _min?: StreamsMinOrderByAggregateInput
  }

  export type StreamsScalarWhereWithAggregatesInput = {
    AND?: StreamsScalarWhereWithAggregatesInput | StreamsScalarWhereWithAggregatesInput[]
    OR?: StreamsScalarWhereWithAggregatesInput[]
    NOT?: StreamsScalarWhereWithAggregatesInput | StreamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streams"> | string
    type?: EnumStreamTypeWithAggregatesFilter<"Streams"> | $Enums.StreamType
    url?: StringWithAggregatesFilter<"Streams"> | string
    extractedId?: StringWithAggregatesFilter<"Streams"> | string
    title?: StringWithAggregatesFilter<"Streams"> | string
    smallImage?: StringWithAggregatesFilter<"Streams"> | string
    bigImage?: StringWithAggregatesFilter<"Streams"> | string
    active?: BoolWithAggregatesFilter<"Streams"> | boolean
    userId?: StringWithAggregatesFilter<"Streams"> | string
  }

  export type UpvotesWhereInput = {
    AND?: UpvotesWhereInput | UpvotesWhereInput[]
    OR?: UpvotesWhereInput[]
    NOT?: UpvotesWhereInput | UpvotesWhereInput[]
    id?: StringFilter<"Upvotes"> | string
    streamId?: StringFilter<"Upvotes"> | string
    userId?: StringFilter<"Upvotes"> | string
    stream?: XOR<StreamsScalarRelationFilter, StreamsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UpvotesOrderByWithRelationInput = {
    id?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    stream?: StreamsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UpvotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    streamId_userId?: UpvotesStreamIdUserIdCompoundUniqueInput
    AND?: UpvotesWhereInput | UpvotesWhereInput[]
    OR?: UpvotesWhereInput[]
    NOT?: UpvotesWhereInput | UpvotesWhereInput[]
    streamId?: StringFilter<"Upvotes"> | string
    userId?: StringFilter<"Upvotes"> | string
    stream?: XOR<StreamsScalarRelationFilter, StreamsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "streamId_userId">

  export type UpvotesOrderByWithAggregationInput = {
    id?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
    _count?: UpvotesCountOrderByAggregateInput
    _max?: UpvotesMaxOrderByAggregateInput
    _min?: UpvotesMinOrderByAggregateInput
  }

  export type UpvotesScalarWhereWithAggregatesInput = {
    AND?: UpvotesScalarWhereWithAggregatesInput | UpvotesScalarWhereWithAggregatesInput[]
    OR?: UpvotesScalarWhereWithAggregatesInput[]
    NOT?: UpvotesScalarWhereWithAggregatesInput | UpvotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Upvotes"> | string
    streamId?: StringWithAggregatesFilter<"Upvotes"> | string
    userId?: StringWithAggregatesFilter<"Upvotes"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    streams?: StreamsCreateNestedManyWithoutUserInput
    upvotes?: UpvotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    streams?: StreamsUncheckedCreateNestedManyWithoutUserInput
    upvotes?: UpvotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streams?: StreamsUpdateManyWithoutUserNestedInput
    upvotes?: UpvotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streams?: StreamsUncheckedUpdateManyWithoutUserNestedInput
    upvotes?: UpvotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type StreamsCreateInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    upvote?: UpvotesCreateNestedManyWithoutStreamInput
    user: UserCreateNestedOneWithoutStreamsInput
  }

  export type StreamsUncheckedCreateInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    userId: string
    upvote?: UpvotesUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvote?: UpvotesUpdateManyWithoutStreamNestedInput
    user?: UserUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    upvote?: UpvotesUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamsCreateManyInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    userId: string
  }

  export type StreamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesCreateInput = {
    id?: string
    stream: StreamsCreateNestedOneWithoutUpvoteInput
    user: UserCreateNestedOneWithoutUpvotesInput
  }

  export type UpvotesUncheckedCreateInput = {
    id?: string
    streamId: string
    userId: string
  }

  export type UpvotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stream?: StreamsUpdateOneRequiredWithoutUpvoteNestedInput
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpvotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesCreateManyInput = {
    id?: string
    streamId: string
    userId: string
  }

  export type UpvotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StreamsListRelationFilter = {
    every?: StreamsWhereInput
    some?: StreamsWhereInput
    none?: StreamsWhereInput
  }

  export type UpvotesListRelationFilter = {
    every?: UpvotesWhereInput
    some?: UpvotesWhereInput
    none?: UpvotesWhereInput
  }

  export type StreamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpvotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    provider?: SortOrder
    role?: SortOrder
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

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StreamsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    title?: SortOrder
    smallImage?: SortOrder
    bigImage?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type StreamsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    title?: SortOrder
    smallImage?: SortOrder
    bigImage?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type StreamsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    url?: SortOrder
    extractedId?: SortOrder
    title?: SortOrder
    smallImage?: SortOrder
    bigImage?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type EnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamsScalarRelationFilter = {
    is?: StreamsWhereInput
    isNot?: StreamsWhereInput
  }

  export type UpvotesStreamIdUserIdCompoundUniqueInput = {
    streamId: string
    userId: string
  }

  export type UpvotesCountOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
  }

  export type UpvotesMaxOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
  }

  export type UpvotesMinOrderByAggregateInput = {
    id?: SortOrder
    streamId?: SortOrder
    userId?: SortOrder
  }

  export type StreamsCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput> | StreamsCreateWithoutUserInput[] | StreamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutUserInput | StreamsCreateOrConnectWithoutUserInput[]
    createMany?: StreamsCreateManyUserInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type UpvotesCreateNestedManyWithoutUserInput = {
    create?: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput> | UpvotesCreateWithoutUserInput[] | UpvotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutUserInput | UpvotesCreateOrConnectWithoutUserInput[]
    createMany?: UpvotesCreateManyUserInputEnvelope
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
  }

  export type StreamsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput> | StreamsCreateWithoutUserInput[] | StreamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutUserInput | StreamsCreateOrConnectWithoutUserInput[]
    createMany?: StreamsCreateManyUserInputEnvelope
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
  }

  export type UpvotesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput> | UpvotesCreateWithoutUserInput[] | UpvotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutUserInput | UpvotesCreateOrConnectWithoutUserInput[]
    createMany?: UpvotesCreateManyUserInputEnvelope
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StreamsUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput> | StreamsCreateWithoutUserInput[] | StreamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutUserInput | StreamsCreateOrConnectWithoutUserInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutUserInput | StreamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamsCreateManyUserInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutUserInput | StreamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutUserInput | StreamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type UpvotesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput> | UpvotesCreateWithoutUserInput[] | UpvotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutUserInput | UpvotesCreateOrConnectWithoutUserInput[]
    upsert?: UpvotesUpsertWithWhereUniqueWithoutUserInput | UpvotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpvotesCreateManyUserInputEnvelope
    set?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    disconnect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    delete?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    update?: UpvotesUpdateWithWhereUniqueWithoutUserInput | UpvotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpvotesUpdateManyWithWhereWithoutUserInput | UpvotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
  }

  export type StreamsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput> | StreamsCreateWithoutUserInput[] | StreamsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamsCreateOrConnectWithoutUserInput | StreamsCreateOrConnectWithoutUserInput[]
    upsert?: StreamsUpsertWithWhereUniqueWithoutUserInput | StreamsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamsCreateManyUserInputEnvelope
    set?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    disconnect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    delete?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    connect?: StreamsWhereUniqueInput | StreamsWhereUniqueInput[]
    update?: StreamsUpdateWithWhereUniqueWithoutUserInput | StreamsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamsUpdateManyWithWhereWithoutUserInput | StreamsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
  }

  export type UpvotesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput> | UpvotesCreateWithoutUserInput[] | UpvotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutUserInput | UpvotesCreateOrConnectWithoutUserInput[]
    upsert?: UpvotesUpsertWithWhereUniqueWithoutUserInput | UpvotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UpvotesCreateManyUserInputEnvelope
    set?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    disconnect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    delete?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    update?: UpvotesUpdateWithWhereUniqueWithoutUserInput | UpvotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UpvotesUpdateManyWithWhereWithoutUserInput | UpvotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
  }

  export type UpvotesCreateNestedManyWithoutStreamInput = {
    create?: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput> | UpvotesCreateWithoutStreamInput[] | UpvotesUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutStreamInput | UpvotesCreateOrConnectWithoutStreamInput[]
    createMany?: UpvotesCreateManyStreamInputEnvelope
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStreamsInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    connect?: UserWhereUniqueInput
  }

  export type UpvotesUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput> | UpvotesCreateWithoutStreamInput[] | UpvotesUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutStreamInput | UpvotesCreateOrConnectWithoutStreamInput[]
    createMany?: UpvotesCreateManyStreamInputEnvelope
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
  }

  export type EnumStreamTypeFieldUpdateOperationsInput = {
    set?: $Enums.StreamType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UpvotesUpdateManyWithoutStreamNestedInput = {
    create?: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput> | UpvotesCreateWithoutStreamInput[] | UpvotesUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutStreamInput | UpvotesCreateOrConnectWithoutStreamInput[]
    upsert?: UpvotesUpsertWithWhereUniqueWithoutStreamInput | UpvotesUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: UpvotesCreateManyStreamInputEnvelope
    set?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    disconnect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    delete?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    update?: UpvotesUpdateWithWhereUniqueWithoutStreamInput | UpvotesUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: UpvotesUpdateManyWithWhereWithoutStreamInput | UpvotesUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    upsert?: UserUpsertWithoutStreamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamsInput, UserUpdateWithoutStreamsInput>, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type UpvotesUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput> | UpvotesCreateWithoutStreamInput[] | UpvotesUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: UpvotesCreateOrConnectWithoutStreamInput | UpvotesCreateOrConnectWithoutStreamInput[]
    upsert?: UpvotesUpsertWithWhereUniqueWithoutStreamInput | UpvotesUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: UpvotesCreateManyStreamInputEnvelope
    set?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    disconnect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    delete?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    connect?: UpvotesWhereUniqueInput | UpvotesWhereUniqueInput[]
    update?: UpvotesUpdateWithWhereUniqueWithoutStreamInput | UpvotesUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: UpvotesUpdateManyWithWhereWithoutStreamInput | UpvotesUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
  }

  export type StreamsCreateNestedOneWithoutUpvoteInput = {
    create?: XOR<StreamsCreateWithoutUpvoteInput, StreamsUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: StreamsCreateOrConnectWithoutUpvoteInput
    connect?: StreamsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpvotesInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    connect?: UserWhereUniqueInput
  }

  export type StreamsUpdateOneRequiredWithoutUpvoteNestedInput = {
    create?: XOR<StreamsCreateWithoutUpvoteInput, StreamsUncheckedCreateWithoutUpvoteInput>
    connectOrCreate?: StreamsCreateOrConnectWithoutUpvoteInput
    upsert?: StreamsUpsertWithoutUpvoteInput
    connect?: StreamsWhereUniqueInput
    update?: XOR<XOR<StreamsUpdateToOneWithWhereWithoutUpvoteInput, StreamsUpdateWithoutUpvoteInput>, StreamsUncheckedUpdateWithoutUpvoteInput>
  }

  export type UserUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpvotesInput
    upsert?: UserUpsertWithoutUpvotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpvotesInput, UserUpdateWithoutUpvotesInput>, UserUncheckedUpdateWithoutUpvotesInput>
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

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider[] | ListEnumProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStreamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeFilter<$PrismaModel> | $Enums.StreamType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreamType | EnumStreamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreamType[] | ListEnumStreamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStreamTypeWithAggregatesFilter<$PrismaModel> | $Enums.StreamType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreamTypeFilter<$PrismaModel>
    _max?: NestedEnumStreamTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamsCreateWithoutUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    upvote?: UpvotesCreateNestedManyWithoutStreamInput
  }

  export type StreamsUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    upvote?: UpvotesUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamsCreateOrConnectWithoutUserInput = {
    where: StreamsWhereUniqueInput
    create: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput>
  }

  export type StreamsCreateManyUserInputEnvelope = {
    data: StreamsCreateManyUserInput | StreamsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UpvotesCreateWithoutUserInput = {
    id?: string
    stream: StreamsCreateNestedOneWithoutUpvoteInput
  }

  export type UpvotesUncheckedCreateWithoutUserInput = {
    id?: string
    streamId: string
  }

  export type UpvotesCreateOrConnectWithoutUserInput = {
    where: UpvotesWhereUniqueInput
    create: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput>
  }

  export type UpvotesCreateManyUserInputEnvelope = {
    data: UpvotesCreateManyUserInput | UpvotesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StreamsUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamsWhereUniqueInput
    update: XOR<StreamsUpdateWithoutUserInput, StreamsUncheckedUpdateWithoutUserInput>
    create: XOR<StreamsCreateWithoutUserInput, StreamsUncheckedCreateWithoutUserInput>
  }

  export type StreamsUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamsWhereUniqueInput
    data: XOR<StreamsUpdateWithoutUserInput, StreamsUncheckedUpdateWithoutUserInput>
  }

  export type StreamsUpdateManyWithWhereWithoutUserInput = {
    where: StreamsScalarWhereInput
    data: XOR<StreamsUpdateManyMutationInput, StreamsUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamsScalarWhereInput = {
    AND?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
    OR?: StreamsScalarWhereInput[]
    NOT?: StreamsScalarWhereInput | StreamsScalarWhereInput[]
    id?: StringFilter<"Streams"> | string
    type?: EnumStreamTypeFilter<"Streams"> | $Enums.StreamType
    url?: StringFilter<"Streams"> | string
    extractedId?: StringFilter<"Streams"> | string
    title?: StringFilter<"Streams"> | string
    smallImage?: StringFilter<"Streams"> | string
    bigImage?: StringFilter<"Streams"> | string
    active?: BoolFilter<"Streams"> | boolean
    userId?: StringFilter<"Streams"> | string
  }

  export type UpvotesUpsertWithWhereUniqueWithoutUserInput = {
    where: UpvotesWhereUniqueInput
    update: XOR<UpvotesUpdateWithoutUserInput, UpvotesUncheckedUpdateWithoutUserInput>
    create: XOR<UpvotesCreateWithoutUserInput, UpvotesUncheckedCreateWithoutUserInput>
  }

  export type UpvotesUpdateWithWhereUniqueWithoutUserInput = {
    where: UpvotesWhereUniqueInput
    data: XOR<UpvotesUpdateWithoutUserInput, UpvotesUncheckedUpdateWithoutUserInput>
  }

  export type UpvotesUpdateManyWithWhereWithoutUserInput = {
    where: UpvotesScalarWhereInput
    data: XOR<UpvotesUpdateManyMutationInput, UpvotesUncheckedUpdateManyWithoutUserInput>
  }

  export type UpvotesScalarWhereInput = {
    AND?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
    OR?: UpvotesScalarWhereInput[]
    NOT?: UpvotesScalarWhereInput | UpvotesScalarWhereInput[]
    id?: StringFilter<"Upvotes"> | string
    streamId?: StringFilter<"Upvotes"> | string
    userId?: StringFilter<"Upvotes"> | string
  }

  export type UpvotesCreateWithoutStreamInput = {
    id?: string
    user: UserCreateNestedOneWithoutUpvotesInput
  }

  export type UpvotesUncheckedCreateWithoutStreamInput = {
    id?: string
    userId: string
  }

  export type UpvotesCreateOrConnectWithoutStreamInput = {
    where: UpvotesWhereUniqueInput
    create: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput>
  }

  export type UpvotesCreateManyStreamInputEnvelope = {
    data: UpvotesCreateManyStreamInput | UpvotesCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStreamsInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    upvotes?: UpvotesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStreamsInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    upvotes?: UpvotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStreamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
  }

  export type UpvotesUpsertWithWhereUniqueWithoutStreamInput = {
    where: UpvotesWhereUniqueInput
    update: XOR<UpvotesUpdateWithoutStreamInput, UpvotesUncheckedUpdateWithoutStreamInput>
    create: XOR<UpvotesCreateWithoutStreamInput, UpvotesUncheckedCreateWithoutStreamInput>
  }

  export type UpvotesUpdateWithWhereUniqueWithoutStreamInput = {
    where: UpvotesWhereUniqueInput
    data: XOR<UpvotesUpdateWithoutStreamInput, UpvotesUncheckedUpdateWithoutStreamInput>
  }

  export type UpvotesUpdateManyWithWhereWithoutStreamInput = {
    where: UpvotesScalarWhereInput
    data: XOR<UpvotesUpdateManyMutationInput, UpvotesUncheckedUpdateManyWithoutStreamInput>
  }

  export type UserUpsertWithoutStreamsInput = {
    update: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type UserUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upvotes?: UpvotesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    upvotes?: UpvotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamsCreateWithoutUpvoteInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    user: UserCreateNestedOneWithoutStreamsInput
  }

  export type StreamsUncheckedCreateWithoutUpvoteInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
    userId: string
  }

  export type StreamsCreateOrConnectWithoutUpvoteInput = {
    where: StreamsWhereUniqueInput
    create: XOR<StreamsCreateWithoutUpvoteInput, StreamsUncheckedCreateWithoutUpvoteInput>
  }

  export type UserCreateWithoutUpvotesInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    streams?: StreamsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUpvotesInput = {
    id?: string
    name: string
    email: string
    avatar: string
    provider: $Enums.Provider
    role: $Enums.Role
    streams?: StreamsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUpvotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
  }

  export type StreamsUpsertWithoutUpvoteInput = {
    update: XOR<StreamsUpdateWithoutUpvoteInput, StreamsUncheckedUpdateWithoutUpvoteInput>
    create: XOR<StreamsCreateWithoutUpvoteInput, StreamsUncheckedCreateWithoutUpvoteInput>
    where?: StreamsWhereInput
  }

  export type StreamsUpdateToOneWithWhereWithoutUpvoteInput = {
    where?: StreamsWhereInput
    data: XOR<StreamsUpdateWithoutUpvoteInput, StreamsUncheckedUpdateWithoutUpvoteInput>
  }

  export type StreamsUpdateWithoutUpvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamsUncheckedUpdateWithoutUpvoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutUpvotesInput = {
    update: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
    create: XOR<UserCreateWithoutUpvotesInput, UserUncheckedCreateWithoutUpvotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpvotesInput, UserUncheckedUpdateWithoutUpvotesInput>
  }

  export type UserUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streams?: StreamsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpvotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    streams?: StreamsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StreamsCreateManyUserInput = {
    id?: string
    type: $Enums.StreamType
    url: string
    extractedId: string
    title?: string
    smallImage?: string
    bigImage?: string
    active?: boolean
  }

  export type UpvotesCreateManyUserInput = {
    id?: string
    streamId: string
  }

  export type StreamsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvote?: UpvotesUpdateManyWithoutStreamNestedInput
  }

  export type StreamsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    upvote?: UpvotesUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStreamTypeFieldUpdateOperationsInput | $Enums.StreamType
    url?: StringFieldUpdateOperationsInput | string
    extractedId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    smallImage?: StringFieldUpdateOperationsInput | string
    bigImage?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UpvotesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stream?: StreamsUpdateOneRequiredWithoutUpvoteNestedInput
  }

  export type UpvotesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesCreateManyStreamInput = {
    id?: string
    userId: string
  }

  export type UpvotesUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUpvotesNestedInput
  }

  export type UpvotesUncheckedUpdateWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UpvotesUncheckedUpdateManyWithoutStreamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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