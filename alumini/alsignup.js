const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Add your signup logic here
  // This example performs basic validation, replace with your actual functionality

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;
  const rollNumber = document.getElementById("rollNumber").value;
  const graduatedYear = document.getElementById("graduatedYear").value;
  const branch = document.getElementById("branch").value;
  const termsAccepted = document.getElementById("terms").checked;

  // Basic validation (replace with more robust checks)
  if (name === "" || email === "" || phone === "" || company === "" || rollNumber === "" || graduatedYear === "" || branch === "") {
    alert("Please fill in all required fields.");
    return;
  }

  if (!termsAccepted) {
    alert("Please accept the Terms and Conditions to sign up.");
    return;
  }

  // Assuming success (replace with actual logic to send data to server)
  alert("Signup submitted successfully!\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "... (other data)");
});