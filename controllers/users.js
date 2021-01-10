const User = require('../models/user');
const passport = require('passport');
const { model } = require('../models/user');

module.exports.renderRegisterForm = (req, res)=>{
    res.render('users/register');
}
module.exports.register = async(req, res, next)=>{
    try{
        const {email, username, password} = req.body;
        const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err=> {
            if(err) return next(err);
            req.flash('success', 'Welcome to Hunger Mania')
            res.redirect('/restaurants');
        })
    } catch(e){
        req.flash('error', e.message)
        res.redirect('register');
    }
}

module.exports.renderLoginForm = (req, res)=>{
    res.render('users/login')
}

module.exports.login =  (req, res)=>{
    req.flash('success', 'Welcome Back To Hunger Mania')
    const redirectUrl = req.session.returnTo || '/restaurants';
    delete req.session.returnTo;
    res.redirect(redirectUrl)
}
module.exports.logout = (req, res)=>{
    req.logout();
    req.flash('success', "Successfully logged you out")
    res.redirect('/restaurants')
}