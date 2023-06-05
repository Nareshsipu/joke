let jokes;
// function fetchjokes()
// {
//     const p=fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10");
//     p.then((res)=>
//     {
//         return res.json();
//     }).then ((data)=>
//     {
//         jokes=data;
//     });
//     setTimeout(()=>{
//         console.log(jokes);
//     },500)
// }
// fetchjokes();

async function fetchjoke(){
    const promise=await fetch("https://v2.jokeapi.dev/joke/Any?type=single&amount=10")
    res=await promise.json();
    jokes=res;
    let idx=Math.floor(Math.random() * ( 10-0) + 0);
    console.log(jokes);
    document.getElementById('one').innerHTML=jokes.jokes[idx].joke;
    document.getElementById('two').innerHTML=jokes.jokes[idx==jokes.jokes.length-1?idx-1:idx+1].joke;
    document.getElementById('three').innerHTML=jokes.jokes[idx==jokes.jokes.length-1?idx-2:idx+2].joke;
}
fetchjoke();

let btn=document.getElementById('button');
btn.addEventListener('click',()=>
{
    fetchjoke();

})