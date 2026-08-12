import Hero from "../components/homePage/Hero.tsx";
import IntroductionCards from "../components/homePage/IntroductionCards.tsx";
import About from "../components/homePage/About.tsx";
import Newsletter from "../components/homePage/Newsletter.tsx";

interface HomePageProps {
    setCurrentPage: (page: string) => void;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
    return (
        <div className="academia-wrapper">
            <Hero />
            <IntroductionCards setCurrentPage={setCurrentPage} />
            <About />
            <Newsletter />
        </div>
    );
}
