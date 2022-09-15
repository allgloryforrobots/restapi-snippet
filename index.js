import express from 'express'
const PORT = 3000
// роутеров может быть несколько
import router from "./router.js"

const app = express()

app.use(express.json())
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

