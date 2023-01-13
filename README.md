# emurgo test project
This is dapp project created with reactjs+walletconnect+wagmi+a cup of tea :D 
Why i decide to create wallet project that can connect with wallet provider, send token, and minting, that because i want to try create project with real crypto use case. simulate crud is boring stuff

lets go to the explanations about this project and how to use it

This is very simple dApp , like i mention before
with features :
 - wallet connect (goerli testnet)
	Using https://walletconnect.com/ i can connect to wallet provider on mobile or desktop/browser extensions i.e 	metamask, trustwallet 
	so what can i do if connect to wallet, i can see the address, balance, send transaction and sign message, call contract etc
	and for rpc provider we can use infura, alchemy, or cloud wallet connect
 - send eth	
	and because we connect to wallet, we can do transaction with other addresses and interact with smartcontract 		   or sign some messages
 - mint NFT
	like transaction, we can mint NFT with smartcontract abicode and call them

This is how the project looks like
1. before connect to wallet
![image 1](https://raw.githubusercontent.com/zer0day88/wallet-emurgo/main/sc/Screenshot%202023-01-13%20at%2021.31.12.png)
2. when user click connect wallet
![image 2](https://raw.githubusercontent.com/zer0day88/wallet-emurgo/main/sc/Screenshot%202023-01-13%20at%2021.31.22.png)
3. After connection made with wallet
![image 3](https://raw.githubusercontent.com/zer0day88/wallet-emurgo/main/sc/Screenshot%202023-01-13%20at%2021.31.44.png)

## and how to use this project and run it locally
1. clone this repository project
2. change directory to project folder
3. run `yarn install` to install all dependency packages  
4. run `yarn dev` to run project locally, go to project url on browser with wallet extension like metamask installed and voilla you can try to connect with wallet, send goerli ETH and mint NFT

best regards for mas Arie!