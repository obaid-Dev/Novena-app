import React from 'react';
import {getUsers} from './Register';
import {useState,useEffect} from 'react';
function Practice() {
    //hool for showing all the data from API
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        const fetchUsers = async() =>{
            const allusers = await getUsers();
            setUsers(allusers);
        }
        fetchUsers();
    })
    return (
        <div className="container">
            <h1 className="display-3 text-center"><span style={{color: 'red'}}>CRUD</span> system in react js</h1>
            <hr/>
            <h2 className="display-4 text-center">Showing Data</h2>
            <table className="table">
                    <tr>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Topic:</th>
                        <th>Number:</th>
                        <th>Message:</th>
                    </tr>
                    {
                        users.map(used=>(
                            <tr>
                                <td>{used.Name}</td>
                                <td>{used.Email}</td>
                                <td>{used.Topic}</td>
                                <td>{used.Number}</td>
                                <td>{used.Message}</td>
                             </tr>
                        ))
                    }
                    
            </table>
            <hr/>

        </div>
    );
}

export default Practice;