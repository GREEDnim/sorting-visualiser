import './style.css';
function Bar({height})
{

    return (
        
        <div style={{height:`${height}%`}}  className="bar"></div>
    )
}
export default Bar;