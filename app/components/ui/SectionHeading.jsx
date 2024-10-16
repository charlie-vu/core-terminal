export default function SectionHeading(props) {
    const {
        heading,
        intro,
        

    } = props;
    return (
        <div className="text-center">
            <h2 className="display-1 fw-700">We&apos;re Gl<span className="text-primary">o</span>bal</h2>
            <p className="text-gradient fs-1">Our global node network empowers <span className="d-inline-block">builders and users</span><br />to access free information.</p>
        </div>
    )
}