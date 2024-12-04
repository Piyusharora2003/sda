import { Link } from "react-router-dom";
import { Navbar } from "./nav";
import style from "./style.module.css";

export function Home() {
    return (
        <div className="w-full">
            <Navbar/>
            <div className = {style.HomeMain}>
                <div className={style.HomeText}>
                    <div className="my-4 bg-brown">EMOTIONAL INTELLIGENCE</div>
                    <div>
                        <div className={style.Heading}>Improving Emotional Intelligence (EQ)</div>
                        <div className={style.SubHeading}>Manage Emotions to Build Better Relationships and Achieve Success</div>
                        <div className={style.text}>Using these few key steps, you can improve your emotional intelligence, build stronger relationships, and reach your goals at work, school, and in your personal life.</div>
                    </div>
                    <Link to = "/1" className = {style.nextBtn}>
                        Lets get Started!
                    </Link>
                </div>
                <div className={style.HomeImage}>
                    <img src="https://www.helpguide.org/wp-content/uploads/2023/02/Improving-Emotional-Intelligence-1536x1028.jpeg" alt="home page image"/>
                </div>
            </div>
        </div>
    )
}