import React, { Suspense } from "react";

const LoaderCheckOut = React.lazy(() => import("./LaodCheckOut"));
const CodeSplitingCheckOut = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoaderCheckOut />
    </Suspense>
  );
};

export default CodeSplitingCheckOut;
