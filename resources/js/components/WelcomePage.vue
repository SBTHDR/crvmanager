<template>
  <div>
      <h1 class="bg-dark text-white p-3 mt-3">CRV Manager</h1>
      <router-link to="/" class="btn btn-primary">Home</router-link>
      <router-link to="/create" class="btn btn-primary">Create</router-link>

      <div>
        <table class="table table-bordered mt-3">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="developer in developers" :key="developer.id">
                <tr>
                    <th scope="row">{{ developer.id }}</th>
                    <td>{{ developer.name }}</td>
                    <td>{{ developer.email }}</td>
                    <td>{{ developer.phone }}</td>
                    <td>
                        <button class="btn btn-sm btn-primary">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
    methods: {
        getData() {
            try {
                axios.get('/index')
                .then(res => {
                    this.developers = res.data
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style>

</style>