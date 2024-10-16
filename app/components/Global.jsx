import "./Global.scss";
import { Card, Col, Image, Row, Stack } from "react-bootstrap";

export default function Global() {
    const counts = [
        {
            country: 'Mexico',
            count: 24
        },
        {
            country: 'Japan',
            count: 55
        },
        {
            country: 'India',
            count: 55
        },
        {
            country: 'India',
            count: 55
        },
        {
            country: 'India',
            count: 55
        },
    ]
    const icons = [
        {
            src: '/global/icon-1.png',
            stretch: false,
        },
        {
            src: '/global/icon-2.png',
            stretch: false,
        },
        {
            src: '/global/icon-3.png',
            stretch: false,
        },
        {
            src: '/global/icon-4.png',
            stretch: false,
        },
        {
            src: '/logo/logo.png',
            stretch: true,
        },
    ]
    return (
        <section className="global py-4 py-lg-5">
            <div className="text-center">
                <h2 className="display-1 fw-700">We’re Gl<span className="text-primary">o</span>bal</h2>
                <p className="text-gradient fs-2">Our global node network empowers <span className="d-inline-block">builders and users</span><br />to access free information.</p>
            </div>
            <Row className="mt-4 mt-lg-5 row-gap-4">
                <Col style={{maxWidth: 600}}>
                    <Card className="ct-card p-4 p-lg-5 h-100">
                        <h4 className="fs-2">World wide GPU access</h4>
                        <p className="text-primary mt-3">Access nodes from all over the world.</p>
                        <div className="mt-4 mt-lg-5">
                            <div className="fs-5 d-flex flex-column row-gap-4">
                                {counts.map((item, index) =>
                                    <Row key={`country-${index}`}>
                                        <Col xs={4}>
                                            <p>{item.country}</p>
                                        </Col>
                                        <Col>
                                            <p><span className="text-primary">{item.count}</span> Active GPUs</p>
                                        </Col>
                                    </Row>
                                )}
                            </div>
                        </div>
                    </Card>

                </Col>
                <Col lg="auto">
                    <Card className="ct-card icon-card px-2 px-lg-0 py-4 py-lg-5 h-100 flex-row flex-lg-column" style={{ minWidth: 200 }}>
                        {icons.map((item, i) =>
                            <div key={`icon-${i}`} className={`mx-auto ${item.stretch && 'flex-grow-1 d-flex align-items-end'}`}>
                                <Image src={item.src} alt={`icon-${i}`} className="w-100" />
                            </div>
                        )}
                    </Card>
                </Col>
                <Col>
                    <Card className="ct-card p-4 h-100 overflow-hidden ratio ratio-1x1 position-relative" style={{borderRadius: 50}}>
                        <Image src="/global/bg-globe.png" alt="globe" className="position-absolute end-0 bottom-0 top-auto start-auto w-auto h-auto z-index-n1" />
                    </Card>
                </Col>
            </Row>
        </section>
    )
}