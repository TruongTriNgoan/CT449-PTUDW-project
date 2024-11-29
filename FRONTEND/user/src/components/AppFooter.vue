<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-dark text-light">
    <!-- Section: Links -->
    <section>
      <div class="container text-md-start pt-5 pb-4">
        <div class="row">
          <!-- Gọi cho chúng tôi -->
          <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
            <h6 class="text-uppercase fw-bold mb-4 text-danger">
              Gọi cho chúng tôi
            </h6>
            <p>
              <i class="fas fa-phone-alt me-3"></i> +84 942 474 202
            </p>
            <h6 class="text-uppercase fw-bold mb-4 text-danger">
              Email
            </h6>
            <p>
              <i class="fas fa-envelope me-3"></i> ngoanb2014590@student.ctu.edu.vn
            </p>
          </div>

          <!-- Giới thiệu -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Giới thiệu</h6>
            <p><a href="#!" class="text-reset">Câu chuyện của chúng tôi</a></p>
            <p><a href="#!" class="text-reset">Blog & Mẹo vặt du lịch</a></p>
            <p><a href="#!" class="text-reset">Làm việc cùng chúng tôi</a></p>
            <p><a href="#!" class="text-reset">Hợp tác với chúng tôi</a></p>
          </div>

          <!-- Hỗ trợ -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Hỗ trợ</h6>
            <p><a href="#!" class="text-reset">Hỗ trợ khách hàng</a></p>
            <p><a href="#!" class="text-reset">Chính sách & Bảo mật</a></p>
            <p><a href="#!" class="text-reset">Kênh liên lạc</a></p>
          </div>

          <!-- Thanh toán an toàn -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Thanh toán an toàn</h6>
            <p>Thanh toán được mã hóa và truyền tải an toàn với giao thức SSL.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright Section -->
    <section class="copyright-section text-light py-3">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Bản quyền -->
        <div class="copyright-text">
          © 2024 Travel Tour. Tất cả các quyền được bảo lưu.
        </div>
        <!-- Mạng xã hội -->
        <div class="social-icons">
          <span>Theo dõi chúng tôi trên</span>
          <a href="#" target="_blank" class="ms-3"><i class="fab fa-facebook" style="color: #ffffff;"></i></a>
          <a href="#" target="_blank" class="ms-3"><i class="fab fa-twitter" style="color: #ffffff;"></i></a>
          <a href="#" target="_blank" class="ms-3"><i class="fab fa-linkedin" style="color: #ffffff;"></i></a>
          <a href="#" target="_blank" class="ms-3"><i class="fab fa-pinterest-p" style="color: #ffffff;"></i></a>
          <a href="#" target="_blank" class="ms-3"><i class="fab fa-vimeo" style="color: #ffffff;"></i></a>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: #212529; /* Màu nền tối */
}

h6 {
  font-size: 16px;
}

p, a {
  font-size: 14px;
  color: #c4c4c4;
  text-decoration: none;
}

p a:hover {
  color: #fff;
  text-decoration: underline;
}

.text-danger {
  color: #ff4d4d !important; /* Màu đỏ cho tiêu đề */
}

img {
  height: 20px;
  width: auto;
}

.social-icons a {
  font-size: 16px;
  margin-right: 10px;
  text-decoration: none;
}

.social-icons a:hover {
  color: #ff4d4d; /* Thay đổi màu khi hover */
}

.copyright-text {
  font-size: 14px;
}

/* Phần Copyright Section (màu đậm hơn phần trên) */
.copyright-section {
  background-color: #181a1b; /* Màu đậm hơn */
}
</style>
