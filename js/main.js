// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOBYnf26kWc2BSzpKu8sv5jIYpYBobBUA",
  authDomain: "portfoligrid-contact-form.firebaseapp.com",
  databaseURL: "https://portfoligrid-contact-form.firebaseio.com",
  projectId: "portfoligrid-contact-form",
  storageBucket: "portfoligrid-contact-form.appspot.com",
  messagingSenderId: "148486209302"
};
firebase.initializeApp(config);

// Reference Messages Collection
var messagesRef = firebase.database().ref("messages");

// Listen for Form Submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Function To Submit Form
function submitForm(e) {
  e.preventDefault();

  // Get Values
  var name = getInputValues("name");
  var email = getInputValues("email");
  var message = getInputValues("message");

  // Call To Save Message Function Down Below
  saveMessage(name, email, message);

  // Show User Alert That Their Message Has Been Sent
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear Form's Data After Submission
  document.getElementById("contactForm").reset();
}

// Function To Get Form Values
function getInputValues(id) {
  return document.getElementById(id).value;
}

// Function To Save The Message To Firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
