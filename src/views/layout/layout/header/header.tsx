import { FC, memo } from "react";
import { HeaderProps } from "./header.type";

export const Header: FC<HeaderProps> = memo(() => {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow justify-center items-center">
      <p
        class="sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent

            bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400))]"
      >
        ...QuickFace Detector...
      </p>
      {/* <span  class="text-6xl md:text-4xl font-extrabold bg-clip-text"> 🚀</span> */}
    </header>
  );
});
