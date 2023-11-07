

export default function Row({x,y}){
    return(
            <tr key="">
                <td className="w-25 text-secondary">{x}</td>
                <td className="w-75">{y}</td>
            </tr>
    )
}