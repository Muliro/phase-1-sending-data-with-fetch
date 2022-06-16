// Add your code here








function submitData(name, mail){
    const bodyTag = document.getElementsByTagName("body");
    const formData = {
        name: name,
        email: mail,
      };
    const configurationObject = {
        method : "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
    
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(res){
        return res.json()
    })
    .then(function(object){
     const newId = object.id
     bodyTag.innerHTML = `${object.id}`;
    })

}
