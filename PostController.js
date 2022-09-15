import Post from './post.js'

class PostController {

    async create(req, res) {
        try {
            const { param1, param2 } = req.body
            const { id } = req.params
            
            const post = {} // database
            res.json(post)
    
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {

            const post = {} // database
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {

            const post = {} // database
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {

            const post = {} // database
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {

            const post = {} // database
            res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController()