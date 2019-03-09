
     
    console.log('in doctors.js')
    let obj ={}
    let name=localStorage.getItem('name')
    let radius=localStorage.getItem('radius')
    let specialism=localStorage.getItem('specialism')
    console.log(radius)
    $(()=>{
        $.get('http://localhost:4568/doctors?radius='+Number(radius)+'&specialism='+specialism,(data)=>{
            console.log(data)
            for(let i=0;i<data.length;i++ ){
                console.log(data[i].name)
                let doctor= data[i];
                $("#DoctorList").append(
                $('<li>').attr('id',doctor.id).attr('class','list-item')
                .append($('<div>').attr('class','doctor').append(
                    $('<span>').text(doctor.name).attr('class',"col py-1")
                )
                .append($('<br>'))
                
                .append(
                   $('<span>').text('Range : '+ doctor.radius +'kms').attr('class',"col py-1")
                )

                .append($('<br>'))
                .append(
                    $('<span>').text('Rating(out of 100) : '+ doctor.rating).attr('class',"col py-1")
                 )
                 .append($('<br>'))
                 
                .append(
                    $('<span>').text('specialism : ' + doctor.specialism).attr('class',"col py-1")
                )
                .append($('<br>'))
                
                .append(
                    $('<span>').text('Hospital/Clinic : ' + doctor.hospital).attr('class',"col py-1")
                )
                .append($('<br>'))
                .append($('<br>'))
                .append(
                    $('<button>').text('BOOK').attr('class',"btn btn-warning col-4 mx-5 ")
                    .click(()=>{
                        $.post('http://localhost:4568/appointment',{DocId : doctor.id , PatientName : name},(result)=>{
                            localStorage.setItem('id',result.Id)

                            window.location.href="http://localhost:4568/html/booked.html"
                        })
                    })
                )
                .append($('<br>'))
                .append($('<br>'))
                
                )
                .append($('<br>'))
                .append($('<br>'))
                .append($('<br>'))
                .append($('<br>'))
                
                )
            }
       })
   
    })
    
    //localStorage.clear()

    
