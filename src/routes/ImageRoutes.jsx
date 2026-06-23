import { Route } from "react-router-dom";

import ImageToolsPage from "../pages/category/ImageToolsPage";

const ImageRoutes = (
  <>
    <Route path="/image-tools" element={<ImageToolsPage />} />
  </>
);

export default ImageRoutes;
