<template>
  <div>
    <div class="camera-modal">
      <video id="player" ref="video" autoplay class="camera-stream"/>
      <div id="egg"/>
    </div>
    <q-btn
      round
      color="grey-10"
      @click="capture"
      class="fixed"
      icon="camera_alt"
      style="right: 18px; bottom: 100px"
    />
    <canvas id="canvas" width=640 height=480 style="display: none"></canvas>
  </div>
</template>
<script>
/* eslint-disable */
import domtoimage from 'dom-to-image'
import html2canvas from 'html2canvas'
import axios from 'axios'
  export default {
    methods: {
      capture () {
        // const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        // const imageCapture = new window.ImageCapture(mediaStreamTrack)
        // return imageCapture.takePhoto().then(blob => {
        //   console.log(blob)
        // })
        const player = document.getElementById('player')
        const canvas = document.getElementById('canvas')
        const context = canvas.getContext('2d')
        context.drawImage(player, 0, 0, canvas.width, canvas.height)


        var base64Str = canvas.toDataURL("image/jpeg")
        var dataToBlob = dataURItoBlob(base64Str)
        var data = {
          image: base64Str
        }

        axios
          .post('http://localhost:3000/', data)
          .then(response => {
            var data = response.data
            const mataKiri = data.filter(o => {
              return o.Type == "eyeLeft"
            })
            const mataKanan = data.filter(o => {
              return o.Type == "eyeRight"
            })
            const kiriAlisMataKiri = data.filter(o => {
              return o.Type == "leftEyeBrowLeft"
            })
            const kananAlisMataKanan = data.filter(o => {
              return o.Type == "rightEyeBrowRight"
            })
            const mulutAtas = data.filter(o => {
              return o.Type == "mouthUp"
            })
            const mulutBawah = data.filter(o => {
              return o.Type == "mouthDown"
            })
            const hidungKanan = data.filter(o => {
              return o.Type == "noseRight"
            })
            const hidungKiri = data.filter(o => {
              return o.Type == "noseLeft"
            })
            console.log(data)


            const lebarDahi = kananAlisMataKanan[0].X - kiriAlisMataKiri[0].X
            const panjangWajah = mulutBawah[0].Y - kiriAlisMataKiri[0].Y
            const tulangPipiKanan = mataKanan[0].X + 
              Math.sqrt(
                (hidungKanan[0].X - mataKanan[0].X) * (hidungKanan[0].X - mataKanan[0].X) + 
                (hidungKanan[0].Y - mataKanan[0].Y) * (hidungKanan[0].Y - mataKanan[0].Y)
              )      
            const tulangPipiKiri = hidungKiri[0].X + 
              Math.sqrt(
                (mataKiri[0].X - hidungKiri[0].X) * (mataKiri[0].X - hidungKiri[0].X) +
                (hidungKiri[0].Y - mataKiri[0].Y) * (hidungKiri[0].Y - mataKiri[0].Y)
              )
            const jarakTulangPipi = tulangPipiKanan - tulangPipiKiri

            var bentukWajah

            if (
              panjangWajah - jarakTulangPipi >=  0 &&  panjangWajah - jarakTulangPipi <= 0.2 &&
              jarakTulangPipi - lebarDahi >=  0 &&  jarakTulangPipi - lebarDahi <= 0.2
              ){
              bentukWajah = "square"
            }
            else if (panjangWajah - jarakTulangPipi >=  0 &&  panjangWajah - jarakTulangPipi <= 0.1 ){
              bentukWajah = "round"
            }
            else if ( panjangWajah >= jarakTulangPipi && jarakTulangPipi >= lebarDahi) {
              bentukWajah = "heart"
            }
            else if (jarakTulangPipi >= lebarDahi){
              bentukWajah = "diamond"
            }
            else if ( panjangWajah >= jarakTulangPipi ){
              bentukWajah = "oval"
            }

            console.log(bentukWajah)
            console.log("lebar dahi: " + lebarDahi)
            console.log("panjang wajah: " + panjangWajah)
            console.log("tulangPipiKanan: " + tulangPipiKanan)
            console.log("tulangPipiKiri: " + tulangPipiKiri)
            console.log("jarakTulangPipi: " + jarakTulangPipi)

            this.$router.push('/face/' + bentukWajah)
          })

        
        function dataURItoBlob(dataURI, callback) {
            // convert base64 to raw binary data held in a string
            // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
            var byteString = atob(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

            // write the bytes of the string to an ArrayBuffer
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            // write the ArrayBuffer to a blob, and you're done
            var bb = new Blob([ab]);
            return bb;
        }

      }
    },
    mounted () {
      document.getElementById("player").style.maxHeight = document.getElementById("egg").style.height;
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.$refs.video.srcObject = mediaStream
        })
        .catch(error => alert('Camera tidak support'))
    },
    destroyed () {
      const tracks = this.mediaStream.getTracks()
      tracks.map(track => track.stop())
    }
  }
</script>
<style scoped>
    .camera-stream {
      width: 100%;
      max-height: 100%;
    }
    /* video {
      filter: brightness(40%);
    } */
    #egg {
      position: absolute;
      top: 10%;
      left: 30%;
      width: 40%;
      height: 50%;
      background-color: white;
      opacity: 0.3;
      -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
      border-radius:         50%  50%  50%  50%  / 60%   60%   40%  40%;
    }
</style>
