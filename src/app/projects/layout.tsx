export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={`absolute inset-0 bg-blue-800 bg-[size:20px_20px] opacity-20 blur-[100px] transition-colors duration-500`}
      ></div>
      <div className="relative h-full w-full">
        <main className="flex min-h-screen flex-col items-center lg:px-8 lg:pt-8">
          <div className="z-10 w-full max-w-7xl justify-center text-sm md:flex h-full">
            <div className="flex flex-col justify-center h-full m-4">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
