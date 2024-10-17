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
                <Col md={10} lg style={{ maxWidth: 600 }}>
                    <Card className="border-rainbow rainbow-45 rounded-5 ct-card p-4 p-lg-5 h-100">
                        <h4 className="fs-2">World wide GPU access</h4>
                        <p className="text-primary mt-3">Access nodes from all over the world.</p>
                        <div className="mt-4 mt-lg-5 h-100 fs-5 d-flex flex-column justify-content-between row-gap-4">
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
                    </Card>

                </Col>
                <Col md="2" lg="auto">
                    <Card className="border-rainbow rainbow-45 rounded-5 ct-card icon-card px-4 px-md-3 px-lg-4 py-3 py-lg-5 h-100 flex-row flex-md-column gap-2 gap-lg-3">
                        {icons.map((item, i) =>
                            <div key={`icon-${i}`} className={`mx-auto ${item.stretch && 'flex-grow-1 d-flex align-items-end justify-content-end'}`}>
                                <Image src={item.src} alt={`icon-${i}`} className="icon" />
                            </div>
                        )}
                    </Card>
                </Col>
                <Col lg xl={5}>
                    <Card className="border-rainbow rainbow-45 rounded-5 h-100">
                        <div className="rounded-5 overflow-hidden ratio ratio-1x1 h-100">
                            <Image src="/global/bg-globe.png" alt="globe" className="h-100 w-auto end-0 bottom-0 top-auto start-auto" />
                        </div>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}