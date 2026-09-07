import Hero from "../components/homePage/Hero.tsx";
import IntroductionCards from "../components/homePage/IntroductionCards.tsx";
import About from "../components/homePage/About.tsx";
import {Exercises} from "../components/homePage/Exercises.tsx";

interface HomePageProps {
    setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
    return (
        <div className="academia-wrapper">
            <Hero />
            <IntroductionCards setCurrentPage={setCurrentPage} />
            <About />
            <Exercises />
        </div>
    );
}
