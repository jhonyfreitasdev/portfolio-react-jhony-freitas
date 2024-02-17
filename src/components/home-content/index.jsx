import fundoPrincipal from "../../_assets/images/jhony-animated.png";
import gifNerd from "../../_assets/images/gifs-emoji-nerd.gif";
import "./index.sass";

export const HomeContent = () => {
    return (
        <div className="home-content-container">
            <div className="info-container">
                <div className="info-div">
                    <p>
                        Olá!
                        <img src={gifNerd} alt="Mão acenando" />
                        eu sou
                    </p>

                    <h1>Jhony Freitas</h1>
                    <h3>Desenvolvedor Front-end</h3>
                </div>
            </div>
            <div className="image-container">
                <img src={fundoPrincipal} alt="Imagem animada de programador" />
            </div>
        </div>
    )
}