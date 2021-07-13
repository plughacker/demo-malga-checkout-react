export interface PlugCheckoutOneShotSuccess {
  id: string;
  clientId: string;
  createdAt: string;
  amount: number;
  statementDescriptor: string;
  capture: boolean;
  status: string;
  paymentMethod: {
    installments: number;
    paymentType: string;
  };
  paymentSource: {
    sourceType: string;
    cardId: string;
  };
  transactionRequests: {
    id: string;
    updatedAt: string;
    createdAt: string;
    idempotencyKey: string;
    requestId: string | null;
    providerId: string;
    amount: number;
    authorizationCode: string;
    authorizationNsu: string;
    responseCode: string;
    requestStatus: string;
    requestType: string;
    responseTs: string;
    pix: null;
  }[];
}
export interface PlugCheckoutOneShotError {
  error: {
    type: string;
    message: string;
    code?: number;
    declined_code?: string;
  };
}
