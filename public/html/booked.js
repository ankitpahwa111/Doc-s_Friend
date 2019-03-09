$(()=>{
    let ID = localStorage.getItem('id')
    let name = localStorage.getItem('name')
    $.get('http://localhost:4568/appointment?id='+ID,(data)=>{
        let app = data[data.length-1];
        
        $.get('http://localhost:4568/doctor?id='+app.doctorsId,(result)=>{
            console.log(result)
            $('#container').append(
               $('<span>').attr('class',"entity").text('Patients name : '+name)
            )
            .append($('<br>'))
            .append($('<br>'))
            .append(
                $('<span>').attr('class',"entity").text('Doctors name : '+ result[0].name)
             )
            .append($('<br>'))
            .append($('<br>'))
            .append(
                $('<span>').attr('class',"entity").text('Specialism : '+ result[0].specialism)
             )
            .append($('<br>'))
            .append($('<br>'))
            
            .append(
                $('<span>').attr('class',"entity").text('Date Of Appointment : 10-02-2019')
             )
            .append($('<br>'))
            .append($('<br>'))
            .append(
                $('<span>').attr('class',"entity").text('Time of Appointment : 11AM')
             )
            .append($('<br>'))
            .append($('<br>'))
            .append(
                $('<span>').attr('class',"entity").text('Hospital Name: '+ result[0].hospital)
             )
            .append($('<br>'))
            .append($('<br>'))
        })

    })
})