import React from 'react'

import { ErrorMessage } from '../../utils/validation'
import { AvatarBlack } from '../Svg'

import Main from '../Main'
import Typography from '../Typography'

type InitialContentUploaderProps = {
  logo?: React.ReactNode
  description?: React.ReactNode
  error: ErrorMessage
}

const InitialContentUploader = ({
  logo,
  description,
  error,
  ...moreProps
}: InitialContentUploaderProps) => (
  <Main
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100%"
    {...moreProps}
  >
    <Main>
      {logo ?? (
        <Typography variant="title">
          <Main pr={10} display="inline">
            <AvatarBlack />
          </Main>
        </Typography>
      )}
    </Main>
    <Main>
      {description ?? (
        <Typography variant="text">
          Drop the image here or click to browse.
        </Typography>
      )}
    </Main>
    {error && (
      <Main>
        <Typography variant="error">{error}</Typography>
      </Main>
    )}
  </Main>
)

export default InitialContentUploader
