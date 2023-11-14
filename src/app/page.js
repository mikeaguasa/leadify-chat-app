import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <p className="py-8">
          <Image
            src="/assets/leadify-logo.png"
            alt="Homeownr"
            className="mx-auto text-center"
            width={150}
            height={50}
          />
        </p>
      </header>

      <main className="flex flex-col items-center justify-between py-40">
        <div className="grid grid-cols-4 gap-5">
          <a
            href="/auto-loan"
            className="px-10 py-3 text-center border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Auto Loan
          </a>
          <a
            href="/auto-insurance"
            className="px-10 py-3 text-center border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Auto Insurance
          </a>
          <a
            href="/refinance"
            className="px-10 py-3 text-center  border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Refinance
          </a>
          <a
            href="/solar"
            className="px-10 py-3 text-center  border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Solar
          </a>
          <a
            href="/equity"
            className="px-10 py-3 text-center  border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Equity
          </a>
          <a
            href="/business-loans"
            className="px-10 py-3 text-center  border-2 rounded-md border-[#77217a] text-white font-semibold hover:bg-[#77217a] ease-in duration-300 "
          >
            Business Loans
          </a>
        </div>
      </main>
    </>
  );
}
