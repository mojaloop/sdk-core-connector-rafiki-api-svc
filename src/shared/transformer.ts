
// import { randomUUID } from "crypto";
import MLNumber from '@mojaloop/ml-number'
import currencyCodes from 'currency-codes'

export class GspTransformer {

  // 1,000,000
  static MICROFACTOR = 6


  // NOTES:
  //  Micros Monetary values in this API are represented using a format called "micros", a standard at Google. Micros are an integer based, fixed precision format. To represent a monetary value in micros, multiply the standard currency value by 1,000,000.
  //  For example:
  //   USD$1.23 = 1230000 micro USD
  //   USD$0.01 = 10000 micro USD

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static toFspiopCurrency(amountMicros: string): string {
    return (new MLNumber(amountMicros)).shiftedBy(-this.MICROFACTOR).toString()
  }

  static toAmountMicrosFromFspiop(fspiopAmount: string): string {
    return (new MLNumber(fspiopAmount)).shiftedBy(+this.MICROFACTOR).toString()
  }

  // static toUUID(associationId: string): string {
  //   // TODO: Implement conversion
  //   return randomUUID()
  // }
}

export class IlpTransformer {

  static toAmountFromILPtoFspiop = (value: number, assetScale: number) => {
    const calculatedAmount = value / Math.pow(10, assetScale)
    return calculatedAmount
  }

  static toAmountFromFspiopToILP = (amount: number, currency: string) => {
    const currencyObj = currencyCodes.code(currency)
    const assetScale = currencyObj?.digits || 0
    const calculatedValue = amount * Math.pow(10, assetScale)
    return {
      value: calculatedValue,
      assetCode: currency,
      assetScale
    }
  }
 
  // static toUUID(associationId: string): string {
  //   // TODO: Implement conversion
  //   return randomUUID()
  // }
}
