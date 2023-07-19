import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  <>
    <Skeleton />
    <Skeleton sx={{ height: 90 }} animation="wave" variant="rectangular" />
  </>;
}
