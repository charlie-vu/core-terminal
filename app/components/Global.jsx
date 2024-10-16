import { Card, Col, Image, Row, Stack } from "react-bootstrap";

export default function Global() {
    const count = [
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
    return (
        <section className="global py-4 py-lg-5">
            <div className="text-center">
                <h2 className="display-1 fw-700">We&apos;re Gl<span className="text-primary">o</span>bal</h2>
                <p className="text-gradient fs-1">Our global node network empowers <span className="d-inline-block">builders and users</span><br />to access free information.</p>
            </div>
            <Row className="mt-4 mt-lg-5 row-gap-4">
                <Col lg={5}>
                    <Card className="p-4 bg-transparent text-white border-1 border-primary rounded-5 h-100">
                        <h4 className="fs-1">World wide GPU access</h4>
                        <p className="fs-5 text-primary mt-3">Access nodes from all over the world.</p>
                        <div className="mt-4 mt-lg-5">
                            <Stack gap={5} className="fs-4">
                                {count.map((item, index) =>
                                    <Row key={`country-${index}`}>
                                        <Col xs={4}>
                                            <p>{item.country}</p>
                                        </Col>
                                        <Col>
                                            <p><span className="text-primary">{item.count}</span> Active GPUs</p>
                                        </Col>
                                    </Row>
                                )}
                            </Stack>
                        </div>
                    </Card>

                </Col>
                <Col lg="auto">
                    <Card className="p-4 bg-transparent text-white border-1 border-primary rounded-5 h-100" style={{minWidth: 150}}>

                    </Card>
                </Col>
                <Col>
                    <Card className="p-4 bg-transparent text-white border-1 border-primary rounded-5 h-100 overflow-hidden ratio ratio-1x1 position-relative">
                        <Image src="/global/bg-globe.png" alt="globe" className="position-absolute end-0 bottom-0 top-auto start-auto w-auto h-auto" />
                    </Card>
                </Col>
            </Row>
        </section>
    )
}