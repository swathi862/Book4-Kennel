const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}?_expand=employee`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals?_expand=employee`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}