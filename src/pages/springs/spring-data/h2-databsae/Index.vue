<template>
  <div class="tw-p-4 tw-mx-auto">
    <header>
      <h2 class="tw-text-center tw-text-4xl tw-font-bold">
        H2 database document tips
      </h2>
    </header>
    <main class="tw-p-5">
      <section>
        <h3 class="tw-text-lg tw-font-semibold">
          I. Hướng dẫn sử dụng H2 database trong Spring Boot
        </h3>
        <div class="content tw-px-2">
          <div class="path-one">
            <h4 class="tw-font-semibold">1. Cấu hình database</h4>
            <div class="description tw-px-3">
              <p>
                Mặc định Spring Boot sẽ cấu hình tự động cho H2 hoạt động trên
                memory với username là sa và một pa ssword rỗng.
              </p>
              <p>
                Tuy nhiên chúng ta có thể thay đổi các cấu hình mặc định này
                bằng cách thêm các thuộc tính sau vào file
                application.properties.
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.datasource.url=jdbc:h2:mem:bookdb;
                spring.datasource.driverClassName=org.h2.Driver
                spring.datasource.username=sa
                spring.datasource.password=password
                spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
              </ssh-pre>
            </div>
          </div>
          <div class="path-two">
            <h4 class="tw-font-semibold">2. H2 – file-based storage</h4>
            <div class="description tw-x-3">
              <p>
                Như đã đề cập ở trên thì mặc định H2 sẽ lưu dữ liệu trên memory,
                nếu các bạn không muốn dữ liệu bị mất sau mỗi lần khởi động lại
                thì chúng ta có thể cấu hình thông qua thuộc tính
                spring.datasource.url.
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.datasource.url = jdbc:h2:file:C:/data/sample
              </ssh-pre>
              <p>
                Để tạo table books trong H2 database, chúng ta có thể sử dụng
                chức năng của hibernate với cấu hình
                spring.jpa.hibernate.ddl-auto. Với cấu hình này Spring boot sẽ
                tự động phân tích Book entity và khởi tạo table tương ứng trong
                database.
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.jpa.hibernate.ddl-auto=create-drop
              </ssh-pre>
              <p class="tw-font-semibold">
                Lưu ý sau lần đầu khởi chạy, database đã được khởi tạo thì hãy
                tắt cấu hình này đi nhé. Nếu không ở lần sau khởi chạy nó sẽ tự
                động xóa và khởi tạo database mới đồng nghĩa với việc dữ liệu ở
                những lần trước của bạn sẽ bị biến mất.
              </p>
              <p>
                Một cách khác các bạn có thể định nghĩa các file schema.sql và
                data.sql đặt trong src/main/resources/. Trong đó schema.sql được
                dùng để khởi tạo cấu trúc các bảng, data.sql dùng để thêm dữ
                liệu. Spring Boot sẽ tự động tìm kiếm và thực thi chúng.<br />
                Tuy nhiên để những file này chắc chắn được thực thi, chúng ta
                cần thêm các cấu hình sau vào file application.propertites.
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.jpa.hibernate.ddl-auto=none
                spring.datasource.initialization-mode=always
              </ssh-pre>
              <p class="tw-font-semibold">
                Lưu ý sau lần đầu được khởi chạy, các bạn phải tắt cấu hình
                spring.datasource.initialization-mode=always nếu không thì dữ
                liệu cũ cũng sẽ bị xóa ở lần khởi chạy sau.
              </p>
            </div>
          </div>
          <div class="path-three">
            <h4 class="tw-font-semibold">3. H2 Console</h4>
            <div class="description tw-px-3">
              <p>
                Để hiển thị UI h2-database: (URL:
                <span class="tw-text-blue-500"
                  >http://localhost:8080/h2-console</span
                >)
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.h2.console.enabled=true
              </ssh-pre>
              <p>
                Ngoài ra cũng có một số cấu hình đươc khuyên nên sử dụng để tăng
                tính bảo mật cho h2 database
              </p>
              <ssh-pre
                language="js"
                label="Javascript"
                copy-button
                @copied="onCopiedDoSomething"
              >
                <template #copy-button>
                  <i class="icon material-icons">material-icons content_copy</i>
                </template>
                spring.h2.console.path=/h2-console
                spring.h2.console.settings.trace=false
                spring.h2.console.settings.web-allow-others=false
              </ssh-pre>
              <p class="tw-font-semibold">
                Thuộc tính spring.h2.console.settings.trace=false để ngăn chặn
                các dấu vết của database xuất ra bên ngoài và
                spring.h2.console.settings.web-allow-other tắt tính năng kết nối
                từ xa đến database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
export default defineComponent({
  components: { SshPre },
  setup() {},
});
</script>
