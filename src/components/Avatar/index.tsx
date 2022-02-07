import React, { useCallback, useState, useEffect } from 'react'

import { FileChunk, getFileBase64 } from '../../utils/file'
import { ErrorMessage, ValidationResult } from '../../utils/validation'
import { useDragDrop } from '../../Hooks/useDragDrop'
import { useFileUploader } from '../../Hooks/useFileUpload'

import { Container, LoadingContent, InitialContent } from '../../components'

type AvatarProps = {
  validateFile?: (file: File) => ValidationResult<boolean, ErrorMessage>
  accept?: string
  logo?: React.ReactNode
  description?: string
  chunkSize?: number
  uploadChunk: (
    chunk: FileChunk
  ) => Promise<ValidationResult<FileChunk, ErrorMessage>>
}

type UploadedStatus = 'initial' | 'loading' | 'cropping' | 'done'

const Avatar = ({ logo, description, uploadChunk }: AvatarProps) => {
  const [error, setError] = useState<ErrorMessage>(null)
  const [avatarFile, setAvatarFile] = useState<File>()
  const [avatarFileBase64, setAvatarFileBase64] = useState<string | undefined>()
  const [uploaderStatus, setUploaderStatus] =
    useState<UploadedStatus>('loading')
  const [uploadFile, { progress, maxProgress, cancelUpload }] = useFileUploader(
    {
      uploadChunk,
      onAfterUploadSuccess: () => setUploaderStatus('cropping')
    }
  )

  useEffect(() => {
    const getBase64 = async () => {
      if (avatarFile) {
        try {
          const base64 = await getFileBase64<string>(avatarFile)
          setAvatarFileBase64(base64)
        } catch (error) {
          setAvatarFileBase64(undefined)
        }
      }
    }
    getBase64()
  }, [avatarFile])

  const resetState = useCallback(() => {
    setError(null)
    setAvatarFile(undefined)
    setUploaderStatus('initial')
    cancelUpload()
  }, [cancelUpload])

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLElement>) => {
      const files = e.dataTransfer.files
      if (files.length > 1) {
        resetState()
        return setError('Can only upload 1 file')
      }
      const file = files[0]
      setAvatarFile(file)
      setUploaderStatus('loading')
      uploadFile(file)
    },
    [uploadFile, resetState]
  )

  const { isDragging, ...dragDropProps } = useDragDrop({ onDrop })
  console.log(progress, maxProgress)

  return (
    <Container
      {...dragDropProps}
      border={`2px dashed ${isDragging ? 'deepskyblue' : '#C7CDD3'}`}
      width="553px"
      height="177px"
      borderRadius="8px"
    >
      {uploaderStatus === 'initial' && (
        <InitialContent {...{ logo, description, error }} />
      )}

      {uploaderStatus === 'loading' && (
        <LoadingContent
          error={error}
          file={avatarFile}
          onReset={resetState}
          onTryAgain={() =>
            avatarFile != null ? uploadFile(avatarFile) : undefined
          }
          {...{ progress, maxProgress }}
        />
      )}

      {uploaderStatus === 'cropping' && (
        <div>
          <img
            height="100"
            width="100"
            src={avatarFileBase64}
            alt="uploaded file representation"
          />
        </div>
      )}
    </Container>
  )
}

export default Avatar
