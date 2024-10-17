import './Features.scss';

import { Card, Col, Image, Row } from "react-bootstrap";

export default function Features() {
    const features = [
        {
            background: '/features/bg-1.png',
            icon: '/features/icon-1.png',
            name: 'Participating countries',
            highlight: '30+',
        },
        {
            background: '/features/bg-2.png',
            icon: '/features/icon-2.png',
            name: 'Active\nNodes',
            highlight: '1000+',
        },
        {
            background: '/features/bg-3.png',
            icon: '/features/icon-3.png',
            name: 'Monthly Network Traffic',
            highlight: '200+ TB',
        },
    ]
    return (
        <section className="features py-5">
            <Row xs={1} lg={3} className="row-gap-4">
                {features.map((item, index) =>
                    <Col key={`feature-${index}`}>
                        <Card className="border-rainbow rainbow-45 rounded-5 p-5 d-flex flex-column justify-content-between h-100" style={{ backgroundImage: `url(${item.background})` }}>
                            <Image src={item.icon} alt={`feature-${index}`} className="icon" />
                            <div className="card-text flex-grow-1 d-flex flex-column justify-content-end">
                                <p className="fs-4 col-lg-10">{item.name}</p>
                                <p className="display-4 fw-500 mt-2">{item.highlight}</p>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </section>
    )
}