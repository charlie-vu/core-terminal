import Link from "next/link";
import { Image } from "react-bootstrap";

export default function Cta() {
    return (
        <section className="cta py-5">
            <div className="text-center col-lg-9 mx-auto">
                <h4 className="display-4 fw-500">Build and deploy <span className="text-primary">AI Models</span></h4>
                <p className="text-gradient mt-4 fs-4 fw-500">
                    Develop and train AI models and applications using Core Terminals’s decentralized GPU network. Tailored for individuals and enterprises.
                </p>
                <Link href="#" className="mt-5 d-block">
                    <Image src="/ui/launch-now.png" className="col-9 col-lg-auto" />
                </Link>
            </div>
        </section>
    )
}