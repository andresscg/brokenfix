import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import usersActions from '../redux/actions/usersActions'

const AdminPanel = (props) => {
    useEffect(() => {
        props.getUsers()
    }, [])

    return (
        <div >
            <div styles={{ display: 'flex', flexDirection: 'column' }} className='All Users'>
                <h2>Users</h2>
                {props.users && props.users.filter(user => props.role === 'A' ? (user.range !== 'A') : (user.range !== 'A' && user.range !== 'B')).map(user =>
                    <div className='user-card' style={{ display: 'flex' }}>
                        <div className='user-content'>
                            {user.name}
                        </div>
                        <div style={{ marginLeft: '1rem' }} className='user-delete'>
                            <i style={{ cursor: 'pointer' }} onClick={() => {
                                props.deleteUser(user._id)
                            }} className="fas fa-times"></i>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getUsers: usersActions.getUsers,
    deleteUser: usersActions.deleteUser
}
const mapStateToProps = (state) => ({
    users: state.users.users,
    role: state.users.role
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
