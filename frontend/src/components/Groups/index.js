import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroups } from "../../store/groupReducer";

export default function Groups() {
    const dispatch = useDispatch()
    const groups = useSelector((state) => Object.values(state.groups))
    const sessionUser = useSelector((state) => state.session.user)


    useEffect(() => {
        (async () => {
            console.log('test')
            if (sessionUser) await dispatch(fetchGroups(sessionUser.id));
          })();
    }, [dispatch, sessionUser])
    
    return (
        <div>
            {groups[0]?.Group.name}
        </div>
)

}
