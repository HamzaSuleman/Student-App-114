/* eslint-env browser */
// main.js
const updateButton = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

updateButton.addEventListener('click', _ => {
  fetch('/students', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: 'Hamza',
      lastname: 'Suleman',
      dob: '30-03-2000',
      email: 'Se19-114@ssuet.edu.pk',
      noofSubjects: '5',
      phone: '0333049930',
      teacher: 'sundas',
      pic: 'uniform.jpg' 
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    window.location.reload(true)
  })
})

deleteButton.addEventListener('click', _ => {
  fetch('/students', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: 'Hamza',
      lastname: 'Suleman',
      dob: '30-03-2000',
      email: 'Se19-114@ssuet.edu.pk',
      noofSubjects: '5',
      phone: '0333049930',
      teacher: 'sundas',
      pic: 'uniform.jpg' 
    })
  })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      if (response === 'No student to delete') {
        messageDiv.textContent = 'No student to delete'
      } else {
        window.location.reload(true)
      }
    })
    .catch(console.error)
})
