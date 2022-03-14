const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const table = document.getElementById('table');
const tbody = document.getElementsByClassName('body-table');
const message1 = document.getElementsByClassName('card-body');

enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  
  //"ray_benigno"
  const username=input.value;
  
  getUser(username);
  
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} username
 */
async function getUser(username) { 
  const resp = await fetch(`api/users/${username}`);
  
  const data = await resp.json();
  console.log('data from back', data);
  if(data.message != "no existe username"){
    
  await removeAllChildNodes(tbody); 
  await removeAllChildNodes(message1);
  await printValues(data.message);
  } else{
    alert("el usuario no existe")
  }
}

async function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

async function printValues(data){
  message1.innerHTML = `<h3>${data.username}</h3>`


  
  data.tracks.map((x)=>{
    let tr = `<tr>${x}</tr>`;
  });
}
