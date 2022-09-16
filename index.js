import express from 'express'
import fileUpload from 'express-fileupload'

// роутеров может быть несколько
import router from "./router.js"

const PORT = 3000

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))


app.use('/api', router)
// app.use('/users', userRouter)

async function startApp() {
    try {
        // подключение к бд
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


startApp()

