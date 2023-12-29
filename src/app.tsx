import { Provider } from "@state/providers";
import { Router } from '@router/router'
import {RouterProvider} from "react-router-dom"

export function App() {
  return (
    <Provider>
     <RouterProvider router={Router} />
    </Provider>
  );
}
