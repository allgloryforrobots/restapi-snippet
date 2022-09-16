// работа с бизнес-логикой и базой данных
import fileService from './fileService.js'

class PostService {
    async create(options) {
       if (!options) throw new Error('Текст ошибки')

       // работа с сохранением файла
       const fileName = fileService.saveFile(picture)
    }

    async getAll(options) {
        if (!options) throw new Error('Текст ошибки')
    }

    async getOne(options) {
        if (!options) throw new Error('Текст ошибки')
    }

    async update(options) {
        if (!options) throw new Error('Текст ошибки')
    }

    async delete(options) {
        if (!options) throw new Error('Текст ошибки')
    }
}

export default new PostService