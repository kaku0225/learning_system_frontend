/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type CheckLogin = {
  __typename?: 'CheckLogin';
  path?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ClassAdviser = {
  __typename?: 'ClassAdviser';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profile: ClassAdviserProfile;
  resetJti?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ClassAdviserProfile = {
  __typename?: 'ClassAdviserProfile';
  cellphone: Scalars['String']['output'];
};

/** Autogenerated input type of ClassAdviserSignUpMutation */
export type ClassAdviserSignUpMutationInput = {
  branchSchools: Array<Scalars['String']['input']>;
  cellphone: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated return type of ClassAdviserSignUpMutation. */
export type ClassAdviserSignUpMutationPayload = {
  __typename?: 'ClassAdviserSignUpMutationPayload';
  classAdvisers?: Maybe<Array<ClassAdviser>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of CreateMutation */
export type CreateMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated return type of CreateMutation. */
export type CreateMutationPayload = {
  __typename?: 'CreateMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  todoList?: Maybe<Array<TodoList>>;
};

export type ExamCountdown = {
  __typename?: 'ExamCountdown';
  comprehensiveAssessmentProgram: Scalars['BigInt']['output'];
  sectionalExam: Scalars['BigInt']['output'];
};

/** Autogenerated input type of LoginMutation */
export type LoginMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Autogenerated return type of LoginMutation. */
export type LoginMutationPayload = {
  __typename?: 'LoginMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  expiredTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

/** Autogenerated input type of LogoutMutation */
export type LogoutMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** Autogenerated return type of LogoutMutation. */
export type LogoutMutationPayload = {
  __typename?: 'LogoutMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  expiredTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  classAdviserSignUp?: Maybe<ClassAdviserSignUpMutationPayload>;
  create?: Maybe<CreateMutationPayload>;
  login?: Maybe<LoginMutationPayload>;
  logout?: Maybe<LogoutMutationPayload>;
  resetPassword?: Maybe<ResetPasswordMutationPayload>;
  sendResetPasswordEmail?: Maybe<SendResetPasswordEmailMutationPayload>;
  studentSignUp?: Maybe<StudentSignUpMutationPayload>;
};


export type MutationClassAdviserSignUpArgs = {
  input: ClassAdviserSignUpMutationInput;
};


export type MutationCreateArgs = {
  input: CreateMutationInput;
};


export type MutationLoginArgs = {
  input: LoginMutationInput;
};


export type MutationLogoutArgs = {
  input: LogoutMutationInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordMutationInput;
};


export type MutationSendResetPasswordEmailArgs = {
  input: SendResetPasswordEmailMutationInput;
};


export type MutationStudentSignUpArgs = {
  input: StudentSignUpMutationInput;
};

export type Query = {
  __typename?: 'Query';
  checkLogin: CheckLogin;
  classAdvisers: Array<ClassAdviser>;
  examCountdown: ExamCountdown;
  todoListByStatus: TodoListByStatus;
};


export type QueryCheckLoginArgs = {
  role: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type QueryTodoListByStatusArgs = {
  token: Scalars['String']['input'];
};

/** Autogenerated input type of ResetPasswordMutation */
export type ResetPasswordMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated return type of ResetPasswordMutation. */
export type ResetPasswordMutationPayload = {
  __typename?: 'ResetPasswordMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<Student>;
};

/** Autogenerated input type of SendResetPasswordEmailMutation */
export type SendResetPasswordEmailMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** Autogenerated return type of SendResetPasswordEmailMutation. */
export type SendResetPasswordEmailMutationPayload = {
  __typename?: 'SendResetPasswordEmailMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profile: StudentProfile;
  resetJti?: Maybe<Scalars['String']['output']>;
  todoLists?: Maybe<Array<TodoList>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type StudentProfile = {
  __typename?: 'StudentProfile';
  address: Scalars['String']['output'];
  birthday: Scalars['String']['output'];
  cellphone: Scalars['String']['output'];
  county: Scalars['String']['output'];
  mainGrade: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  school: Scalars['String']['output'];
  subGrade: Scalars['String']['output'];
};

export type StudentProfileInput = {
  address: Scalars['String']['input'];
  birthday: Scalars['String']['input'];
  cellphone: Scalars['String']['input'];
  county: Scalars['String']['input'];
  mainGrade: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  school: Scalars['String']['input'];
  subGrade: Scalars['String']['input'];
};

/** Autogenerated input type of StudentSignUpMutation */
export type StudentSignUpMutationInput = {
  branchSchools: Array<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  info: UserInput;
  profile: StudentProfileInput;
};

/** Autogenerated return type of StudentSignUpMutation. */
export type StudentSignUpMutationPayload = {
  __typename?: 'StudentSignUpMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  student?: Maybe<Student>;
  success: Scalars['Boolean']['output'];
};

export type TodoList = {
  __typename?: 'TodoList';
  assignId: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601Date']['output'];
  id: Scalars['ID']['output'];
  status: TodoListStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TodoListByStatus = {
  __typename?: 'TodoListByStatus';
  doneTodoLists: Array<TodoList>;
  pendingTodoLists: Array<TodoList>;
};

export enum TodoListStatus {
  Done = 'done',
  Pending = 'pending'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resetJti?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type CheckLogin = {
  __typename?: 'CheckLogin';
  path?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type ClassAdviser = {
  __typename?: 'ClassAdviser';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profile: ClassAdviserProfile;
  resetJti?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ClassAdviserProfile = {
  __typename?: 'ClassAdviserProfile';
  cellphone: Scalars['String']['output'];
};

/** Autogenerated input type of ClassAdviserSignUpMutation */
export type ClassAdviserSignUpMutationInput = {
  branchSchools: Array<Scalars['String']['input']>;
  cellphone: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Autogenerated return type of ClassAdviserSignUpMutation. */
export type ClassAdviserSignUpMutationPayload = {
  __typename?: 'ClassAdviserSignUpMutationPayload';
  classAdvisers?: Maybe<Array<ClassAdviser>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

/** Autogenerated input type of CreateMutation */
export type CreateMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated return type of CreateMutation. */
export type CreateMutationPayload = {
  __typename?: 'CreateMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  todoList?: Maybe<Array<TodoList>>;
};

export type ExamCountdown = {
  __typename?: 'ExamCountdown';
  comprehensiveAssessmentProgram: Scalars['BigInt']['output'];
  sectionalExam: Scalars['BigInt']['output'];
};

/** Autogenerated input type of LoginMutation */
export type LoginMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** Autogenerated return type of LoginMutation. */
export type LoginMutationPayload = {
  __typename?: 'LoginMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  expiredTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

/** Autogenerated input type of LogoutMutation */
export type LogoutMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

/** Autogenerated return type of LogoutMutation. */
export type LogoutMutationPayload = {
  __typename?: 'LogoutMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  expiredTime?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  classAdviserSignUp?: Maybe<ClassAdviserSignUpMutationPayload>;
  create?: Maybe<CreateMutationPayload>;
  login?: Maybe<LoginMutationPayload>;
  logout?: Maybe<LogoutMutationPayload>;
  resetPassword?: Maybe<ResetPasswordMutationPayload>;
  sendResetPasswordEmail?: Maybe<SendResetPasswordEmailMutationPayload>;
  studentSignUp?: Maybe<StudentSignUpMutationPayload>;
};


export type MutationClassAdviserSignUpArgs = {
  input: ClassAdviserSignUpMutationInput;
};


export type MutationCreateArgs = {
  input: CreateMutationInput;
};


export type MutationLoginArgs = {
  input: LoginMutationInput;
};


export type MutationLogoutArgs = {
  input: LogoutMutationInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordMutationInput;
};


export type MutationSendResetPasswordEmailArgs = {
  input: SendResetPasswordEmailMutationInput;
};


export type MutationStudentSignUpArgs = {
  input: StudentSignUpMutationInput;
};

export type Query = {
  __typename?: 'Query';
  checkLogin: CheckLogin;
  classAdvisers: Array<ClassAdviser>;
  examCountdown: ExamCountdown;
  todoListByStatus: TodoListByStatus;
};


export type QueryCheckLoginArgs = {
  role: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type QueryTodoListByStatusArgs = {
  token: Scalars['String']['input'];
};

/** Autogenerated input type of ResetPasswordMutation */
export type ResetPasswordMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Autogenerated return type of ResetPasswordMutation. */
export type ResetPasswordMutationPayload = {
  __typename?: 'ResetPasswordMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<Student>;
};

/** Autogenerated input type of SendResetPasswordEmailMutation */
export type SendResetPasswordEmailMutationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** Autogenerated return type of SendResetPasswordEmailMutation. */
export type SendResetPasswordEmailMutationPayload = {
  __typename?: 'SendResetPasswordEmailMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  profile: StudentProfile;
  resetJti?: Maybe<Scalars['String']['output']>;
  todoLists?: Maybe<Array<TodoList>>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type StudentProfile = {
  __typename?: 'StudentProfile';
  address: Scalars['String']['output'];
  birthday: Scalars['String']['output'];
  cellphone: Scalars['String']['output'];
  county: Scalars['String']['output'];
  mainGrade: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  school: Scalars['String']['output'];
  subGrade: Scalars['String']['output'];
};

export type StudentProfileInput = {
  address: Scalars['String']['input'];
  birthday: Scalars['String']['input'];
  cellphone: Scalars['String']['input'];
  county: Scalars['String']['input'];
  mainGrade: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  school: Scalars['String']['input'];
  subGrade: Scalars['String']['input'];
};

/** Autogenerated input type of StudentSignUpMutation */
export type StudentSignUpMutationInput = {
  branchSchools: Array<Scalars['String']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  info: UserInput;
  profile: StudentProfileInput;
};

/** Autogenerated return type of StudentSignUpMutation. */
export type StudentSignUpMutationPayload = {
  __typename?: 'StudentSignUpMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  student?: Maybe<Student>;
  success: Scalars['Boolean']['output'];
};

export type TodoList = {
  __typename?: 'TodoList';
  assignId: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601Date']['output'];
  id: Scalars['ID']['output'];
  status: TodoListStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TodoListByStatus = {
  __typename?: 'TodoListByStatus';
  doneTodoLists: Array<TodoList>;
  pendingTodoLists: Array<TodoList>;
};

export enum TodoListStatus {
  Done = 'done',
  Pending = 'pending'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime']['output'];
  email: Scalars['String']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  expiredTime: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  jti: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resetJti?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};
