console.log('\'Allo \'Allo!');


function sendForm() {
  console.log('sendForm :: entered');
  var response = document.getElementById('form-response');
  var button = document.getElementById('form-button');

  var name = document.getElementById('form-name').value;
  var email = document.getElementById('form-email').value;
  var phone = document.getElementById('form-phone').value;
  var msg = document.getElementById('form-msg').value;
  if (!name || !email || !phone || !msg){
    console.log('Something not set');
    response.innerHTML = "Please complete all fields";
    response.style.borderBottomColor = "FIREBRICK";
    return false
  } else {
    button.innerHTML = '<i class="fa fa-refresh fa-spin"></i> Submitting';
    button.disabled = true;
    console.log('All things set');
    var request = {
      name :name,
      email : email,
      phone : phone,
      message  : msg
    };
    //#form-response     .style.color

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      console.log('XHR response :: '+xhttp.responseText);
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        response.innerHTML = "Thanks! I'll be in touch soon";
        response.style.borderBottomColor = "#00796B";
        button.innerHTML = 'Submit';
      } else if (xhttp.readyState == 4 && xhttp.status !== 200) {
        response.innerHTML = "Oops! Something went wrong";
        response.style.borderBottomColor = "FIREBRICK";
        button.innerHTML = 'Submit';
        button.disabled = false;
      }
    };
    xhttp.open("post", "/contact", true);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(request));
    //return true
  }
};
