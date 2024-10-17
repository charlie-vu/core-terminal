import Link from "next/link";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function Footer() {
    const socialList = [
        {
            name: 'twitter',
            img: '/ui/twitter.png',
            url: '#',
        },
        {
            name: 'telegram',
            img: '/ui/telegram.png',
            url: '#',
        },
        {
            name: 'medium',
            img: '/ui/medium.png',
            url: '#',
        },
    ]
    const linkList = [
        {
            title: 'The Core Terminal',
            itemList: [
                {
                    text: 'About Us',
                    href: '#',
                },
                {
                    text: 'Brand kit',
                    href: '#',
                },
                {
                    text: 'Roadmap',
                    href: '#',
                },
                {
                    text: 'Documentation',
                    href: '#',
                },
            ]
        },
        {
            title: 'Product',
            itemList: [
                {
                    text: 'ctNetwork',
                    href: '#',
                },
                {
                    text: 'ctStorage',
                    href: '#',
                },
                {
                    text: 'ctGPU',
                    href: '#',
                },
                {
                    text: 'ctModels',
                    href: '#',
                },
                {
                    text: 'ctData',
                    href: '#',
                },

            ]
        },

    ]
    return (
        <footer className="footer mt-5">
            <Container className="">
                <div className="wrapper border-rainbow rainbow-n45 p-5 px-4 px-md-5 pb-0">
                    <Row className="justify-content-between gy-5">
                        <Col lg={4}>
                            <Image src="/logo/logo-text.png" alt="thecoreterminal" className="logo w-100" />
                            <div className="mt-4">
                                <Button variant="primary" className="rounded-pill fw-500 px-4">
                                    <span className="dot bg-black me-3"></span>
                                    All services are online
                                </Button>
                            </div>
                            <div className="mt-4 d-flex gap-2">
                                {socialList.map((item, i) =>
                                    <Link key={`social-${i}`} href={item.url}>
                                        <Image src={item.img} alt={item.name} width={50} height={50} />
                                    </Link>
                                )}
                            </div>
                        </Col>
                        {linkList.map((type, index) =>
                            <Col key={`type-${index}`} md={6} lg="auto" className="link-type">
                                <h4 className="link-title text-primary">{type.title}</h4>
                                <div className="mt-4">
                                    {type.itemList.map((item, i) =>
                                        <div key={`link-${i}`}>
                                            <Link href={item.href} className="lh-lg text-gradient">{item.text}</Link>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        )}

                    </Row>
                    <div className="py-4 border-top border-primary mt-4 d-flex justify-content-between flex-wrap">
                        <p>Core Terminal All rights reserved. Copyright © 2024</p>
                        <div className="d-flex gap-4">
                            <Link href="#">Terms Of Service</Link>
                            <p>|</p>
                            <Link href="#">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}