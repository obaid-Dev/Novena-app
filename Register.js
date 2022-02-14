//this is the file where we register nodejs api(s)

//getting app for showing all the data
export const getUsers = ()=> fetch("http://localhost:5000/Show").then(res => res.json());

//api for inserting the data into database

export const myform = (user)=> fetch(("http://localhost:5000/Create"),{
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
});