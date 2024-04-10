const loginSubmit = async (req,res)=>{
    res.send("your form is submitted")
}
const registerSubmit = async (req,res)=>{
    res.send("your register form is submitted")
}
module.exports = {loginSubmit,registerSubmit}