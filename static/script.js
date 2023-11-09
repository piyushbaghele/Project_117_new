var date = new Date()
var displayDate = 'Date: ' + date.toLocaleDateString()

$(document).ready(function () {

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    $("#date").html(displayDate)

    //  write an event, when Submit button is clicked
    $('#button').click(function () {

        //  get the text value from the textarea using the 'val()' method
        let text_value = { "text": $('#text').val() }
        //  Convert it to JS object.

        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = { 'key': text_value }
        console.log(input_text)
        //  ajax request
        $.ajax({
            url:"/predict-emotion",
            //  type of web request
            type: 'POST',
            //  Data to be sent in JSON format

            data: JSON.stringify(input_text),

            //  type of response expected is json
            dataType: 'json',

            //  contentType
            contentType: 'application/json',

            //  if everything is successful, run this function
            success: function (result) {

                // extract prediction and emoticon url from result
                predicted_emotion = result.data.predicted_emotion
                predicted_emotion_img_url = result.data.predicted_emotio
                $("#prediction").html(predicted_emotion)
                $("#emo_img_url").attr("src", predicted_emotion_img_url)

                //  update the DOM elements


                //  show them

            },

            //  if any error, run this function
            error: function (result) {
                alert(result.responseJSON.message)

            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })

})