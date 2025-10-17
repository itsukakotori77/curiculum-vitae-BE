export const randomString = (length: number, chars: string) => {
  let result = ''
  for (let i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))]
  return result
}

export const extractValidation = (arr: any | string[]) => {
  const extractErrors = (errors: any[], parentProperty = ''): any[] => {
    const result: any[] = []

    errors.forEach((error: any) => {
      const propertyPath = parentProperty
        ? `${parentProperty}.${error.property}`
        : error.property

      // If this error has direct constraints, add them
      if (error.constraints && typeof error.constraints === 'object') {
        Object.entries(error.constraints).forEach(([key, val]) => {
          result.push({ [propertyPath]: val })
        })
      } else if (error.constraints && typeof error.constraints === 'string') {
        result.push({ [propertyPath]: error.constraints })
      }

      // If this error has children (nested validation errors), recursively extract them
      if (error.children && error.children.length > 0) {
        const childErrors = extractErrors(error.children, propertyPath)
        result.push(...childErrors)
      }
    })

    return result
  }

  const data = extractErrors(arr)

  return [
    data.reduce((acc: any, obj: any) => {
      return { ...acc, ...obj }
    }, {}),
  ]
}

export const getFilenameFromUrl = (url: string): string => {
  const parts = url.split('/')
  return parts[parts.length - 1]
}
