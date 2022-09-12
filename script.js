
let btn = document.getElementById('myBtn'); 
let downBtn = document.getElementById('downBtn'); 
let listMan = document.getElementById('listMan'); 

let data = new Date();
const request = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
const url2 = 'https://jsonplaceholder.typicode.com/users';


request.open('GET', url);
request.setRequestHeader('Content-Type', 'application/x-www-form-url');
request.addEventListener("readystatechange", () => {
    //console.log(request.readyState)
    if (request.readyState < 4){
        btn.innerHTML = 'Loading... '
        //console.log('Loading...')
    }  
	else if (request.readyState === 4 && request.status === 200) {	                
        btn.innerHTML = 'Your vote is accepted : '+data.toDateString();  
	  //console.log( request.responseText );
    }
});

btn.addEventListener('click', (ev) => {request.send();});


downBtn.addEventListener('click', async (ev) => {
       let rec = await fetch(url2) ;
       let json = await rec.json();
       let newLi
       json.map(el => {
          newLi = document.createElement('li') ;
          newLi.innerText = el.name;
          listMan.appendChild(newLi);
          //  console.log(el.name); 
       });
       return true;
})



