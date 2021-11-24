import './Home.css';

export default function Home({authed}) {
    return (
        <main>
            <h1>
                Welcome to the homepage!
            </h1>
            {
                authed ? (
                    <h2>
                        You have successfully authenticate your identity!
                    </h2>
                ) : (
                    <h2>
                        Please login in to the system.
                    </h2>
                )
            }
        </main>

    )
}