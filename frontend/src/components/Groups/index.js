import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../store/groupReducer";
import CreateGroupModal from '../CreateGroupModal';
import GroupCard from '../GroupCard'
import './groups.css'

export default function Groups() {
    const dispatch = useDispatch()
    const groups = useSelector((state) => Object.values(state.groups).sort((a, b) => a.name > b.name ? 1 : -1) )
    const sessionUser = useSelector((state) => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            if (sessionUser.id) {
                await dispatch(fetchGroups(sessionUser.id));
                setIsLoaded(true)
            }
          })();
    }, [dispatch, sessionUser])
    
    return (
        (isLoaded || groups.length) && (
        <div className="groups-container">
            <h1>My Groups</h1>
            <div className="groups-list">
                {groups?.map(group => <div key={group.id} className="groups-groupcard"><GroupCard key={group.id} group={group} /></div>)}
            </div>
            {!groups.length && <div className="no-groups">No Groups Found, Try  <CreateGroupModal title="Creating One!"/></div>}
        
        </div>)
)

}
