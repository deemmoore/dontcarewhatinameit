var firebaseConfig = {
    apiKey: "AIzaSyB17FG9_gVGNcxBzvnO-9EtFg7anRK1Suk",
    authDomain: "contact-form-24ede.firebaseapp.com",
    databaseURL: "https://contact-form-24ede.firebaseio.com",
    projectId: "contact-form-24ede",
    storageBucket: "contact-form-24ede.appspot.com",
    messagingSenderId: "519478699211",
    appId: "1:519478699211:web:fb7db4dc0aaa8d231ce74e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // References messages collection
  let messagesRef = firebase.database().ref('messages')

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

//Submit Form
function submitForm(e) {
    e.preventDefault()

    // Get Values
    var name = getInputVal('name')
    var company = getInputVal('company')
    var email = getInputVal('email')
    var phone = getInputVal('phone')
    var message = getInputVal('message')

    //Save Message
    saveMessage(name, company, email, phone, message)

    //Show Alert
    document.querySelector('.alert').style.display = 'block'

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none'
    }, 3000)

    //Clear Form
    document.getElementById('contactForm').reset()
}

function getInputVal(id) {
    return document.getElementById(id).value
}

function saveMessage(name, company, email, phone, message) {
    let newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}