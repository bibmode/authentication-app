import Head from "next/head";
import Image from "next/image";
import LoginBox from "../common/components/LoginBox";
import { getSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { AppContext } from "../common/components/Layout";

export default function Home() {
  const { router } = useContext(AppContext);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/profile");
      }
    });
  }, []);

  return (
    <div className="container">
      <LoginBox />

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
