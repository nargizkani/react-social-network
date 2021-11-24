import './Profile.css';

export default function Profile() {
    return (
        <section className="container">
            <h1>
                Profile page
            </h1>
            <main className="profile-wrapper">
                <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt=""/>
                <div className="content">
                    <h2>
                        Ailsa Jimenez
                    </h2>
                    <p>24 years old</p>
                </div>
            </main>
        </section>
    )
}