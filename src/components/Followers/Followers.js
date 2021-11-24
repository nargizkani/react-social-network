import {Link, Outlet} from "react-router-dom";
import './Followers.css';

export default function Friends() {
    const friends = ['Daniel', 'Alex', 'Paige', 'Bethany'];

    return (
        <section className="container">
            <h1>
                Your followers
            </h1>
            <main className="followers-wrapper">
                <ul className="followers-list">
                    {friends.map((person) => (
                        <li>
                            <Link to={`/followers/${person}`}>
                                {person}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="chosen-followers">
                    <Outlet/>
                </div>
            </main>
        </section>
    )
}