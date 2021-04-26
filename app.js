//link for api for the pokemon
//document.ready function 

//Be able to input the users search into the api
//populate the data



//prevent the default info from populating 

//document.ready function 
$(()=>{
//onclick function to search for the info 
    $('form').on("submit", (event)=>{
        event.preventDefault()
        const userInput = $('input[type="text"]').val()
        // $("#pokeName").html(data.forms[0].name)
    
console.log(userInput)   
async function getPokeData(){
    //async await to grab data
    //fetch the data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    //change the dtat to json data
    const data = await response.json()
    console.log(data); 
$('#pokeName').html(data.forms[0].name); 
$('#pokeType').html(data.types[0].type.name); 
$('#pokeNum').html(data.id);


}


getPokeData()
    //set a varaibale for the user input
   
})


})