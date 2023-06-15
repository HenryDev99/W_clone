import Pagination from "antd/es/pagination";
import "./PreShow_jsy.scss";

const PreShowLayout_JSY:React.FC = ()=>{        
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
                    <li>
                        <button className="buttontab">
                            #
                            All
                        </button>
                    </li>
                    <li>
                        <button>
                            #
                            모던
                        </button>
                    </li>
                    <li>
                        <button>
                            #
                            페미닌
                        </button>
                    </li>
                    <li>
                        <button>
                            #
                            캐주얼
                        </button>
                    </li>
                    <li>
                        <button >
                            #
                            베이직
                        </button>
                    </li>
                    <li>
                        <button >
                            #
                            로맨틱
                        </button>
                    </li>
                </ul>
            </div>
            <div className="preshow-content">
                <div className="event-list-wrap">
                    <div className="event-list">
                        <ul>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                            <li><a href="i#"></a></li>
                        </ul>
                    </div>
                </div>
            
            </div>
            <Pagination style={{ marginTop:"60px" }} defaultCurrent={1} total={50} />

        </div>
    </div>
}
export default PreShowLayout_JSY;