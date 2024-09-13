//bank
function getBankName(value) {
    // Hàm trả về tên ngân hàng dựa trên giá trị được chọn
    const bankNames = {
        'VietinBank': 'Ngân hàng TMCP Công thương Việt Nam',
        'BIDV': 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam',
        'Vietcombank': 'Ngân hàng TMCP Ngoại Thương Việt Nam',
        'ACB': 'Ngân hàng TMCP Á Châu',
        'ABBANK': 'Ngân hàng TMCP An Bình',
        'Viet Capital Bank': 'Ngân hàng TMCP Bản Việt',
        'BAOVIET Bank': 'Ngân hàng TMCP Bảo Việt',
        'Bac A Bank': 'Ngân hàng TMCP Bắc Á',
        'LienVietPostBank': 'Ngân hàng TMCP Bưu điện Liên Việt',
        'PVcomBank': 'Ngân hàng TMCP Đại Chúng Việt Nam',
        'DongA Bank': 'Ngân hàng TMCP Đông Á',
        'SeABank': 'Ngân hàng TMCP Đông Nam Á',
        'MSB': 'Ngân hàng TMCP Hàng Hải',
        'Kienlongbank': 'Ngân hàng TMCP Kiên Long',
        'Techcombank': 'Ngân hàng TMCP Kỹ Thương',
        'Nam A Bank': 'Ngân hàng TMCP Nam Á',
        'OCB': 'Ngân hàng TMCP Phương Đông',
        'MB': 'Ngân hàng TMCP Quân Đội',
        'VIB': 'Ngân hàng TMCP Quốc Tế',
        'NCB': 'Ngân hàng TMCP Quốc dân',
        'SCB': 'Ngân hàng TMCP Sài Gòn',
        'SAIGONBANK': 'Ngân hàng TMCP Sài Gòn Công Thương',
        'SHB': 'Ngân hàng TMCP Sài Gòn – Hà Nội',
        'Sacombank': 'Ngân hàng TMCP Sài Gòn Thương Tín',
        'TPBank': 'Ngân hàng TMCP Tiên Phong',
        'VietABank': 'Ngân hàng TMCP Việt Á',
        'VPBank': 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
        'Vietbank': 'Ngân hàng TMCP Việt Nam Thương Tín',
        'PG Bank': 'Ngân hàng TMCP Xăng dầu Petrolimex',
        'Eximbank': 'Ngân hàng TMCP Xuất Nhập Khẩu',
        'HDBank': 'Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh'
    };
    return bankNames[value] || 'Chọn ngân hàng';
}


// Ngày giờ 
function getFormattedDateTime() {
    const now = new Date();

    // Lấy ngày, tháng, năm, giờ, phút và giây
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2); // Tháng bắt đầu từ 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Định dạng ngày giờ theo dd/mm/yyyy hh:mm:ss
    const formattedDateTime = `${day} thg${month}, ${year} lúc ${hours}:${minutes}`;

    return formattedDateTime;
}
function formatCurrency(amount) {
    // Chuyển đổi số thành chuỗi với dấu phân cách hàng nghìn
    let formattedAmount = parseFloat(amount).toLocaleString('en-US');
    // Thay thế dấu phân cách hàng nghìn từ dấu chấm (.) thành dấu phẩy (,)
    return formattedAmount.replace(/\./g, ',');
}
function generateBill() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Get input values
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    // const bank = getBankName(selectedValue);
    const bankValue = document.getElementById('bankSelect').value;
    const bank = getBankName(bankValue); // Sử dụng hàm getBankName
    // const bank = document.getElementById('bankSelect').value;
    const account = document.getElementById('account').value;

    // Format amount with currency
    const formattedAmount = formatCurrency(amount);
    // Draw background image
    const img = new Image();
    img.src = 'images/techcombank.png'; // Thay đổi đường dẫn đến ảnh của bạn
    img.onload = function() {
        // Ensure the canvas size matches the image size
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image
        ctx.drawImage(img, 0, 0);
        
        // Set font and color
        ctx.font = '17px San Francisco'; // Thay đổi font nếu cần
        ctx.fillStyle = '#0a0908'; // Màu chữ
        
        // Draw text on the canvas
        ctx.fillText(name, 35, 555);
        ctx.fillText(bank, 35, 650);
        ctx.fillText(account, 35, 580);

        ctx.fillText(getFormattedDateTime(), 35, 790);
        ctx.fillText('Nguyen Van Nhat chuyen khoan', 35, 720);
        ctx.fillText('FT24251523842422', 35, 857);
        ctx.fillText('FXT231451', 35, 924);

        ctx.font = '30px San Francisco'; // Thay đổi font nếu cần
        ctx.fillText('Chuyển thành công', 30, 410);
        ctx.fillText('VND ' + formattedAmount, 30, 455);

    };
    
}

function downloadImage() {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'bill.png'; // Tên tệp khi tải xuống
    link.href = canvas.toDataURL('image/png'); // Chuyển đổi canvas thành URL hình ảnh
    link.click(); // Kích hoạt tải xuống
}



