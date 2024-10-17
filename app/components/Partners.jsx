import { Col, Image, Row } from "react-bootstrap"
import "./Partners.scss"
export default function Partners() {
    const partnerList = [
        {
            name: 'binstarter',
            img: '/partners/binstarter.png',
        },
        {
            name: 'nvidia',
            img: '/partners/nvidia.png',
        },
        {
            name: 'asus',
            img: '/partners/asus.png',
        },
        {
            name: 'siemens',
            img: '/partners/siemens.png',
        },
        {
            name: 'samsung',
            img: '/partners/samsung.png',
        },
    ]
    return (
        <section className="partners py-4 py-lg-5">
            <div className="bg"></div>
            <h4 className="text-center display-5 fw-500">Partners & <span className="text-primary">Investors</span></h4>
            <div className="mt-4 mt-lg-5 mt-xxl-5 d-flex justify-content-center gap-4 flex-wrap">
                {partnerList.map((item, i) =>
                    <div key={`partner-${i}`} className="partner-item border-rainbow rainbow-hz rounded-4 text-center">
                        <div className="rounded-3 overflow-hidden p-4">
                            <Image src={item.img} alt={item.name} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}