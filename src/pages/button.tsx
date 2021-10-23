/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../../hooks/useCandyMachine";
import useWalletBalance from "../../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../../hooks/useWalletNFTs";

export default function Home() {
  const [balance] = useWalletBalance();
  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    nftsData
  } = useCandyMachine();

  const [isLoading, nfts] = useWalletNfts();

  const { connected } = useWallet();

  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
  }, []);


  return (
    <>
      <div className="bg-gray-100">
      <div className="flex flex-col items-center">
        <Toaster />
        <p>{nftsData.itemsRedeemed}/{nftsData.itemsAvailable}</p>
        <div className="flex items-start justify-center w-11/12 my-5">
          <div className="flex items-center">
            {connected}
            <WalletMultiButton />
          </div>
        </div>
        {connected}
        <div className="flex items-start justify-center w-11/12 my-0">
          {connected ? (
            <>
              {new Date(mintStartDate).getTime() < Date.now() ? (
                <>
                  {isSoldOut ? (
                    <p>SOLD OUT</p>
                  ) : (
                    <>
                      <div className="flex flex-col w-1/2">
                        <button
                          onClick={startMint}
                          disabled={isMinting}
                          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-purple-500"
                        >
                          {isMinting ? "loading" : "MINT"}
                        </button>
                      </div>
                    </>
                  )}
                </>
              ) : (
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsMintLive(true)}
                  onComplete={() => setIsMintLive(true)}
                />
              )}
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
