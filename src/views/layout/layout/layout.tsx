import { FC, memo } from "react";
interface LayoutProps {}

export const Layout: FC<LayoutProps> = memo(({children}) => {
  return (
    <div className="w-screen h-screen bg-black">
      {/* <Header /> */}
      {children}
    </div>
  );
});
