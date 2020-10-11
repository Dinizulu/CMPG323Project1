$(document).ready(function(){
  $('.submit').click(function (event){

    var name = $('.Names').val()
    var email = $('.Email').val()
    var message = $('.Message').val()
    var statusElm = $('.Error')

    statusElm.empty()

    if(name.length > 10)
    {

    }
    else {
      event.preventDefault()
      statusElm.append('Invalid Name')
    }
    if(email.length > 5 && email.include('@') && email.include('.') )
    {

    }
    else {
      event.preventDefault()
      statusElm.append('Invalid Email')
    }
    if(message.length > 25)
    {

    }
    else {
      event.preventDefault()
      statusElm.append('Invalid Comments')
    }
  })
})
