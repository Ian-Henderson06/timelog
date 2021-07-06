function StartTimer() {
    var startTime = new Date().getTime()

    window.setInterval(function () {
        var elapsedTime = new Date().getTime() - startTime

        let totalSeconds = Math.floor(elapsedTime / 1000) // diving by 1000 removes milliseconds

        //Calculate hours, minutes and seconds
        let hours = Math.floor(totalSeconds / 60 / 60)
        let minutes = Math.floor(totalSeconds / 60) - (hours * 60) //minutes calculation would normally include the hours previously calculated - these need removed
        let seconds = totalSeconds % 60
       
        ///if seconds greater than 60 then show minutes with seconds eg minutes : seconds-minutes*60
        //if minutes greater than 60 then  show hours with minutes and seconds  eg hours : minutes/60 : seconds/60
        
        let formattedTime = seconds + ' s'

                            //Avoid extra calculations
        if (minutes >= 1 && hours < 1) 
            formattedTime = minutes + ' m : ' + seconds + ' s'
    
        if(hours == 1)
            formattedTime = hours + ' h : ' + minutes + ' m'


        SetTimeInView(formattedTime)
        
    }, 100)
}