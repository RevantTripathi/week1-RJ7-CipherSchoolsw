import React from 'react'

const UserDetails =({user ={}}) => {
    
    return(
        <div>
            <h1>{user.name}</h1>
            <h5>Email: {user.email}
            <br/>
            Phone Number: {user.phoneNumber}
            </h5>
        </div>
    )
}

// class UserDetails extends Component{
//     user = this.props.user;
//     render(){
//         return(
//             <div>
// //             <h1>{user.name}</h1>
// //             <h5>Email: {user.email}
// //             <br/>
// //             Phone Number: {user.phoneNumber}
// //             </h5>
// //         </div>
//         )
//     }
// }

export default UserDetails;
