'use client';
import { useEffect, useState } from 'react';
import './Products.scss';
import { Col, Image, Row } from "react-bootstrap";
import useScreenStore from '../store/screen';

export default function Products() {
    const productList = [
        {
            title: 'Global GPU Access',
            content: 'We Provide GPU access worldwide across +138 countries',
            category: 'The Products',
            background: '/products/bg-1.png',
        },
        {
            title: 'Best in class chips',
            content: 'We offer the best selection of Optimal AI processors',
            category: 'The Products',
            background: '',
        },
        {
            title: 'Processor Flexibility',
            content: 'We Provide flexible and scalable clusters with auto scaling as your user base grows',
            category: 'The Products',
            background: '',
        },
        {
            title: 'Sustainable,\nYet Powerful',
            content: 'Through our green committed Data Center partners, We provide Sustainable GPU options',
            category: 'The Products',
            background: '/products/bg-2.png',
        },
    ]
    const [showIframe, setShowIframe] = useState(false)
    const screen = useScreenStore((state) => state)

    const [vidRatio, setVidRatio] = useState('ratio-16x9')
    useEffect(() => {
        screen.width >= 1200 ? setVidRatio('ratio-21x9') : setVidRatio('ratio-16x9')
        // console.log(vidRatio)
    }, [screen.width])
    return (
        <section className="products py-4 py-lg-5">
            <div className="text-center col-lg-9 mx-auto">
                <Image src='/products/124x.png' alt="124x" className="w-100" />
                <h4 className="display-4 fw-500">124x more GPUs<br />than all the GPUs in existence</h4>
                <p className="text-gradient mt-4 fs-4 fw-500">Turn your GPU into a money-making machine with <span className='d-inline-block'>Core Terminal</span></p>
            </div>
            <Row className="mt-4 mt-lg-5 row-gap-4">
                {productList.map((item, i) =>
                    <Col lg={6} xl={item.background ? 8 : 4} key={`product-${i}`}>
                        <div className="item p-4 p-lg-5 border-rainbow rounded-5 h-100 d-flex flex-column justify-content-between" style={{ backgroundImage: `url(${item.background})` }}>
                            <div className={`card-text ${item.background ? 'col-xl-6' : ''}`}>
                                <h4 className="text-gradient fs-1">{item.title}</h4>
                                <p className="mt-4 fs-5">{item.content}</p>
                            </div>
                            <p className="mt-4 mt-lg-5 text-primary fs-4 fw-500"><span className='dot me-3'></span>{item.category}</p>
                        </div>
                    </Col>
                )}
                <Col xs={12}>
                    <div className="border-rainbow rounded-5">
                        <div className={`ratio ${vidRatio} rounded-5 overflow-hidden`}>
                            {showIframe === false
                                ?
                                <Image src="/products/video-thumbnail.png" className='cursor-pointer w-100 h-auto top-50 translate-middle-y' onClick={() => { setShowIframe(true) }} />
                                :
                                <iframe src="https://www.youtube.com/embed/lWnZbz-a5OE?autoplay=1" title="The Core Terminal - A Futuristic  Revolutionizing AI Infrastructure and Model Exchange on Blockchain" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}