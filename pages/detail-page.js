function doesNotPassAllValidations(name, msg) {
    if (!name) {
      alert('You forgot to fill in your name!')
      return true;
    } else if (!msg) {
        alert('You forgot to fill in your message!')
        return true;
    } else if (msg.length > 280) {
      alert('Your comment is too long')
      return true
    } else if (offWordsChecking(msg)) {
        return true
    }
  
    return false
  }


function submitComment(){
    const inputField = document.getElementById('name')
    let name = inputField.value
    name =  name.charAt(0).toUpperCase() + name.slice(1)
    const textArea = document.getElementById('msg')
    const msg = textArea.value

    if(doesNotPassAllValidations(name, msg)){
        return null
      }
    
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
}

function offWordsChecking (msg) {
    let message = msg.split(" ")
    console.log (message)
    for (i=0; i<message.length; i++){
        if (message[i] == "offensive") {
            alert('Warning: this word (' + message[i] +') has been flagged as offensive')
        }
    }
    return true
}