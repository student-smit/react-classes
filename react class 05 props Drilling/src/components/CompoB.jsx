import CompoA from "./CompoA";

const CompoB = ({userName})  =>{
    return(
    <div>
        
        <h2>This is Component  B</h2>
    <CompoA userName={userName} />
    </div>
    )
}

export default CompoB;