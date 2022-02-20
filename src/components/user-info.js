class UserInfo {

    constructor({
        name,
        profession
    }) {
        this._name = name;
        this._profession = profession;
    }

    getUserInfo() {
        const data = {
            'name': this._name,
            'profession': this._profession
        }
        return data;
    }

    setUserInfo(name, profession) {
        this._name = name;
        this._profession = profession;
    }

}

export default UserInfo;