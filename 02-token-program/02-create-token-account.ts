import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("SPDyByKFWTkjq2HDMB1u4Bj7kSiv9FpgHCtXyWdZ2LL") // PUBKEY of person you want to create the token account

const decoded = base58.decode('2x6X8r2jin3nFqouTY4mm7Ne41U5JG1Y6j3aMjbA8W1qACmKYzRAfWAF3TFJ9bLrkzT6iLu9sLHaXaKTHkvFVTcp')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "7bQQXEaSvReC5jhnKoGAEbBziHfwyScMrWtUguwNMQU5"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());

}

main();