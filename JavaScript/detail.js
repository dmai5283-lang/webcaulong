
document.addEventListener("DOMContentLoaded", function (){
    const detailId = localStorage.getItem('currentProductId');
    const product = danhSachSanPham.find(item => item.id === detailId);
    if(product){
        let status="";
        if(product.so_luong > 0){
            status="Còn hàng";
        }else if(product.so_luong == 0){
            status="Hết hàng";
        }else{
            alert('Số lượng không phù hợp')
        }
        document.getElementById('detail-container').innerHTML=`
            <div class="img-detail"><img src="${product.img}"></div>
            <div class="detail-box">
                <h1 class="name_product">${product.name}</h1>
                <p class="status">Trạng thái: ${status}</p>
                <h2 class="price-detail">${product.price}</h2>
                <div class="endow">
                    <h3><strong class="highlight">Ưu đãi</strong></h3>
                    <p>✔ Tặng 2 Quấn cán vợt Cầu Lông: <strong class="highlight">VNB 001, VS002</strong> hoặc <strong class="highlight">Joto 001</strong></p>
                    <p>✔ Sản phẩm cam kết chính hãng</p>
                    <p>✔ Một số sản phẩm sẽ được tặng bao đơn hoặc bao nhung bảo vệ vợt</p>
                    <p>✔ Thanh toán sau khi kiểm tra và nhận hàng (Giao khung vợt)</p>
                    <p>✔ Bảo hành chính hãng theo nhà sản xuất (Trừ hàng nội địa, xách tay)</p>
                    <br><br>
                    <h4>🎁Ưu đãi thêm khi mua sản phẩm tại <strong class="highlight">PowerSport Premium</strong></h4>
                    <p>✅ <strong class="highlight">Sơn logo mặt vợt</strong> miễn phí</p>
                    <p>✅ <strong class="highlight">Bảo hành lưới đan</strong> trong 72 giờ</p>
                    <p>✅ <strong class="highlight">Thay gen vợt</strong> miễn phí trọn đời</p>
                    <p>✅ <strong class="highlight">Tích luỹ điểm thành viên</strong> Premium</p>
                    <p>✅ <strong class="highlight">Voucher giảm giá</strong> cho lần mua hàng tiếp theo</p>
                </div>
                <div class="quantity-box">
                    <button class="btn" onclick="subtraction()"><strong>-</strong></button>
                    <input type="number" id="quantity-value" value="1", min="1" readonly>
                    <button class="btn" onclick="addition()"><strong>+</strong></button><br>
                </div>
                <button class="buy buynow" onclick="buyNow()"><strong>MUA NGAY</strong></button>
                <button class="buy add" onclick="Add()"><strong>THÊM VÀO GIỎ HÀNG</strong></button>
            </div>
            <div class="description"><br><hr><br><h1 class="des">Mô tả sản phẩm</h1><br><strong class="highlight-description">${product.description}</strong></div>
        `;
    }
})

function addition(){
    const number = document.getElementById('quantity-value');
    let currentValue = parseInt(number.value);
    number.value = currentValue + 1;
}
function subtraction(){
    const number = document.getElementById('quantity-value');
    let currentValue = parseInt(number.value);
    if(currentValue > 1){
        number.value = currentValue - 1;
    }
}

const boxChuaPrd = document.getElementById('related-prd');
danhSachSanPham.forEach(sp =>{
    boxChuaPrd.innerHTML +=`
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



