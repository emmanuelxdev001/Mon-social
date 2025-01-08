import React, { Suspense } from "react";
import ReactLazy from "./LoaderScreen";
const LoaderScreen = React.lazy(() => import("./LoaderScreen"));
const CodeSpliting = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoaderScreen />
    </Suspense>
  );
};

export default CodeSpliting;
