const formElement = document.querySelector('form')
const notificationsElement = document.querySelector('.notifications')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  notificationsElement.insertAdjacentHTML('beforeend', `
    <div class="notifications__item">
      Данные успешно сохранены
    </div>
  `)
})

document.addEventListener('animationend', (event) => {
  if (event.target.matches('.notifications__item')) {
    event.target.remove()
  }
})