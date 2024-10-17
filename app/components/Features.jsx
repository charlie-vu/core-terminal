import './Features.scss';

import { Card, Col, Image, Row } from "react-bootstrap";

export default function Features() {
    const features = [
        {
            background: '/features/bg-1.png',
            icon: '/features/icon-1.png',
            name: 'Active\nNodes',
            highlight: '122+',
        },
        {
            background: '/features/bg-2.png',
            icon: '/features/icon-2.png',
            name: 'Participating\nCountries',
            highlight: '24,000+',
        },
        {
            background: '/features/bg-3.png',
            icon: '/features/icon-3.png',
            name: 'Monthly Network\nTraffic',
            highlight: '1 PB',
        },
    ]
    return (
        <section className="features py-3 py-lg-5">
            <Row xs={1} lg={3} className="row-gap-4">
                {features.map((item, index) =>
                    <Col key={`feature-${index}`}>
                        <Card className="border-rainbow rainbow-45 rounded-5 d-flex flex-column justify-content-between p-5" style={{ backgroundImage: `url(${item.background})` }}>
                            <Image src={item.icon} alt={`feature-${index}`} className="icon" />
                            <div className="mt-5">
                                <p className="fs-4">{item.name}</p>
                                <p className="display-5 fw-500 mt-3">{item.highlight}</p>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </section>
    )
}