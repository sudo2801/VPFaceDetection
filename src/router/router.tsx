import { createBrowserRouter } from "react-router-dom";
import { FileUploadScreen } from "../views/screens/file-upload-screen/file-upload.screen";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <FileUploadScreen />,
    children: [],
  },
]);
