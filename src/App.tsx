import React from 'react'
import styled from 'styled-components'
import { loadApp } from './features/app/model'
import { Routes } from './router'

export const App = () => {
  React.useEffect(() => {
    loadApp()
  }, [])

  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  )
}


const AppContainer = styled.div`
  
`