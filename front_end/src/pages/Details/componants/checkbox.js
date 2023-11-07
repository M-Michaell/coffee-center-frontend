

export default function MyCheckBox({name}){
    return(
    <div className="text-light p-1">
        <input type="radio" class="btn-check" name="options" id={name} autocomplete="off"/>
        <label class="btn btn-dark py-0" style={{'border':'0px'}} for={name}>{name}</label>
    </div>
)

}
