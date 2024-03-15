import { useState } from "react";

function Board(){

    let  [data,setdata] = useState(null);

    function ajax(){
        fetch('http://192.168.7.182:80/notice/list')
            .then(response => response.json())
            .then(res => {
                setdata(res);
            })

        
    }

   ajax();

    return (
        <div>
            <h1>
                React BoardList
            </h1>
            {data && (
        <ol>
          {/* 데이터를 매핑하여 리스트 아이템으로 렌더링 */}
          {data.map(item => (
            <li key={item.boardTitle}>
                Board Title: {item.boardTitle}  <br/>
                Board Contents: {item.boardContents} 
                <br/><br/><br/><br/><br/>
            </li>
          ))}
        </ol>
      )}

        </div>
    );
}
export default Board