import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'



const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    return (
        <div className='Hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>

            </div>
            <div className="hero-explore" >
                <p>Experience the Evolution</p>
                <img className="arrow-btn" src={arrow_btn} />
            </div>
            <div className="hero-dot-play">
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot lightblue" : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot blue" : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot red" : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(3)} className={heroCount === 3 ? "hero-dot lightblue" : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(4)} className={heroCount === 4 ? "hero-dot blue" : 'hero-dot'}></li>
                    <li onClick={() => setHeroCount(5)} className={heroCount === 5 ? "hero-dot red" : 'hero-dot'}></li>

                </ul>
                <div className="hero-play">
                    <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} />
                    <p>See the Video</p>
                </div>

            </div>
        </div>
    )
}

export default Hero
