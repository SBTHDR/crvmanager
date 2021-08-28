<template>
  <div>
      <h1 class="bg-dark text-white p-3 mt-3">CRV Manager</h1>
      <router-link to="/" class="btn btn-primary mb-3">Home</router-link>
      <div class="card p-3">
        <div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" v-model="developers.name" placeholder="Enter full name...">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" v-model="developers.email" placeholder="Enter email addresss...">
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="text" class="form-control" id="phone" name="phone" v-model="developers.phone" placeholder="Enter phone number...">
            </div>
            <button @click.prevent="updateData" class="btn btn-primary">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            developers: []
        }
    },
    created() {
        this.editData()
    },
    methods: {
        editData() {
            try {
                axios.get('/edit/' + this.$route.params.id)
                .then(res => {
                    this.developers = res.data
                })
            } catch (err) {
                console.log(err)
            }
        },
        updateData() {
            try {
                axios.post('/edit/' + this.$route.params.id, this.developers)
                    .then(res => res.data)
                    this.$router.push('/')
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>