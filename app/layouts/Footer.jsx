import Link from "next/link";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function Footer() {
    const socialList = [
        {
            name: 'twitter',
            img: '/ui/twitter.png'
        },
        {
            name: 'telegram',
            img: '/ui/telegram.png'
        },
        {
            name: 'medium',
            img: '/ui/medium.png'
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
                <div className="border-rainbow rainbow-n45 p-5 pb-0">
                    <Row className="justify-content-between gy-4">
                        <Col lg={4}>
                            <Image src="/logo/logo-text.png" alt="thecoreterminal" className="col-12 co-sm-6" />
                            <div className="mt-4">
                                <Button variant="primary" className="rounded-pill fs-5 fw-500 px-4">
                                    <span className="dot bg-black me-3"></span>
                                    All services are online
                                </Button>
                            </div>
                            <div className="mt-4 d-flex gap-2">
                                {socialList.map((item, i) =>
                                    <Image key={`social-${i}`} src={item.img} alt={item.name} width={50} height={50} />
                                )}
                            </div>
                        </Col>
                        {linkList.map((type, index) =>
                            <Col key={`type-${index}`} md={6} lg={3}>
                                <div className="d-flex">
                                    <div className="dot mt-2 me-3"></div>
                                    <div>
                                        <h4 className="text-primary">{type.title}</h4>
                                        <div className="mt-4">
                                            {type.itemList.map((item, i) =>
                                                <div key={`link-${i}`}>
                                                    <Link href={item.href} className="lh-46px">{item.text}</Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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