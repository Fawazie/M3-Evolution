import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.jpeg'
import image2 from '../../Assets/image2.jpeg'
import image3 from '../../Assets/image3.jpeg'
import image4 from '../../Assets/image4.jpeg'
import image5 from '../../Assets/image5.avif'
import image6 from '../../Assets/image6.jpeg'





const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='Background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src={image1} className='Background fade-in' alt="" />

    }
    else if (heroCount === 1) {
        return <img src={image2} className='Background fade-in' alt="" />


    }
    else if (heroCount === 2) {
        return <img src={image3} className='Background fade-in' alt="" />

    }
    else if (heroCount === 3) {
        return <img src={image4} className='Background fade-in' alt="" />

    }
    else if (heroCount === 4) {
        return <img src={image5} className='Background fade-in' alt="" />


    }
    else if (heroCount === 5) {
        return <img src={image6} className='Background fade-in' alt="" />

    }

}

export default Background
