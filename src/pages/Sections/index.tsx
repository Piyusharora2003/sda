import { useNavigate, useParams } from "react-router-dom";
import { Data, PageData } from "../data";
import style from "./style.module.css";
import { CopilotPopup } from "@copilotkit/react-ui";

function convertToIntIf (pageId : string | undefined) : number {
    if (pageId === undefined) return 0;
    for (let c of pageId) {
        if (c < '0' ||  c > '9') return 0; 
    } 
    return Number(pageId);
}

export function Section() {
    const navigate = useNavigate();
    let { pageId } = useParams();
    let pageNumber = convertToIntIf(pageId); 
    const data : Data = PageData[pageNumber - 1];

    function handleNextBtn() {
        const maxPageNumber = PageData.length -1 ;
        const nextPageNumber = pageNumber + 1;
        if (nextPageNumber < maxPageNumber) {
            navigate(`/${nextPageNumber}`);
        } 
        else {
            navigate(`/complete`);
        }
    }

    return (
        <div className={style.container}>
            <div className={style.heading}> {data.heading} </div>
            <div className={style.content}>
                {
                    data.content.map((para , index) => {
                        return (
                            <div key={index}> 
                                {para}
                            </div>
                        )
                    })
                }
            </div>
            <CopilotPopup labels={{ title: "Your Assistant", initial: "Hi! 👋 How can I assist you today?"}} />
            <div className={style.nextButton} onClick={() => handleNextBtn()}>
                Next
            </div>
        </div>
    );
}