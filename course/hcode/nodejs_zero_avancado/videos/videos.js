const { spawn } = require('child_process')
const path = require('path')

// const cmd = '/opt/homebrew/opt/ffmpeg/bin/ffmpeg'
const cmd = 'ffmpeg'

//node videos ./src
const parent = process.argv[2]

let videos = []

if(process.argv[2]){

  const start = parseInt(process.argv[3])
  const end = parseInt(process.argv[4])

  for (let i = start; i <= end; i++) {
    videos.push(i);
  }

  videos.reverse();
  processVideo()
} else {
  console.log('É necessário criar um diretório de nivel superior')
}


function resize(video, quality){
  console.log(`${parent}/${video}.mp4`)

  console.log(`${parent}/resultado/${video}-${quality}.mp4`)

  const resultDir = path.resolve(parent, 'resultado');

  console.log('resultDir >>>>>>', resultDir)


  const p = new Promise((resolve, reject) => {
    // const ffmpeg = spawn('./ffmpeg/ffmpeg', [
      const ffmpeg = spawn(cmd, [
        '-i',
        `${parent}/${video}.mp4`,
        '-codec:v',
        'libx264',
        '-profile:v',
        'main',
        '-preset',
        'slow',
        '-b:v',
        '400k',
        '-maxrate',
        '400k',
        '-bufsize',
        '800k',
        '-vf',
        `scale=-2:${quality}`,
        '-threads',
        '0',
        '-b:a',
        '128k',
        `${resultDir}/${video}-${quality}.mp4`
        //`${parent}/resultado/${video}-${quality}.mp4`
    ])
    ffmpeg.stderr.on('data', (data) => {
      console.log(data)
    })

    ffmpeg.on('close', (code) => {
      resolve()
    })
  })

  return p
}

async function processVideo(){
  let video = videos.pop()
  if(video){
    try {
      await resize(video, 720)
      await resize(video, 480)
      await resize(video, 360)

      console.log(`Videos renderizados - ${video}`)

      processVideo()
    } catch(e) {
      console.log(e)
    }
  }
}