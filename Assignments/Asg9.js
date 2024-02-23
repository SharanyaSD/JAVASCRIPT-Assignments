document.getElementById("blogForm").addEventListener("submit",function(event) {
    event.preventDefault();
    var formData= new FormData(this);
    var jsonObject = {};

    for (const[key,value] of formData.entries()) {
        jsonObject[key] = value;
    }

    fetch('https://reqres.in/api/blogs', {
        method: 'POST' ,
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(jsonObject)
    })
    .then(response => {
        if(response.ok) {
            var success = "Posted successfullt with details: <br>";
            for(const[key,value] of formData.entries() ) {
                success+= `${key}:${value}<br>`;
            }
            document.getElementById("response").innerHTML= success;
        } else{
            document.getElementById("response").innerHTML="Post failed.";
        }
    })
    
    .catch(error => {
        document.getElementById("response").innerHTML="Error occured while posting";
        console.error('Error: ', error);
    });
});

