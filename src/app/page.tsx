import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-color-bg font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-color-bg sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-color-dark font-serif">
            Neurix Data Solutions
          </h1>
          <p className="max-w-md text-lg leading-8 text-color-body">
            Automation methods for Power BI, Alteryx, SQL Server, and Oracle SQL.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-color-primary px-5 text-white transition-colors hover:opacity-90 md:w-[158px]"
            href="#"
          >
            Get Started
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-color-body px-5 text-color-body transition-colors hover:border-color-primary hover:text-color-primary md:w-[158px]"
            href="#"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
