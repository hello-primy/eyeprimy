<template>
  <div>
    <div class="camera-modal">
      <video ref="video" class="camera-stream"/>
      <q-btn
        round
        color="grey-10"
        @click="method"
        class="fixed"
        icon="camera_alt"
        style="right: 18px; bottom: 100px"
      />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    methods: {
      capture () {
        const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(mediaStreamTrack)
        return imageCapture.takePhoto().then(blob => {
          console.log(blob)
        })
      },
      method () {
        const wajah = ['diamond', 'round', 'oval', 'square', 'heart']
        alert("Type of your face shape " + wajah[Math.floor(Math.random() * wajah.length)])
      }
    },
    mounted () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))
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
</style>
