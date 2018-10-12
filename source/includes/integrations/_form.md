# เชื่อมต่อแบบ Form {{id:integration-form}}

> ![Form Integration Flow](./images/doc-form-flow.png)

ท่านสามารถใช้ฟอร์มสำเร็จรูปสำหรับเริ่มการสั่งซื้อประกันภัยได้ทันที โดยวิธีนี้จะสามารถทำได้ง่ายที่สุด แต่ผู้ซื้อจำเป็นต้องกรอกข้อมูลในการสั่งซื้อทั้งหมดด้วยตนเอง

การเชื่อมต่อในส่วนนี้จะประกอบด้วย 3 ขั้นตอน คือ

1. ส่งผู้ใช้ไปยังฟอร์มสำเร็จรูป
2. รับ callback หลังกรอกข้อมูลเสร็จสิ้น
3. เรียก API `POST /applications/confirm` ยืนยันการสั่งซื้อจากเซิร์ฟเวอร์

## 1. ส่งผู้ใช้ไปยังหน้าเว็บฟอร์ม {{id:integration-form-1}}

> ตัวอย่างโค้ด HTML ซึ่งเป็นลิงก์สำหรับการสั่งซื้อ

```html
  <a href="https://form.acrosure.com/?token=<YOUR_PUBLIC_TOKEN>&productId=prod_ta">สั่งซื้อประกันภัย</a>
```

สำหรับส่งผู้ใช้ไปสั่งซื้อประกันด้วยฟอร์มสำเร็จรูป สามารถทำได้ดังนี้

1. เข้าไปที่หน้า Products ในแดชบอร์ด จากนั้นเลือก Product ที่ต้องการสั่งซื้อ
2. คัดลอก URL สำหรับ redirect ผู้ใช้ไปยังแบบฟอร์มสั่งซื้อประกันภัย ไปใช้ได้ทันที โดยสร้างเป็นลิงก์หรือปุ่มด้วย HTML เพื่อส่งผู้ใช้ไปยังหน้าแบบฟอร์มดังกล่าว

<aside class="warning">
ห้ามใช้ Secret Token ใน URL ของฟอร์มสำเร็จรูปเด็ดขาด 
</aside>

## 2. รับ callback {{id:integration-form-2}}

> การเรียก callback จะส่ง Application ID มาผ่าน URL ในส่วนคิวรีสตริง โดยมีรูปแบบดังนี้

```
https://example.com/dhipaya/callback?applicationId=appl_SAMPLE01
```

> ให้นักพัฒนาเก็บ `applicationId` ไว้ จากนั้นนำผู้ใช้ไปดำเนินการชำระเงิน ก่อนจะยืนยันการสั่งซื้อในขั้นตอนสุดท้าย

เมื่อผู้ใช้กรอกข้อมูลการสั่งซื้อเสร็จสิ้น ผู้ใช้จะถูก redirect กลับมาที่เว็บไซต์ของนักพัฒนา เพื่อดำเนินการชำระเงินให้เสร็จสิ้น ก่อนจะยืนยันการสั่งซื้อประกันภัยเป็นขั้นตอนสุดท้าย

อย่างไรก็ตาม หากยังไม่ได้กำหนดหน้า callback ไว้ เบื้องต้นระบบจะ redirect ไปยังหน้าตัวอย่าง เพื่อให้ผู้พัฒนาพัฒนาหน้านี้ต่อไป

ท่านสามารถระบุ URL ของหน้าที่จะใช้เป็น callback ได้ โดยเข้าไปที่เมนู API Keys จากแดชบอร์ด

## 3. ยืนยันการสั่งซื้อ {{id:integration-form-3}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_SECRET_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/confirm;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_SECRET_TOKEN>" });
const response = await client.application.confirm("appl_SAMPLE01");
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.resource.Policy;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_SECRET_TOKEN>");

    try {
      Application application = client.application().get("appl_SAMPLE01");
      Policy[] policies = client.application().confirm(application);
    } catch (IOException e) {
      e.printStackTrace();
    } catch (AcrosureException e) {
      System.out.println(e.getMessage() + ", " + e.getStatusCode());
      e.printStackTrace();
    }
  }
}
```

```python
# Python Code
```

```csharp
// CSharp Code
```

```swift
// Not supported for Client-side
```

> ตัวอย่าง Response Body

```json
{
  "status": "ok",
  "data": [
    {
      "id": "plcy_SAMPLE01",
      "application_id": "appl_SAMPLE01",
      ...
    },
    {
      "id": "plcy_SAMPLE02",
      "application_id": "appl_SAMPLE01",
      ...
    }
  ]
}
```

เมื่อผู้ใช้กรอกข้อมูลการสั่งซื้อประกันภัยเรียบร้อยแล้ว ผู้ใช้จะถูก redirect กลับมาที่เว็บไซต์ของผู้พัฒนา พร้อมกับ Application ID เพื่อให้ผู้พัฒนาได้ดำเนินการชำระเงินให้เรียบร้อย

เมื่อชำระเงินเสร็จสิ้นแล้ว ผู้พัฒนาจำเป็นต้องเรียก API `POST /applications/confirm` เพื่อยืนยันการสั่งซื้อ API
