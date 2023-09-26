function printTriangleShape3(n) {
        // Dùng vòng lặp for từ 1 đến n để duyệt qua các hàng
        for (let i = 1; i <= n; i++) {
          // Dùng vòng lặp for từ 1 đến n để duyệt qua các cột
          for (let j = 1; j <= n; j++) {
            // Nếu i + j bằng n + 1, in ra ký tự *
            if (i + j == n + 1) {
              process.stdout.write("*");
            }
            // Ngược lại, in ra ký tự khoảng trắng
            else {
              process.stdout.write(" ");
            }
          }
          // Xuống dòng để in ra hàng tiếp theo
          console.log();
        }
      }
      
      // Ví dụ: in ra hình dạng 3 của tam giác với n = 5
      printTriangleShape3(5);
      