import './CreateUser.css'
import { Link } from 'react-router-dom';

const CreateUser = ({user, setCurrentUserIndex}) => (
        <Link 
            to="/catalog" 
            className="listElement" 
            style={{backgroundColor: user.color}}
            onClick={()=>setCurrentUserIndex(user.id)}
        >
            {user.name}
        </Link>
    )

export default CreateUser;