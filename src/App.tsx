import MalgaCheckout from '@malga-checkout/react'

function App() {
  function handlePaymentSuccess(data: any) {
    console.log(data)
  }

  function handlePaymentFailed(error: any) {
    console.log(error)
  }

  return (
    <main>
      <MalgaCheckout
        sandbox
        publicKey="<YOUR_PUBLIC_KEY>"
        clientId="<YOUR_CLIENT_ID>"
        merchantId="<YOUR_MERCHANT_ID>"
        paymentMethods={{
          pix: {
            expiresIn: 3600,
          },
          credit: {
            installments: {
              quantity: 12,
              show: true,
            },
            checkedSaveCard: false,
            showCreditCard: true,
          },
          boleto: {
            expiresDate: '2022-12-31',
            instructions: 'Instruções para pagamento do boleto',
            interest: {
              days: 1,
              amount: 100,
            },
            fine: {
              days: 2,
              amount: 200,
            },
          },
        }}
        transactionConfig={{
          statementDescriptor: '#1 Demonstration Malga Checkout',
          amount: 100,
          description: '',
          orderId: '',
          customerId: '<CUSTOMER_ID>',
          currency: 'BRL',
          capture: false,
        }}
        dialogConfig={{
          show: true,
          actionButtonLabel: 'Continuar',
          errorActionButtonLabel: 'Tentar novamente',
          successActionButtonLabel: 'Continuar',
          successRedirectUrl: 'https://www.malga.io/',
        }}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentFailed={handlePaymentFailed}
      />
    </main>
  )
}

export default App
