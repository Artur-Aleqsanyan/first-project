import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPostsSeleqctor } from "../../store/reducers/posts/selectors"
import { getPosts } from "../../store/reducers/posts/operations/getTodoFetch"
import { Button, Checkbox } from "antd"
import { deletePosts } from "../../store/reducers/posts/operations/deleteTodoFetch"
import AddNewTodo from "../../components/AddNewTodo"
import { AddNewTodos } from "../../store/reducers/posts/operations/addNewTodoFetch"

import styles from './styles.module.css'


const Todo = () => {
    const dispach = useDispatch()
    const todo = useSelector(getPostsSeleqctor)
    useEffect(() => {
        dispach(getPosts())
    }, [])
    const handelDeletePost = id => {
        dispach(deletePosts(id))
    }
    const onFinish = (values) => {
        dispach(AddNewTodos({ todo: values.todo }))
    }
    const [completed, setCompleted]= useState('')
    return (
        <div>
            <AddNewTodo
                onFinish={onFinish}
            />
            {todo.map((item, index) => {
                return <div key={index.toString()}>
                    <Button className={styles.button} onClick={() => handelDeletePost(item.id)}>delete</Button>
                    <span>{item.todo}</span>
                </div>
            })}
        </div>
    )
}

export default Todo