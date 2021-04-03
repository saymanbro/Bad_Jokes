//  GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#jokes');
const nextBtn = document.querySelector('.nextBtn');

// const generateJokes = () =>{
//     const setHeader = {
//         headers:{
//             Accept: 'application/json'
//         }
//     }
//     fetch(' https://icanhazdadjoke.com/', setHeader)
//     .then((res) => res.json())
//     .then((data) =>{
//         jokes.innerHTML = data.joke

//     })
// }

const generateJokes = async () => {
    try{
        const setHeader = {
            headers:{
                Accept: 'application/json'
            }
        }
        
const res =  await   fetch(' https://icanhazdadjoke.com/', setHeader)
const data = await res.json();
jokes.innerHTML = data.joke;
    }catch(err) {
        console.log(`This is error ${err}`);
    }
}

nextBtn.addEventListener('click',generateJokes)
generateJokes();