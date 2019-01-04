class API {
    static call(requestType, url, data = null) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                // if (err.status === 401) {
                //     _auth.logout()
                // }

                reject(err)
            })
        })
    }
}

export default API