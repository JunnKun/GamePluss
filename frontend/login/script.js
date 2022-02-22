const div_paleoid = document.querySelector('#div_paleoid');

/*div_paleoid.addEventListener('click', async (e) => {
    console.log("hello world");
    const answer = await paleoid_login('https://shinon.altervista.org/MyProject/register_paleoid.php');
  })

async function paleoid_login(url){
    let res = await fetch(url);
    let resJSON = await res.json();
    // console.log(resJSON);
    let json = resJSON;
    
    return json;
}*/

async function iflog(url){

    const res_otp = await fetch(url, { 
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });
    resp_otp = await res_otp.json();
    console.log(resp_otp);

    if(!resp_otp.error){
        window.location.href = 'http://shinon.altervista.org/MyProject/frontend/home.php';
    }
}