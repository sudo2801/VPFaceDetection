import { FC, memo } from "react";
import { HeaderProps } from "./header.type";

export const Header: FC<HeaderProps> = memo(() => {
  return (
    <header className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow">
      <h1>fasdfad</h1>
    </header>
  );
});
