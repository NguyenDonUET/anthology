# Overview

# Development

# Documentation

## Interaction testing
- Actions cho phép log các sự kiện được kích hoạt bởi các tương tác của người dùng với component ví dụ click vào button, type in input
👍 Via storybook/test fn spy function -> log ra trong actions

- addon-interactions
+ play function: code chạy sau khi component rendered
+ canvas để find element 
+ userEvent: methods to interact with element
+ fn function: use as an arg value when writing your story(mock func)


## Visual testing : chromatic
- so sánh sự khác biệt giao diện qua từng commit
-  UI review.
Publish your Storybook again npx chromatic --project-token=chpt_0df6878fb6f4e42
Chromatic catch your changes.

- mỗi lần muốn test thì phải run publish again: nó sẽ up code hiện tại(dù chưa push lên git) lên server của nó(deploy), hiện những changes trên UI.

+ Storybook Publish
+ UI Tests Optional - You verified a UI change to confirm whether it was an update or a bug.
+ UI Review Optional - You gathered feedback from your team and got sign off to merge.
(cần install)

- Tích hợp CI/CD: thêm bước chromatic vào pipeline CI (GitHub Actions)
 để tự động test giao diện mỗi khi có pull request.
Nó sẽ Build Storybook → Gửi lên Chromatic → Kiểm tra visual changes.


- Visual tests only runs locally là gì?

# Addons

- chromatic

- Accessibility

