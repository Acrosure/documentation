# เชื่อมต่อแบบ API แบบง่าย {{id:integration-api}}

ในบางกรณี นักพัฒนาอาจต้องการกรอกฟอร์มด้วย API ทั้งหมด เช่น กรณีที่นักพัฒนาต้องการสร้างระบบช่วยขายประกันสำหรับตัวแทนจำหน่าย
โดยไม่ได้ให้ผู้ซื้อเป็นผู้กรอกข้อมูลเองโดยตรง เป็นต้น

ในกรณีดังกล่าว นักพัฒนาสามารถเรียก API เพื่อดำเนินการทั้งหมดได้ ดังนี้

1. ดูรายละเอียดของฟอร์มที่ต้องกรอกจากแดชบอร์ด
2. เรียกใช้ API `POST /applications/create` เพื่อกรอกข้อมูลภายในฟอร์ม
3. เรียกใช้ API `POST /applications/confirm` เพื่อยืนยันการสั่งซื้อ

## 1. ดูรายละเอียดของฟอร์ม {{id:integration-api-1}}

ท่านสามารถดู `product_id` รายละเอียดฟอร์มที่ต้องกรอกได้จากหน้า Product ในแดชบอร์ด
โดยสามารถดูโครงสร้างข้อมูลของฟอร์มได้จากหัวข้อ Form Schema และดูตัวอย่างข้อมูลทดสอบได้จากหัวข้อ Sample Form Data

## 2. สร้างใบคำสั่งซื้อ {{id:integration-api-2}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_motor","form_data":{"spec_name":"S CNG AT","brand_name":"HONDA","model_name":"CITY","vehicle_type":"110","register_year":2017}}' \
  https://api.acrosure.com/applications/create;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
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
  "product_id": "prod_motor",
  "basic_data": {
    "spec_name": "S CNG AT",
    "brand_name": "HONDA",
    "model_name": "CITY",
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
    "status": "READY",
    ...
  }
}
```

สร้างฟอร์มสั่งซื้อในลักษณะเดียวกันกับการสร้างฟอร์มแบบกรอกข้อมูลบางส่วน

<aside class="notice">
status ที่ได้อาจจะยังไม่เป็น <code>READY</code> หากข้อมูลยังไม่ถูกต้อง ซึ่งอาจต้องใช้ <a href="#api-applications-update">/applications/update</a> เพิ่มเติม
</aside>

## 3. ยืนยันการสั่งซื้อ {{id:integration-api-3}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/confirm;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
client.application.setId("appl_SAMPLE01");
const response = await client.application.confirm();
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
  "application_id": "appl_SAMPLE01"
}
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

ยืนยันการสั่งซื้อ เช่นเดียวกับการสั่งซื้อด้วยวิธีการอื่นๆ
