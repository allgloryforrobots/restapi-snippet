import PostService from './PostService.js'
// работа с запросами

class PostController {

    async create(req, res) {
        try {
            const { param1, param2 } = req.body
            const { id } = req.params
            // файл из формы
            const { file } = req.files
            
            const post = await PostService.create({ options });
            res.json(post)
    
        } catch (e) {
            res.status(500).json(e || e.message)
        }
    }

    async getAll(req, res) {
        try {
            const post = await PostService.getAll({ options });
            res.json(post)

        } catch (e) {
            res.status(500).json(e || e.message)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne({ options });
            res.json(post)

        } catch (e) {
            res.status(500).json(e || e.message)
        }
    }

    async update(req, res) {
        try {

            const post = await PostService.update({ options });
            res.json(post)

        } catch (e) {
            res.status(500).json(e || e.message)
        }
    }

    async delete(req, res) {
        try {

            const post = await PostService.delete({ options });
            res.json(post)

        } catch (e) {
            res.status(500).json(e || e.message)
        }
    }

}

export default new PostController()