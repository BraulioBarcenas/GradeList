const userController = {}
const User = require('../models/user')

userController.index = (req, res) => {
    res.render('users/index')
}

userController.renderEditForm = async (req, res) =>{
    
    const user = await User.findById(req.params.id).lean()
    res.render('layouts/index', {user}, {
        template: {
            path: 'users/EditUser',
            title: 'User edit',
            css: ['main', 'userEdit']
        }
    })
}

userController.updateUser = async (req, res) =>{
    //La línea req.params.id deberá cambiarse una vez que se tenga listo el login
    const {name, email} = req.body
    await User.findByIdAndUpdate(req.params.id, {name, email})
    console.log("User updated succesfully");
    res.redirect('/index')
    
}

module.exports = userController;