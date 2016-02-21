console.log('\'Allo \'Allo!');


function sendForm() {
  console.log('sendForm :: entered');
  var response = document.getElementById('form-response')

  var name = document.getElementById('form-name').value;
  var email = document.getElementById('form-email').value;
  var phone = document.getElementById('form-phone').value;
  var msg = document.getElementById('form-msg').value;
  if (!name || !email || !phone || !msg){
    console.log('Something not set');
    response.innerHTML = "Please complete all fields.";
    return false
  } else {
    console.log('All things set');
    var request = {
      name :name,
      email : email,
      phone : phone,
      message  : msg
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log('XHR response :: '+xhttp.responseText);
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        response.innerHTML = "Thanks! I'll be in touch soon."
      } else if (xhttp.readyState == 4 && xhttp.status !== 200) {
        response.innerHTML = "Oops! something went wrong"
      }
    };
    xhttp.open("post", "/contact", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(request));
    //return true
  }
};
