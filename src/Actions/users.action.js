import requester from '../Requester/requester'
import { language } from '../Languages'

const fileAction = 'user.action'

export const updateUsersState = (store, property, value) => {
  try {
    const users = {
      ...store.state.users,
      [property]: value
    }
    store.setState({ ...store.state, users })
  } catch (error) {
    const logError = {
      error,
      functionName: 'updateUsersState',
      file: fileAction
    }
    store.actions.sendLogError(logError)
  }
}

export const updateAllUsersState = (store, value) => {
  try {
    const users = {
      ...store.state.users,
      ...value
    }
    store.setState({ ...store.state, users })
  } catch (error) {
    const logError = {
      error,
      functionName: 'updateAllUsersState',
      file: fileAction
    }
    store.actions.sendLogError(logError)
  }
}

export const clearUsersState = async store => {
  try {
    const users = {
      ...store.state.users,
      id: '',
      name: '',
      email: '',
    }
    store.setState({ ...store.state, users })
  } catch (error) {
    const logError = {
      error,
      functionName: 'clearUsersState',
      file: fileAction
    }
    store.actions.sendLogError(logError)
  }
}


export const setUserLoginState = (store, user) => {
  try {

    const userState = {
      id: user.CodigoUsuario,
      email: user.EmailUsuario,
      name: user.NomeUsuario
    }
    store.actions.updateAllUsersState(userState)
  } catch (error) {
    const logError = {
      error,
      functionName: 'setUserLoginState',
      file: fileAction
    }
    store.actions.sendLogError(logError)
  }
}

export const getUserLogin = async (store, navigate) => {
  try {
    store.actions.setLoading(true)
    store.actions.clearWalletState()
    const { getUserLogin: service } = store.state.services
    const { email, password } = store.state.users
    const options = {
      data: {
        email: email.trim(),
        senha: password.trim()
      }
    }
    const [error, response] = await requester(store, service, options)
    if (error || response.Mensagem !== 'Sucesso') {

    } else {
      const [user] = response.ListaObjeto
      store.actions.getUserLocationLogin(navigate, user, info)
    }
  } catch (error) {
    const logError = {
      error,
      functionName: 'getUserLogin',
      file: fileAction
    }
    store.actions.sendLogError(logError)
  }
}
