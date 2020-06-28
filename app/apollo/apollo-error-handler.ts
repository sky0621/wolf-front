export default (error: any, context: any) => {
  const { networkError } = error
  if (networkError && networkError.statusCode === 401) {
    location.href = '/login'
  }
  context.error({ statusCode: 304, message: 'Server error' })
}
