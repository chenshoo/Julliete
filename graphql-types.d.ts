/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuery {
  users?: Array<GQLUser | null>;
  weatherPreferences?: GQLWeatherPreferences;
  placesTypes?: Array<GQLPlaceInfo | null>;
}

export interface GQLUser {
  id?: string;
  email?: string;
  userInfo?: GQLUserInformation;
}

export interface GQLUserInformation {
  privateName?: string;
  lastName?: string;
  gender?: GQLGender;
  dateOfBirth?: GQLDate;
  phoneNumber?: string;
  initialPanicAttackDate?: GQLDate;
  sleep?: GQLSleepingHours;
  emergencyContacts?: Array<GQLContact | null>;
  isShabbatKeeper?: boolean;
  isSmoking?: boolean;
  familyStatus?: GQLFamilyStatus;
  traumaType?: GQLTraumaType;
  medicalInformation?: GQLMedicalInformation;
  address?: GQLAddress;
  stressHours?: Array<number | null>;
  stressfullPlaces?: Array<string | null>;
}

export enum GQLGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export type GQLDate = any;

export interface GQLSleepingHours {
  bedHour?: number;
  wakingHour?: number;
}

export interface GQLContact {
  phoneNumber?: string;
  name?: string;
}

export interface GQLFamilyStatus {
  isMarried?: boolean;
  numberOfChildren?: number;
}

export enum GQLTraumaType {
  SEX_ASSAULT = 'SEX_ASSAULT',
  ARMY = 'ARMY'
}

export interface GQLMedicalInformation {
  isTaking?: boolean;
  drugs?: Array<string | null>;
}

export interface GQLAddress {
  state?: string;
  city?: string;
  street?: string;
  apartment?: string;
}

export interface GQLWeatherPreferences {
  families?: Array<GQLWeatherFamily | null>;
  range?: GQLRange;
}

export interface GQLWeatherFamily {
  type?: string;
  title?: string;
}

export interface GQLRange {
  min?: number;
  max?: number;
}

export interface GQLPlaceInfo {
  type?: string;
  title?: string;
}

export interface GQLMutation {
  sendUserLocation?: boolean;
  registerUser?: boolean;
  setUserInformation?: boolean;
  login?: boolean;
  triggerUsers?: boolean;
}

export interface GQLLocationInput {
  lat: number;
  long: number;
}

export interface GQLUserRegistrationInput {
  email: string;
  password: string;
  privateName: string;
  lastName: string;
  gender: string;
  dateOfBirth: GQLDate;
  phoneNumber: string;
}

export interface GQLUserInformationInput {
  privateName?: string;
  lastName?: string;
  gender?: GQLGender;
  dateOfBirth?: GQLDate;
  phoneNumber?: string;
  initialPanicAttackDate?: GQLDate;
  sleep?: GQLSleepingHoursInput;
  emergencyContacts?: Array<GQLContactInput | null>;
  isShabbatKeeper?: boolean;
  isSmoking?: boolean;
  familyStatus?: GQLFamilyStatusInput;
  traumaType?: GQLTraumaType;
  medicalInformation?: GQLMedicalInformationInput;
  address?: GQLAddressInput;
  stressHours?: Array<number | null>;
  stressfullPlaces?: Array<string | null>;
  weatherTriggers?: Array<GQLWeatherTriggerInput | null>;
}

export interface GQLSleepingHoursInput {
  bedHour?: string;
  wakingHour?: string;
}

export interface GQLContactInput {
  phoneNumber?: string;
  name?: string;
}

export interface GQLFamilyStatusInput {
  isMarried?: boolean;
  numberOfChildren?: number;
}

export interface GQLMedicalInformationInput {
  isTaking?: boolean;
  drugs?: Array<string | null>;
}

export interface GQLAddressInput {
  state: string;
  city: string;
  street: string;
  apartment: string;
}

export interface GQLWeatherTriggerInput {
  type?: string;
  rate?: number;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Query?: GQLQueryTypeResolver;
  User?: GQLUserTypeResolver;
  UserInformation?: GQLUserInformationTypeResolver;
  Date?: GraphQLScalarType;
  SleepingHours?: GQLSleepingHoursTypeResolver;
  Contact?: GQLContactTypeResolver;
  FamilyStatus?: GQLFamilyStatusTypeResolver;
  MedicalInformation?: GQLMedicalInformationTypeResolver;
  Address?: GQLAddressTypeResolver;
  WeatherPreferences?: GQLWeatherPreferencesTypeResolver;
  WeatherFamily?: GQLWeatherFamilyTypeResolver;
  Range?: GQLRangeTypeResolver;
  PlaceInfo?: GQLPlaceInfoTypeResolver;
  Mutation?: GQLMutationTypeResolver;
}
export interface GQLQueryTypeResolver<TParent = any> {
  users?: QueryToUsersResolver<TParent>;
  weatherPreferences?: QueryToWeatherPreferencesResolver<TParent>;
  placesTypes?: QueryToPlacesTypesResolver<TParent>;
}

export interface QueryToUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToWeatherPreferencesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToPlacesTypesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  userInfo?: UserToUserInfoResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToUserInfoResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLUserInformationTypeResolver<TParent = any> {
  privateName?: UserInformationToPrivateNameResolver<TParent>;
  lastName?: UserInformationToLastNameResolver<TParent>;
  gender?: UserInformationToGenderResolver<TParent>;
  dateOfBirth?: UserInformationToDateOfBirthResolver<TParent>;
  phoneNumber?: UserInformationToPhoneNumberResolver<TParent>;
  initialPanicAttackDate?: UserInformationToInitialPanicAttackDateResolver<TParent>;
  sleep?: UserInformationToSleepResolver<TParent>;
  emergencyContacts?: UserInformationToEmergencyContactsResolver<TParent>;
  isShabbatKeeper?: UserInformationToIsShabbatKeeperResolver<TParent>;
  isSmoking?: UserInformationToIsSmokingResolver<TParent>;
  familyStatus?: UserInformationToFamilyStatusResolver<TParent>;
  traumaType?: UserInformationToTraumaTypeResolver<TParent>;
  medicalInformation?: UserInformationToMedicalInformationResolver<TParent>;
  address?: UserInformationToAddressResolver<TParent>;
  stressHours?: UserInformationToStressHoursResolver<TParent>;
  stressfullPlaces?: UserInformationToStressfullPlacesResolver<TParent>;
}

export interface UserInformationToPrivateNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToLastNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToGenderResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToDateOfBirthResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToPhoneNumberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToInitialPanicAttackDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToSleepResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToEmergencyContactsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToIsShabbatKeeperResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToIsSmokingResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToFamilyStatusResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToTraumaTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToMedicalInformationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToAddressResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToStressHoursResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserInformationToStressfullPlacesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLSleepingHoursTypeResolver<TParent = any> {
  bedHour?: SleepingHoursToBedHourResolver<TParent>;
  wakingHour?: SleepingHoursToWakingHourResolver<TParent>;
}

export interface SleepingHoursToBedHourResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SleepingHoursToWakingHourResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLContactTypeResolver<TParent = any> {
  phoneNumber?: ContactToPhoneNumberResolver<TParent>;
  name?: ContactToNameResolver<TParent>;
}

export interface ContactToPhoneNumberResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ContactToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLFamilyStatusTypeResolver<TParent = any> {
  isMarried?: FamilyStatusToIsMarriedResolver<TParent>;
  numberOfChildren?: FamilyStatusToNumberOfChildrenResolver<TParent>;
}

export interface FamilyStatusToIsMarriedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface FamilyStatusToNumberOfChildrenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMedicalInformationTypeResolver<TParent = any> {
  isTaking?: MedicalInformationToIsTakingResolver<TParent>;
  drugs?: MedicalInformationToDrugsResolver<TParent>;
}

export interface MedicalInformationToIsTakingResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MedicalInformationToDrugsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLAddressTypeResolver<TParent = any> {
  state?: AddressToStateResolver<TParent>;
  city?: AddressToCityResolver<TParent>;
  street?: AddressToStreetResolver<TParent>;
  apartment?: AddressToApartmentResolver<TParent>;
}

export interface AddressToStateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToStreetResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToApartmentResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLWeatherPreferencesTypeResolver<TParent = any> {
  families?: WeatherPreferencesToFamiliesResolver<TParent>;
  range?: WeatherPreferencesToRangeResolver<TParent>;
}

export interface WeatherPreferencesToFamiliesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WeatherPreferencesToRangeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLWeatherFamilyTypeResolver<TParent = any> {
  type?: WeatherFamilyToTypeResolver<TParent>;
  title?: WeatherFamilyToTitleResolver<TParent>;
}

export interface WeatherFamilyToTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WeatherFamilyToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLRangeTypeResolver<TParent = any> {
  min?: RangeToMinResolver<TParent>;
  max?: RangeToMaxResolver<TParent>;
}

export interface RangeToMinResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RangeToMaxResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLPlaceInfoTypeResolver<TParent = any> {
  type?: PlaceInfoToTypeResolver<TParent>;
  title?: PlaceInfoToTitleResolver<TParent>;
}

export interface PlaceInfoToTypeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PlaceInfoToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  sendUserLocation?: MutationToSendUserLocationResolver<TParent>;
  registerUser?: MutationToRegisterUserResolver<TParent>;
  setUserInformation?: MutationToSetUserInformationResolver<TParent>;
  login?: MutationToLoginResolver<TParent>;
  triggerUsers?: MutationToTriggerUsersResolver<TParent>;
}

export interface MutationToSendUserLocationArgs {
  email?: string;
  location?: GQLLocationInput;
  userOneSignalId?: string;
}
export interface MutationToSendUserLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToSendUserLocationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToRegisterUserArgs {
  user?: GQLUserRegistrationInput;
}
export interface MutationToRegisterUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToRegisterUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToSetUserInformationArgs {
  email?: string;
  userInfo?: GQLUserInformationInput;
}
export interface MutationToSetUserInformationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToSetUserInformationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToLoginArgs {
  email?: string;
  password?: string;
}
export interface MutationToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToLoginArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToTriggerUsersArgs {
  emails?: Array<string | null>;
  description?: string;
}
export interface MutationToTriggerUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToTriggerUsersArgs, context: any, info: GraphQLResolveInfo): TResult;
}
