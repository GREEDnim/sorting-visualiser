import Bar from "./Bar"
import './style.css'
function Bars({array,name})
{
    return(
        < div className="bg">
        <div className="heading">{name}</div>
         <div className="bars-box">
            {
                array.map((ele)=><Bar height={ele}></Bar>)

            }
        </div>
        </div>  
    )    
}
export default Bars;