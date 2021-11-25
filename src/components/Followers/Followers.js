import {Link, Outlet} from "react-router-dom";
import './Followers.css';

export default function Friends() {
    const friends = ['Daniel', 'Alex', 'Paige', 'Bethany'];

    return (
        <div>
            <h1>
                Your followers
            </h1>
            <div className="container">
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
            </div>
        </div>

)
}