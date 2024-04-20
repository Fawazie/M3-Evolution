import { useEffect, useState } from "react";
import Background from './components/Background/Background';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


const App = () => {
    let heroData = [
        { text1: 'The Ultimate', text2: 'Driving Machine' },
        { text1: 'The Ultimate', text2: 'Driving Machine' },
        { text1: 'The Ultimate', text2: 'Driving Machine' },
        { text1: 'The Ultimate', text2: 'Driving Machine' },
        { text1: 'The Ultimate', text2: 'Driving Machine' },
        { text1: 'The Ultimate', text2: 'Driving Machine' },

    ]

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    useEffect(() => {
        setInterval(() => {
            setHeroCount((count) => { return count === 5 ? 0 : count + 1 })
        }, 7000);

    }, [])
    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}

            />
        </div>
    )
}

export default App
