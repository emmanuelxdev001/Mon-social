import ContentLoader from "react-content-loader";

const LoaderCheckOut = (props: any) => (
  <ContentLoader
    width={900}
    height={400}
    viewBox="0 0 450 400"
    backgroundColor="rgb(251, 250, 250)"
    foregroundColor="#c2bbbb"
    {...props}
  >
    <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
    <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
    <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
  </ContentLoader>
);

LoaderCheckOut.metadata = {
  name: "Nic Bovee", // My name
  github: "ghettifish", // Github username
  description: "A simple favorite from the DoorDash local favorites.", // Little tagline
  filename: "LoaderCheckOut", // filename of your loader
};

export default LoaderCheckOut;
