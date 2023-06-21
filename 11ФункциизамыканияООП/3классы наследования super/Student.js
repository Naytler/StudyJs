class Student extends User{  //расширяет берет значения у User
    constructor(username, password, nickname){
        super(username, password); //посылает родителю user 2 параметра т.к там 2 параметра
        this.nickname = nickname;
    }
    validatePassword(){
        if(this.password.length > 10){
            return true;
        }
        return false;
    }
}