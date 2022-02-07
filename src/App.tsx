import React from 'react'

import { Avatar, Wrapper, ThemeProvider } from './components'
import { sleep } from './utils/sleep'
import { FileChunk } from './utils/file'

import GlobalStyle from './styles/global'

function App() {
  const onUploadChunk = async (chunk: FileChunk) => {
    await sleep(Math.random() * 2000)

    return { value: chunk, error: null }
  }
  return (
    <ThemeProvider>
      <Wrapper bg="surface">
        <Avatar
          chunkSize={1024 * 20}
          uploadChunk={onUploadChunk}
          data-testid="avatar"
        />
      </Wrapper>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
