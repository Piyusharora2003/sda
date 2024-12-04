import styles from "./style.module.css";
import { FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";


const Icons: IconArray[] = [{
    linkName: "Instagram",
    icon: <FaInstagram />,
    link: "http://instagram.com"
}, {
    linkName : "LinkedIn" ,
    icon : <FaLinkedin/> ,
    link : "http://linkedIn.com"
} , {
    linkName : "Pinterest",
    icon : <FaPinterest/>,
    link : "http://pinterest.com"
}];



export function Navbar() {
    return (
        <div className={styles.navMain}>
            <div className={styles.logo}>IMPROVE_EQ.vercel</div>
            <div>
                {
                    Icons.map((item , index)=> {
                        return (
                            <a key={index} href={item.link} target = "_blank" className="px-2 text-3xl font-red" >
                                {item.icon}
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )}
            interface IconArray {
                linkName : string ,
                icon : JSX.Element,
                link : string
            }
