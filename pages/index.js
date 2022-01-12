import Head from "next/head";
import Image from "next/image";
import LoginBox from "../common/components/LoginBox";

export default function Home() {
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
