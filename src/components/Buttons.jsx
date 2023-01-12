function Button(props){
    return (
    <div id={props.display} className="btn bg-dark text-light d-flex justify-content-center align-items-center" style={{width: 80, height: 80}} onClick={() => props.handleClick(props.id)}>
        {props.id}
        <audio src={props.audio} className="clip" id={props.id}></audio>
    </div>
    )
}
export default Button;