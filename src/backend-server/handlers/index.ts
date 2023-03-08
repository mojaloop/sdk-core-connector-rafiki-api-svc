import SharedHandlers from '../../shared/handlers'
import OpenPayments from './open-payments'
import RafikiWebhook from './rafiki-webhook'

export default {
  HealthGet: SharedHandlers.HealthGet,
  OpenPaymentsIdTypeIncomingPaymentsPost: OpenPayments.IdTypeIncomingPaymentsPost,
  RafikiWebHookIncomingPaymentEvent: RafikiWebhook.WebHookIncomingPaymentEvent
}
