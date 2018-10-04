# การเชื่อมต่อแบบ Hybrid

เพื่อให้ผู้ใช้ตัดสินใจสั่งซื้อประกันภัยได้อย่างรวดเร็วยิ่งขึ้น ท่านสามารถสร้างลิงก์สำหรับสั่งซื้อเฉพาะสำหรับผู้ซื้อรายนั้นๆ เพื่อให้ท่านสามารถกรอกข้อมูลบางส่วนที่ทราบอยู่แล้วให้ผู้ใช้ได้ทันที ก่อนที่จะ redirect ผู้ใช้ไปยังหน้าสั่งซื้อต่อไป

ขั้นตอนในการสร้างและกรอกฟอร์มล่วงหน้ามีดังนี้

1. ดูรายละเอียดของฟอร์มที่ต้องกรอกจากแดชบอร์ด
2. เรียก API `POST /applications/create` เพื่อสร้างฟอร์ม
3. สร้าง URL ของฟอร์มและ redirect ผู้ใช้ไปที่ฟอร์มตามปกติ

## 1. ดูรายละเอียดของฟอร์มที่ต้องกรอกจากแดชบอร์ด

ท่านสามารถดู product_id รายละเอียดฟอร์มที่ต้องกรอกได้จากหน้า Product ในแดชบอร์ด
โดยสามารถดูโครงสร้างข้อมูลของฟอร์มได้จากหัวข้อ Form Schema และดูตัวอย่างข้อมูลทดสอบได้จากหัวข้อ Sample Form Data

## 2. สร้างฟอร์มโดยใส่ข้อมูลบางส่วน

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_motor","form_data":{"vehicle_type":"110","register_year":2017,"brand_name":"HONDA","model_name":"CITY","spec_name":"S CNG AT"}}' \
  https://api.preseer.com/applications/create;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
const response = await client.application.create({
  product_id: "prod_motor",
  basic_data: {
    brand_name: "HONDA",
    model_name: "CITY",
    spec_name: "S CNG AT",
    vehicle_type: "110",
    register_year: 2017
  }
});
```

```java
// Java Code
```

```python
# Python Code
```

```csharp
// CSharp Code
```

```swift
// Swift Code
```

> ตัวอย่าง Request Body

```json
{
  "product_id": "prod_ta",
  "form_data": {
    "brand_name": "HONDA",
    "model_name": "CITY",
    "spec_name": "S CNG AT",
    "vehicle_type": "110",
    "register_year": 2017
  }
}
```

> ตัวอย่าง Response Body

```json
{
  "status": "ok",
  "data": {
    "id": "appl_SAMPLE01",
    ...
  }
}
```

เรียก API `POST /applications/create` โดยส่ง product_id ตามที่ปรากฎในแดชบอร์ด และระบุ form_data ที่ต้องการกรอกให้ผู้ใช้ล่วงหน้า

ทั้งนี้การเรียก API ในส่วนนี้สามารถเรียกจากเซิฟเวอร์ หรือเรียกจากไคลเอนต์ด้วย JavaScript ก็ได้เช่นกัน

<aside class="notice">
สังเกตว่าผลการตอบกลับของ API นี้อาจจะมี <code>error_fields</code> ซึ่งเป็นพฤติกรรมปกติ เนื่องจากฟอร์มยังไม่ถูกกรอกอย่างสมบูรณ์
</aside>

## 3. สร้าง URL ของฟอร์มและ redirect ผู้ใช้ไปที่ฟอร์มตามปกติ

> จากตัวอย่างนั้น URL ของฟอร์มจะเป็น

```
https://form.preseer.com/?token=tokn_sample_public&productId=prod_ta&applicationId=appl_SAMPLE01
```

URL ของฟอร์มที่กรอกแล้วนี้จะเหมือนกับ URL ของฟอร์มแบบสำเร็จรูป เพียงแต่เติมคิวรีสตริง `applicationId=appl_SAMPLE01` เข้าไป โดยนำ `application_id` จากผลในขั้นตอนที่แล้วมาใช้งาน

เมื่อ redirect ผู้ใช้ไปยัง URL ดังกล่าว ผู้ใช้จะพบกับฟอร์มที่กรอกข้อมูลไว้แล้ว และสามารถทำรายการที่เหลือต่อได้ตามปกติ เช่นเดียวกับการใช้ฟอร์มสำเร็จรูป

<aside class="warning">
ห้ามใช้ Secret Key ใน URL ของฟอร์มสำเร็จรูปเด็ดขาด 
</aside>
