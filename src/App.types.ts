interface PlugCheckoutBoletoTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    paymentType: string
    barcodeData: string
    barcodeImageUrl: string
    expiresDate: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

interface PlugCheckoutBoletoTransactionError {
  type: string
  message: string
  errorStack: unknown
}

interface PlugCheckoutCreditTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  paymentMethod: {
    installments: number
    paymentType: string
  }
  paymentSource: {
    sourceType: string
    cardId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
  }[]
}

interface PlugCheckoutCreditTransactionError {
  type: string
  message: string
  code?: number
  declinedCode?: string
  errorStack: unknown
}

interface PlugCheckoutPixTransactionSuccess {
  id: string
  clientId: string
  createdAt: string
  amount: number
  statementDescriptor: string
  capture: boolean
  status: string
  currency: string
  description: string | null
  orderId: string | null
  paymentMethod: {
    expiresIn: number
    paymentType: string
    qrCodeData: string
    qrCodeImageUrl: string
  }
  paymentSource: {
    sourceType: string
    customerId: string
  }
  transactionRequests: {
    id: string
    updatedAt: string
    createdAt: string
    idempotencyKey: string
    requestId: string | null
    providerId: string
    amount: number
    authorizationCode: string
    authorizationNsu: string
    responseCode: string
    requestStatus: string
    requestType: string
    responseTs: string
    pix: {
      expiresIn: number
      qrCodeData: string
      qrCodeImageUrl: string
    }
  }[]
}

interface PlugCheckoutPixTransactionError {
  type: string
  message: string
  errorStack: unknown
}

type PlugCheckoutTransactionSuccess =
  | PlugCheckoutBoletoTransactionSuccess
  | PlugCheckoutCreditTransactionSuccess
  | PlugCheckoutPixTransactionSuccess

type PlugCheckoutTransactionError =
  | PlugCheckoutBoletoTransactionError
  | PlugCheckoutCreditTransactionError
  | PlugCheckoutPixTransactionError

export type PlugCheckoutTransactionSuccessEvent = CustomEvent<{
  data: PlugCheckoutTransactionSuccess
}>

export type PlugCheckoutTransactionErrorEvent = CustomEvent<{
  error: PlugCheckoutTransactionError
}>
