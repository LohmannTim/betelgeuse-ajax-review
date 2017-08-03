console.log('js connected');

$(document).ready(function(){
    $('#container').append("<h1>Hello World</h1>");
    getStuff();
    $('#getExcitedButton').on('click', function(){
        console.log("clicked");
        $.ajax({
            method: 'POST',
            url: '/greetingChanger',
            success: function(response){
            getStuff();    
            }

        })
    });
});

function getStuff(){
    $.ajax({
        method: 'GET',
        url: '/hello',
        success: function(response){
            console.log(response);
            var newLine = response;
            $('#greetingMessageDiv').text(response);
            
        }

    })
}

