export const randomString = (length: number, chars: string) => {
  let result = ''
  for (let i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))]
  return result
}

export const extractValidation = (arr: any | string[]) => {
  const data = arr.reduce((result: any, item: any) => {
    if (item.constraints && typeof item.constraints === 'object') {
      Object.entries(item.constraints).map(([key, val]) => {
        result.push({ [item.property]: val })
      })
    } else if (item.constraints && typeof item.constraints === 'string') {
      result.push({ [item.property]: item.constraints })
    }
    return result
  }, [])

  return [
    data.reduce((acc: any, obj: any) => {
      return { ...acc, ...obj }
    }, {}),
  ]
}
