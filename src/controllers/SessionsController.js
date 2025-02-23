class SessionsController {

    async create( req, res) {
        try {
            const {email, password} = req.body;
            return res.status(201).json({ email, password}); 
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
        
    }
}

module.exports = SessionsController;