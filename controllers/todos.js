import Todo from "../models/todos.js";

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createTodo = async (req, res, next) => {
  const newTodo = new Todo(req.body);
  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res, next) => {
  const { id: _id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndRemove(_id);
    res.json(deletedTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const completeTodo = async (req, res, next) => {
  const { id: _id } = req.params;
  try {
    const completedTodo = await Todo.findByIdAndUpdate(
      _id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(completedTodo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
