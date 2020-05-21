// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  tag: (where?: TagWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
  verse: (where?: VerseWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  tag: (where: TagWhereUniqueInput) => TagNullablePromise;
  tags: (args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Tag>;
  tagsConnection: (args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => TagConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  verse: (where: VerseWhereUniqueInput) => VerseNullablePromise;
  verses: (args?: {
    where?: VerseWhereInput;
    orderBy?: VerseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Verse>;
  versesConnection: (args?: {
    where?: VerseWhereInput;
    orderBy?: VerseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => VerseConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTag: (data: TagCreateInput) => TagPromise;
  deleteTag: (where: TagWhereUniqueInput) => TagPromise;
  deleteManyTags: (where?: TagWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createVerse: (data: VerseCreateInput) => VersePromise;
  updateVerse: (args: {
    data: VerseUpdateInput;
    where: VerseWhereUniqueInput;
  }) => VersePromise;
  updateManyVerses: (args: {
    data: VerseUpdateManyMutationInput;
    where?: VerseWhereInput;
  }) => BatchPayloadPromise;
  upsertVerse: (args: {
    where: VerseWhereUniqueInput;
    create: VerseCreateInput;
    update: VerseUpdateInput;
  }) => VersePromise;
  deleteVerse: (where: VerseWhereUniqueInput) => VersePromise;
  deleteManyVerses: (where?: VerseWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  tag: (
    where?: TagSubscriptionWhereInput
  ) => TagSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  verse: (
    where?: VerseSubscriptionWhereInput
  ) => VerseSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TagOrderByInput = "id_ASC" | "id_DESC";

export type VerseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "body_ASC"
  | "body_DESC"
  | "reference_ASC"
  | "reference_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TagWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TagWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<TagWhereInput[] | TagWhereInput>;
  OR?: Maybe<TagWhereInput[] | TagWhereInput>;
  NOT?: Maybe<TagWhereInput[] | TagWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface VerseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  reference?: Maybe<String>;
  reference_not?: Maybe<String>;
  reference_in?: Maybe<String[] | String>;
  reference_not_in?: Maybe<String[] | String>;
  reference_lt?: Maybe<String>;
  reference_lte?: Maybe<String>;
  reference_gt?: Maybe<String>;
  reference_gte?: Maybe<String>;
  reference_contains?: Maybe<String>;
  reference_not_contains?: Maybe<String>;
  reference_starts_with?: Maybe<String>;
  reference_not_starts_with?: Maybe<String>;
  reference_ends_with?: Maybe<String>;
  reference_not_ends_with?: Maybe<String>;
  saved_every?: Maybe<UserWhereInput>;
  saved_some?: Maybe<UserWhereInput>;
  saved_none?: Maybe<UserWhereInput>;
  tags_every?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  AND?: Maybe<VerseWhereInput[] | VerseWhereInput>;
  OR?: Maybe<VerseWhereInput[] | VerseWhereInput>;
  NOT?: Maybe<VerseWhereInput[] | VerseWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  saved_every?: Maybe<VerseWhereInput>;
  saved_some?: Maybe<VerseWhereInput>;
  saved_none?: Maybe<VerseWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type VerseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface TagCreateInput {
  id?: Maybe<ID_Input>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  saved?: Maybe<VerseCreateManyWithoutSavedInput>;
}

export interface VerseCreateManyWithoutSavedInput {
  create?: Maybe<VerseCreateWithoutSavedInput[] | VerseCreateWithoutSavedInput>;
  connect?: Maybe<VerseWhereUniqueInput[] | VerseWhereUniqueInput>;
}

export interface VerseCreateWithoutSavedInput {
  id?: Maybe<ID_Input>;
  body: String;
  reference: String;
  tags?: Maybe<TagCreateManyInput>;
}

export interface TagCreateManyInput {
  create?: Maybe<TagCreateInput[] | TagCreateInput>;
  connect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  saved?: Maybe<VerseUpdateManyWithoutSavedInput>;
}

export interface VerseUpdateManyWithoutSavedInput {
  create?: Maybe<VerseCreateWithoutSavedInput[] | VerseCreateWithoutSavedInput>;
  delete?: Maybe<VerseWhereUniqueInput[] | VerseWhereUniqueInput>;
  connect?: Maybe<VerseWhereUniqueInput[] | VerseWhereUniqueInput>;
  set?: Maybe<VerseWhereUniqueInput[] | VerseWhereUniqueInput>;
  disconnect?: Maybe<VerseWhereUniqueInput[] | VerseWhereUniqueInput>;
  update?: Maybe<
    | VerseUpdateWithWhereUniqueWithoutSavedInput[]
    | VerseUpdateWithWhereUniqueWithoutSavedInput
  >;
  upsert?: Maybe<
    | VerseUpsertWithWhereUniqueWithoutSavedInput[]
    | VerseUpsertWithWhereUniqueWithoutSavedInput
  >;
  deleteMany?: Maybe<VerseScalarWhereInput[] | VerseScalarWhereInput>;
  updateMany?: Maybe<
    VerseUpdateManyWithWhereNestedInput[] | VerseUpdateManyWithWhereNestedInput
  >;
}

export interface VerseUpdateWithWhereUniqueWithoutSavedInput {
  where: VerseWhereUniqueInput;
  data: VerseUpdateWithoutSavedDataInput;
}

export interface VerseUpdateWithoutSavedDataInput {
  body?: Maybe<String>;
  reference?: Maybe<String>;
  tags?: Maybe<TagUpdateManyInput>;
}

export interface TagUpdateManyInput {
  create?: Maybe<TagCreateInput[] | TagCreateInput>;
  delete?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  connect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  set?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  disconnect?: Maybe<TagWhereUniqueInput[] | TagWhereUniqueInput>;
  deleteMany?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
}

export interface TagScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  AND?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
  OR?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
  NOT?: Maybe<TagScalarWhereInput[] | TagScalarWhereInput>;
}

export interface VerseUpsertWithWhereUniqueWithoutSavedInput {
  where: VerseWhereUniqueInput;
  update: VerseUpdateWithoutSavedDataInput;
  create: VerseCreateWithoutSavedInput;
}

export interface VerseScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  body?: Maybe<String>;
  body_not?: Maybe<String>;
  body_in?: Maybe<String[] | String>;
  body_not_in?: Maybe<String[] | String>;
  body_lt?: Maybe<String>;
  body_lte?: Maybe<String>;
  body_gt?: Maybe<String>;
  body_gte?: Maybe<String>;
  body_contains?: Maybe<String>;
  body_not_contains?: Maybe<String>;
  body_starts_with?: Maybe<String>;
  body_not_starts_with?: Maybe<String>;
  body_ends_with?: Maybe<String>;
  body_not_ends_with?: Maybe<String>;
  reference?: Maybe<String>;
  reference_not?: Maybe<String>;
  reference_in?: Maybe<String[] | String>;
  reference_not_in?: Maybe<String[] | String>;
  reference_lt?: Maybe<String>;
  reference_lte?: Maybe<String>;
  reference_gt?: Maybe<String>;
  reference_gte?: Maybe<String>;
  reference_contains?: Maybe<String>;
  reference_not_contains?: Maybe<String>;
  reference_starts_with?: Maybe<String>;
  reference_not_starts_with?: Maybe<String>;
  reference_ends_with?: Maybe<String>;
  reference_not_ends_with?: Maybe<String>;
  AND?: Maybe<VerseScalarWhereInput[] | VerseScalarWhereInput>;
  OR?: Maybe<VerseScalarWhereInput[] | VerseScalarWhereInput>;
  NOT?: Maybe<VerseScalarWhereInput[] | VerseScalarWhereInput>;
}

export interface VerseUpdateManyWithWhereNestedInput {
  where: VerseScalarWhereInput;
  data: VerseUpdateManyDataInput;
}

export interface VerseUpdateManyDataInput {
  body?: Maybe<String>;
  reference?: Maybe<String>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface VerseCreateInput {
  id?: Maybe<ID_Input>;
  body: String;
  reference: String;
  saved?: Maybe<UserCreateManyWithoutSavedInput>;
  tags?: Maybe<TagCreateManyInput>;
}

export interface UserCreateManyWithoutSavedInput {
  create?: Maybe<UserCreateWithoutSavedInput[] | UserCreateWithoutSavedInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
}

export interface UserCreateWithoutSavedInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface VerseUpdateInput {
  body?: Maybe<String>;
  reference?: Maybe<String>;
  saved?: Maybe<UserUpdateManyWithoutSavedInput>;
  tags?: Maybe<TagUpdateManyInput>;
}

export interface UserUpdateManyWithoutSavedInput {
  create?: Maybe<UserCreateWithoutSavedInput[] | UserCreateWithoutSavedInput>;
  delete?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  connect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  set?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput[] | UserWhereUniqueInput>;
  update?: Maybe<
    | UserUpdateWithWhereUniqueWithoutSavedInput[]
    | UserUpdateWithWhereUniqueWithoutSavedInput
  >;
  upsert?: Maybe<
    | UserUpsertWithWhereUniqueWithoutSavedInput[]
    | UserUpsertWithWhereUniqueWithoutSavedInput
  >;
  deleteMany?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  updateMany?: Maybe<
    UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpdateWithWhereUniqueWithoutSavedInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutSavedDataInput;
}

export interface UserUpdateWithoutSavedDataInput {
  name?: Maybe<String>;
}

export interface UserUpsertWithWhereUniqueWithoutSavedInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutSavedDataInput;
  create: UserCreateWithoutSavedInput;
}

export interface UserScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  OR?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
  NOT?: Maybe<UserScalarWhereInput[] | UserScalarWhereInput>;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  name?: Maybe<String>;
}

export interface VerseUpdateManyMutationInput {
  body?: Maybe<String>;
  reference?: Maybe<String>;
}

export interface TagSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<TagWhereInput>;
  AND?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
  OR?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
  NOT?: Maybe<TagSubscriptionWhereInput[] | TagSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface VerseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<VerseWhereInput>;
  AND?: Maybe<VerseSubscriptionWhereInput[] | VerseSubscriptionWhereInput>;
  OR?: Maybe<VerseSubscriptionWhereInput[] | VerseSubscriptionWhereInput>;
  NOT?: Maybe<VerseSubscriptionWhereInput[] | VerseSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Tag {
  id: ID_Output;
}

export interface TagPromise extends Promise<Tag>, Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface TagSubscription
  extends Promise<AsyncIterator<Tag>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface TagNullablePromise extends Promise<Tag | null>, Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface TagConnection {
  pageInfo: PageInfo;
  edges: TagEdge[];
}

export interface TagConnectionPromise
  extends Promise<TagConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TagEdge>>() => T;
  aggregate: <T = AggregateTagPromise>() => T;
}

export interface TagConnectionSubscription
  extends Promise<AsyncIterator<TagConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TagEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTagSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TagEdge {
  node: Tag;
  cursor: String;
}

export interface TagEdgePromise extends Promise<TagEdge>, Fragmentable {
  node: <T = TagPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TagEdgeSubscription
  extends Promise<AsyncIterator<TagEdge>>,
    Fragmentable {
  node: <T = TagSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTag {
  count: Int;
}

export interface AggregateTagPromise
  extends Promise<AggregateTag>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTagSubscription
  extends Promise<AsyncIterator<AggregateTag>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  saved: <T = FragmentableArray<Verse>>(args?: {
    where?: VerseWhereInput;
    orderBy?: VerseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  saved: <T = Promise<AsyncIterator<VerseSubscription>>>(args?: {
    where?: VerseWhereInput;
    orderBy?: VerseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  saved: <T = FragmentableArray<Verse>>(args?: {
    where?: VerseWhereInput;
    orderBy?: VerseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Verse {
  id: ID_Output;
  body: String;
  reference: String;
}

export interface VersePromise extends Promise<Verse>, Fragmentable {
  id: () => Promise<ID_Output>;
  body: () => Promise<String>;
  reference: () => Promise<String>;
  saved: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  tags: <T = FragmentableArray<Tag>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface VerseSubscription
  extends Promise<AsyncIterator<Verse>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  body: () => Promise<AsyncIterator<String>>;
  reference: () => Promise<AsyncIterator<String>>;
  saved: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  tags: <T = Promise<AsyncIterator<TagSubscription>>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface VerseNullablePromise
  extends Promise<Verse | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  body: () => Promise<String>;
  reference: () => Promise<String>;
  saved: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  tags: <T = FragmentableArray<Tag>>(args?: {
    where?: TagWhereInput;
    orderBy?: TagOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface VerseConnection {
  pageInfo: PageInfo;
  edges: VerseEdge[];
}

export interface VerseConnectionPromise
  extends Promise<VerseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<VerseEdge>>() => T;
  aggregate: <T = AggregateVersePromise>() => T;
}

export interface VerseConnectionSubscription
  extends Promise<AsyncIterator<VerseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<VerseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateVerseSubscription>() => T;
}

export interface VerseEdge {
  node: Verse;
  cursor: String;
}

export interface VerseEdgePromise extends Promise<VerseEdge>, Fragmentable {
  node: <T = VersePromise>() => T;
  cursor: () => Promise<String>;
}

export interface VerseEdgeSubscription
  extends Promise<AsyncIterator<VerseEdge>>,
    Fragmentable {
  node: <T = VerseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateVerse {
  count: Int;
}

export interface AggregateVersePromise
  extends Promise<AggregateVerse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateVerseSubscription
  extends Promise<AsyncIterator<AggregateVerse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TagSubscriptionPayload {
  mutation: MutationType;
  node: Tag;
  updatedFields: String[];
  previousValues: TagPreviousValues;
}

export interface TagSubscriptionPayloadPromise
  extends Promise<TagSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TagPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TagPreviousValuesPromise>() => T;
}

export interface TagSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TagSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TagSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TagPreviousValuesSubscription>() => T;
}

export interface TagPreviousValues {
  id: ID_Output;
}

export interface TagPreviousValuesPromise
  extends Promise<TagPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface TagPreviousValuesSubscription
  extends Promise<AsyncIterator<TagPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface VerseSubscriptionPayload {
  mutation: MutationType;
  node: Verse;
  updatedFields: String[];
  previousValues: VersePreviousValues;
}

export interface VerseSubscriptionPayloadPromise
  extends Promise<VerseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = VersePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = VersePreviousValuesPromise>() => T;
}

export interface VerseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<VerseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = VerseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = VersePreviousValuesSubscription>() => T;
}

export interface VersePreviousValues {
  id: ID_Output;
  body: String;
  reference: String;
}

export interface VersePreviousValuesPromise
  extends Promise<VersePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  body: () => Promise<String>;
  reference: () => Promise<String>;
}

export interface VersePreviousValuesSubscription
  extends Promise<AsyncIterator<VersePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  body: () => Promise<AsyncIterator<String>>;
  reference: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Verse",
    embedded: false
  },
  {
    name: "Tag",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://kl-words-app-prod-3a44e8e620.herokuapp.com/kl-words-app/dev`
});
export const prisma = new Prisma();
