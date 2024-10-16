import { Col, Image, Row } from "react-bootstrap";

export default function Solutions() {
    const solutionList = [
        {
            img: '/solutions/img-1.png',
            title: 'Network Scalability',
            content: 'Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.',
            category: 'The Solutions',
        },
        {
            img: '/solutions/img-2.png',
            title: 'A Better Use of GPU Power',
            content: 'Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.',
            category: 'The Solutions',
        },
        {
            img: '/solutions/img-3.png',
            title: 'Network Scalability',
            content: 'Making next generation 3D rendering widely accessible for the content demands of immersive media requires exponential increases in computing scale that is only possible through a decentralized global network.',
            category: 'The Solutions',
        },
    ]
    return (
        <section className="solutions py-4 py-lg-5">
            <div className="text-center col-lg-9 mx-auto">
                <h4 className="display-4 fw-500">Our visual world is evolving at breakneck speed.</h4>
                <p className="text-gradient mt-4 fs-4 fw-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <Row xs={1} md={2} lg={3} className="mt-4 mt-lg-5 row-gap-5">
                {solutionList.map((item, i) =>
                    <Col key={`solution-${i}`} className="d-flex flex-column">
                        <div className="ratio ratio-1x1 border border-primary rounded-5 d-none d-lg-block">
                            <Image src={item.img} alt={`solution-${i}`} />
                        </div>
                        <div className="border border-primary rounded-5 px-4 px-lg-5 py-5 mt-3 mt-lg-4 flex-grow-1 d-flex flex-column justify-content-between">
                            <h4 className="fs-1 fw-500 text-gradient vertical">{item.title}</h4>
                            <div className="mt-4">
                                <p className="fs-5">{item.content}</p>
                                <p className="mt-4 fs-4 text-primary"><span className="d-inline-block bg-primary rounded-circle p-2 me-3"></span>{item.category}</p>
                            </div>
                        </div>
                    </Col>
                )}

            </Row>
        </section>
    )
}