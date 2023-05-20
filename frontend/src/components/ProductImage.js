import { useState } from "react"


function ProductImage() {
    let [image, setImage] = useState()

    async function uploadImage() {

        let formdata = new FormData()
        for (let img of image) {
            formdata.append("img", img)
        }
        const response = await fetch("http://localhost:4000/product/image", {
            method: "post",
            body: formdata
        });
        const jsonData = await response.json()
        console.log(jsonData)
    }

    return (
        <form>
            <input type="file" multiple onChange={(e) => { setImage(e.target.files) }} />
            <button type="button" onClick={uploadImage}>submit</button>
        </form>

    );
}

export default ProductImage;
