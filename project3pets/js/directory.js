console.log("directory");

function display(){
    // create the vars
    var pets = salon.pets;
    const petSection=document.getElementById("pets");
    var text="";
    var dogicon= '<i class="fas fa-dog"></i>';
    var caticon= '<i class="fas fa-cat"></i>';
    var birdicon= '<i class="fas fa-crow"></i>';
    
    

    // travel the salon.pets array
    for(var i=0;i<pets.length;i++){
        console.log(pets[i]);

        //display the Icon of the type of pet, hint use(if)
        if(pets[i].type==="Dog"){
            icon=dogicon;
        }else if(pets[i].type==="Cat"){
            icon=caticon;

        }else if(pets[i].type==="Bird"){
            icon=birdicon;
        }else{
            icon='<i class="fas fa-question-circle"></i>';
        }
        // create HTML text
        text+=`
        <div class="pet">
        ${icon}
            <h2> Name:${pets[i].name} </h2>
            <p> Age: ${pets[i].age}</p>
            <p> Gender: ${pets[i].gender}</p>
            <p> Type: ${pets[i].type}</p>
            <p> Breed:${pets[i].breed} </p>
            <p> Service: ${pets[i].service}</p>
            <p> Comments: ${pets[i].comments}</p>
            <p> Price: ${pets[i].price}<p>
            <p> Owner: ${pets[i].owner}</p>
            <p> Contact Phone: ${pets[i].contactPhone}</p>
            
        </div>
        `;
        
    }
    petSection.innerHTML+=text;
    // display the HTML text into the DOM
}
// USE THE DISPLAY FUNCTION
    display();
    

      



    //display the HTML text into the DOM(DOCUMENT)


// use the display function
