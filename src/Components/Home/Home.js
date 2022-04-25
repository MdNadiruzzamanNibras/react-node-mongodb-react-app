import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    const handleDelete = id=>{
        const procced= window.confirm('Are you sure delete the user')
        if(procced){
            console.log('delete the id', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url,
               { method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0)
               { console.log('deleted')
                    const remaining = users.filter(user=> user._id !== id);
                    setUsers(remaining)
            }
            })
               

        }
        
    }
    return (
        <div>
            <h2>available users:{users.length}</h2>
            <ul>
                {
                    users.map(user=> <li key={user.id}>{user.name}::{user.email}
                    <button onClick={()=>handleDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;