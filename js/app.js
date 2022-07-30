
(function() {
//Select the input element
// Get the first element with a class message-form
const form = document.querySelector('#message-form')
//Set up Submit Button
form.addEventListener('submit', function(e){
    // prevent the form's default submission action
    e.preventDefault()
    //Get user's input from from
    const message = document.querySelector('#message')
    const feedback = document.querySelector('.feedback')
    const messageContent = document.querySelector('.message-content')
    // if message input is null
    if (message.value === ''){
      // add class called show
        feedback.classList.add('show')
        setTimeout(function(){
      // remove class called show after 2 seconds
        feedback.classList.remove('show')
        }, 2000)
    } else {
        //Change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    }
})
})()



