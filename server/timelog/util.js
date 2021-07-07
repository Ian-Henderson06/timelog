$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('top-title').addClass('fixed');
    }
    else {
        $('top-title').removeClass('fixed');
    }
});


//CREATE TABLE timelog (timeID int NOT NULL IDENTITY(0,1), timeName varchar(50), timeTotalSeconds int, timeDescription nvarchar(max));