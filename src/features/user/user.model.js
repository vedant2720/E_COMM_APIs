

export default class UserModel{
    constructor(id,name,email, password,type)
    {
        this.id=id
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }

    static get(){
        return users;
    }
    
    static signUp(name,email,password,type)
    {
        let id=users.length+1;
        const newuser=new UserModel(id,name,email,password,type);
        users.push(newuser);
        return newuser;
    }


    static signIn(email,password)
    {
        const user=users.find( (u) => u.email==email && u.password==password );
        return user;
    }
} 

var users = [
    {
        "id":"1",
        "name":"admin user",
        "email":"vedantdudhale@gmail.com",
        "password":"12345",
        "type":"seller"
    },
    {
        "id":"2",
        "name":"customer user",
        "email":"customer@gmail.com",
        "password":"12345",
        "type":"customer"
    }
];