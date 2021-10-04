export const amount = ''
export const decimalCount = 2
export const decimal = '.'
export const thousands = ','

export function formatCurrency(amount, decimalCount = 2, decimal = '.', thousands = ',') {
  try {
    let decimalCount_ = Math.abs(decimalCount)
    const isNumber = decimalCount_ => !Number.isNaN(parseFloat(decimalCount_))
    decimalCount_ = !isNumber ? 2 : decimalCount_

    const negativeSign = amount < 0 ? '-' : ''

    const amount_ = Math.abs(Number(amount) || 0).toFixed(decimalCount_)

    const i = parseInt(amount_, 10).toString()
    const j = i.length > 3 ? i.length % 3 : 0

    const thousands_ = '$1'

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, thousands_ + thousands) +
      (decimalCount_
        ? decimal +
          Math.abs(amount_ - i)
            .toFixed(decimalCount_)
            .slice(2)
        : '')
    )
  } catch (e) {
    console.log(e)
  }
}

export function formatAccent(string) {
  return string.replace(/[^\w\sáãéíóõôúç]/gi, '')
}

export function formatName(string) {
  return string.replace(/[^\w\s]|[áãéíóõôúç]|[_]/gi, '')
}

export function formatNameRemoveAccent(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
