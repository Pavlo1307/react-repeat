import User from "./user/User";

export default function Users({items}) {
    return(
        <div>
            {items.map(user => <User key={user.id} item={user}/>)}
        </div>
    )
}
