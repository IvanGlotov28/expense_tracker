const createNewTransaction = (
  money,
  description,
  transactionType,
  totalMoney
) => {
  const currentDate = new Date()

  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()

  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`

  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  const formattedDate = `${day}.${month}.${year}`

  const newTransaction = {
    money,
    description,
    transactionType,
    totalMoney,
    formattedDate,
    formattedTime,
  }

  return newTransaction
}

export default createNewTransaction
