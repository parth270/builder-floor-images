import React, { Suspense } from "react";

const Uploads = React.lazy(() => import("../views/uploads.jsx"));

const UploadsRoute = () => {
  return (
    <Suspense fallback={null}>
      <Uploads />
    </Suspense>
  );
};

export default UploadsRoute;
