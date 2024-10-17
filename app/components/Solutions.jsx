import { Col, Image, Row } from "react-bootstrap";

export default function Solutions() {
    const solutionList = [
        {
            img: '/solutions/img-1.png',
            title: 'Decentralized Resource Utilization',
            content: 'Our platform enables users to contribute their spare or unused computing resources, such as mobile network bandwidth, storage, and computing power. By leveraging these decentralized resources, we create a more efficient and cost-effective environment for AI development and deployment',
            category: 'The Solutions',
        },
        {
            img: '/solutions/img-2.png',
            title: 'Pre-Defined AI Models for Easy Integration',
            content: 'Users can access and utilize pre-defined AI models available on our platform to train their data. This simplifies the process for businesses and researchers who may not have the expertise or resources to develop their own models from scratch',
            category: 'The Solutions',
        },
        {
            img: '/solutions/img-3.png',
            title: 'Collaborative AI Model Sharing',
            content: `Our platform allows researchers and developers to share their AI models with the community. This fosters a collaborative environment where users can build upon each other's work, accelerating innovation and improving the quality of AI models available`,
            category: 'The Solutions',
        },
    ]
    return (
        <section className="solutions py-5">
            <div className="text-center">
                <h4 className="display-5 fw-500">
                    Unlocking <span className="d-inline-block">AI Potential with</span> <span className="d-inline-block">Collaborative and <span className="d-inline-block">Ready-to-Use Models</span></span>
                </h4>
                {/* <p className="text-gradient mt-4 fs-4 fw-500 col-lg-10 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
            </div>
            <Row xs={1} md={2} lg={3} className="mt-5 row-gap-5">
                {solutionList.map((item, i) =>
                    <Col key={`solution-${i}`} className="d-flex flex-column">
                        <div className="border-rainbow rainbow-45 rounded-5">
                            <div className="ratio ratio-1x1">
                                <Image src={item.img} alt={`solution-${i}`} />
                            </div>
                        </div>

                        <div className="border-rainbow rounded-5 px-4 px-lg-5 py-5 mt-3 mt-lg-4 flex-grow-1">
                            <h4 className="fs-3 fw-500 text-gradient vertical">{item.title}</h4>
                            <p className="mt-4">{item.content}</p>
                            {/* <p className="mt-4 fs-4 text-primary fw-500"><span className="dot me-3"></span>{item.category}</p> */}

                        </div>
                    </Col>
                )}

            </Row>
        </section>
    )
}