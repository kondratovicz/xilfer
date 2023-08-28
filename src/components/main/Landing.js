import './Landing.css'
import CreateUser from "../helpers/CreateUser";

const Landing = ({users, setCurrentUserIndex}) => (
    <>
    <h1 id="landingHeader">WHO'S WATCHING?</h1>
    <div className="userList">
        {users.map(user => <CreateUser
                            key={user.name}
                            user={user}
                            setCurrentUserIndex={setCurrentUserIndex}
                            />)}
    </div>
    </>
)

export default Landing;