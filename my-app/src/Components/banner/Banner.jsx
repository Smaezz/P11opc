import './banner.css'
import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="hero">
            <Link to="/User">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
            </Link>
        </div>
    )
}