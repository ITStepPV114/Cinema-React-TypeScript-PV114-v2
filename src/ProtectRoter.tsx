import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from './store/hooks'

const ProtectedRoute = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  // show unauthorized screen if no user is found in redux store
  if (!isAuth) {
    return (
      <div className='unauthorized'>
        <h1> Unauthorized :(  </h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    );
  }

  // returns child route elements
  return <Outlet />
}
export default ProtectedRoute