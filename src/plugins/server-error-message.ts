const errorsMap = new Map([
  ['incorrectPassword', 'Неверный пароль'],
  ['emailNotExists', 'Пользователь не найден']
])

export default function serverErrorMessage(error: string): string {
  return errorsMap.get(error) || 'Ошибка сервера'
}
