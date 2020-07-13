$("document").ready(function(){

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    // console.log(moment().format("hA"))

    var current = moment().format("H")

    var present = "1"
    var future= "5PM"
    var past = "3PM"

    // console.log(  moment().hour(9).format("hA"))

    function timeBlocks(){
        // Create the time blocks
        // var row = $("<div>").attr("class", "row time-block")
        // var hour = $("<div>").attr("class", "col-1 hour")
        // var text = $("<textarea>").attr({"class":"col-10", name:"", id:"", rows:"1" })
        // var button = $("<button>").attr("class", "col-1 saveBtn")
        // var lock = $("<i>").attr("class", "fa fa-lock")
        // button.append(lock)

        // row.append(hour,text,button)

        // Start time and number of time blocks
        var timeSlots = 9
        var startTime = 16

        if(startTime == 24){
            startTime = 0
        }

        // Loop creates the time blocks
        for(var i = 0; i < timeSlots; i++){
            // console.log(i)

            var time = moment().hour(startTime).format("hA")
            var row = $("<div>").attr({"class": "row time-block", "data-id":startTime})
            var hour = $("<div>").attr("class", "col-1 hour").text(time)
            
            var text = $("<textarea>").attr({"class":"col-10", name:"text", id:"1", rows:"1" })
            var button = $("<button>").attr("class", "col-1 saveBtn")
            var lock = $("<i>").attr("class", "fa fa-lock")
            button.append(lock)

            
            if(current > startTime){
                console.log(current, time, (current > startTime), "past")
                var text = $("<textarea>").attr({"class":"col-10 past", name:"", id:"", rows:"1" })
            }
            else if(current < startTime){
                console.log(current, time, (current < startTime), "future")
                var text = $("<textarea>").attr({"class":"col-10 future", name:"", id:"", rows:"1" })

            }

            else if(current == startTime) {
                console.log(current, time, (current == startTime), "present")
                var text = $("<textarea>").attr({"class":"col-10 present", name:"", id:"", rows:"1" })

            }

    
            row.append(hour,text,button)
            $(".container").append(row)

            startTime++
            // console.log(startTime)
        }




    }

    function timeCheck(){

        console.log(current == future)

        



    }



    timeBlocks()

    
    $(".saveBtn").click(function(event){

        var toDO = $(this).parent().find("textarea")[0].value
        var hourEl =  $(this).parent().find(".hour").text()

        console.log(hourEl ,toDO)


        localStorage.setItem(hourEl, toDO)
    })



    function initTodo(){
        var todos = localStorage
        var timeBlocks =$(".container")
        

        console.log(todos)
        
        for(var i = 0; i< todos.length; i++){
            var time = todos.key(i)
            var text = todos.getItem(time)
            console.log(todos.key(i), todos.getItem(time))

           $(".hour").each(function(index){
               var hour=$(this).text()
                // console.log($(this).text())

                if(hour == time){
                    console.log($(this).next().text(text))
                }
           })

        } 
        

    }

    initTodo()

// Clear my Schedule
    $("#clear").click(function(){
        localStorage.clear()
        location.reload()
    })
})