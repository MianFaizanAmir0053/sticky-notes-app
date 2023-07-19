// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Skeleton />
      <Skeleton sx={{ height: 90 }} animation="wave" variant="rectangular" />
      <Skeleton />
      <Skeleton sx={{ height: 90 }} animation="wave" variant="rectangular" />
    </>
  );
}
