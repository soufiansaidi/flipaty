import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'

export const ApiKey = 'BLI12Yro6TpSibVr'
export const Url = 'http://127.0.0.1:8000/api'

export const iniGA = () => {
    ReactGA.initialize('UA-158835486-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export const history = createHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})