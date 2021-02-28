module.exports = class MicroLearningController {
    static create = async(req,res) => {
        try {
            console.log(req.file);
        }catch(err){
            return res.status(500).send({
                status: 500,
                success: false,
                message: 'error',
                error: `error : ${err.message}`
            })
        }
    }
}