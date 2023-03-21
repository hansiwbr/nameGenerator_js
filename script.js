


let firstNames = [];
//lädt den text aus dem textfeld #inputName ins p element visuell und speichert es im local storage
function inputName()
{
    firstNames.push(document.querySelector('#inputName').value) ;
    document.getElementById("nameList").textContent = firstNames;
    const jsonInputName = JSON.stringify(firstNames)
    localStorage.setItem('localNames',jsonInputName);
    document.querySelector('#inputName').value=('');
   
}
//generiert ein Randomnamen aus der Namens liste firstNames und schneidet diesen aus der neu generierte Array wird gespeichter im loSt als remainingNames
function generateName() 
{
    const cut = [Math.floor(Math.random() * firstNames.length)]
    // const result = cut
    const firstName = firstNames.splice(cut,1);
    document.getElementById("nameList").textContent = firstNames; 
    document.getElementById("name").textContent = `${firstName} `;
    const jsonFirstName = JSON.stringify(firstNames)
    localStorage.setItem('remainingNames',jsonFirstName);
    

}
//löscht die local storage 'remainingNames' und lädt dann wieder die stammnamensliste neu
function clearBtn()
{
    firstNames = JSON.parse(localStorage.getItem("localNames"));
    document.getElementById("nameList").textContent = firstNames;
    document.getElementById("name").textContent = null;
    localStorage.removeItem('remainingNames');
    
    

}

function deletOneName() 
{
    if (firstNames.includes(document.querySelector('#deletOneName').value))
    {
        firstNames.splice(firstNames.indexOf(document.querySelector('#deletOneName').value),1);
        const jsonInputName = JSON.stringify(firstNames)
        localStorage.setItem('localNames',jsonInputName);
        localStorage.setItem('remainingNames',jsonInputName);
        document.getElementById("nameList").textContent = firstNames;
        document.querySelector('#deletOneName').value=('');
       
    }
    else
    {
        return
    }
}


function masterDelteBtn() 
{
    localStorage.removeItem('remainingNames');
    localStorage.removeItem('localNames');
    document.getElementById("nameList").textContent = null;
    document.getElementById("name").textContent = null;
}



const loadNames = () => {
    if (!localStorage.getItem('remainingNames') && !localStorage.getItem('localNames')) return null;
    if (localStorage.getItem("remainingNames") === null)
    {
        firstNames = JSON.parse(localStorage.getItem("localNames"));
        document.getElementById("nameList").textContent = firstNames; 
       
        return;
    }
    else 
    if (localStorage.getItem("remainingNames") === '[]')
    {
        document.getElementById("nameList").textContent = firstNames; 
        firstNames = JSON.parse(localStorage.getItem("localNames"));
        return;
    }
    else
    {
        firstNames = JSON.parse(localStorage.getItem("remainingNames"));
        document.getElementById("nameList").textContent = firstNames;
    }
  
 
}

loadNames();
// document.getElementById("nameList").textContent = firstNames;





