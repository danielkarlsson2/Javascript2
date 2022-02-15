const Todo = require('./todoSchema');

exports.getAllTodos = (req, res) => {

    Todo.find({}, (err, data) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Something went wrong when fetching the todos',
                err
        })
    }

        res.status(201).json(todos)
    })

}


exports.createNewTodo = (req, res) => {

    // const newTodo = new Todo({ title: req.body.title })

    Todo.create({ title: req.body.title }, (err, data) => {
        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Something went wrong when creating the todo',
                err
            })
        }


        res.status(201).json(data)
    })

}

exports.updateTodo = (req, res) => {

    // Todo.exists({ _id: req.params.id }, (err, result) => {
    //     if(err) {
    //         // användaren har gjort någonting fel så det går inte att söka på databasen
    //         return res.status(400).json({
    //             statusCode: 400,
    //             status: false,
    //             message: 'You made a bad request',
                
    //         })
    //     }

    //     if(result) {
    //         // uppdatera todon
    //         Todo.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {

    //         })

    //     }
    //     else {
    //         // skicka en 404 den finns inte
    //         return res.status(404).json({
    //             statusCode: 404,
    //             status: false,
    //             message: 'Not found'
    //         })
    //     }
    // })

    Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, data) => {
        if (err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'something went wront when updating the todo',
                err
            })
        }
        if(!data) {
            return res.status(404).json({
                status: 404,
                status: false,
                message: 'Not found'
            })
            
        }

        res.status(200).json(data)

    })

}

exports.deleteTodo = (req, res) => {

    Todo.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'something went wront when deleting the todo',
                err
            })
        }

        res.status(200).json({ id: req.params.id })
    })

}