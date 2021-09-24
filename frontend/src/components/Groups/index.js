import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../store/groupReducer";
import './groups.css'
import GroupCard from '../GroupCard'

export default function Groups() {
    const dispatch = useDispatch()
    const groups = useSelector((state) => Object.values(state.groups))
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
        (async () => {
            if (sessionUser.id) await dispatch(fetchGroups(sessionUser.id));
          })();
    }, [dispatch, sessionUser])
    
    return (
        <div>
            {groups?.map(group => <GroupCard key={group.id} group={group} />)}
        </div>
)

}
