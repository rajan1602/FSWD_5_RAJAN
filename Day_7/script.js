async function fetchdata() {
    try{
     let response = await fetch("https://api.github.com/users?per_page=10");
     let data = await response.json();
     // console.log(data);
     data.forEach(element => {
        let h1 = document.createElement('h1');
        h1.textContent = element.login;
        let a = document.createElement("a");
        a.textContent=element.login;
        a.setAttribute("href",element.html_url);
        let top=document.getElementById('top');
        top.appendChild(h1);
        top.appendChild(a);
        
        // console.log(`Node Id ${element.node_id} Login ${element.login}`);
     });
    } catch(error){
        console.log(error);
    }
}
// fetchdata();