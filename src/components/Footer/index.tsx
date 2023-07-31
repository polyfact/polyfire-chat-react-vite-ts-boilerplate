import { Copyright } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-base leading-10 bg-color_5 text-[#FFF] h-[120px]">
      <p className="flex items-center">
        <Copyright size={24} weight="bold" className="mr-2" />
        Copyright 2023 HolyBibleChat
      </p>
      <p>All rights reserved</p>
    </footer>
  );
}
