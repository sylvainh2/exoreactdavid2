const Profile = ({user})=>{
    return(
        <div className="profilCont">
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.age}</p>
            <p>{user.city}</p>
        </div>
    )
}

export default Profile;