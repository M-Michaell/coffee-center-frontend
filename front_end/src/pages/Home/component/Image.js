import m1 from '../photo/coffee2.jpg'
import m2 from '../photo/coffee3.jpg'
import m3 from '../photo/coffee4.jpg'
import m4 from '../photo/coffee6.jpg'
import m5 from '../photo/coffee5.jpg'


export default function Images(){
    return(
        <div className="d-flex" style={{margin:"60px", height:"620px" }}>
            <div style={{height:"100%", width:"30%"}} className="m-4">
                <img src={m1} style={{height:"100%", width:"100%"}} className="rounded-5"/>
            </div>
            <div  className="d-flex" style={{height:"100%", width:"60%"}} >
                <div style={{height:"96%", width:"50%"}} className="m-4">
                    <img src={m3} style={{height:"50%", width:"100%"}} className="mb-4 rounded-5"/>
                    <br/>
                    <img src={m2} style={{height:"50%", width:"100%"}} className="rounded-5"/>
                </div>
                <div style={{height:"96%", width:"50%"}} className="m-4">
                    <img src={m4} style={{height:"50%", width:"100%"}} className="mb-4 rounded-5"/>
                    <br/>
                    <img src={m5} style={{height:"50%", width:"100%"}} className="rounded-5"/>

                </div>

            </div>
        </div>
    );
}