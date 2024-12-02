<?php
    include('../config.db.php');  // นำไฟล์เชื่อมต่อกับฐานข้อมูลมาใช้
    $table = "CREATE TABLE orders(
    id int(6) AUTO_INCREMENT COMMENT 'รหัสการสั่งอาหาร',
    menu varchar(100) COMMENT 'รายการอาหาร',
    price varchar(100) COMMENT 'เส้นก๋วยเตี๋ยว',
    created_at TIMESTAMP NOT NULL COMMENT 'วันที่ทำรายการ',
    PRIMARY KEY (id)
    )";

    if($conn->query($table) === TRUE){
        echo "สร้างตารางสำเร็จ";
    }else{
        echo "สร้างตารางไม่สำเร็จ" .$conn->error;
    }
    $conn->close();
?>