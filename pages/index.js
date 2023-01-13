
import { useAccount, useDisconnect} from "wagmi";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { SendTransaction } from "./_sendTx";

export default function Home() {
  const {address,isConnected} = useAccount();
  const { disconnect } = useDisconnect();
  if (!isConnected) {
    
    return (
      
      <>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-success">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Andre Wallet</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            
            <Web3Button icon="show" label="Connect Wallet" balance="show" style={{margin: "0 8px 0 0"}} />
            <Web3NetworkSwitch />
            
          </div>
        </div>
      </nav>
      <div style={{margin: "60px 0 0 0"}}></div>
        
        <SendTransaction/>
        
      </>
    )
  }

  return (
    <>
     <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-success">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Andre Wallet</span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            {/* <button type="button" class="btn btn-warning" onClick={disconnect} style={{margin: "0 8px 0 0"}}>Disconnect</button> */}
            <Web3Button icon="show" label="Connect Wallet" balance="show" style={{margin: "0 8px 0 0"}} />
            <Web3NetworkSwitch />
          </div>
        </div>
      </nav>
      <div style={{margin: "60px 0 0 0"}}></div>
      
      
      <SendTransaction/>
      
    </>
  )
}
