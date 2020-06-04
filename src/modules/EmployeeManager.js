const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`).then(result => result.json())
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
  },
  post(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  },
  update(editedEmployee){
    return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    }).then(data => data.json());
  }
}