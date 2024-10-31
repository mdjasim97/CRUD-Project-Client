import axios from 'axios'
import Swal from 'sweetalert2'


export const Create = (productInfo) => {
    fetch(`http://localhost:5000/createProduct`, {
        method: "POST",
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(productInfo)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.status == 'successful') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}


export const Read = async () => {
    const result = await axios.get(`http://localhost:5000/readProduct`)
    return result
}



export const Update = (id, updateData) => {
    axios.post(`http://localhost:5000/updateProduct/${id}`, updateData)
        .then(result => {
            console.log(result.data.status);
            if (result.data.status == 'successful') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => {
            console.log(err)
        })
}



export const Delete = (id) => {
    axios.get(`http://localhost:5000/deleteProduct/${id}`)
        .then(result => {
            console.log(result.data.status);
            if (result.data.status == 'success') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Delete ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => {
            console.log(err)
        })
}