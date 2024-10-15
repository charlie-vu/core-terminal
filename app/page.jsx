import { Container } from "react-bootstrap";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
    </Container>
  )
}