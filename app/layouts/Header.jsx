'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import useCommonStore from "../store/common";


export default function Header() {
    const store = useCommonStore();
    return (
        <header className="header mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Link href="/">
                            <Image className="logo-text col-12 col-lg-8 col-xxxl-auto" src="/logo/logo-text.png" alt="core-terminal" />
                        </Link>
                    </Col>
                    <Col className="d-none d-lg-block">
                        <div className="d-flex align-items-center justify-content-between">
                            {store.menuList.map((item, i) =>
                                <Link key={`menu-item-${i}`} className="nav-item" href="/">{item.name}</Link>
                            )}
                            <div className="dot blink"></div>
                            <Button variant="outline-primary py-2 px-4 px-xl-5 border-2">Launch App</Button>
                        </div>
                    </Col>
                    <Col xs="auto" className="d-block d-lg-none">
                        <div className="d-flex justify-content-end">
                            <Button variant="outline-primary border-2" size="sm"><span className="dot blink d-inline-block me-3"></span>Launch App</Button>
                            <div className="ms-3 ps-3 border-start border-2 d-flex flex-center">
                                <Image src="/ui/menu.png" width={25} onClick={() => { store.setShowMenu(true) }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}