import React, {Component} from "react";


interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    user: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSerachClass extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined,
    }
onClick = () => {
    const foundUser = this.props.users.find((user) => {
        return user.name === this.state.name
    })
    this.setState({user: foundUser})
}
}
    render() {
        return (
            <>
                <h1>User Search</h1>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value)}}/>
                <button onClick={this.onClick}>Find User</button>
                {this.state.user && this.state.user.name},
                {this.state.user && this.state.user.age}
            </>
        )

    }
}

export default UserSerachClass