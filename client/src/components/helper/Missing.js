import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <article style={{ padding: "100px" }}>
            <h1>Oops!</h1>
            <p>Seite nicht gefunden</p>
            <div className="flexGrow">
                <Link to="/">Gehe zurück zur Startseite</Link>
            </div>
        </article>
    )
}

export default Missing
