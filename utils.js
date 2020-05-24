const sourcePath = document.getElementById('source')
  desitnationPath = document.getElementById('destination'),
  copyButtonInstance = document.getElementById('copy')

copyButtonInstance.addEventListener('click', function() {
  alert('hello')
  let xhr = new XMLHttpRequest()
  
  xhr.open('POST', '/api/fileTransfer')
  xhr.send({ src: 'src', dest: 'dest' })
  xhr.onload = (res) => {
    console.log('xhr res:', res)
    if (xhr.status === 200) {
      console.log('success!!')
    } else {
      console.log('failed!!')
    }
  }
});