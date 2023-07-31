export function Header() {
  return (
    <header className="flex h-20 items-center justify-center bg-color_5 text-color_3">
      <div className="flex h-20 items-center justify-between max-w-[1440px] w-[1440px]">
        <div className="flex items-center ml-6 h-full">
          <img src="/logo.svg" alt="Logo do HolyBibleChat" className="mr-6" />
          <h1 className="font-semibold text-2xl">HolyBibleChat</h1>
        </div>
      </div>
    </header>
  );
}
