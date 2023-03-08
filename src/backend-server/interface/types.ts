import { components } from './openapi'

// let define some aliases for schemas
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Schemas {
  export type Amount = components['schemas']['Amount']
  export type CorrelationId = components['schemas']['CorrelationId']
  export type Currency = components['schemas']['Currency']
  export type DateTime = components['schemas']['DateTime']
  export type IDTypeIncomingPaymentsPostRequest = components['schemas']['IDTypeIncomingPaymentsPostRequest']
  export type IDTypeIncomingPaymentsPostResponse = components['schemas']['IDTypeIncomingPaymentsPostResponse']
  export type Quote = components['schemas']['Quote']
  export type QuoteResponse = components['schemas']['QuoteResponse']
  export type RafikiWebHookIncomingPaymentCallback = components['schemas']['RafikiWebHookIncomingPaymentCallback']
  export type RafikiWebHookIncomingPaymentRequest = components['schemas']['RafikiWebHookIncomingPaymentRequest']
  export type RafikiWebHookOutgoingPaymentRequest = components['schemas']['RafikiWebHookOutgoingPaymentRequest']
}
