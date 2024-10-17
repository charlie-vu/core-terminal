import { Col, Image, Row } from "react-bootstrap"
import "./Partners.scss"
export default function Partners() {
    const partnerList = [
        {
            name: 'aws',
            img: '/partners/aws.png',
        },
        {
            name: 'binstarter',
            img: '/partners/binstarter-white.png',
        },
        {
            name: 'lion',
            img: '/partners/lion.png',
        },
        {
            name: 'oneshield',
            img: '/partners/oneshield.png',
        },
        // {
        //     name: 'samsung',
        //     img: '/partners/samsung.png',
        // },
    ]
    return (
        <section className="partners py-4 py-lg-5">
            <div className="bg"></div>
            <h4 className="text-center display-5 fw-500">Partners & <span className="text-primary">Investors</span></h4>
            <Row className="mt-4 mt-lg-5 mt-xxl-5 justify-content-center g-3 g-lg-4 g-xxl-4">
                {partnerList.map((item, i) =>
                    <Col key={`partner-${i}`} xs={6} md={4}>
                        <div className="partner-item border-rainbow rainbow-hz rounded-4 text-center h-100 d-flex flex-center">
                            <div className="rounded-3 overflow-hidden p-3 p-md-4 px-lg-5 py-xxl-4">
                                <Image src={item.img} alt={item.name} className="icon" />
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </section>
    )
}