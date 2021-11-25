import './Home.css';

export default function Home({authed}) {
    return (
        <main>
            <h1>
                Homepage
            </h1>
            {
                authed ? (
                    <h2>
                        You have successfully authenticate your identity!
                    </h2>
                ) : (
                    <h2>
                        Please login.
                    </h2>
                )
            }
        </main>

    )
}