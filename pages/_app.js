import '@/styles/form.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { EthereumClient,modalConnectors,walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from "wagmi/chains"
import { useEffect, useState } from 'react'

const chains = [goerli];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "216c7c2a70c598c246e5ee7cfca813be" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});



// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true),
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <>
      {ready ? (
        <WagmiConfig client={wagmiClient}>
          
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}

      <Web3Modal 
        projectId="216c7c2a70c598c246e5ee7cfca813be"
        ethereumClient={ethereumClient}
      />
    </>
  )
}