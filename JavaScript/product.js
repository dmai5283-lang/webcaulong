const boxChuaPrd = document.getElementById("container-product");
danhSachSanPham.forEach(sp => {
    boxChuaPrd.innerHTML+=`
        <div class="product-box" style="margin-bottom: 50px;">
            <img src="${sp.img}" alt="${sp.name}" class="image-product">
            <h3>${sp.name}</h3>
            <p class="price">${sp.price}</p><br>
            <div id="btn-detail" onclick="viewDetail('${sp.id}')">Xem chi tiết</div>
        </div>
    `;
});
function viewDetail(id){
    localStorage.setItem('currentProductId', id);
    window.location.href="detail.html";
}
