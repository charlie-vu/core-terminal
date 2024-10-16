import { Container } from "react-bootstrap";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Global from "./components/Global";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Global />
      <Solutions />
    </Container>
  )
}