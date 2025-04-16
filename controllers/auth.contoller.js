exports.registerController = (req,res) => {
    console.log('Here is the request',req.body)
    res.send(req.body)
}