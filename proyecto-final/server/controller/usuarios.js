import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { authModel } from '../dao/UsuariosDaoMongoDB.js';
import { Config } from '../config.js';


export class ControllerUsuarios {

    constructor() {
        this.createUser = this.createUser.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.datosUser = this.datosUser.bind(this)
        this.logoutUser = this.logoutUser.bind(this)
    }

    async createUser(req, res, next) {
      const newUser = {
        user: req.body.user,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password)
      }
    
      authModel.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.send({ message: 'Email already exists' });
        if (err) return res.send({ message: 'Server error!', error: err.message });
        const expiresIn = 60;
        const accessToken = jwt.sign({ id: user.id },
          Config.SECRET_KEY, {
            expiresIn: expiresIn
          });
        const dataUser = {
          user: user.user,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expiresIn
        }
        // response 
        res.send({ dataUser });
      });
    }
    
    async loginUser(req, res, next) {
      const userData = {
        user: req.body.user,
        password: req.body.password
      }
      authModel.findOne({ user: userData.user }, (err, user) => {
        if (err) return res.send({ message: 'Server error!' });
    
        if (!user) {
          // email does not exist
          res.send({ message: 'Something is wrong', error: 'usuario no encontrado' });
        } else {
          const resultPassword = bcrypt.compareSync(userData.password, user.password);
          if (resultPassword) {
            const expiresIn = 60;
            const accessToken = jwt.sign({ id: user.id }, Config.SECRET_KEY, { expiresIn: expiresIn });
    
            const dataUser = {
              email:user.email, 
              user:user.user,  
              phone:user.phone, 
              isAdmin:user.isAdmin, 
              createdAt: user.createdAt, 
              updatedAt: user.updatedAt,
              accessToken: accessToken,
              expiresIn: expiresIn
            }
            res.send({ dataUser });
          } else {
            // password wrong
            res.send({ message: 'Something is wrong', error: 'contraseña errónea'});
          }
        }
      });
    }
    
    async datosUser(req, res, next) {
      let id = req.decoded.id
      //console.log(id)
      
      authModel.findOne({ _id: id }, (err, user) => {
          if (err) return res.send({ message: 'Server error!' });
    
          if (!user) {
            // id does not exist
            res.send({ message: 'Something is wrong' });
          } 
          else {
            const expiresIn = 60;
            const accessToken = jwt.sign({ id: user.id }, Config.SECRET_KEY, { expiresIn: expiresIn });
            
            res.json({user : {
              email:user.email, 
              nombre:user.nombre, 
              direccion:user.direccion, 
              telefono:user.telefono, 
              foto:user.foto, 
              isAdmin:user.isAdmin, 
              createdAt: user.createdAt, 
              updatedAt: user.updatedAt, 
              accessToken
            }
          });
        }
      });
    }
    
    async logoutUser(req, res, next) {
        res.json({'logout': 'ok'});
    }
    
}