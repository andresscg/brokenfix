import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import adminActions from '../redux/actions/adminActions'

const AdminPanel = (props) => {

    useEffect(() => {
        props.getUsers()
        props.getServices()
        props.getWorkers()
    }, [])

    return (
        <div >
            <div styles={{ display: 'flex', flexDirection: 'column' }} className='All Users'>
                <h2>Users</h2>
                {props.users && props.users.map(user => <div>{user.name}</div>)}
            </div>
            <div styles={{ display: 'flex', flexDirection: 'column' }} className='All Workers'>
                <h2>Workers</h2>
                {props.workers && props.workers.map(worker => <div>{worker.name}</div>)}
            </div>
            <div styles={{ display: 'flex', flexDirection: 'column' }} className='All Services'>
                <h2>Services</h2>
                {props.services && props.services.map(service => <div>{service.name}</div>)}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getUsers: adminActions.getUsers,
    getServices: adminActions.getServices,
    getWorkers: adminActions.getWorkers
}
const mapStateToProps = (state) => ({
    users: state.admin.users,
    workers: state.admin.workers,
    services: state.admin.services
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
