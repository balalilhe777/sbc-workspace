// @solana/web3.js
import * as Web3 from '@solana/web3.js';

async function main() {
    const publicKey = new Web3.PublicKey('SPDyByKFWTkjq2HDMB1u4Bj7kSiv9FpgHCtXyWdZ2LL');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main()