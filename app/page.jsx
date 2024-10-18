'use client';
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import useScreenStore from "./store/screen";
import ScreenListener from "./components/helpers/ScreenListener";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Global from "./components/Global";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Partners from "./components/Partners";
import Cta from "./components/Cta";
import DecorLine from "./components/ui/DecorLine";
import Sidebar from "./layouts/Sidebar";

export default function Home() {
  // const width = useScreenStore((state) => state.width);
  // const height = useScreenStore((state) => state.height);

  const screen = useScreenStore((state) => state)
  // console.log(screen.gt.md)
  const [decorThickness, setDecorThickness] = useState(18)
  useEffect(() => {
    screen.gt.md ? setDecorThickness(24) : setDecorThickness(18)
  }, [screen.gt.md])
  return (
    <Container>
      <Hero />
      <Features />
      <Global />
      <Solutions />

      <DecorLine thickness={decorThickness} />

      <Products />
      <Partners />
      <Cta />

      <Sidebar />
      <ScreenListener />
    </Container>
  )
}