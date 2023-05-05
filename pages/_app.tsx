import Header from "@/components/Header";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Mulish } from "next/font/google";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className={mulish.className}>
      <Header />
      <Toaster />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
