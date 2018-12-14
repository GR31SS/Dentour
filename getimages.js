var fs = require('fs');
let axios = require('axios')

const outPath = "static_assets/vids"

const files = [
  "orthodontics.MOV",
  "panoramic.MP4",
  "try_intraoral.MP4"
]

async function getFile(file){
  let url = "https://batzz.me/videos/"
  response = await axios({
    method: 'GET',
    url: url + file,
    responseType: 'stream'
  })
  let out = fs.createWriteStream(outPath + '/' + file)
  response.data.pipe(out)


  return new Promise((resolve, reject) => {
    response.data.on('end', () => {
      resolve()
    })

    response.data.on('error', () => {
      reject()
    })
  })
}
files.forEach(file => {
  getFile(file).then(d => {
    console.log(file + " has been downloaded.")
  })
})