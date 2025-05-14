import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <Image
        src="/logo-loss.png"
        alt="$LOSS Logo"
        width={100}
        height={100}
        className="mb-6"
      />

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
        "Is this a loss?"
      </h1>
      <h2 className="text-xl md:text-3xl font-semibold text-center text-gray-300 mb-6">
        No. This is <span className="text-green-400">$LOSS</span>.<br />
        You either lose or become the meme.
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="https://bscscan.com/token/0xd91CEd2c995A7Ef45E06694c2380F91A93833a56"
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded font-semibold"
        >
          View on BscScan
        </a>
        <a
          href="https://t.me/losstokencommunity"
          target="_blank"
          className="border border-white px-4 py-2 rounded font-semibold"
        >
          Join Telegram
        </a>
        <a
          href="https://pancakeswap.finance/swap?outputCurrency=0xd91CEd2c995A7Ef45E06694c2380F91A93833a56"
          target="_blank"
          className="bg-gray-700 px-4 py-2 rounded font-semibold"
        >
          Buy $LOSS
        </a>
      </div>
    </main>
  );
}
