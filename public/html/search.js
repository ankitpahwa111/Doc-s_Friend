//import { connect } from "tls";

let name="sample" ;
let specialism = "sample"
let radius ="sample"
// if(window.location.href=="http://localhost:4567/html/index.html"){
$(()=>{
    // let id=4;
    // $.get('http://localhost:4567/appointment?id='+id,(data)=>{
    //     console.log(data);
    // })
    
    $('#Find').click(()=>{
        name=$('#name').val();
        specialism = $('#specialism');
        radius = $('#radius').val()
       specialism= $('#specialism').val()
       //console.log('here')
       localStorage.setItem('name',name);
       localStorage.setItem('specialism',specialism);
       localStorage.setItem('radius',radius);
       if(localStorage.name)
       //console.log('yes')
       window.location.href="http://localhost:4568/html/doctors.html";
       
    //    let exports={
    //        name,
    //        specialism,
    //        radius
    //    }
       //console.log(exports)
       
       
    })

    
})
//}