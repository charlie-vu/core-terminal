'use client';
import { Container } from "react-bootstrap";

import useScreenStore from "./store/screen";
import ScreenListener from "./components/helpers/ScreenListener";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Global from "./components/Global";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Partners from "./components/Partners";

export default function Home() {
  // const width = useScreenStore((state) => state.width);
  // const height = useScreenStore((state) => state.height);

  // console.log(width)
  return (
    <Container>
      <Hero />
      <Features />
      <Global />
      <Solutions />
      <Products />
      <Partners />

      <ScreenListener />
    </Container>
  )
}