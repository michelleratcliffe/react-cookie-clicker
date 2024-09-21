import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

const upgrades = [
    {
        name: 'stardust generator',
        cost: 10000,
        plusCPS: 1000
    }
]
app.get('/', (req, res) => {
    res.send('ye')
})

app.get('/upgrades', (req, res) => {
    try {
        res.status(200).json(upgrades)
    } catch (err) {
        res.status(500).json({error: err})
    }
})

app.listen(8080, () => {
    console.log('running')
})