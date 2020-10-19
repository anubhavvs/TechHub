import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@techhub.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Anubhav Saha',
    email: 'anubhavvs@techhub.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
