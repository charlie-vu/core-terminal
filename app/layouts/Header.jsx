'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";


export default function Header() {

    const [hash, setHash] = useState('')
    useEffect(() => {
        setHash(window.location.hash)
    }, [])

    return (
        <div className="header mt-5">
            <Container>
                <Row xs={2} className="align-items-center">
                    <Col>
                        <Link href="/">
                            <Image className="logo-text col-12 col-lg-8 col-xxxl-auto" src="/logo/logo-text.png" alt="core-terminal" />
                        </Link>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="d-flex align-items-center justify-content-between">
                            <Link className="nav-item" href="/">Company</Link>
                            <Link className="nav-item" href="#product">Product</Link>
                            {/* <Link className="nav-item" href="#tech">Technology</Link> */}
                            <Link className="nav-item" href="#contact">Contact</Link>
                            <div className="dot"></div>
                            <Button variant="outline-primary py-2 px-4 px-xl-5 border-2">Launch App</Button>
                        </div>
                    </Col>
                    <Col className="d-block d-lg-none text-end">
                        <Button variant="outline-primary border-2"><span className="dot d-inline-block me-3"></span>Launch App</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}