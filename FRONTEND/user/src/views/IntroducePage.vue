<template>
  <div class="page" style="position: relative; overflow: hidden;">
    <!-- Ảnh nền -->
    <div class="background-image"></div>

    <!-- Nội dung chính -->
    <div class="content-wrapper">
      <h1 class="title">GIỚI THIỆU</h1>
      <div class="text-container">
        <p class="lead">
          Du lịch Việt Nam được xác định là một ngành kinh tế mũi nhọn vì cho rằng đất nước Việt Nam có tiềm năng du lịch đa dạng và phong phú. 
          Năm 2019, ngành Du lịch Việt Nam lập kỳ tích lần đầu tiên đón 18 triệu lượt khách quốc tế, tăng 16,2% so với năm 2018. 
          Giai đoạn từ 2015-2019, lượng khách quốc tế đến Việt Nam đã tăng 2,3 lần từ 7,9 triệu lượt lên 18 triệu lượt, tốc độ tăng trưởng 
          bình quân đạt 22,7% mỗi năm. Việt Nam liên tục nằm trong nhóm những quốc gia có tốc độ tăng trưởng khách du lịch nhanh nhất thế giới. 
          Năm 2019, du lịch Việt Nam nhận giải thưởng Điểm đến di sản hàng đầu thế giới do World Travel Awards trao tặng, Điểm đến Golf tốt nhất thế giới 
          do World Golf Awards trao tặng. Cùng với đó, World Travel Awards cũng vinh danh Việt Nam là Điểm đến hàng đầu châu Á 2 năm liên tiếp 2018-2019, 
          Điểm đến văn hóa hàng đầu châu Á 2019, Điểm đến ẩm thực hàng đầu châu Á 2019.
          <br /><br />
          Tuy nhiên, ngành du lịch Việt Nam có những hạn chế như tỷ lệ khách quay trở lại thấp. Chi tiêu của khách du lịch quốc tế tại Việt Nam không cao, 
          trung bình hơn 1.000 USD cho một chuyến 9 ngày do sản phẩm du lịch của Việt Nam chưa hấp dẫn, thiếu gắn kết, các hoạt động giải trí, mua sắm, 
          chăm sóc khách chưa đa dạng, công tác xúc tiến quảng bá chưa thực sự hiệu quả do hạn chế về nguồn lực, cơ chế vận hành, chưa thành lập Văn phòng 
          xúc tiến du lịch ở nước ngoài, Quỹ hỗ trợ và phát triển du lịch chưa được vận hành và đi vào hoạt động; hạ tầng sân bay có xu hướng quá tải, 
          chưa đáp ứng được tốc độ tăng trưởng cao về số lượng khách du lịch; chính sách thị thực nhập cảnh còn hạn chế so với các điểm đến cạnh tranh 
          trực tiếp của du lịch Việt Nam như Thái Lan.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.page {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  padding: 40px 0;
  text-align: center;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://media.truyenhinhdulich.vn/upload/news/344_10_dia_danh_du_lich_nuc_tieng_o_yen_bai.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: -1;
}

.content-wrapper {
  max-width: 900px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 20px 30px;
  z-index: 1;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.text-container {
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .content-wrapper {
    max-width: 95%;
  }

  .title {
    font-size: 2rem;
  }

  .text-container {
    font-size: 1rem;
  }
}
</style>
