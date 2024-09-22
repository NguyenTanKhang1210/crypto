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

### git push -u origin <tên nhánh>

=> đưa code lên repo remote
=> từ lần push code thứ 2: git push

### Đưa file từ staging về lại working

git reset
git restore -S . (Đưa tất cả các file đang ở staging về working)
git restore -S <url file> (chỉ đưa duy nhất file về working)

### git checkout <url file>

=> 1. Đưa 1 file đang dc chỉnh sửa về trạng thái trước đó

### git checkout -b <tên nhánh>

=> tương đương với 2 lệnh git branch + git switch

### git checkout <tên nhánh>

=> tương đương với lệnh git switch
=> dùng để chuyển qua <tên nhánh>

### branch

//dev => kiểm thử QA và Dev (dev)
// staging => QA kiểm thử 1 lần (staging)
//production => end user (main/release)

git branch <tên nhánh>
=> tạo ra 1 nhánh mới
=> nhánh mới sẽ chứa toàn bộ code của nhánh đang đứng

git branch -a or git branch
⇒ Liệt kê tất cả các branch đang có trong repo

git switch <tên nhánh>
=> Chuyển qua nhánh <tên nhánh>

git switch <tên nhánh>
=> Chuyển qua nhánh <tên nhánh>

### git pull

=> pull code ở repo remote về local

git pull --no-ff
=> fix lỗi git pull không được

git clone <url repo>
=> dùng để clone source code của 1 repo bất kì
