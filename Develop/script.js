$("document").ready(function(){

    $("#currentDay").text(moment().format("dddd, MMMM do"));

    // console.log(moment().format("hA"))

    var current = moment().format("hA")

    var present = "1"
    var future= "5PM"
    var past = "3PM"

    // console.log( moment().isBefore(present, "hour"))
    // console.log(  moment().hour(9).format("hA"))

    function timeBlocks(){

        var row = $("<div>").attr("class", "row time-block")
        var hour = $("<div>").attr("class", "col-1 hour")
        var text = $("<textarea>").attr({"class":"col-10", name:"", id:"", rows:"1" })
        var button = $("<button>").attr("class", "col-1 saveBtn")
        var lock = $("<i>").attr("class", "fa fa-lock")
        button.append(lock)

        row.append(hour,text,button)

        var timeSlots = 9
        var startTime = 13
        for(var i = 0; i < timeSlots; i++){
            // console.log(i)

            var time = moment().hour(startTime).format("hA")
            var row = $("<div>").attr("class", "row time-block")
            var hour = $("<div>").attr("class", "col-1 hour").text(time)
            
            var text = $("<textarea>").attr({"class":"col-10", name:"", id:"", rows:"1" })
            var button = $("<button>").attr("class", "col-1 saveBtn")
            var lock = $("<i>").attr("class", "fa fa-lock")
            button.append(lock)

            if(current > time){
                var text = $("<textarea>").attr({"class":"col-10 past", name:"", id:"", rows:"1" })
            }
            else if(current < time){
                var text = $("<textarea>").attr({"class":"col-10 future", name:"", id:"", rows:"1" })

            }

            else if(current == time) {
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
})