import SharedHandlers from '../../shared/handlers'
import OpenPayments from './open-payments'

export default {
  HealthGet: SharedHandlers.HealthGet,
  OpenPaymentsIdTypeIncomingPaymentsPost: OpenPayments.IdTypeIncomingPaymentsPost
}
