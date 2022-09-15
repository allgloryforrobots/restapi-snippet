// тут хранится интерфейс/модель mongodb
// возможно лишняя сущность

const Post = {
    author: {
        type: 'string',
        required: true
    },
    title: {
        type: 'string',
        required: true
    },
    content: {
        type: 'string',
        required: true
    },
    picture: {
        type: 'string',
        required: true
    },
}

export default Post