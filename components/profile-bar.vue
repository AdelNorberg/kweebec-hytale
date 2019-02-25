<template>
  <div class="profile-bar">
    <div class="icon-container">
      <noname class="icon"/>
      <div class="name-icon">Звание</div>
    </div>
    <div class="avatar"></div>
    <div class="info">
      <div class="name">AdelNorberg</div>
      <div class="email">darzemanov101@gmail.com</div>
    </div>
  </div>
</template>

<script>
import noname from "~/assets/icons/noname"

export default {
  components: {
    noname
  }
}
</script>


<style lang="scss" scoped>
.profile-bar {
  height: 6rem;
  width: 60rem;
  margin-right: 1rem;
  background: rgba(210, 233, 247, 0.04);
  padding: 0.7rem;
}

.profile-bar {
  display: flex;
  align-items: center;
}

.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffe98d;
  background: rgba(210, 233, 247, 0.04);
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  font-weight: 300;
}

.icon {
  width: 4rem;
  height: 3rem;
}

.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background: rgba(210, 233, 247, 0.04);
  margin-left: 1.5rem;
}

.info {
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-around;
  color: #b7cedd;
}

.email {
  font-weight: 300;
}

</style>
