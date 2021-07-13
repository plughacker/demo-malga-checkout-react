import PlugCheckout from '@plug-checkout/react'

import {
  PlugCheckoutOneShotSuccess,
  PlugCheckoutOneShotError,
} from './App.types'

function App() {
  function handlePaymentSuccess(data: PlugCheckoutOneShotSuccess) {
    console.log(data)
  }

  function handlePaymentFailed(error: PlugCheckoutOneShotError) {
    console.log(error)
  }

  return (
    <main>
      <PlugCheckout
        sandbox
        apiKey={process.env.REACT_APP_PLUG_API_KEY}
        clientId={process.env.REACT_APP_PLUG_CLIENT_ID}
        merchantId={process.env.REACT_APP_PLUG_MERCHANT_ID}
        statementDescriptor="#1 Demonstration Plug Checkout"
        amount={100}
        onPaymentSuccess={({ detail }) => handlePaymentSuccess(detail.data)}
        onPaymentFailed={({ detail }) => handlePaymentFailed(detail.error)}
        installmentsConfig={{ show: true, quantity: 2 }}
        customFormStyleClasses={{
          submitButton: 'custom-submit-button',
        }}
      />
    </main>
  )
}

export default App
