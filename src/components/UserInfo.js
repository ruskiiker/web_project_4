import { inputName, inputProfession, name as nameHTML, profession as professionHTML } from '../utils/constants.js';

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
            'name': this._name.textContent,
            'profession': this._profession.textContent
        }
        return data;
    }

    setUserInfo(name, profession) {
        this._name.textContent = name;
        this._profession.textContent = profession;
        nameHTML.textContent = name;
        professionHTML.textContent = profession;
        inputName.value = name;
        inputProfession.value = profession;
    }

}

export default UserInfo;