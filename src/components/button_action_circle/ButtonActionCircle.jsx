export default function ButtonActionCircle({ type, onClick }){
    
    if(type == 'printer'){
        return(
            <div>
                <button className="button_action_circle" onClick={onClick} disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" id="side-nav-icons"><path d="M16 8.3v-3H8v3H6.5V3.8h11v4.5ZM4.3 9.8h15.4H6.5Zm13.5 2.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288ZM16 19v-4.275H8V19Zm1.5 1.5h-11v-4H2.8v-5.7q0-1.05.725-1.775Q4.25 8.3 5.3 8.3h13.4q1.075 0 1.788.725.712.725.712 1.775v5.7h-3.7Zm2.2-5.5v-4.2q0-.425-.287-.713-.288-.287-.713-.287H5.3q-.425 0-.712.287-.288.288-.288.713V15h2.2v-1.775h11V15Z"/></svg>
                </button>
            </div>
        )
    }else if(type === 'file_download'){
        return(
            <div>
                <button className="button_action_circle" onClick={onClick} disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" id="side-nav-icons"><path d="M6.3 19.5q-.75 0-1.275-.525Q4.5 18.45 4.5 17.7V15H6v2.7q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V15h1.5v2.7q0 .75-.525 1.275-.525.525-1.275.525Zm5.7-3.875L7.725 11.35l1.05-1.1 2.475 2.475v-8.4h1.5v8.4l2.475-2.475 1.05 1.1Z"/></svg>
                </button>
            </div>
        )
    }else if(type === 'autorenew'){
        return(
            <div>
                <button className="button_action_circle" onClick={onClick} disabled>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" id="side-nav-icons"><path d="M5.175 15.625q-.45-.85-.687-1.75-.238-.9-.238-1.825 0-3.25 2.263-5.525Q8.775 4.25 12 4.25h.775l-1.85-1.85 1.05-1.05L15.65 5l-3.675 3.65-1.05-1.05 1.85-1.85H12q-2.6 0-4.425 1.837Q5.75 9.425 5.75 12.05q0 .625.138 1.237.137.613.412 1.213Zm6.85 7.025L8.35 19l3.675-3.65 1.05 1.05-1.85 1.85H12q2.6 0 4.425-1.837 1.825-1.838 1.825-4.463 0-.625-.137-1.238-.138-.612-.413-1.212l1.125-1.125q.45.85.688 1.75.237.9.237 1.825 0 3.25-2.262 5.525Q15.225 19.75 12 19.75h-.775l1.85 1.85Z"/></svg>
                </button>
            </div>
        )
    }else if(type === 'delete'){
        return(
            <div>
                <button className="button_action_circle" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" id="side-nav-icons"><path d="M7.3 20.5q-.75 0-1.275-.525Q5.5 19.45 5.5 18.7V6h-1V4.5H9v-.875h6V4.5h4.5V6h-1v12.7q0 .75-.525 1.275-.525.525-1.275.525ZM17 6H7v12.7q0 .125.088.213.087.087.212.087h9.4q.1 0 .2-.1t.1-.2ZM9.4 17h1.5V8H9.4Zm3.7 0h1.5V8h-1.5ZM7 6V19v-.3Z"/></svg>
                </button>
            </div>
        )
    }
}