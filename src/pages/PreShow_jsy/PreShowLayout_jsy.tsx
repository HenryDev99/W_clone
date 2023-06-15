import Pagination from "antd/es/pagination";
import "./PreShow_jsy.scss";
import preshowdata from "../../assets/data/preshowData.json"

const PreShowLayout_JSY:React.FC = ()=>{        

    const buttonName = [
            "All",
            "모던",
            "페미닌",
            "캐주얼",
            "베이직",
            "로맨틱"
    ];

    return <div>
        <div className="main-layout-container preshow-container">
            <header className ="header-container"></header>
            <div>
                <div className="title-area">
                    <div className="title">pre show</div>
                    <div className="desc">w 컨셉의 주요 브래드의 신상과 트렌드를 먼저 만나볼 수 있어요</div>  
                </div>
            </div>
            <div preshow-tab>
                <ul>
                    {
                        buttonName.map((buttonName,idx) => {
                            return <div>
                                <li><button className="buttontab">#{buttonName}</button></li>
                            </div>
                        })
                    }
                </ul>
            </div>
            <div className="preshow-content">
                <div className="event-list-wrap">
                    <div className="event-list">
                        <ul>
                            {
                                preshowdata.map((item, idx) => {
                                    return <div>
                                        <img src={item.img}></img>
                                        <li>{item.category}</li>
                                    </div>
                                })
                            }
                        </ul>
                    </div>
                </div>
            
            </div>
            <Pagination style={{ marginTop:"60px" }} defaultCurrent={1} total={50} />

        </div>
    </div>
}
export default PreShowLayout_JSY;