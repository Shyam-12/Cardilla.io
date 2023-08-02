import '../styles/main.css';
// import About from "../components/pages/About";

export default function Main() {
    return (
        <div>
            <main>
                <div className="main-container">
                    <div className="main-content">
                        <h1>Cardilla</h1>
                        <p>Now Pay Your Credit Card Bills without Hastle with Cardilla</p>
                        <nav className="socials">
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img src='/images/twitter.png' alt='twitter' /></a>
                            <a href='https://github.com/Shyam-12/cardilla.io' target="_blank" rel="noreferrer"><img src='/images/github.png' alt='twitter' /></a>
                            <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src='/images/discord.png' alt='twitter' /></a>                            
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    )
}