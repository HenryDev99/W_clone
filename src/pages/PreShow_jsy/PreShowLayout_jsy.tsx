import Button from "antd/es/button";
import Pagination from "antd/es/pagination";
import "/Users/fridajeong/W_clone/src/pages/PreShow_jsy/PreShow_jsy.scss";

const PreShowLayout_JSY:React.FC = ()=>{

    function btn(){
        function btnname(){
        var btn = [];
        for(var i = 0; i<10; i++){
            btn.push(<div>안녕</div>)
        }
        return btn
        }
        return (
            <div>
                {"All"}
                {"모던"}
                {"페미닌"}
                {"캐주얼"}
                {"베이직"}
                {"로맨틱"}
            </div>
        )
    }
        
    
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
                <ul >
                    <li>
                        <Button shape="round">
                            #
                            All
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            모던
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            페미닌
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            캐주얼
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            베이직
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            로맨틱
                        </Button>
                    </li>
                </ul>
                <ul >
                    <li>
                        <Button shape="round">
                            #
                            All
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            모던
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            페미닌
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            캐주얼
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            베이직
                        </Button>
                    </li>
                    <li>
                        <Button shape="round">
                            #
                            로맨틱
                        </Button>
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