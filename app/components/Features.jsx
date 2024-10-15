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
        <section className="features">
            <Row xs={1} lg={2} xl={3} className="row-gap-4">
                {features.map((item, index) =>
                    <Col key={`feature-${index}`}>
                        <Card className="d-flex flex-column justify-content-between" style={{ backgroundImage: `url(${item.background})` }}>
                            <Image src={item.icon} className="icon" />
                            <div>
                                <p className="fs-34px">{item.name}</p>
                                <p className="fs-64px fw-500">{item.highlight}</p>
                            </div>
                        </Card>
                    </Col>
                )}
            </Row>
        </section>
    )
}