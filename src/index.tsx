import React from 'react'
import ReactDOM from 'react-dom'

import '../../typescript-vite-build-react-component-as-library-demo/dist/style.css'
import { Hello } from '../../typescript-vite-build-react-component-as-library-demo/dist/vite-hello-component'

ReactDOM.render(
  <Hello name="linaria" />,
  document.getElementById('root')
)
