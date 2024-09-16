## Tạo repository (repo)

git init
=> nhánh chính: master

### git init -b main

=> Tạo repo local với nhánh chính có tên main

## git remote add origin + <url repo>

=> Liên kết repo local với repo remote

## ko đưa thư mục node_modules lên repo remote

=> Node_modules chiếm dung lượng rất là lớn
=> Node_modules có thể cài lại thông qua câu lệnh: npm i

### file .gitignore quy dinh những thư mục hay file ko được phép đẩy lên repo remote

=> .gitignore nằm ở thư mục root

### git status

=> Kiểm tra sự thay đổi giữa các file trong dự án

### git add

### git add . => dùng để thêm tất cả các file ở trong thư mục hiện tại vào staging

### git add -A => dùng để thêm tất cả các file ở trong dự án vào trong staging

=> Thêm 1 file vào trong cái staging
