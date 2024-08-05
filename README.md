# Dự Án Phát Triển Website Thương Mại Kỹ Thuật Số

## Giới Thiệu

Dự án này nhằm xây dựng một website thương mại kỹ thuật số hoàn chỉnh, cung cấp các tính năng cần thiết cho việc quản lý và bán sản phẩm trực tuyến. Website được phát triển bằng PHP và MySQL, và bao gồm các chức năng như quản lý sản phẩm, xử lý đơn hàng, thanh toán trực tuyến và hệ thống quản lý người dùng.

## Mục Tiêu

- **Quản lý sản phẩm**: Cung cấp giao diện để quản lý sản phẩm, bao gồm thêm, sửa, xóa và hiển thị sản phẩm.
- **Xử lý đơn hàng**: Cho phép người dùng đặt hàng và theo dõi tình trạng đơn hàng.
- **Thanh toán**: Tích hợp các cổng thanh toán trực tuyến để xử lý giao dịch.
- **Quản lý người dùng**: Cung cấp chức năng đăng ký, đăng nhập, và phân quyền người dùng.
- **Tối ưu hóa SEO**: Đảm bảo rằng trang web có thể được tối ưu hóa cho công cụ tìm kiếm.

## Cài Đặt

### Yêu Cầu

- PHP 7.4 hoặc cao hơn
- MySQL 5.7 hoặc cao hơn
- Composer (trình quản lý phụ thuộc PHP)
- Máy chủ web (Apache hoặc Nginx)

### Hướng Dẫn Cài Đặt

1. **Clone kho dự án**

   ```bash
   git clone https://github.com/username/project-name.git
   cd project-name
2. **Cài đặt các phụ thuộc**
composer install
3. **Cấu hình môi trường**
cp .env.example .env
4. **Nhập dữ liệu vào cơ sở dữ liệu**
php artisan migrate --seed
5. **Chạy máy chủ phát triển**
php -S localhost:8000 -t public
