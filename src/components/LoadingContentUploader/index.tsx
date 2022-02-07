import React from 'react'

import { ErrorMessage } from '../../utils/validation'
import { Close, Exclamation, AvatarWhite } from '../Svg'

import Main from '../Main'
import Button from '../Button'
import ImageCrop from '../ImageCrop'
import Loading from '../Loading'
import Typography from '../Typography'

type LoadingContentProps = {
  file?: File
  error: ErrorMessage
  progress: number
  maxProgress: number
  onTryAgain:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
  onReset:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined
}

const LoadingContentUploader = ({
  file,
  error,
  progress,
  maxProgress,
  onReset,
  onTryAgain,
  ...moreProps
}: LoadingContentProps) => (
  <Main display="flex" height="100%" {...moreProps}>
    <Main
      flex={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ImageCrop height="113px" width="113px">
        {error ? <Exclamation /> : <AvatarWhite />}
      </ImageCrop>
    </Main>

    <Main
      flex={3}
      padding={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Main width="100%">
        {error ? (
          <div>
            <Typography variant="error">{error}</Typography>
            <div>
              <Button
                style={{ textDecoration: 'underline' }}
                variant="text"
                textColor="black"
                onClick={onTryAgain}
              >
                Try Again
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Typography>{file?.name}</Typography>
            <Loading {...{ maxProgress, progress }} />
          </div>
        )}
      </Main>
    </Main>
    <Main>
      <Button variant="text" onClick={onReset}>
        <Close />
      </Button>
    </Main>
  </Main>
)

export default LoadingContentUploader
