export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full justify-center lg:pt-12">
        <div className="flex w-full max-w-6xl">{children}</div>
      </div>
    </>
  );
}
