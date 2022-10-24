import './App.css';
import { createTheme, ThemeProvider} from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import Main from './Main'

function App() {
  const font = "'Alegreya', serif"
  const theme = createTheme({
    // palette: {
    //   type: 'light',
    //   primary: {
    //     main: '#DD5353',//#ff869e
    //     light: '#EDDBC0',//#ffc4c4
    //     dark: '#B73E3E',//#a10035
    //   },
    //   secondary: {
    //     main: '#DBC8AC',//#FFE7BF
    //   },
    // },
    typography: {
      fontFamily: font,
    },
  });

// ####################CORS####################
  // var express = require('express')
  // var cors = require('cors')
  // var app = express()
  
  // app.use(cors())
  
  // app.get('/products/:id', function (req, res, next) {
  //   res.json({msg: 'This is CORS-enabled for all origins!'})
  // })
  
  // app.listen(80, function () {
  //   console.log('CORS-enabled web server listening on port 80')
  // })
// ####################CORS####################

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Main />
    </ThemeProvider>
  );
}

export default App;