import * as React from 'react'
import { useDebounce } from 'use-debounce'
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi'
import { utils } from 'ethers'
import { MintNFT } from './_mintNFT'
 
export function SendTransaction() {
  const [to, setTo] = React.useState('')
  const [debouncedTo] = useDebounce(to, 500)
 
  const [amount, setAmount] = React.useState('')
  const [debouncedAmount] = useDebounce(amount, 500)
 
  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedAmount ? utils.parseEther(debouncedAmount) : undefined,
    },
  })
  const { data, sendTransaction } = useSendTransaction(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <>
        <div style={{margin:"120px 0 0 0"}}></div>
        <div class="container center_div" style={{width:"500px"}}>
        <form
        onSubmit={(e) => {
            e.preventDefault()
            sendTransaction?.()
        }}
        >
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
                <input aria-label="Recipient"
                onChange={(e) => setTo(e.target.value)}
                placeholder="0xA0Cf…251e"
                value={to} type="text" class="form-control" id="inputEmail3"/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Amount (ETH)</label>
            <div class="col-sm-10">
                <input aria-label="Amount (ether)"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.05"
                value={amount} type="text" class="form-control" id="inputEmail3"/>
            </div>
        </div>
        
        <div class="d-flex flex-row-reverse" style={{display: "inline-flex"}}> 
    <button type="submit"  style={{margin:"0 0px 0 10px"}} class="btn btn-primary" disabled={isLoading || !sendTransaction || !to || !amount}>
                {isLoading ? 'Sending...' : 'Send'}
            </button>
            
            <MintNFT/>
    </div> 
        
        
    </form>
    
    {isSuccess && (
        <div>
        Successfully sent {amount} ether to {to}
        <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>Etherscan</a>
        </div>
        </div>
    )}
        
            
            
    </div>
    </>
    
  )
}