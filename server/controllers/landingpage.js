const loginSubmit = async (req,res)=>{
    console.log(req.body);
}
const registerSubmit = async (req,res)=>{
    res.send("your register form is submitted")
}
module.exports = {loginSubmit,registerSubmit}