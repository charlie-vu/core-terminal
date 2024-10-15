import { Button } from "react-bootstrap";
import styles from "./Hero.module.scss";
export default function Hero() {
    return (
        <section className={styles.hero}>
            <h2 className="fw-500 fs-100px">Share your GPU<br /> & Earn more benefit</h2>
            <div className="fs-36px text-primary d-flex align-items-center mt-3">
                <p>Core Terminal GPU</p>
                <p className="bg-primary text-black fw-700 rounded-circle d-flex flex-center mx-2" style={{ width: 74, height: 74 }}>AI</p>
                <p>Technologies.</p>
            </div>
            <Button variant="outline-primary" className={`${styles.btn} rounded-pill fs-28px mt-5 gradient`}>Features</Button>
        </section>
    )
}