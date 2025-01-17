// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())  
      .then(object => {
        console.log(object);  
        
        
        const body = document.querySelector("body");
        const newElement = document.createElement("p");
        newElement.textContent = `User ID: ${object.id}`;
        body.appendChild(newElement);
      })
      .catch(error => {
        alert("Something went wrong!");  
        console.error(error);  
        
        
        const body = document.querySelector("body");
        const errorElement = document.createElement("p");
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  
