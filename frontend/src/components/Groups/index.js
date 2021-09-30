import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../store/groupReducer";
import './groups.css'
import GroupCard from '../GroupCard'

export default function Groups() {
    const dispatch = useDispatch()
    const groups = useSelector((state) => Object.values(state.groups).sort((a, b) => a.name > b.name ? 1 : -1) )
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
        (async () => {
            if (sessionUser.id) await dispatch(fetchGroups(sessionUser.id));
          })();
    }, [dispatch, sessionUser])
    
    return (
        <div className="groups-container">
            <h1>My Groups</h1>
            <div className="groups-list">
                {groups?.map(group => <div key={group.id} className="groups-groupcard"><GroupCard key={group.id} group={group} /></div>)}
            </div>
        </div>
)

}
