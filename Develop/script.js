$("document").ready(function(){

    $("#currentDay").text(moment().format("dddd, MMMM do"));

    console.log(moment().format("hA"))

    var current = moment().format("hA")

    var present = "1"
    var future= "2"
    var past = "12"

    // console.log( moment().isBefore(present, "hour"))
    console.log(  moment().hour(9).format("hA"))

    function timeBlocks(){

        var row = $("<div>").attr("class", "row time-block")
        var hour = $("<div>").attr("class", "col-1 hour")
        var text = $("<textarea>").attr({"class":"col-10", name:"", id:"", rows:"1" })
        var button = $("<button>").attr("class", "col-1 saveBtn")
        var lock = $("<i>").attr("class", "fa fa-lock")
        button.append(lock)

        row.append(hour,text,button)

        var timeSlots = 9
        var startTime = 9
        for(var i = 0; i < timeSlots; i++){
            console.log(i)

            var time = moment().hour(startTime).format("hA")
            var row = $("<div>").attr("class", "row time-block")
            var hour = $("<div>").attr("class", "col-1 hour").text(time)
            
            var text = $("<textarea>").attr({"class":"col-10", name:"", id:"", rows:"1" })
            var button = $("<button>").attr("class", "col-1 saveBtn")
            var lock = $("<i>").attr("class", "fa fa-lock")
            button.append(lock)
    
            row.append(hour,text,button)
            $(".container").append(row)

            startTime++
            console.log(startTime)
        }




    }

    timeBlocks()

})