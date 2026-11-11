function openTab(event, TabId){
    event.preventDefault();
    const allTabs = document.querySelectorAll('.tab-item');
    allTabs.forEach(tab =>{
        tab.classList.remove('active');
    })
    const allGroup = document.querySelectorAll('.product-group');
    allGroup.forEach(content =>{
        content.classList.remove('active');
    })
    event.currentTarget.classList.add('active');

    const targetGroup = document.getElementById(TabId);
    if(targetGroup){
        targetGroup.classList.add('active');
    }else{
        console.log("Không tìm thấy mục")
    }
};

function apperance_follow_Category(nameCategory, idContainer){
    const boxChua = document.getElementById(idContainer);
    const danhSachLoc = danhSachSanPham.filter(item => item.category === nameCategory);

    danhSachLoc.forEach(item =>{
        boxChua.innerHTML +=`
            <div class="product-box">
                <img src="${item.img}" alt="${item.name}" class="image-product">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <div class="btn-detail" onclick="viewDetail('${item.id}')">Xem chi tiết</div>
            </div>
        `;
    });
}
function viewDetail(id){
    localStorage.setItem('currentProductId', id);
    window.location.href="detail.html";
}

apperance_follow_Category('rackets', 'badminton-rackets');
apperance_follow_Category('Shoes', 'badminton-shoes');
apperance_follow_Category('T-shirt', 'clothes');
apperance_follow_Category('Bags', 'bag_racket');
apperance_follow_Category('Accessory', 'badminton-accessories');