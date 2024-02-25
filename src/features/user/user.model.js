// Define a class for the User model
export default class UserModel {
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    // Static method for user signup
    static signUp(name, email, password) {
        // Create a new User instance with the provided data
        const newUser = new UserModel(name, email, password);
        
        // Assign a unique ID to the new user based on the current number of users
        newUser.id = users.length + 1;
        
        // Add the new user to the 'users' array
        users.push(newUser);
        
        // Return the newly created user
        return newUser;
    }

    // Static method for user signin
    static signIn(email, password) {
        // Find a user in the 'users' array with the matching email and password
        const user = users.find((u) => u.email === email && u.password === password);
        
        // Return the found user or 'undefined' if not found
        return user;
    }

    // Static method to get all users
    static getAll() {
        return users;
    }
}

// Sample user data (initially empty)
let users = [
    {
        id: '1',
        name: 'Abuzar',
        email: 'abuzar@.com',
        password: '123456789',
    },
    {
        id: '2',
        name: 'Imran',
        email: 'imran@.com',
        password: '123456789',
    }
];
