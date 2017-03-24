import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { AppContainer } from 'react-hot-loader'

const Hello = ({ firstName, lastName }) => {
    return (<h1>Hello, {firstName} {lastName}</h1>)
}
const render = (Counter) => (
    ReactDOM.render(
        <AppContainer>
            <Counter label="Tester" />
        </AppContainer>
        ,
        document.getElementById('react-root')
    )
)
render(Counter)
if (module.hot) {
    module.hot.accept(Counter, () => {
        render(Counter)
    })
}