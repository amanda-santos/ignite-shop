import Link from "next/link";
import type { AppProps } from "next/app";
import Image from "next/future/image";

import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";

import logoImg from "../assets/logo.svg";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
