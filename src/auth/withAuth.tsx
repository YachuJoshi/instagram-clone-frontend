/* eslint-disable react/display-name */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseJWT } from "../utils";

export function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const [validJWT, setValidJWT] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        void router.push("/login");
        return;
      }

      try {
        parseJWT(accessToken);
        // Valid JWT
        setValidJWT(true);
      } catch (e) {
        // Invalid JWT
        setValidJWT(false);
        void router.push("/login");
      }
    }, [router]);

    return <>{validJWT && <Component {...(props as T)} />}</>;
  };
}
