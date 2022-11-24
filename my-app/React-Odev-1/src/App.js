import axios from "axios";

async function getData(number){
    const {data : user1} = await axios("https://jsonplaceholder.typicode.com/users/"+number);
    const {data : user2} = await axios("https://jsonplaceholder.typicode.com/posts?userId=1");
    const posts = user2.filter(item => item.id === number)
    return console.log({user1 , posts});
}
getData(1);