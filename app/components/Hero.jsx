import Link from 'next/link';
import './Hero.scss';
import { Button, Image } from "react-bootstrap";
export default function Hero() {
    return (
        <section className="hero">
            <h2 className="hero-heading fw-500 display-3 position-relative">Share your GPU<br /> & Earn more benefit <Image src="/ui/plus.png" className='plus position-absolute start-50 top-50 translate-middle-x z-index-n1' /></h2>
            <div className="fs-4 text-primary d-flex flex-wrap align-items-center mt-3">
                <p>Core Terminal GPU</p>
                <p className="bg-primary text-black fw-700 rounded-circle d-flex flex-center mx-2 ratio ratio-1x1" style={{ width: 64 }}>AI</p>
                <p>Technologies.</p>

            </div>
            {/* <Button variant="outline-primary" className="border-rainbow rainbow-hz rounded-pill fs-4 mt-5 px-5 py-3 col-12 col-md-auto">Features</Button> */}
            <Link href="#features">
                <Image src="/ui/features.png" className='cursor-pointer mt-5 col-12 col-lg-auto' />
            </Link>
        </section>
    )
}