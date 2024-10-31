import axios from 'axios'
import Swal from 'sweetalert2'


export const Create = (productInfo) => {
    fetch(`https://crud-project-server.vercel.app/createProduct`, {
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
    const result = await axios.get(`https://crud-project-server.vercel.app/readProduct`)
    return result
}



export const Update = (id, updateData) => {
    axios.post(`https://crud-project-server.vercel.app/updateProduct/${id}`, updateData)
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
    axios.get(`https://crud-project-server.vercel.app/deleteProduct/${id}`)
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