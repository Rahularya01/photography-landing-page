import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mulish.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
