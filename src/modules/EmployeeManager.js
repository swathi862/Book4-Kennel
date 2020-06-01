const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees?_embed=animals`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  patch(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "PATCH",
        body: JSON.stringify({active: false}),
        headers: {
            "Content-type": "application/json"
        }
  })
  .then(result => result.json())
  }
}