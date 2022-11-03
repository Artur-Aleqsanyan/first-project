
import { useDispatch } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { loginUsers } from '../store/reducers/usersLogin/operations/loginUserFetch'

import styles from './styles.module.css'

export default function Home() {
  const dispach = useDispatch()

  const onFinish = (values) => {
    dispach(loginUsers(values))
  }
  return (
    <div className={styles.frPage}>
      <div className={styles.contenier}>
        <p className={styles.login}><b>LOGIN</b></p>
        <LoginForm
          onFinish={onFinish}
        />
      </div>
    </div>
  )
}
