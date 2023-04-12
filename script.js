function getFormvalue() {
    //Write your code here
	// Get the values of the first and last name input fields
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;

  // Display the first and last name using alert()
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

}
