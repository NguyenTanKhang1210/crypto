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

=> Thêm 1 file vào trong cái staging

### git add . => dùng để thêm tất cả các file ở trong thư mục hiện tại vào staging

### git add -A => dùng để thêm tất cả các file ở trong dự án vào trong staging

### git add <đường dẫn file> => Chỉ thêm file cụ thể vào trong staging

### working directory (file màu đỏ)

### staging (file màu xanh)

=> lúc này file đã sẵn sàng để đưa lên repo remote

### config git (chỉ chạy duy nhất 1 lần)

### git config --global user.name "name"

### git config --global user.email "abc@gmail"

### git commit -m "<message>"

=> dùng để gắn message vào trong những file đang ở staging được phép đưa lên repo remote
=> mỗi commit có 1 mã sha (id)

### git log

=> dùng để kiểm tra lịch sử commit

### git pull

=> pull code ở repo remote về local
