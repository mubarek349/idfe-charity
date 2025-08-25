
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
 * Model HeroContent
 * 
 */
export type HeroContent = $Result.DefaultSelection<Prisma.$HeroContentPayload>
/**
 * Model AboutContent
 * 
 */
export type AboutContent = $Result.DefaultSelection<Prisma.$AboutContentPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ImpactStat
 * 
 */
export type ImpactStat = $Result.DefaultSelection<Prisma.$ImpactStatPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model CTAContent
 * 
 */
export type CTAContent = $Result.DefaultSelection<Prisma.$CTAContentPayload>
/**
 * Model FooterContent
 * 
 */
export type FooterContent = $Result.DefaultSelection<Prisma.$FooterContentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more HeroContents
 * const heroContents = await prisma.heroContent.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more HeroContents
   * const heroContents = await prisma.heroContent.findMany()
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
   * `prisma.heroContent`: Exposes CRUD operations for the **HeroContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroContents
    * const heroContents = await prisma.heroContent.findMany()
    * ```
    */
  get heroContent(): Prisma.HeroContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aboutContent`: Exposes CRUD operations for the **AboutContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutContents
    * const aboutContents = await prisma.aboutContent.findMany()
    * ```
    */
  get aboutContent(): Prisma.AboutContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.impactStat`: Exposes CRUD operations for the **ImpactStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImpactStats
    * const impactStats = await prisma.impactStat.findMany()
    * ```
    */
  get impactStat(): Prisma.ImpactStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cTAContent`: Exposes CRUD operations for the **CTAContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CTAContents
    * const cTAContents = await prisma.cTAContent.findMany()
    * ```
    */
  get cTAContent(): Prisma.CTAContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.footerContent`: Exposes CRUD operations for the **FooterContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FooterContents
    * const footerContents = await prisma.footerContent.findMany()
    * ```
    */
  get footerContent(): Prisma.FooterContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    HeroContent: 'HeroContent',
    AboutContent: 'AboutContent',
    Program: 'Program',
    ImpactStat: 'ImpactStat',
    ContactInfo: 'ContactInfo',
    CTAContent: 'CTAContent',
    FooterContent: 'FooterContent',
    User: 'User'
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
      modelProps: "heroContent" | "aboutContent" | "program" | "impactStat" | "contactInfo" | "cTAContent" | "footerContent" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      HeroContent: {
        payload: Prisma.$HeroContentPayload<ExtArgs>
        fields: Prisma.HeroContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          findFirst: {
            args: Prisma.HeroContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          findMany: {
            args: Prisma.HeroContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>[]
          }
          create: {
            args: Prisma.HeroContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          createMany: {
            args: Prisma.HeroContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HeroContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          update: {
            args: Prisma.HeroContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          deleteMany: {
            args: Prisma.HeroContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeroContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroContentPayload>
          }
          aggregate: {
            args: Prisma.HeroContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroContent>
          }
          groupBy: {
            args: Prisma.HeroContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroContentCountArgs<ExtArgs>
            result: $Utils.Optional<HeroContentCountAggregateOutputType> | number
          }
        }
      }
      AboutContent: {
        payload: Prisma.$AboutContentPayload<ExtArgs>
        fields: Prisma.AboutContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findFirst: {
            args: Prisma.AboutContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findMany: {
            args: Prisma.AboutContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          create: {
            args: Prisma.AboutContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          createMany: {
            args: Prisma.AboutContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AboutContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          update: {
            args: Prisma.AboutContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          deleteMany: {
            args: Prisma.AboutContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          aggregate: {
            args: Prisma.AboutContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutContent>
          }
          groupBy: {
            args: Prisma.AboutContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutContentCountArgs<ExtArgs>
            result: $Utils.Optional<AboutContentCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ImpactStat: {
        payload: Prisma.$ImpactStatPayload<ExtArgs>
        fields: Prisma.ImpactStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImpactStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImpactStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          findFirst: {
            args: Prisma.ImpactStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImpactStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          findMany: {
            args: Prisma.ImpactStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>[]
          }
          create: {
            args: Prisma.ImpactStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          createMany: {
            args: Prisma.ImpactStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImpactStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          update: {
            args: Prisma.ImpactStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          deleteMany: {
            args: Prisma.ImpactStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImpactStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImpactStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactStatPayload>
          }
          aggregate: {
            args: Prisma.ImpactStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImpactStat>
          }
          groupBy: {
            args: Prisma.ImpactStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImpactStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImpactStatCountArgs<ExtArgs>
            result: $Utils.Optional<ImpactStatCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      CTAContent: {
        payload: Prisma.$CTAContentPayload<ExtArgs>
        fields: Prisma.CTAContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CTAContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CTAContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          findFirst: {
            args: Prisma.CTAContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CTAContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          findMany: {
            args: Prisma.CTAContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>[]
          }
          create: {
            args: Prisma.CTAContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          createMany: {
            args: Prisma.CTAContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CTAContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          update: {
            args: Prisma.CTAContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          deleteMany: {
            args: Prisma.CTAContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CTAContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CTAContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CTAContentPayload>
          }
          aggregate: {
            args: Prisma.CTAContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCTAContent>
          }
          groupBy: {
            args: Prisma.CTAContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CTAContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CTAContentCountArgs<ExtArgs>
            result: $Utils.Optional<CTAContentCountAggregateOutputType> | number
          }
        }
      }
      FooterContent: {
        payload: Prisma.$FooterContentPayload<ExtArgs>
        fields: Prisma.FooterContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          findFirst: {
            args: Prisma.FooterContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          findMany: {
            args: Prisma.FooterContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>[]
          }
          create: {
            args: Prisma.FooterContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          createMany: {
            args: Prisma.FooterContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FooterContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          update: {
            args: Prisma.FooterContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          deleteMany: {
            args: Prisma.FooterContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FooterContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterContentPayload>
          }
          aggregate: {
            args: Prisma.FooterContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooterContent>
          }
          groupBy: {
            args: Prisma.FooterContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterContentCountArgs<ExtArgs>
            result: $Utils.Optional<FooterContentCountAggregateOutputType> | number
          }
        }
      }
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
    heroContent?: HeroContentOmit
    aboutContent?: AboutContentOmit
    program?: ProgramOmit
    impactStat?: ImpactStatOmit
    contactInfo?: ContactInfoOmit
    cTAContent?: CTAContentOmit
    footerContent?: FooterContentOmit
    user?: UserOmit
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
   * Models
   */

  /**
   * Model HeroContent
   */

  export type AggregateHeroContent = {
    _count: HeroContentCountAggregateOutputType | null
    _min: HeroContentMinAggregateOutputType | null
    _max: HeroContentMaxAggregateOutputType | null
  }

  export type HeroContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    buttonText: string | null
    buttonLink: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    subtitle: string | null
    description: string | null
    buttonText: string | null
    buttonLink: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroContentCountAggregateOutputType = {
    id: number
    title: number
    subtitle: number
    description: number
    buttonText: number
    buttonLink: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroContentMinAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroContentMaxAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroContentCountAggregateInputType = {
    id?: true
    title?: true
    subtitle?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroContent to aggregate.
     */
    where?: HeroContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroContents to fetch.
     */
    orderBy?: HeroContentOrderByWithRelationInput | HeroContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroContents
    **/
    _count?: true | HeroContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroContentMaxAggregateInputType
  }

  export type GetHeroContentAggregateType<T extends HeroContentAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroContent[P]>
      : GetScalarType<T[P], AggregateHeroContent[P]>
  }




  export type HeroContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroContentWhereInput
    orderBy?: HeroContentOrderByWithAggregationInput | HeroContentOrderByWithAggregationInput[]
    by: HeroContentScalarFieldEnum[] | HeroContentScalarFieldEnum
    having?: HeroContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroContentCountAggregateInputType | true
    _min?: HeroContentMinAggregateInputType
    _max?: HeroContentMaxAggregateInputType
  }

  export type HeroContentGroupByOutputType = {
    id: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonLink: string
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HeroContentCountAggregateOutputType | null
    _min: HeroContentMinAggregateOutputType | null
    _max: HeroContentMaxAggregateOutputType | null
  }

  type GetHeroContentGroupByPayload<T extends HeroContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroContentGroupByOutputType[P]>
            : GetScalarType<T[P], HeroContentGroupByOutputType[P]>
        }
      >
    >


  export type HeroContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroContent"]>



  export type HeroContentSelectScalar = {
    id?: boolean
    title?: boolean
    subtitle?: boolean
    description?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "subtitle" | "description" | "buttonText" | "buttonLink" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["heroContent"]>

  export type $HeroContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      subtitle: string
      description: string
      buttonText: string
      buttonLink: string
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["heroContent"]>
    composites: {}
  }

  type HeroContentGetPayload<S extends boolean | null | undefined | HeroContentDefaultArgs> = $Result.GetResult<Prisma.$HeroContentPayload, S>

  type HeroContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroContentCountAggregateInputType | true
    }

  export interface HeroContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroContent'], meta: { name: 'HeroContent' } }
    /**
     * Find zero or one HeroContent that matches the filter.
     * @param {HeroContentFindUniqueArgs} args - Arguments to find a HeroContent
     * @example
     * // Get one HeroContent
     * const heroContent = await prisma.heroContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroContentFindUniqueArgs>(args: SelectSubset<T, HeroContentFindUniqueArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HeroContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroContentFindUniqueOrThrowArgs} args - Arguments to find a HeroContent
     * @example
     * // Get one HeroContent
     * const heroContent = await prisma.heroContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroContentFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentFindFirstArgs} args - Arguments to find a HeroContent
     * @example
     * // Get one HeroContent
     * const heroContent = await prisma.heroContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroContentFindFirstArgs>(args?: SelectSubset<T, HeroContentFindFirstArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HeroContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentFindFirstOrThrowArgs} args - Arguments to find a HeroContent
     * @example
     * // Get one HeroContent
     * const heroContent = await prisma.heroContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroContentFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HeroContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroContents
     * const heroContents = await prisma.heroContent.findMany()
     * 
     * // Get first 10 HeroContents
     * const heroContents = await prisma.heroContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroContentWithIdOnly = await prisma.heroContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroContentFindManyArgs>(args?: SelectSubset<T, HeroContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HeroContent.
     * @param {HeroContentCreateArgs} args - Arguments to create a HeroContent.
     * @example
     * // Create one HeroContent
     * const HeroContent = await prisma.heroContent.create({
     *   data: {
     *     // ... data to create a HeroContent
     *   }
     * })
     * 
     */
    create<T extends HeroContentCreateArgs>(args: SelectSubset<T, HeroContentCreateArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HeroContents.
     * @param {HeroContentCreateManyArgs} args - Arguments to create many HeroContents.
     * @example
     * // Create many HeroContents
     * const heroContent = await prisma.heroContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroContentCreateManyArgs>(args?: SelectSubset<T, HeroContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HeroContent.
     * @param {HeroContentDeleteArgs} args - Arguments to delete one HeroContent.
     * @example
     * // Delete one HeroContent
     * const HeroContent = await prisma.heroContent.delete({
     *   where: {
     *     // ... filter to delete one HeroContent
     *   }
     * })
     * 
     */
    delete<T extends HeroContentDeleteArgs>(args: SelectSubset<T, HeroContentDeleteArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HeroContent.
     * @param {HeroContentUpdateArgs} args - Arguments to update one HeroContent.
     * @example
     * // Update one HeroContent
     * const heroContent = await prisma.heroContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroContentUpdateArgs>(args: SelectSubset<T, HeroContentUpdateArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HeroContents.
     * @param {HeroContentDeleteManyArgs} args - Arguments to filter HeroContents to delete.
     * @example
     * // Delete a few HeroContents
     * const { count } = await prisma.heroContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroContentDeleteManyArgs>(args?: SelectSubset<T, HeroContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroContents
     * const heroContent = await prisma.heroContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroContentUpdateManyArgs>(args: SelectSubset<T, HeroContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeroContent.
     * @param {HeroContentUpsertArgs} args - Arguments to update or create a HeroContent.
     * @example
     * // Update or create a HeroContent
     * const heroContent = await prisma.heroContent.upsert({
     *   create: {
     *     // ... data to create a HeroContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroContent we want to update
     *   }
     * })
     */
    upsert<T extends HeroContentUpsertArgs>(args: SelectSubset<T, HeroContentUpsertArgs<ExtArgs>>): Prisma__HeroContentClient<$Result.GetResult<Prisma.$HeroContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HeroContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentCountArgs} args - Arguments to filter HeroContents to count.
     * @example
     * // Count the number of HeroContents
     * const count = await prisma.heroContent.count({
     *   where: {
     *     // ... the filter for the HeroContents we want to count
     *   }
     * })
    **/
    count<T extends HeroContentCountArgs>(
      args?: Subset<T, HeroContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroContentAggregateArgs>(args: Subset<T, HeroContentAggregateArgs>): Prisma.PrismaPromise<GetHeroContentAggregateType<T>>

    /**
     * Group by HeroContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroContentGroupByArgs} args - Group by arguments.
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
      T extends HeroContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroContentGroupByArgs['orderBy'] }
        : { orderBy?: HeroContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroContent model
   */
  readonly fields: HeroContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the HeroContent model
   */
  interface HeroContentFieldRefs {
    readonly id: FieldRef<"HeroContent", 'String'>
    readonly title: FieldRef<"HeroContent", 'String'>
    readonly subtitle: FieldRef<"HeroContent", 'String'>
    readonly description: FieldRef<"HeroContent", 'String'>
    readonly buttonText: FieldRef<"HeroContent", 'String'>
    readonly buttonLink: FieldRef<"HeroContent", 'String'>
    readonly imageUrl: FieldRef<"HeroContent", 'String'>
    readonly isActive: FieldRef<"HeroContent", 'Boolean'>
    readonly createdAt: FieldRef<"HeroContent", 'DateTime'>
    readonly updatedAt: FieldRef<"HeroContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeroContent findUnique
   */
  export type HeroContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter, which HeroContent to fetch.
     */
    where: HeroContentWhereUniqueInput
  }

  /**
   * HeroContent findUniqueOrThrow
   */
  export type HeroContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter, which HeroContent to fetch.
     */
    where: HeroContentWhereUniqueInput
  }

  /**
   * HeroContent findFirst
   */
  export type HeroContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter, which HeroContent to fetch.
     */
    where?: HeroContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroContents to fetch.
     */
    orderBy?: HeroContentOrderByWithRelationInput | HeroContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroContents.
     */
    cursor?: HeroContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroContents.
     */
    distinct?: HeroContentScalarFieldEnum | HeroContentScalarFieldEnum[]
  }

  /**
   * HeroContent findFirstOrThrow
   */
  export type HeroContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter, which HeroContent to fetch.
     */
    where?: HeroContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroContents to fetch.
     */
    orderBy?: HeroContentOrderByWithRelationInput | HeroContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroContents.
     */
    cursor?: HeroContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroContents.
     */
    distinct?: HeroContentScalarFieldEnum | HeroContentScalarFieldEnum[]
  }

  /**
   * HeroContent findMany
   */
  export type HeroContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter, which HeroContents to fetch.
     */
    where?: HeroContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroContents to fetch.
     */
    orderBy?: HeroContentOrderByWithRelationInput | HeroContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroContents.
     */
    cursor?: HeroContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroContents.
     */
    skip?: number
    distinct?: HeroContentScalarFieldEnum | HeroContentScalarFieldEnum[]
  }

  /**
   * HeroContent create
   */
  export type HeroContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * The data needed to create a HeroContent.
     */
    data: XOR<HeroContentCreateInput, HeroContentUncheckedCreateInput>
  }

  /**
   * HeroContent createMany
   */
  export type HeroContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroContents.
     */
    data: HeroContentCreateManyInput | HeroContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HeroContent update
   */
  export type HeroContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * The data needed to update a HeroContent.
     */
    data: XOR<HeroContentUpdateInput, HeroContentUncheckedUpdateInput>
    /**
     * Choose, which HeroContent to update.
     */
    where: HeroContentWhereUniqueInput
  }

  /**
   * HeroContent updateMany
   */
  export type HeroContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroContents.
     */
    data: XOR<HeroContentUpdateManyMutationInput, HeroContentUncheckedUpdateManyInput>
    /**
     * Filter which HeroContents to update
     */
    where?: HeroContentWhereInput
    /**
     * Limit how many HeroContents to update.
     */
    limit?: number
  }

  /**
   * HeroContent upsert
   */
  export type HeroContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * The filter to search for the HeroContent to update in case it exists.
     */
    where: HeroContentWhereUniqueInput
    /**
     * In case the HeroContent found by the `where` argument doesn't exist, create a new HeroContent with this data.
     */
    create: XOR<HeroContentCreateInput, HeroContentUncheckedCreateInput>
    /**
     * In case the HeroContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroContentUpdateInput, HeroContentUncheckedUpdateInput>
  }

  /**
   * HeroContent delete
   */
  export type HeroContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
    /**
     * Filter which HeroContent to delete.
     */
    where: HeroContentWhereUniqueInput
  }

  /**
   * HeroContent deleteMany
   */
  export type HeroContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroContents to delete
     */
    where?: HeroContentWhereInput
    /**
     * Limit how many HeroContents to delete.
     */
    limit?: number
  }

  /**
   * HeroContent without action
   */
  export type HeroContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroContent
     */
    select?: HeroContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HeroContent
     */
    omit?: HeroContentOmit<ExtArgs> | null
  }


  /**
   * Model AboutContent
   */

  export type AggregateAboutContent = {
    _count: AboutContentCountAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  export type AboutContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mission: string | null
    vision: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    mission: string | null
    vision: string | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutContentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    mission: number
    vision: number
    values: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutContentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mission?: true
    vision?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutContentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mission?: true
    vision?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutContentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    mission?: true
    vision?: true
    values?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContent to aggregate.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutContents
    **/
    _count?: true | AboutContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutContentMaxAggregateInputType
  }

  export type GetAboutContentAggregateType<T extends AboutContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutContent[P]>
      : GetScalarType<T[P], AggregateAboutContent[P]>
  }




  export type AboutContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutContentWhereInput
    orderBy?: AboutContentOrderByWithAggregationInput | AboutContentOrderByWithAggregationInput[]
    by: AboutContentScalarFieldEnum[] | AboutContentScalarFieldEnum
    having?: AboutContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutContentCountAggregateInputType | true
    _min?: AboutContentMinAggregateInputType
    _max?: AboutContentMaxAggregateInputType
  }

  export type AboutContentGroupByOutputType = {
    id: string
    title: string
    description: string
    mission: string
    vision: string
    values: JsonValue
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AboutContentCountAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  type GetAboutContentGroupByPayload<T extends AboutContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
            : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
        }
      >
    >


  export type AboutContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    values?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>



  export type AboutContentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    mission?: boolean
    vision?: boolean
    values?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "mission" | "vision" | "values" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["aboutContent"]>

  export type $AboutContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      mission: string
      vision: string
      values: Prisma.JsonValue
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aboutContent"]>
    composites: {}
  }

  type AboutContentGetPayload<S extends boolean | null | undefined | AboutContentDefaultArgs> = $Result.GetResult<Prisma.$AboutContentPayload, S>

  type AboutContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutContentCountAggregateInputType | true
    }

  export interface AboutContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutContent'], meta: { name: 'AboutContent' } }
    /**
     * Find zero or one AboutContent that matches the filter.
     * @param {AboutContentFindUniqueArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutContentFindUniqueArgs>(args: SelectSubset<T, AboutContentFindUniqueArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AboutContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutContentFindUniqueOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutContentFindFirstArgs>(args?: SelectSubset<T, AboutContentFindFirstArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AboutContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AboutContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutContents
     * const aboutContents = await prisma.aboutContent.findMany()
     * 
     * // Get first 10 AboutContents
     * const aboutContents = await prisma.aboutContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutContentFindManyArgs>(args?: SelectSubset<T, AboutContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AboutContent.
     * @param {AboutContentCreateArgs} args - Arguments to create a AboutContent.
     * @example
     * // Create one AboutContent
     * const AboutContent = await prisma.aboutContent.create({
     *   data: {
     *     // ... data to create a AboutContent
     *   }
     * })
     * 
     */
    create<T extends AboutContentCreateArgs>(args: SelectSubset<T, AboutContentCreateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AboutContents.
     * @param {AboutContentCreateManyArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutContentCreateManyArgs>(args?: SelectSubset<T, AboutContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AboutContent.
     * @param {AboutContentDeleteArgs} args - Arguments to delete one AboutContent.
     * @example
     * // Delete one AboutContent
     * const AboutContent = await prisma.aboutContent.delete({
     *   where: {
     *     // ... filter to delete one AboutContent
     *   }
     * })
     * 
     */
    delete<T extends AboutContentDeleteArgs>(args: SelectSubset<T, AboutContentDeleteArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AboutContent.
     * @param {AboutContentUpdateArgs} args - Arguments to update one AboutContent.
     * @example
     * // Update one AboutContent
     * const aboutContent = await prisma.aboutContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutContentUpdateArgs>(args: SelectSubset<T, AboutContentUpdateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AboutContents.
     * @param {AboutContentDeleteManyArgs} args - Arguments to filter AboutContents to delete.
     * @example
     * // Delete a few AboutContents
     * const { count } = await prisma.aboutContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutContentDeleteManyArgs>(args?: SelectSubset<T, AboutContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutContentUpdateManyArgs>(args: SelectSubset<T, AboutContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutContent.
     * @param {AboutContentUpsertArgs} args - Arguments to update or create a AboutContent.
     * @example
     * // Update or create a AboutContent
     * const aboutContent = await prisma.aboutContent.upsert({
     *   create: {
     *     // ... data to create a AboutContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutContent we want to update
     *   }
     * })
     */
    upsert<T extends AboutContentUpsertArgs>(args: SelectSubset<T, AboutContentUpsertArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentCountArgs} args - Arguments to filter AboutContents to count.
     * @example
     * // Count the number of AboutContents
     * const count = await prisma.aboutContent.count({
     *   where: {
     *     // ... the filter for the AboutContents we want to count
     *   }
     * })
    **/
    count<T extends AboutContentCountArgs>(
      args?: Subset<T, AboutContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutContentAggregateArgs>(args: Subset<T, AboutContentAggregateArgs>): Prisma.PrismaPromise<GetAboutContentAggregateType<T>>

    /**
     * Group by AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentGroupByArgs} args - Group by arguments.
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
      T extends AboutContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutContentGroupByArgs['orderBy'] }
        : { orderBy?: AboutContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutContent model
   */
  readonly fields: AboutContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AboutContent model
   */
  interface AboutContentFieldRefs {
    readonly id: FieldRef<"AboutContent", 'String'>
    readonly title: FieldRef<"AboutContent", 'String'>
    readonly description: FieldRef<"AboutContent", 'String'>
    readonly mission: FieldRef<"AboutContent", 'String'>
    readonly vision: FieldRef<"AboutContent", 'String'>
    readonly values: FieldRef<"AboutContent", 'Json'>
    readonly imageUrl: FieldRef<"AboutContent", 'String'>
    readonly isActive: FieldRef<"AboutContent", 'Boolean'>
    readonly createdAt: FieldRef<"AboutContent", 'DateTime'>
    readonly updatedAt: FieldRef<"AboutContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutContent findUnique
   */
  export type AboutContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findUniqueOrThrow
   */
  export type AboutContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findFirst
   */
  export type AboutContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findFirstOrThrow
   */
  export type AboutContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findMany
   */
  export type AboutContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter, which AboutContents to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent create
   */
  export type AboutContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data needed to create a AboutContent.
     */
    data: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
  }

  /**
   * AboutContent createMany
   */
  export type AboutContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AboutContent update
   */
  export type AboutContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The data needed to update a AboutContent.
     */
    data: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
    /**
     * Choose, which AboutContent to update.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent updateMany
   */
  export type AboutContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
    /**
     * Limit how many AboutContents to update.
     */
    limit?: number
  }

  /**
   * AboutContent upsert
   */
  export type AboutContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * The filter to search for the AboutContent to update in case it exists.
     */
    where: AboutContentWhereUniqueInput
    /**
     * In case the AboutContent found by the `where` argument doesn't exist, create a new AboutContent with this data.
     */
    create: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
    /**
     * In case the AboutContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
  }

  /**
   * AboutContent delete
   */
  export type AboutContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
    /**
     * Filter which AboutContent to delete.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent deleteMany
   */
  export type AboutContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContents to delete
     */
    where?: AboutContentWhereInput
    /**
     * Limit how many AboutContents to delete.
     */
    limit?: number
  }

  /**
   * AboutContent without action
   */
  export type AboutContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AboutContent
     */
    omit?: AboutContentOmit<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    category: string | null
    status: string | null
    targetGroup: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    category: string | null
    status: string | null
    targetGroup: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    category: number
    status: number
    targetGroup: number
    location: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    category?: true
    status?: true
    targetGroup?: true
    location?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    category?: true
    status?: true
    targetGroup?: true
    location?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    category?: true
    status?: true
    targetGroup?: true
    location?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    title: string
    description: string
    imageUrl: string | null
    category: string
    status: string
    targetGroup: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    category?: boolean
    status?: boolean
    targetGroup?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["program"]>



  export type ProgramSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    category?: boolean
    status?: boolean
    targetGroup?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "category" | "status" | "targetGroup" | "location" | "startDate" | "endDate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["program"]>

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      imageUrl: string | null
      category: string
      status: string
      targetGroup: string | null
      location: string | null
      startDate: Date | null
      endDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly title: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly imageUrl: FieldRef<"Program", 'String'>
    readonly category: FieldRef<"Program", 'String'>
    readonly status: FieldRef<"Program", 'String'>
    readonly targetGroup: FieldRef<"Program", 'String'>
    readonly location: FieldRef<"Program", 'String'>
    readonly startDate: FieldRef<"Program", 'DateTime'>
    readonly endDate: FieldRef<"Program", 'DateTime'>
    readonly isActive: FieldRef<"Program", 'Boolean'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
  }


  /**
   * Model ImpactStat
   */

  export type AggregateImpactStat = {
    _count: ImpactStatCountAggregateOutputType | null
    _avg: ImpactStatAvgAggregateOutputType | null
    _sum: ImpactStatSumAggregateOutputType | null
    _min: ImpactStatMinAggregateOutputType | null
    _max: ImpactStatMaxAggregateOutputType | null
  }

  export type ImpactStatAvgAggregateOutputType = {
    order: number | null
  }

  export type ImpactStatSumAggregateOutputType = {
    order: number | null
  }

  export type ImpactStatMinAggregateOutputType = {
    id: string | null
    title: string | null
    value: string | null
    description: string | null
    icon: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImpactStatMaxAggregateOutputType = {
    id: string | null
    title: string | null
    value: string | null
    description: string | null
    icon: string | null
    order: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImpactStatCountAggregateOutputType = {
    id: number
    title: number
    value: number
    description: number
    icon: number
    order: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImpactStatAvgAggregateInputType = {
    order?: true
  }

  export type ImpactStatSumAggregateInputType = {
    order?: true
  }

  export type ImpactStatMinAggregateInputType = {
    id?: true
    title?: true
    value?: true
    description?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImpactStatMaxAggregateInputType = {
    id?: true
    title?: true
    value?: true
    description?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImpactStatCountAggregateInputType = {
    id?: true
    title?: true
    value?: true
    description?: true
    icon?: true
    order?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImpactStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactStat to aggregate.
     */
    where?: ImpactStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactStats to fetch.
     */
    orderBy?: ImpactStatOrderByWithRelationInput | ImpactStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImpactStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImpactStats
    **/
    _count?: true | ImpactStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImpactStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImpactStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImpactStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImpactStatMaxAggregateInputType
  }

  export type GetImpactStatAggregateType<T extends ImpactStatAggregateArgs> = {
        [P in keyof T & keyof AggregateImpactStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImpactStat[P]>
      : GetScalarType<T[P], AggregateImpactStat[P]>
  }




  export type ImpactStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImpactStatWhereInput
    orderBy?: ImpactStatOrderByWithAggregationInput | ImpactStatOrderByWithAggregationInput[]
    by: ImpactStatScalarFieldEnum[] | ImpactStatScalarFieldEnum
    having?: ImpactStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImpactStatCountAggregateInputType | true
    _avg?: ImpactStatAvgAggregateInputType
    _sum?: ImpactStatSumAggregateInputType
    _min?: ImpactStatMinAggregateInputType
    _max?: ImpactStatMaxAggregateInputType
  }

  export type ImpactStatGroupByOutputType = {
    id: string
    title: string
    value: string
    description: string | null
    icon: string | null
    order: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ImpactStatCountAggregateOutputType | null
    _avg: ImpactStatAvgAggregateOutputType | null
    _sum: ImpactStatSumAggregateOutputType | null
    _min: ImpactStatMinAggregateOutputType | null
    _max: ImpactStatMaxAggregateOutputType | null
  }

  type GetImpactStatGroupByPayload<T extends ImpactStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImpactStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImpactStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImpactStatGroupByOutputType[P]>
            : GetScalarType<T[P], ImpactStatGroupByOutputType[P]>
        }
      >
    >


  export type ImpactStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    value?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["impactStat"]>



  export type ImpactStatSelectScalar = {
    id?: boolean
    title?: boolean
    value?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImpactStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "value" | "description" | "icon" | "order" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["impactStat"]>

  export type $ImpactStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImpactStat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      value: string
      description: string | null
      icon: string | null
      order: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["impactStat"]>
    composites: {}
  }

  type ImpactStatGetPayload<S extends boolean | null | undefined | ImpactStatDefaultArgs> = $Result.GetResult<Prisma.$ImpactStatPayload, S>

  type ImpactStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImpactStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImpactStatCountAggregateInputType | true
    }

  export interface ImpactStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImpactStat'], meta: { name: 'ImpactStat' } }
    /**
     * Find zero or one ImpactStat that matches the filter.
     * @param {ImpactStatFindUniqueArgs} args - Arguments to find a ImpactStat
     * @example
     * // Get one ImpactStat
     * const impactStat = await prisma.impactStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImpactStatFindUniqueArgs>(args: SelectSubset<T, ImpactStatFindUniqueArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImpactStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImpactStatFindUniqueOrThrowArgs} args - Arguments to find a ImpactStat
     * @example
     * // Get one ImpactStat
     * const impactStat = await prisma.impactStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImpactStatFindUniqueOrThrowArgs>(args: SelectSubset<T, ImpactStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatFindFirstArgs} args - Arguments to find a ImpactStat
     * @example
     * // Get one ImpactStat
     * const impactStat = await prisma.impactStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImpactStatFindFirstArgs>(args?: SelectSubset<T, ImpactStatFindFirstArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImpactStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatFindFirstOrThrowArgs} args - Arguments to find a ImpactStat
     * @example
     * // Get one ImpactStat
     * const impactStat = await prisma.impactStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImpactStatFindFirstOrThrowArgs>(args?: SelectSubset<T, ImpactStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImpactStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImpactStats
     * const impactStats = await prisma.impactStat.findMany()
     * 
     * // Get first 10 ImpactStats
     * const impactStats = await prisma.impactStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const impactStatWithIdOnly = await prisma.impactStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImpactStatFindManyArgs>(args?: SelectSubset<T, ImpactStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImpactStat.
     * @param {ImpactStatCreateArgs} args - Arguments to create a ImpactStat.
     * @example
     * // Create one ImpactStat
     * const ImpactStat = await prisma.impactStat.create({
     *   data: {
     *     // ... data to create a ImpactStat
     *   }
     * })
     * 
     */
    create<T extends ImpactStatCreateArgs>(args: SelectSubset<T, ImpactStatCreateArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImpactStats.
     * @param {ImpactStatCreateManyArgs} args - Arguments to create many ImpactStats.
     * @example
     * // Create many ImpactStats
     * const impactStat = await prisma.impactStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImpactStatCreateManyArgs>(args?: SelectSubset<T, ImpactStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImpactStat.
     * @param {ImpactStatDeleteArgs} args - Arguments to delete one ImpactStat.
     * @example
     * // Delete one ImpactStat
     * const ImpactStat = await prisma.impactStat.delete({
     *   where: {
     *     // ... filter to delete one ImpactStat
     *   }
     * })
     * 
     */
    delete<T extends ImpactStatDeleteArgs>(args: SelectSubset<T, ImpactStatDeleteArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImpactStat.
     * @param {ImpactStatUpdateArgs} args - Arguments to update one ImpactStat.
     * @example
     * // Update one ImpactStat
     * const impactStat = await prisma.impactStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImpactStatUpdateArgs>(args: SelectSubset<T, ImpactStatUpdateArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImpactStats.
     * @param {ImpactStatDeleteManyArgs} args - Arguments to filter ImpactStats to delete.
     * @example
     * // Delete a few ImpactStats
     * const { count } = await prisma.impactStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImpactStatDeleteManyArgs>(args?: SelectSubset<T, ImpactStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImpactStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImpactStats
     * const impactStat = await prisma.impactStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImpactStatUpdateManyArgs>(args: SelectSubset<T, ImpactStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImpactStat.
     * @param {ImpactStatUpsertArgs} args - Arguments to update or create a ImpactStat.
     * @example
     * // Update or create a ImpactStat
     * const impactStat = await prisma.impactStat.upsert({
     *   create: {
     *     // ... data to create a ImpactStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImpactStat we want to update
     *   }
     * })
     */
    upsert<T extends ImpactStatUpsertArgs>(args: SelectSubset<T, ImpactStatUpsertArgs<ExtArgs>>): Prisma__ImpactStatClient<$Result.GetResult<Prisma.$ImpactStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImpactStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatCountArgs} args - Arguments to filter ImpactStats to count.
     * @example
     * // Count the number of ImpactStats
     * const count = await prisma.impactStat.count({
     *   where: {
     *     // ... the filter for the ImpactStats we want to count
     *   }
     * })
    **/
    count<T extends ImpactStatCountArgs>(
      args?: Subset<T, ImpactStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImpactStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImpactStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImpactStatAggregateArgs>(args: Subset<T, ImpactStatAggregateArgs>): Prisma.PrismaPromise<GetImpactStatAggregateType<T>>

    /**
     * Group by ImpactStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactStatGroupByArgs} args - Group by arguments.
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
      T extends ImpactStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImpactStatGroupByArgs['orderBy'] }
        : { orderBy?: ImpactStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImpactStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImpactStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImpactStat model
   */
  readonly fields: ImpactStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImpactStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImpactStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ImpactStat model
   */
  interface ImpactStatFieldRefs {
    readonly id: FieldRef<"ImpactStat", 'String'>
    readonly title: FieldRef<"ImpactStat", 'String'>
    readonly value: FieldRef<"ImpactStat", 'String'>
    readonly description: FieldRef<"ImpactStat", 'String'>
    readonly icon: FieldRef<"ImpactStat", 'String'>
    readonly order: FieldRef<"ImpactStat", 'Int'>
    readonly isActive: FieldRef<"ImpactStat", 'Boolean'>
    readonly createdAt: FieldRef<"ImpactStat", 'DateTime'>
    readonly updatedAt: FieldRef<"ImpactStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImpactStat findUnique
   */
  export type ImpactStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter, which ImpactStat to fetch.
     */
    where: ImpactStatWhereUniqueInput
  }

  /**
   * ImpactStat findUniqueOrThrow
   */
  export type ImpactStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter, which ImpactStat to fetch.
     */
    where: ImpactStatWhereUniqueInput
  }

  /**
   * ImpactStat findFirst
   */
  export type ImpactStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter, which ImpactStat to fetch.
     */
    where?: ImpactStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactStats to fetch.
     */
    orderBy?: ImpactStatOrderByWithRelationInput | ImpactStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactStats.
     */
    cursor?: ImpactStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactStats.
     */
    distinct?: ImpactStatScalarFieldEnum | ImpactStatScalarFieldEnum[]
  }

  /**
   * ImpactStat findFirstOrThrow
   */
  export type ImpactStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter, which ImpactStat to fetch.
     */
    where?: ImpactStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactStats to fetch.
     */
    orderBy?: ImpactStatOrderByWithRelationInput | ImpactStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImpactStats.
     */
    cursor?: ImpactStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImpactStats.
     */
    distinct?: ImpactStatScalarFieldEnum | ImpactStatScalarFieldEnum[]
  }

  /**
   * ImpactStat findMany
   */
  export type ImpactStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter, which ImpactStats to fetch.
     */
    where?: ImpactStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImpactStats to fetch.
     */
    orderBy?: ImpactStatOrderByWithRelationInput | ImpactStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImpactStats.
     */
    cursor?: ImpactStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImpactStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImpactStats.
     */
    skip?: number
    distinct?: ImpactStatScalarFieldEnum | ImpactStatScalarFieldEnum[]
  }

  /**
   * ImpactStat create
   */
  export type ImpactStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * The data needed to create a ImpactStat.
     */
    data: XOR<ImpactStatCreateInput, ImpactStatUncheckedCreateInput>
  }

  /**
   * ImpactStat createMany
   */
  export type ImpactStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImpactStats.
     */
    data: ImpactStatCreateManyInput | ImpactStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImpactStat update
   */
  export type ImpactStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * The data needed to update a ImpactStat.
     */
    data: XOR<ImpactStatUpdateInput, ImpactStatUncheckedUpdateInput>
    /**
     * Choose, which ImpactStat to update.
     */
    where: ImpactStatWhereUniqueInput
  }

  /**
   * ImpactStat updateMany
   */
  export type ImpactStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImpactStats.
     */
    data: XOR<ImpactStatUpdateManyMutationInput, ImpactStatUncheckedUpdateManyInput>
    /**
     * Filter which ImpactStats to update
     */
    where?: ImpactStatWhereInput
    /**
     * Limit how many ImpactStats to update.
     */
    limit?: number
  }

  /**
   * ImpactStat upsert
   */
  export type ImpactStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * The filter to search for the ImpactStat to update in case it exists.
     */
    where: ImpactStatWhereUniqueInput
    /**
     * In case the ImpactStat found by the `where` argument doesn't exist, create a new ImpactStat with this data.
     */
    create: XOR<ImpactStatCreateInput, ImpactStatUncheckedCreateInput>
    /**
     * In case the ImpactStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImpactStatUpdateInput, ImpactStatUncheckedUpdateInput>
  }

  /**
   * ImpactStat delete
   */
  export type ImpactStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
    /**
     * Filter which ImpactStat to delete.
     */
    where: ImpactStatWhereUniqueInput
  }

  /**
   * ImpactStat deleteMany
   */
  export type ImpactStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImpactStats to delete
     */
    where?: ImpactStatWhereInput
    /**
     * Limit how many ImpactStats to delete.
     */
    limit?: number
  }

  /**
   * ImpactStat without action
   */
  export type ImpactStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImpactStat
     */
    select?: ImpactStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImpactStat
     */
    omit?: ImpactStatOmit<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    mapUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: string | null
    address: string | null
    phone: string | null
    email: string | null
    website: string | null
    mapUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    address: number
    phone: number
    email: number
    website: number
    socialMedia: number
    mapUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactInfoMinAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    mapUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    mapUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    address?: true
    phone?: true
    email?: true
    website?: true
    socialMedia?: true
    mapUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: string
    address: string
    phone: string
    email: string
    website: string | null
    socialMedia: JsonValue
    mapUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContactInfoCountAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    socialMedia?: boolean
    mapUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactInfo"]>



  export type ContactInfoSelectScalar = {
    id?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    website?: boolean
    socialMedia?: boolean
    mapUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "phone" | "email" | "website" | "socialMedia" | "mapUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["contactInfo"]>

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      phone: string
      email: string
      website: string | null
      socialMedia: Prisma.JsonValue
      mapUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'String'>
    readonly address: FieldRef<"ContactInfo", 'String'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly website: FieldRef<"ContactInfo", 'String'>
    readonly socialMedia: FieldRef<"ContactInfo", 'Json'>
    readonly mapUrl: FieldRef<"ContactInfo", 'String'>
    readonly isActive: FieldRef<"ContactInfo", 'Boolean'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
  }


  /**
   * Model CTAContent
   */

  export type AggregateCTAContent = {
    _count: CTAContentCountAggregateOutputType | null
    _min: CTAContentMinAggregateOutputType | null
    _max: CTAContentMaxAggregateOutputType | null
  }

  export type CTAContentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    buttonText: string | null
    buttonLink: string | null
    bgColor: string | null
    textColor: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CTAContentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    buttonText: string | null
    buttonLink: string | null
    bgColor: string | null
    textColor: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CTAContentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    buttonText: number
    buttonLink: number
    bgColor: number
    textColor: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CTAContentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    bgColor?: true
    textColor?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CTAContentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    bgColor?: true
    textColor?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CTAContentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    buttonText?: true
    buttonLink?: true
    bgColor?: true
    textColor?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CTAContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CTAContent to aggregate.
     */
    where?: CTAContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTAContents to fetch.
     */
    orderBy?: CTAContentOrderByWithRelationInput | CTAContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CTAContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTAContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTAContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CTAContents
    **/
    _count?: true | CTAContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CTAContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CTAContentMaxAggregateInputType
  }

  export type GetCTAContentAggregateType<T extends CTAContentAggregateArgs> = {
        [P in keyof T & keyof AggregateCTAContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCTAContent[P]>
      : GetScalarType<T[P], AggregateCTAContent[P]>
  }




  export type CTAContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CTAContentWhereInput
    orderBy?: CTAContentOrderByWithAggregationInput | CTAContentOrderByWithAggregationInput[]
    by: CTAContentScalarFieldEnum[] | CTAContentScalarFieldEnum
    having?: CTAContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CTAContentCountAggregateInputType | true
    _min?: CTAContentMinAggregateInputType
    _max?: CTAContentMaxAggregateInputType
  }

  export type CTAContentGroupByOutputType = {
    id: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
    bgColor: string | null
    textColor: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CTAContentCountAggregateOutputType | null
    _min: CTAContentMinAggregateOutputType | null
    _max: CTAContentMaxAggregateOutputType | null
  }

  type GetCTAContentGroupByPayload<T extends CTAContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CTAContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CTAContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CTAContentGroupByOutputType[P]>
            : GetScalarType<T[P], CTAContentGroupByOutputType[P]>
        }
      >
    >


  export type CTAContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    bgColor?: boolean
    textColor?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cTAContent"]>



  export type CTAContentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    buttonText?: boolean
    buttonLink?: boolean
    bgColor?: boolean
    textColor?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CTAContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "buttonText" | "buttonLink" | "bgColor" | "textColor" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["cTAContent"]>

  export type $CTAContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CTAContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      buttonText: string
      buttonLink: string
      bgColor: string | null
      textColor: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cTAContent"]>
    composites: {}
  }

  type CTAContentGetPayload<S extends boolean | null | undefined | CTAContentDefaultArgs> = $Result.GetResult<Prisma.$CTAContentPayload, S>

  type CTAContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CTAContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CTAContentCountAggregateInputType | true
    }

  export interface CTAContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CTAContent'], meta: { name: 'CTAContent' } }
    /**
     * Find zero or one CTAContent that matches the filter.
     * @param {CTAContentFindUniqueArgs} args - Arguments to find a CTAContent
     * @example
     * // Get one CTAContent
     * const cTAContent = await prisma.cTAContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CTAContentFindUniqueArgs>(args: SelectSubset<T, CTAContentFindUniqueArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CTAContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CTAContentFindUniqueOrThrowArgs} args - Arguments to find a CTAContent
     * @example
     * // Get one CTAContent
     * const cTAContent = await prisma.cTAContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CTAContentFindUniqueOrThrowArgs>(args: SelectSubset<T, CTAContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CTAContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentFindFirstArgs} args - Arguments to find a CTAContent
     * @example
     * // Get one CTAContent
     * const cTAContent = await prisma.cTAContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CTAContentFindFirstArgs>(args?: SelectSubset<T, CTAContentFindFirstArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CTAContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentFindFirstOrThrowArgs} args - Arguments to find a CTAContent
     * @example
     * // Get one CTAContent
     * const cTAContent = await prisma.cTAContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CTAContentFindFirstOrThrowArgs>(args?: SelectSubset<T, CTAContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CTAContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CTAContents
     * const cTAContents = await prisma.cTAContent.findMany()
     * 
     * // Get first 10 CTAContents
     * const cTAContents = await prisma.cTAContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cTAContentWithIdOnly = await prisma.cTAContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CTAContentFindManyArgs>(args?: SelectSubset<T, CTAContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CTAContent.
     * @param {CTAContentCreateArgs} args - Arguments to create a CTAContent.
     * @example
     * // Create one CTAContent
     * const CTAContent = await prisma.cTAContent.create({
     *   data: {
     *     // ... data to create a CTAContent
     *   }
     * })
     * 
     */
    create<T extends CTAContentCreateArgs>(args: SelectSubset<T, CTAContentCreateArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CTAContents.
     * @param {CTAContentCreateManyArgs} args - Arguments to create many CTAContents.
     * @example
     * // Create many CTAContents
     * const cTAContent = await prisma.cTAContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CTAContentCreateManyArgs>(args?: SelectSubset<T, CTAContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CTAContent.
     * @param {CTAContentDeleteArgs} args - Arguments to delete one CTAContent.
     * @example
     * // Delete one CTAContent
     * const CTAContent = await prisma.cTAContent.delete({
     *   where: {
     *     // ... filter to delete one CTAContent
     *   }
     * })
     * 
     */
    delete<T extends CTAContentDeleteArgs>(args: SelectSubset<T, CTAContentDeleteArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CTAContent.
     * @param {CTAContentUpdateArgs} args - Arguments to update one CTAContent.
     * @example
     * // Update one CTAContent
     * const cTAContent = await prisma.cTAContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CTAContentUpdateArgs>(args: SelectSubset<T, CTAContentUpdateArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CTAContents.
     * @param {CTAContentDeleteManyArgs} args - Arguments to filter CTAContents to delete.
     * @example
     * // Delete a few CTAContents
     * const { count } = await prisma.cTAContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CTAContentDeleteManyArgs>(args?: SelectSubset<T, CTAContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CTAContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CTAContents
     * const cTAContent = await prisma.cTAContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CTAContentUpdateManyArgs>(args: SelectSubset<T, CTAContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CTAContent.
     * @param {CTAContentUpsertArgs} args - Arguments to update or create a CTAContent.
     * @example
     * // Update or create a CTAContent
     * const cTAContent = await prisma.cTAContent.upsert({
     *   create: {
     *     // ... data to create a CTAContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CTAContent we want to update
     *   }
     * })
     */
    upsert<T extends CTAContentUpsertArgs>(args: SelectSubset<T, CTAContentUpsertArgs<ExtArgs>>): Prisma__CTAContentClient<$Result.GetResult<Prisma.$CTAContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CTAContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentCountArgs} args - Arguments to filter CTAContents to count.
     * @example
     * // Count the number of CTAContents
     * const count = await prisma.cTAContent.count({
     *   where: {
     *     // ... the filter for the CTAContents we want to count
     *   }
     * })
    **/
    count<T extends CTAContentCountArgs>(
      args?: Subset<T, CTAContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CTAContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CTAContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CTAContentAggregateArgs>(args: Subset<T, CTAContentAggregateArgs>): Prisma.PrismaPromise<GetCTAContentAggregateType<T>>

    /**
     * Group by CTAContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CTAContentGroupByArgs} args - Group by arguments.
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
      T extends CTAContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CTAContentGroupByArgs['orderBy'] }
        : { orderBy?: CTAContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CTAContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCTAContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CTAContent model
   */
  readonly fields: CTAContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CTAContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CTAContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CTAContent model
   */
  interface CTAContentFieldRefs {
    readonly id: FieldRef<"CTAContent", 'String'>
    readonly title: FieldRef<"CTAContent", 'String'>
    readonly description: FieldRef<"CTAContent", 'String'>
    readonly buttonText: FieldRef<"CTAContent", 'String'>
    readonly buttonLink: FieldRef<"CTAContent", 'String'>
    readonly bgColor: FieldRef<"CTAContent", 'String'>
    readonly textColor: FieldRef<"CTAContent", 'String'>
    readonly isActive: FieldRef<"CTAContent", 'Boolean'>
    readonly createdAt: FieldRef<"CTAContent", 'DateTime'>
    readonly updatedAt: FieldRef<"CTAContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CTAContent findUnique
   */
  export type CTAContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter, which CTAContent to fetch.
     */
    where: CTAContentWhereUniqueInput
  }

  /**
   * CTAContent findUniqueOrThrow
   */
  export type CTAContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter, which CTAContent to fetch.
     */
    where: CTAContentWhereUniqueInput
  }

  /**
   * CTAContent findFirst
   */
  export type CTAContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter, which CTAContent to fetch.
     */
    where?: CTAContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTAContents to fetch.
     */
    orderBy?: CTAContentOrderByWithRelationInput | CTAContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CTAContents.
     */
    cursor?: CTAContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTAContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTAContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CTAContents.
     */
    distinct?: CTAContentScalarFieldEnum | CTAContentScalarFieldEnum[]
  }

  /**
   * CTAContent findFirstOrThrow
   */
  export type CTAContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter, which CTAContent to fetch.
     */
    where?: CTAContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTAContents to fetch.
     */
    orderBy?: CTAContentOrderByWithRelationInput | CTAContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CTAContents.
     */
    cursor?: CTAContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTAContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTAContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CTAContents.
     */
    distinct?: CTAContentScalarFieldEnum | CTAContentScalarFieldEnum[]
  }

  /**
   * CTAContent findMany
   */
  export type CTAContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter, which CTAContents to fetch.
     */
    where?: CTAContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CTAContents to fetch.
     */
    orderBy?: CTAContentOrderByWithRelationInput | CTAContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CTAContents.
     */
    cursor?: CTAContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CTAContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CTAContents.
     */
    skip?: number
    distinct?: CTAContentScalarFieldEnum | CTAContentScalarFieldEnum[]
  }

  /**
   * CTAContent create
   */
  export type CTAContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * The data needed to create a CTAContent.
     */
    data: XOR<CTAContentCreateInput, CTAContentUncheckedCreateInput>
  }

  /**
   * CTAContent createMany
   */
  export type CTAContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CTAContents.
     */
    data: CTAContentCreateManyInput | CTAContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CTAContent update
   */
  export type CTAContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * The data needed to update a CTAContent.
     */
    data: XOR<CTAContentUpdateInput, CTAContentUncheckedUpdateInput>
    /**
     * Choose, which CTAContent to update.
     */
    where: CTAContentWhereUniqueInput
  }

  /**
   * CTAContent updateMany
   */
  export type CTAContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CTAContents.
     */
    data: XOR<CTAContentUpdateManyMutationInput, CTAContentUncheckedUpdateManyInput>
    /**
     * Filter which CTAContents to update
     */
    where?: CTAContentWhereInput
    /**
     * Limit how many CTAContents to update.
     */
    limit?: number
  }

  /**
   * CTAContent upsert
   */
  export type CTAContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * The filter to search for the CTAContent to update in case it exists.
     */
    where: CTAContentWhereUniqueInput
    /**
     * In case the CTAContent found by the `where` argument doesn't exist, create a new CTAContent with this data.
     */
    create: XOR<CTAContentCreateInput, CTAContentUncheckedCreateInput>
    /**
     * In case the CTAContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CTAContentUpdateInput, CTAContentUncheckedUpdateInput>
  }

  /**
   * CTAContent delete
   */
  export type CTAContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
    /**
     * Filter which CTAContent to delete.
     */
    where: CTAContentWhereUniqueInput
  }

  /**
   * CTAContent deleteMany
   */
  export type CTAContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CTAContents to delete
     */
    where?: CTAContentWhereInput
    /**
     * Limit how many CTAContents to delete.
     */
    limit?: number
  }

  /**
   * CTAContent without action
   */
  export type CTAContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CTAContent
     */
    select?: CTAContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CTAContent
     */
    omit?: CTAContentOmit<ExtArgs> | null
  }


  /**
   * Model FooterContent
   */

  export type AggregateFooterContent = {
    _count: FooterContentCountAggregateOutputType | null
    _min: FooterContentMinAggregateOutputType | null
    _max: FooterContentMaxAggregateOutputType | null
  }

  export type FooterContentMinAggregateOutputType = {
    id: string | null
    description: string | null
    copyright: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterContentMaxAggregateOutputType = {
    id: string | null
    description: string | null
    copyright: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FooterContentCountAggregateOutputType = {
    id: number
    description: number
    quickLinks: number
    socialLinks: number
    copyright: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FooterContentMinAggregateInputType = {
    id?: true
    description?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterContentMaxAggregateInputType = {
    id?: true
    description?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FooterContentCountAggregateInputType = {
    id?: true
    description?: true
    quickLinks?: true
    socialLinks?: true
    copyright?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterContent to aggregate.
     */
    where?: FooterContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterContents to fetch.
     */
    orderBy?: FooterContentOrderByWithRelationInput | FooterContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FooterContents
    **/
    _count?: true | FooterContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterContentMaxAggregateInputType
  }

  export type GetFooterContentAggregateType<T extends FooterContentAggregateArgs> = {
        [P in keyof T & keyof AggregateFooterContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooterContent[P]>
      : GetScalarType<T[P], AggregateFooterContent[P]>
  }




  export type FooterContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterContentWhereInput
    orderBy?: FooterContentOrderByWithAggregationInput | FooterContentOrderByWithAggregationInput[]
    by: FooterContentScalarFieldEnum[] | FooterContentScalarFieldEnum
    having?: FooterContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterContentCountAggregateInputType | true
    _min?: FooterContentMinAggregateInputType
    _max?: FooterContentMaxAggregateInputType
  }

  export type FooterContentGroupByOutputType = {
    id: string
    description: string
    quickLinks: JsonValue
    socialLinks: JsonValue
    copyright: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FooterContentCountAggregateOutputType | null
    _min: FooterContentMinAggregateOutputType | null
    _max: FooterContentMaxAggregateOutputType | null
  }

  type GetFooterContentGroupByPayload<T extends FooterContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterContentGroupByOutputType[P]>
            : GetScalarType<T[P], FooterContentGroupByOutputType[P]>
        }
      >
    >


  export type FooterContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quickLinks?: boolean
    socialLinks?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerContent"]>



  export type FooterContentSelectScalar = {
    id?: boolean
    description?: boolean
    quickLinks?: boolean
    socialLinks?: boolean
    copyright?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FooterContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quickLinks" | "socialLinks" | "copyright" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["footerContent"]>

  export type $FooterContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FooterContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quickLinks: Prisma.JsonValue
      socialLinks: Prisma.JsonValue
      copyright: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["footerContent"]>
    composites: {}
  }

  type FooterContentGetPayload<S extends boolean | null | undefined | FooterContentDefaultArgs> = $Result.GetResult<Prisma.$FooterContentPayload, S>

  type FooterContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FooterContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FooterContentCountAggregateInputType | true
    }

  export interface FooterContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FooterContent'], meta: { name: 'FooterContent' } }
    /**
     * Find zero or one FooterContent that matches the filter.
     * @param {FooterContentFindUniqueArgs} args - Arguments to find a FooterContent
     * @example
     * // Get one FooterContent
     * const footerContent = await prisma.footerContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterContentFindUniqueArgs>(args: SelectSubset<T, FooterContentFindUniqueArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FooterContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FooterContentFindUniqueOrThrowArgs} args - Arguments to find a FooterContent
     * @example
     * // Get one FooterContent
     * const footerContent = await prisma.footerContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterContentFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentFindFirstArgs} args - Arguments to find a FooterContent
     * @example
     * // Get one FooterContent
     * const footerContent = await prisma.footerContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterContentFindFirstArgs>(args?: SelectSubset<T, FooterContentFindFirstArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FooterContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentFindFirstOrThrowArgs} args - Arguments to find a FooterContent
     * @example
     * // Get one FooterContent
     * const footerContent = await prisma.footerContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterContentFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FooterContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FooterContents
     * const footerContents = await prisma.footerContent.findMany()
     * 
     * // Get first 10 FooterContents
     * const footerContents = await prisma.footerContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerContentWithIdOnly = await prisma.footerContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterContentFindManyArgs>(args?: SelectSubset<T, FooterContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FooterContent.
     * @param {FooterContentCreateArgs} args - Arguments to create a FooterContent.
     * @example
     * // Create one FooterContent
     * const FooterContent = await prisma.footerContent.create({
     *   data: {
     *     // ... data to create a FooterContent
     *   }
     * })
     * 
     */
    create<T extends FooterContentCreateArgs>(args: SelectSubset<T, FooterContentCreateArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FooterContents.
     * @param {FooterContentCreateManyArgs} args - Arguments to create many FooterContents.
     * @example
     * // Create many FooterContents
     * const footerContent = await prisma.footerContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterContentCreateManyArgs>(args?: SelectSubset<T, FooterContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FooterContent.
     * @param {FooterContentDeleteArgs} args - Arguments to delete one FooterContent.
     * @example
     * // Delete one FooterContent
     * const FooterContent = await prisma.footerContent.delete({
     *   where: {
     *     // ... filter to delete one FooterContent
     *   }
     * })
     * 
     */
    delete<T extends FooterContentDeleteArgs>(args: SelectSubset<T, FooterContentDeleteArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FooterContent.
     * @param {FooterContentUpdateArgs} args - Arguments to update one FooterContent.
     * @example
     * // Update one FooterContent
     * const footerContent = await prisma.footerContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterContentUpdateArgs>(args: SelectSubset<T, FooterContentUpdateArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FooterContents.
     * @param {FooterContentDeleteManyArgs} args - Arguments to filter FooterContents to delete.
     * @example
     * // Delete a few FooterContents
     * const { count } = await prisma.footerContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterContentDeleteManyArgs>(args?: SelectSubset<T, FooterContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FooterContents
     * const footerContent = await prisma.footerContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterContentUpdateManyArgs>(args: SelectSubset<T, FooterContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FooterContent.
     * @param {FooterContentUpsertArgs} args - Arguments to update or create a FooterContent.
     * @example
     * // Update or create a FooterContent
     * const footerContent = await prisma.footerContent.upsert({
     *   create: {
     *     // ... data to create a FooterContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FooterContent we want to update
     *   }
     * })
     */
    upsert<T extends FooterContentUpsertArgs>(args: SelectSubset<T, FooterContentUpsertArgs<ExtArgs>>): Prisma__FooterContentClient<$Result.GetResult<Prisma.$FooterContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FooterContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentCountArgs} args - Arguments to filter FooterContents to count.
     * @example
     * // Count the number of FooterContents
     * const count = await prisma.footerContent.count({
     *   where: {
     *     // ... the filter for the FooterContents we want to count
     *   }
     * })
    **/
    count<T extends FooterContentCountArgs>(
      args?: Subset<T, FooterContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FooterContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FooterContentAggregateArgs>(args: Subset<T, FooterContentAggregateArgs>): Prisma.PrismaPromise<GetFooterContentAggregateType<T>>

    /**
     * Group by FooterContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterContentGroupByArgs} args - Group by arguments.
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
      T extends FooterContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterContentGroupByArgs['orderBy'] }
        : { orderBy?: FooterContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FooterContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FooterContent model
   */
  readonly fields: FooterContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FooterContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the FooterContent model
   */
  interface FooterContentFieldRefs {
    readonly id: FieldRef<"FooterContent", 'String'>
    readonly description: FieldRef<"FooterContent", 'String'>
    readonly quickLinks: FieldRef<"FooterContent", 'Json'>
    readonly socialLinks: FieldRef<"FooterContent", 'Json'>
    readonly copyright: FieldRef<"FooterContent", 'String'>
    readonly isActive: FieldRef<"FooterContent", 'Boolean'>
    readonly createdAt: FieldRef<"FooterContent", 'DateTime'>
    readonly updatedAt: FieldRef<"FooterContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FooterContent findUnique
   */
  export type FooterContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter, which FooterContent to fetch.
     */
    where: FooterContentWhereUniqueInput
  }

  /**
   * FooterContent findUniqueOrThrow
   */
  export type FooterContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter, which FooterContent to fetch.
     */
    where: FooterContentWhereUniqueInput
  }

  /**
   * FooterContent findFirst
   */
  export type FooterContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter, which FooterContent to fetch.
     */
    where?: FooterContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterContents to fetch.
     */
    orderBy?: FooterContentOrderByWithRelationInput | FooterContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterContents.
     */
    cursor?: FooterContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterContents.
     */
    distinct?: FooterContentScalarFieldEnum | FooterContentScalarFieldEnum[]
  }

  /**
   * FooterContent findFirstOrThrow
   */
  export type FooterContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter, which FooterContent to fetch.
     */
    where?: FooterContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterContents to fetch.
     */
    orderBy?: FooterContentOrderByWithRelationInput | FooterContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterContents.
     */
    cursor?: FooterContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterContents.
     */
    distinct?: FooterContentScalarFieldEnum | FooterContentScalarFieldEnum[]
  }

  /**
   * FooterContent findMany
   */
  export type FooterContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter, which FooterContents to fetch.
     */
    where?: FooterContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterContents to fetch.
     */
    orderBy?: FooterContentOrderByWithRelationInput | FooterContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FooterContents.
     */
    cursor?: FooterContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterContents.
     */
    skip?: number
    distinct?: FooterContentScalarFieldEnum | FooterContentScalarFieldEnum[]
  }

  /**
   * FooterContent create
   */
  export type FooterContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * The data needed to create a FooterContent.
     */
    data: XOR<FooterContentCreateInput, FooterContentUncheckedCreateInput>
  }

  /**
   * FooterContent createMany
   */
  export type FooterContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FooterContents.
     */
    data: FooterContentCreateManyInput | FooterContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FooterContent update
   */
  export type FooterContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * The data needed to update a FooterContent.
     */
    data: XOR<FooterContentUpdateInput, FooterContentUncheckedUpdateInput>
    /**
     * Choose, which FooterContent to update.
     */
    where: FooterContentWhereUniqueInput
  }

  /**
   * FooterContent updateMany
   */
  export type FooterContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FooterContents.
     */
    data: XOR<FooterContentUpdateManyMutationInput, FooterContentUncheckedUpdateManyInput>
    /**
     * Filter which FooterContents to update
     */
    where?: FooterContentWhereInput
    /**
     * Limit how many FooterContents to update.
     */
    limit?: number
  }

  /**
   * FooterContent upsert
   */
  export type FooterContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * The filter to search for the FooterContent to update in case it exists.
     */
    where: FooterContentWhereUniqueInput
    /**
     * In case the FooterContent found by the `where` argument doesn't exist, create a new FooterContent with this data.
     */
    create: XOR<FooterContentCreateInput, FooterContentUncheckedCreateInput>
    /**
     * In case the FooterContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterContentUpdateInput, FooterContentUncheckedUpdateInput>
  }

  /**
   * FooterContent delete
   */
  export type FooterContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
    /**
     * Filter which FooterContent to delete.
     */
    where: FooterContentWhereUniqueInput
  }

  /**
   * FooterContent deleteMany
   */
  export type FooterContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterContents to delete
     */
    where?: FooterContentWhereInput
    /**
     * Limit how many FooterContents to delete.
     */
    limit?: number
  }

  /**
   * FooterContent without action
   */
  export type FooterContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterContent
     */
    select?: FooterContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FooterContent
     */
    omit?: FooterContentOmit<ExtArgs> | null
  }


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
    email: string | null
    username: string | null
    name: string | null
    phone: string | null
    role: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    phone: string | null
    role: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    name: number
    phone: number
    role: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    phone?: true
    role?: true
    password?: true
    isActive?: true
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
    email: string | null
    username: string | null
    name: string
    phone: string
    role: string
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    username?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "name" | "phone" | "role" | "password" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      username: string | null
      name: string
      phone: string
      role: string
      password: string
      isActive: boolean
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
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
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


  export const HeroContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroContentScalarFieldEnum = (typeof HeroContentScalarFieldEnum)[keyof typeof HeroContentScalarFieldEnum]


  export const AboutContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mission: 'mission',
    vision: 'vision',
    values: 'values',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutContentScalarFieldEnum = (typeof AboutContentScalarFieldEnum)[keyof typeof AboutContentScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    category: 'category',
    status: 'status',
    targetGroup: 'targetGroup',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ImpactStatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    value: 'value',
    description: 'description',
    icon: 'icon',
    order: 'order',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImpactStatScalarFieldEnum = (typeof ImpactStatScalarFieldEnum)[keyof typeof ImpactStatScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    address: 'address',
    phone: 'phone',
    email: 'email',
    website: 'website',
    socialMedia: 'socialMedia',
    mapUrl: 'mapUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const CTAContentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    bgColor: 'bgColor',
    textColor: 'textColor',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CTAContentScalarFieldEnum = (typeof CTAContentScalarFieldEnum)[keyof typeof CTAContentScalarFieldEnum]


  export const FooterContentScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quickLinks: 'quickLinks',
    socialLinks: 'socialLinks',
    copyright: 'copyright',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FooterContentScalarFieldEnum = (typeof FooterContentScalarFieldEnum)[keyof typeof FooterContentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    name: 'name',
    phone: 'phone',
    role: 'role',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const HeroContentOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    description: 'description',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    imageUrl: 'imageUrl'
  };

  export type HeroContentOrderByRelevanceFieldEnum = (typeof HeroContentOrderByRelevanceFieldEnum)[keyof typeof HeroContentOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AboutContentOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    mission: 'mission',
    vision: 'vision',
    imageUrl: 'imageUrl'
  };

  export type AboutContentOrderByRelevanceFieldEnum = (typeof AboutContentOrderByRelevanceFieldEnum)[keyof typeof AboutContentOrderByRelevanceFieldEnum]


  export const ProgramOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    category: 'category',
    status: 'status',
    targetGroup: 'targetGroup',
    location: 'location'
  };

  export type ProgramOrderByRelevanceFieldEnum = (typeof ProgramOrderByRelevanceFieldEnum)[keyof typeof ProgramOrderByRelevanceFieldEnum]


  export const ImpactStatOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    value: 'value',
    description: 'description',
    icon: 'icon'
  };

  export type ImpactStatOrderByRelevanceFieldEnum = (typeof ImpactStatOrderByRelevanceFieldEnum)[keyof typeof ImpactStatOrderByRelevanceFieldEnum]


  export const ContactInfoOrderByRelevanceFieldEnum: {
    id: 'id',
    address: 'address',
    phone: 'phone',
    email: 'email',
    website: 'website',
    mapUrl: 'mapUrl'
  };

  export type ContactInfoOrderByRelevanceFieldEnum = (typeof ContactInfoOrderByRelevanceFieldEnum)[keyof typeof ContactInfoOrderByRelevanceFieldEnum]


  export const CTAContentOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    bgColor: 'bgColor',
    textColor: 'textColor'
  };

  export type CTAContentOrderByRelevanceFieldEnum = (typeof CTAContentOrderByRelevanceFieldEnum)[keyof typeof CTAContentOrderByRelevanceFieldEnum]


  export const FooterContentOrderByRelevanceFieldEnum: {
    id: 'id',
    description: 'description',
    copyright: 'copyright'
  };

  export type FooterContentOrderByRelevanceFieldEnum = (typeof FooterContentOrderByRelevanceFieldEnum)[keyof typeof FooterContentOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    name: 'name',
    phone: 'phone',
    role: 'role',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type HeroContentWhereInput = {
    AND?: HeroContentWhereInput | HeroContentWhereInput[]
    OR?: HeroContentWhereInput[]
    NOT?: HeroContentWhereInput | HeroContentWhereInput[]
    id?: StringFilter<"HeroContent"> | string
    title?: StringFilter<"HeroContent"> | string
    subtitle?: StringFilter<"HeroContent"> | string
    description?: StringFilter<"HeroContent"> | string
    buttonText?: StringFilter<"HeroContent"> | string
    buttonLink?: StringFilter<"HeroContent"> | string
    imageUrl?: StringNullableFilter<"HeroContent"> | string | null
    isActive?: BoolFilter<"HeroContent"> | boolean
    createdAt?: DateTimeFilter<"HeroContent"> | Date | string
    updatedAt?: DateTimeFilter<"HeroContent"> | Date | string
  }

  export type HeroContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: HeroContentOrderByRelevanceInput
  }

  export type HeroContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeroContentWhereInput | HeroContentWhereInput[]
    OR?: HeroContentWhereInput[]
    NOT?: HeroContentWhereInput | HeroContentWhereInput[]
    title?: StringFilter<"HeroContent"> | string
    subtitle?: StringFilter<"HeroContent"> | string
    description?: StringFilter<"HeroContent"> | string
    buttonText?: StringFilter<"HeroContent"> | string
    buttonLink?: StringFilter<"HeroContent"> | string
    imageUrl?: StringNullableFilter<"HeroContent"> | string | null
    isActive?: BoolFilter<"HeroContent"> | boolean
    createdAt?: DateTimeFilter<"HeroContent"> | Date | string
    updatedAt?: DateTimeFilter<"HeroContent"> | Date | string
  }, "id">

  export type HeroContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroContentCountOrderByAggregateInput
    _max?: HeroContentMaxOrderByAggregateInput
    _min?: HeroContentMinOrderByAggregateInput
  }

  export type HeroContentScalarWhereWithAggregatesInput = {
    AND?: HeroContentScalarWhereWithAggregatesInput | HeroContentScalarWhereWithAggregatesInput[]
    OR?: HeroContentScalarWhereWithAggregatesInput[]
    NOT?: HeroContentScalarWhereWithAggregatesInput | HeroContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HeroContent"> | string
    title?: StringWithAggregatesFilter<"HeroContent"> | string
    subtitle?: StringWithAggregatesFilter<"HeroContent"> | string
    description?: StringWithAggregatesFilter<"HeroContent"> | string
    buttonText?: StringWithAggregatesFilter<"HeroContent"> | string
    buttonLink?: StringWithAggregatesFilter<"HeroContent"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"HeroContent"> | string | null
    isActive?: BoolWithAggregatesFilter<"HeroContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HeroContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeroContent"> | Date | string
  }

  export type AboutContentWhereInput = {
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    id?: StringFilter<"AboutContent"> | string
    title?: StringFilter<"AboutContent"> | string
    description?: StringFilter<"AboutContent"> | string
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    values?: JsonFilter<"AboutContent">
    imageUrl?: StringNullableFilter<"AboutContent"> | string | null
    isActive?: BoolFilter<"AboutContent"> | boolean
    createdAt?: DateTimeFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }

  export type AboutContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    values?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AboutContentOrderByRelevanceInput
  }

  export type AboutContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    title?: StringFilter<"AboutContent"> | string
    description?: StringFilter<"AboutContent"> | string
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    values?: JsonFilter<"AboutContent">
    imageUrl?: StringNullableFilter<"AboutContent"> | string | null
    isActive?: BoolFilter<"AboutContent"> | boolean
    createdAt?: DateTimeFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }, "id">

  export type AboutContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    values?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutContentCountOrderByAggregateInput
    _max?: AboutContentMaxOrderByAggregateInput
    _min?: AboutContentMinOrderByAggregateInput
  }

  export type AboutContentScalarWhereWithAggregatesInput = {
    AND?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    OR?: AboutContentScalarWhereWithAggregatesInput[]
    NOT?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AboutContent"> | string
    title?: StringWithAggregatesFilter<"AboutContent"> | string
    description?: StringWithAggregatesFilter<"AboutContent"> | string
    mission?: StringWithAggregatesFilter<"AboutContent"> | string
    vision?: StringWithAggregatesFilter<"AboutContent"> | string
    values?: JsonWithAggregatesFilter<"AboutContent">
    imageUrl?: StringNullableWithAggregatesFilter<"AboutContent"> | string | null
    isActive?: BoolWithAggregatesFilter<"AboutContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    title?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    imageUrl?: StringNullableFilter<"Program"> | string | null
    category?: StringFilter<"Program"> | string
    status?: StringFilter<"Program"> | string
    targetGroup?: StringNullableFilter<"Program"> | string | null
    location?: StringNullableFilter<"Program"> | string | null
    startDate?: DateTimeNullableFilter<"Program"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Program"> | Date | string | null
    isActive?: BoolFilter<"Program"> | boolean
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    targetGroup?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ProgramOrderByRelevanceInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    title?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    imageUrl?: StringNullableFilter<"Program"> | string | null
    category?: StringFilter<"Program"> | string
    status?: StringFilter<"Program"> | string
    targetGroup?: StringNullableFilter<"Program"> | string | null
    location?: StringNullableFilter<"Program"> | string | null
    startDate?: DateTimeNullableFilter<"Program"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Program"> | Date | string | null
    isActive?: BoolFilter<"Program"> | boolean
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    category?: SortOrder
    status?: SortOrder
    targetGroup?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    title?: StringWithAggregatesFilter<"Program"> | string
    description?: StringWithAggregatesFilter<"Program"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    category?: StringWithAggregatesFilter<"Program"> | string
    status?: StringWithAggregatesFilter<"Program"> | string
    targetGroup?: StringNullableWithAggregatesFilter<"Program"> | string | null
    location?: StringNullableWithAggregatesFilter<"Program"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Program"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type ImpactStatWhereInput = {
    AND?: ImpactStatWhereInput | ImpactStatWhereInput[]
    OR?: ImpactStatWhereInput[]
    NOT?: ImpactStatWhereInput | ImpactStatWhereInput[]
    id?: StringFilter<"ImpactStat"> | string
    title?: StringFilter<"ImpactStat"> | string
    value?: StringFilter<"ImpactStat"> | string
    description?: StringNullableFilter<"ImpactStat"> | string | null
    icon?: StringNullableFilter<"ImpactStat"> | string | null
    order?: IntFilter<"ImpactStat"> | number
    isActive?: BoolFilter<"ImpactStat"> | boolean
    createdAt?: DateTimeFilter<"ImpactStat"> | Date | string
    updatedAt?: DateTimeFilter<"ImpactStat"> | Date | string
  }

  export type ImpactStatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ImpactStatOrderByRelevanceInput
  }

  export type ImpactStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImpactStatWhereInput | ImpactStatWhereInput[]
    OR?: ImpactStatWhereInput[]
    NOT?: ImpactStatWhereInput | ImpactStatWhereInput[]
    title?: StringFilter<"ImpactStat"> | string
    value?: StringFilter<"ImpactStat"> | string
    description?: StringNullableFilter<"ImpactStat"> | string | null
    icon?: StringNullableFilter<"ImpactStat"> | string | null
    order?: IntFilter<"ImpactStat"> | number
    isActive?: BoolFilter<"ImpactStat"> | boolean
    createdAt?: DateTimeFilter<"ImpactStat"> | Date | string
    updatedAt?: DateTimeFilter<"ImpactStat"> | Date | string
  }, "id">

  export type ImpactStatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImpactStatCountOrderByAggregateInput
    _avg?: ImpactStatAvgOrderByAggregateInput
    _max?: ImpactStatMaxOrderByAggregateInput
    _min?: ImpactStatMinOrderByAggregateInput
    _sum?: ImpactStatSumOrderByAggregateInput
  }

  export type ImpactStatScalarWhereWithAggregatesInput = {
    AND?: ImpactStatScalarWhereWithAggregatesInput | ImpactStatScalarWhereWithAggregatesInput[]
    OR?: ImpactStatScalarWhereWithAggregatesInput[]
    NOT?: ImpactStatScalarWhereWithAggregatesInput | ImpactStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImpactStat"> | string
    title?: StringWithAggregatesFilter<"ImpactStat"> | string
    value?: StringWithAggregatesFilter<"ImpactStat"> | string
    description?: StringNullableWithAggregatesFilter<"ImpactStat"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ImpactStat"> | string | null
    order?: IntWithAggregatesFilter<"ImpactStat"> | number
    isActive?: BoolWithAggregatesFilter<"ImpactStat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ImpactStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImpactStat"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: StringFilter<"ContactInfo"> | string
    address?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    website?: StringNullableFilter<"ContactInfo"> | string | null
    socialMedia?: JsonFilter<"ContactInfo">
    mapUrl?: StringNullableFilter<"ContactInfo"> | string | null
    isActive?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    mapUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ContactInfoOrderByRelevanceInput
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    address?: StringFilter<"ContactInfo"> | string
    phone?: StringFilter<"ContactInfo"> | string
    email?: StringFilter<"ContactInfo"> | string
    website?: StringNullableFilter<"ContactInfo"> | string | null
    socialMedia?: JsonFilter<"ContactInfo">
    mapUrl?: StringNullableFilter<"ContactInfo"> | string | null
    isActive?: BoolFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
  }, "id">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    mapUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactInfo"> | string
    address?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone?: StringWithAggregatesFilter<"ContactInfo"> | string
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    website?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    socialMedia?: JsonWithAggregatesFilter<"ContactInfo">
    mapUrl?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    isActive?: BoolWithAggregatesFilter<"ContactInfo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
  }

  export type CTAContentWhereInput = {
    AND?: CTAContentWhereInput | CTAContentWhereInput[]
    OR?: CTAContentWhereInput[]
    NOT?: CTAContentWhereInput | CTAContentWhereInput[]
    id?: StringFilter<"CTAContent"> | string
    title?: StringFilter<"CTAContent"> | string
    description?: StringFilter<"CTAContent"> | string
    buttonText?: StringFilter<"CTAContent"> | string
    buttonLink?: StringFilter<"CTAContent"> | string
    bgColor?: StringNullableFilter<"CTAContent"> | string | null
    textColor?: StringNullableFilter<"CTAContent"> | string | null
    isActive?: BoolFilter<"CTAContent"> | boolean
    createdAt?: DateTimeFilter<"CTAContent"> | Date | string
    updatedAt?: DateTimeFilter<"CTAContent"> | Date | string
  }

  export type CTAContentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    bgColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CTAContentOrderByRelevanceInput
  }

  export type CTAContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CTAContentWhereInput | CTAContentWhereInput[]
    OR?: CTAContentWhereInput[]
    NOT?: CTAContentWhereInput | CTAContentWhereInput[]
    title?: StringFilter<"CTAContent"> | string
    description?: StringFilter<"CTAContent"> | string
    buttonText?: StringFilter<"CTAContent"> | string
    buttonLink?: StringFilter<"CTAContent"> | string
    bgColor?: StringNullableFilter<"CTAContent"> | string | null
    textColor?: StringNullableFilter<"CTAContent"> | string | null
    isActive?: BoolFilter<"CTAContent"> | boolean
    createdAt?: DateTimeFilter<"CTAContent"> | Date | string
    updatedAt?: DateTimeFilter<"CTAContent"> | Date | string
  }, "id">

  export type CTAContentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    bgColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CTAContentCountOrderByAggregateInput
    _max?: CTAContentMaxOrderByAggregateInput
    _min?: CTAContentMinOrderByAggregateInput
  }

  export type CTAContentScalarWhereWithAggregatesInput = {
    AND?: CTAContentScalarWhereWithAggregatesInput | CTAContentScalarWhereWithAggregatesInput[]
    OR?: CTAContentScalarWhereWithAggregatesInput[]
    NOT?: CTAContentScalarWhereWithAggregatesInput | CTAContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CTAContent"> | string
    title?: StringWithAggregatesFilter<"CTAContent"> | string
    description?: StringWithAggregatesFilter<"CTAContent"> | string
    buttonText?: StringWithAggregatesFilter<"CTAContent"> | string
    buttonLink?: StringWithAggregatesFilter<"CTAContent"> | string
    bgColor?: StringNullableWithAggregatesFilter<"CTAContent"> | string | null
    textColor?: StringNullableWithAggregatesFilter<"CTAContent"> | string | null
    isActive?: BoolWithAggregatesFilter<"CTAContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CTAContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CTAContent"> | Date | string
  }

  export type FooterContentWhereInput = {
    AND?: FooterContentWhereInput | FooterContentWhereInput[]
    OR?: FooterContentWhereInput[]
    NOT?: FooterContentWhereInput | FooterContentWhereInput[]
    id?: StringFilter<"FooterContent"> | string
    description?: StringFilter<"FooterContent"> | string
    quickLinks?: JsonFilter<"FooterContent">
    socialLinks?: JsonFilter<"FooterContent">
    copyright?: StringFilter<"FooterContent"> | string
    isActive?: BoolFilter<"FooterContent"> | boolean
    createdAt?: DateTimeFilter<"FooterContent"> | Date | string
    updatedAt?: DateTimeFilter<"FooterContent"> | Date | string
  }

  export type FooterContentOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quickLinks?: SortOrder
    socialLinks?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: FooterContentOrderByRelevanceInput
  }

  export type FooterContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FooterContentWhereInput | FooterContentWhereInput[]
    OR?: FooterContentWhereInput[]
    NOT?: FooterContentWhereInput | FooterContentWhereInput[]
    description?: StringFilter<"FooterContent"> | string
    quickLinks?: JsonFilter<"FooterContent">
    socialLinks?: JsonFilter<"FooterContent">
    copyright?: StringFilter<"FooterContent"> | string
    isActive?: BoolFilter<"FooterContent"> | boolean
    createdAt?: DateTimeFilter<"FooterContent"> | Date | string
    updatedAt?: DateTimeFilter<"FooterContent"> | Date | string
  }, "id">

  export type FooterContentOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quickLinks?: SortOrder
    socialLinks?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterContentCountOrderByAggregateInput
    _max?: FooterContentMaxOrderByAggregateInput
    _min?: FooterContentMinOrderByAggregateInput
  }

  export type FooterContentScalarWhereWithAggregatesInput = {
    AND?: FooterContentScalarWhereWithAggregatesInput | FooterContentScalarWhereWithAggregatesInput[]
    OR?: FooterContentScalarWhereWithAggregatesInput[]
    NOT?: FooterContentScalarWhereWithAggregatesInput | FooterContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FooterContent"> | string
    description?: StringWithAggregatesFilter<"FooterContent"> | string
    quickLinks?: JsonWithAggregatesFilter<"FooterContent">
    socialLinks?: JsonWithAggregatesFilter<"FooterContent">
    copyright?: StringWithAggregatesFilter<"FooterContent"> | string
    isActive?: BoolWithAggregatesFilter<"FooterContent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FooterContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FooterContent"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HeroContentCreateInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonLink: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroContentUncheckedCreateInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonLink: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroContentCreateManyInput = {
    id?: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonLink: string
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateInput = {
    id?: string
    title: string
    description: string
    mission: string
    vision: string
    values: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    mission: string
    vision: string
    values: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateManyInput = {
    id?: string
    title: string
    description: string
    mission: string
    vision: string
    values: JsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    category: string
    status?: string
    targetGroup?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    category: string
    status?: string
    targetGroup?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    targetGroup?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    targetGroup?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateManyInput = {
    id?: string
    title: string
    description: string
    imageUrl?: string | null
    category: string
    status?: string
    targetGroup?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    targetGroup?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    targetGroup?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactStatCreateInput = {
    id?: string
    title: string
    value: string
    description?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactStatUncheckedCreateInput = {
    id?: string
    title: string
    value: string
    description?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactStatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactStatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactStatCreateManyInput = {
    id?: string
    title: string
    value: string
    description?: string | null
    icon?: string | null
    order?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImpactStatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImpactStatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    id?: string
    address: string
    phone: string
    email: string
    website?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    mapUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: string
    address: string
    phone: string
    email: string
    website?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    mapUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateManyInput = {
    id?: string
    address: string
    phone: string
    email: string
    website?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    mapUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CTAContentCreateInput = {
    id?: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
    bgColor?: string | null
    textColor?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CTAContentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
    bgColor?: string | null
    textColor?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CTAContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CTAContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CTAContentCreateManyInput = {
    id?: string
    title: string
    description: string
    buttonText: string
    buttonLink: string
    bgColor?: string | null
    textColor?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CTAContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CTAContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    buttonText?: StringFieldUpdateOperationsInput | string
    buttonLink?: StringFieldUpdateOperationsInput | string
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterContentCreateInput = {
    id?: string
    description: string
    quickLinks: JsonNullValueInput | InputJsonValue
    socialLinks: JsonNullValueInput | InputJsonValue
    copyright: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterContentUncheckedCreateInput = {
    id?: string
    description: string
    quickLinks: JsonNullValueInput | InputJsonValue
    socialLinks: JsonNullValueInput | InputJsonValue
    copyright: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quickLinks?: JsonNullValueInput | InputJsonValue
    socialLinks?: JsonNullValueInput | InputJsonValue
    copyright?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quickLinks?: JsonNullValueInput | InputJsonValue
    socialLinks?: JsonNullValueInput | InputJsonValue
    copyright?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterContentCreateManyInput = {
    id?: string
    description: string
    quickLinks: JsonNullValueInput | InputJsonValue
    socialLinks: JsonNullValueInput | InputJsonValue
    copyright: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FooterContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quickLinks?: JsonNullValueInput | InputJsonValue
    socialLinks?: JsonNullValueInput | InputJsonValue
    copyright?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quickLinks?: JsonNullValueInput | InputJsonValue
    socialLinks?: JsonNullValueInput | InputJsonValue
    copyright?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    username?: string | null
    name: string
    phone: string
    role?: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    username?: string | null
    name: string
    phone: string
    role?: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    username?: string | null
    name: string
    phone: string
    role?: string
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HeroContentOrderByRelevanceInput = {
    fields: HeroContentOrderByRelevanceFieldEnum | HeroContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HeroContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AboutContentOrderByRelevanceInput = {
    fields: AboutContentOrderByRelevanceFieldEnum | AboutContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AboutContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    values?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProgramOrderByRelevanceInput = {
    fields: ProgramOrderByRelevanceFieldEnum | ProgramOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    targetGroup?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    targetGroup?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    category?: SortOrder
    status?: SortOrder
    targetGroup?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ImpactStatOrderByRelevanceInput = {
    fields: ImpactStatOrderByRelevanceFieldEnum | ImpactStatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImpactStatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    value?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactStatAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImpactStatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    value?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactStatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    value?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImpactStatSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type ContactInfoOrderByRelevanceInput = {
    fields: ContactInfoOrderByRelevanceFieldEnum | ContactInfoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    socialMedia?: SortOrder
    mapUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    mapUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    website?: SortOrder
    mapUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CTAContentOrderByRelevanceInput = {
    fields: CTAContentOrderByRelevanceFieldEnum | CTAContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CTAContentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CTAContentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CTAContentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    buttonText?: SortOrder
    buttonLink?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterContentOrderByRelevanceInput = {
    fields: FooterContentOrderByRelevanceFieldEnum | FooterContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FooterContentCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quickLinks?: SortOrder
    socialLinks?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterContentMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterContentMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    copyright?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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