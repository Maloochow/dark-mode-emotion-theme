import React, { useState } from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Nav from './Nav'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height: "100vh"}}>
        <Grid container>
          <grid item xs = {8}>
            <Typography variant="h1">Dark Mode</Typography>
          </grid>
          <grid item xs={4}>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
          </grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
