## Feisty Fish NFT Site Template!

This site was built using a NextJS web template along with the next-candy-machine, both of which are open source.

You can find both of these open source projects here:

next-candy-machine:
https://github.com/maxwellfortney/next-candy-machine

NextJS Landing Page Starter Template:
https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template

Thanks to all our loyal supporters!

Check out the live version of our site at:

https://feisty.fish/

### Installation

1. Clone the project

```
git clone https://github.com/feisty-fish/nft-template-public.git
```

2. Install dependencies

```
cd nft-template-public
npm install
```

### Initialize treasury SOL keypair

1. Set URL to devnet

```
solana config set --url https://api.devnet.solana.com
```

2. Generate a new keypair

```
solana-keygen new --outfile C:\Users\(your username)\.config\solana\
```

#### This will output our 1st required environment variable into the terminal as `pubkey`, and will be our treasury SOL address. Set `NEXT_PUBLIC_TREASURY_ADDRESS` in our `.env.local` to this address.

3. Airdrop SOL to wallet. You will likely have to repeat this command many times for testing purposes as there is a limit set to 5 SOL per airdrop.

```
solana airdrop 5
```

### Create, upload, and verify images and metadata

This guide will not cover creating images and metadata. For more info see [Token Metadata Standard](https://docs.metaplex.com/nft-standard) as well as [Prepare NFT Assets](https://docs.metaplex.com/create-candy/prepare-assets).

The following commands assume you have cloned the metaplex package to your C:\ using git clone and that your images and metadata are located in the metaplex directory in an folder named 'assets'.

1. Upload assets

```
ts-node C:\metaplex\js\packages\cli\src\candy-machine-cli.ts upload C:\metaplex\assets --env devnet --keypair C:\Users\(your username)\.config\solana\devnet.json
```

#### This will output our 2nd required environment variable into the terminal as `initialized config for a candy machine with publickey`, and will be a SOL address. Set `NEXT_PUBLIC_CANDY_MACHINE_CONFIG` in our `.env.local` to this address.

#### If `initialized config for a candy machine with publickey` is not output into the terminal, delete the file located at `./cache/devnet-temp.json` and re-run the command in step 1 above.

2. (Optional, but recommended) Verify your assets. If all is well, this command will finish with output `ready to deploy!`

```
ts-node C:\metaplex\js\packages\cli\src\candy-machine-cli.ts verify C:\metaplex\assets --env devnet --keypair C:\Users\(your username)\.config\solana\devnet.json
```

### Create a candy machine

1. Run the following command to create a candy machine

```
ts-node C:\metaplex\js\packages\cli\src\candy-machine-cli.ts create_candy_machine C:\metaplex\assets --env devnet --keypair C:\Users\(your username)\.config\solana\devnet.json
```

#### This will output our 3rd required environment variable into the terminal as `candy machine pubkey`, and will be a SOL address. Set `NEXT_PUBLIC_CANDY_MACHINE_ID` in our `.env.local` to this address.

### Update our new candy machine

We need to set a price in SOL, as well as a mint start date for our candy machine.

1. This command will set the price to 1 SOL, and the mint start date to Oct 20 2021 4:20 GMT

```
ts-node C:\metaplex\js\packages\cli\src\candy-machine-cli.ts update_candy_machine --env devnet --keypair C:\Users\(your username)\.config\solana\devnet.json --price 1 --date "22 Oct 2021 04:20:00 GMT"
```

#### This will output our 4th required environment variable into the terminal as `updated startDate timestamp`, and will be a epoch time. Set `NEXT_PUBLIC_CANDY_START_DATE` in our `.env.local` to this time.

### We are done!!

You can now start the NextJs app by running `npm run build` and `npm start` and navigating to `http://localhost:3000/`, connect your desired wallet and begin minting your new NFTs!


## To run on mainnet-beta ##

You must ensure you have the funds necessary in your CLI wallet to upload files to Arweave and configure your Metaplex candy machine.

PLEASE THOROUGHLY TEST YOUR SITE AND ENSURE IT IS OPERATIONAL ON DEVNET SEVERAL TIMES BEFORE ATTEMPTING TO DO THIS!!!!

To go to mainnet the process is the same you just need to change your commands to be set in mainnet.

1. Ensure your CLI wallet is set to mainnet config

`solana config set --url https://api.mainnet-beta.solana.com`

2. Fund your CLI wallet

3. Repeat the rest of the steps above with the `--env mainnet` command.

4. Check out Vercel for easy way to host your site! If you fork this project and change to how you like you can easily deploy with Vercel!
