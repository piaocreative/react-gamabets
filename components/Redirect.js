import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = ({ url = "/" }) => {
  const router = useRouter();
  useEffect(() => {
    console.log("Redirecting to ", url);
    router.push(url);
  }, []);
  return <></>;
};

export default Redirect;
