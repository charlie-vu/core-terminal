import "./DecorLine.scss";
export default function DecorLine(props) {
    const {
        thickness = 24,
    } = props;
    return (
        <div className="decor-line py-4 col-lg-8 d-flex gap-3">
            <div className="wrapper rounded-pill overflow-hidden" style={{ height: thickness }}>
                <div className="bg"></div>
                <div className="inner bg-primary rounded-pill"></div>
            </div>
            <div className="bg-primary rounded-circle" style={{ width: thickness, height: thickness }}></div>
        </div>
    )
}