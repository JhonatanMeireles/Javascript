function getAdmins (map){

    let admins =[];
    for([key, value]of map){

        if(value === 'Admin'){
            admins.push(key);
        }
    } 
    return admins;
}

const usuarios = new Map();

usuarios.set ('Bernardo', 'Admin');
usuarios.set ('Jhonatan', 'Admin');
usuarios.set ('Érika', 'Admin');
usuarios.set ('Pipoca', 'user');

console.log (getAdmins(usuarios));