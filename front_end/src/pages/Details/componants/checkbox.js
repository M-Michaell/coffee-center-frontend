

export default function MyCheckBox({name}){
    return(
    <div classNameName="text-light p-1">
        <input type="radio" className="btn-check" name="options" id={name} autocomplete="off"/>
        <label className="btn btn-dark py-0" style={{'border':'0px'}} htmlFor={name}>{name}</label>
    </div>
)

}
