// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorMessage = any | null

export type ValidationResult<T, U> = {
  value: T
  error: U
}
