import './Hero.scss';
import { Button } from "react-bootstrap";
export default function Hero() {
    return (
        <section className="hero">
            <h2 className="fw-500 display-1">Share your GPU<br /> & Earn more benefit</h2>
            <div className="fs-2 text-primary d-flex flex-wrap align-items-center mt-3">
                <p>Core Terminal GPU</p>
                <p className="bg-primary text-black fw-700 rounded-circle d-flex flex-center mx-2 ratio ratio-1x1" style={{width: 64}}>AI</p>
                <p>Technologies.</p>
            </div>
            <Button variant="outline-primary" className="gradient rounded-pill fs-4 mt-5 px-5 py-3 col-12 col-md-auto">Features</Button>
        </section>
    )
}