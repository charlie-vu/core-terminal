import { Container } from "react-bootstrap";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Global from "./components/Global";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Global />
    </Container>
  )
}