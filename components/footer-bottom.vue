<template>
  <footer class="footer">
    <div class="footer-info">
      ©2019 hytale-kweebec.ru
    </div>
    <div class="following-box">
      <div class="footer-following-text">Подпишись на нас:</div>
      <div>
        <span class="separator"></span>
        <a href="https://vk.com/hytale_kweebec"  target="_blank">
          <vk class="vk"/>
        </a> 
        <span class="separator"></span>
        <a href="https://www.youtube.com/channel/UCvomqzJ4iFyOby2zWJKgZCA" target="_blank">
          <youtube class="youtube"/>
        </a> 
      </div>
    </div>
  </footer>
</template>

<script>
import vk from '~/assets/vk'
import youtube from '~/assets/youtube'

export default {
  components: {
    vk,
    youtube
  }
}
</script>


<style lang="scss" scoped>
.footer {
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: #10161E;
  box-shadow: inset 0 0 0 1px #2c2b22;
  border-radius: 5px;
  color: rgba(183, 206, 221, 0.3);
}

.following-box {
  background: linear-gradient(#f5fbff, #bfe6ff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-info {
  font-size: 1rem;
}

.separator {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #32372b;
  vertical-align: middle;
  margin-top: -0.5rem;
  font-size: 1.2em;
  line-height: 70px;
}

.vk {
  margin-right: 0.7rem;
}

.youtube {
  margin-left: 0.4rem;
  padding-top: 0.4rem;
}

.footer-following-text {
  color: rgba(183, 206, 221, 0.3);
}
</style>
