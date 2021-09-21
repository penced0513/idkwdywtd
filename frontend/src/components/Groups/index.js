import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../store/groupReducer";

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
            {groups?.map(group => {
                return (
                <div key={group.id}>
                    <div>
                        {group.name} {group.id} {group.owner} {group.groupPic}
                    </div>
                </div>
            )})}
        </div>
)

}
