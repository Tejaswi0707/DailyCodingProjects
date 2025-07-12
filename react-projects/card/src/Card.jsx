import passpic from './assets/passpic.png'
function Card(){
    return (
        <div className="card">
            <img src={passpic} alt="picture" className="card-image"></img>
            <h2 className="card-title">Tejaswi</h2>
            <p className="card-text">I love coding.</p>
        </div>
    );
}
export default Card;