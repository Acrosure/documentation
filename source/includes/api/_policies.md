# Policies API reference {{id:api-policies}}

Policy คือกรมธรรม์ที่ได้ร้องขอไปทางบริษัทประกันภัย

## โครงสร้างข้อมูล Policy {{id:api-policies-structure}}

> ตัวอย่างข้อมูล

```json
{
    "id": "plcy_SAMPLE01",
    "effective_date": "2018-09-14T00:00:00Z",
    "expiry_date": "2018-09-28T00:00:00Z",
    "insurer_policy_code": "10001-101-100000001",
    "insurer_policy_url": "SAMPLE_INSURER_POLICY_URL",
    "policy_url": "SAMPLE_POLICY_URL",
    "amount": 1120.23,
    "amount_with_tax": 1204,
    "status": "COMPLETED",
    "insurer_id": "Q100000000000001",
    "first_name": "MANA",
    "last_name": "MUNGMUN",
    "email": "user@domain.com",
    "telephone": "0810000001",
    "download_at": "2018-09-14T11:39:34.445916Z",
    "created_at": "2018-09-14T11:38:33.600693Z",
    "confirmed_at": null,
    "application_id": "appl_SAMPLE01",
    "team_id": "team_sample",
    "user_id": "user_sample_partner",
    "product_id": "prod_ta",
    "form_data": {
        ...
    },
    "source": "PARTNER",
    "team_name": "Sample Team",
    "signed_policy_url": "https://storage.googleapis.com/acrosure-policy/sandbox/SAMPLE_SIGNED_URL",
    "application_display_id": "AP00010000001"
}
```

ข้อมูลภายใน Policy ที่ได้คืนมาจากการเรียก API ต่างๆ

| Name                  | Meaning                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                  | รหัสของ Policy ที่ใช้อ้างอิงในที่ต่างๆ                                                                                             |
| `effective_date`      | วันที่เอาประกัน                                                                                                                    |
| `expiry_date`         | วันที่สิ้นสุดการเอาประกัน                                                                                                          |
| `insurer_policy_code` | รหัสอ้างอิงกับทางบริษัทประกันภัย                                                                                                   |
| `insurer_policy_url`  | URL ไฟล์กรมธรรม์ของบริษัทประกันภัย                                                                                                 |
| `policy_url`          | URL ไฟล์กรมธรรม์ที่ Acrosure เก็บไว้ (ไม่สามารถเรียกดู URL นี้ตรงๆได้ ต้องผ่านการ Sign ก่อน ซึ่งจะอยู่ในฟิลด์ `signed_policy_url`) |
| `signed_policy_url`   | URL ไฟล์กรมธรรม์ที่สามารถดูได้                                                                                                     |
| `net_premium`         | ค่าเบี้ยประกันเบื้องต้น                                                                                                            |
| `gross_premium`       | ค่าเบี้ยประกันสุทธิ                                                                                                                |
| `vat`                 | ค่า VAT                                                                                                                            |
| `duty`                | ค่าภาษีอากร                                                                                                                        |
| `status`              | สถานะของไฟล์กรมธรรม์ ดูเพิ่มเติมได้ที่ [Policy Status](#status-policy)                                                             |
| `insurer_id`          | รหัสอ้างอิงบริษัทประกันภัย                                                                                                         |
| `first_name`          | ชื่อจริงของผู้ซื้อ                                                                                                                 |
| `last_name`           | นามสกุลของผู้ซื้อ                                                                                                                  |
| `email`               | อีเมล์ของผู้ซื้อ                                                                                                                   |
| `telephone`           | เบอร์โทรศัพท์ของผู้ซื้อ                                                                                                            |
| `application_id`      | รหัสใบคำสั่งซื้อ                                                                                                                   |
| `team_id`             | รหัสทีม                                                                                                                            |
| `team_name`           | ชื่อทีม                                                                                                                            |
| `user_id`             | รหัสผู้ใช้ที่สร้าง                                                                                                                 |
| `product_id`          | รหัสประกันภัย                                                                                                                      |
| `basic_data`          | ข้อมูลเบื้องต้นที่ต้องใช้ในการค้นหาแพคเกจ                                                                                          |
| `package_options`     | ข้อมูลเพิ่มเติมที่ใช้ในการค้นหาแพคเกจ                                                                                              |
| `additional_data`     | ข้อมูลรายละเอียดสำหรับการออกกรมธรรม์                                                                                               |
| `package_code`        | รหัสแพคเกจที่เลือก                                                                                                                 |
| `downloaded_at`       | เวลาที่ดาวน์โหลดไฟล์เสร็จสมบูรณ์                                                                                                   |
| `confirmed_at`        | เวลาที่ยืนยันการซื้อกรมธรรม์                                                                                                       |
| `created_at`          | เวลาที่สร้างกรมธรรม์นี้                                                                                                            |
| `updated_at`          | เวลาที่อัพเดทกรมธรรม์ล่าสุด                                                                                                        |
| `error_message`       | ข้อความบอก Error (ถ้ามี)                                                                                                           |

## Status ของ Policy {{id:api-policies-status}}

| Name                | Meaning                                                    |
| ------------------- | ---------------------------------------------------------- |
| `COMPLETED`         | ดาวน์โหลดไฟล์เรียบร้อยแล้ว                                 |
| `INSURER_COMPLETED` | ส่งข้อมูลให้กับบริษัทประกันภัยเรียบร้อยแล้ว กำลังดาวน์โหลด |
| `CANCELED`          | กรมธรรม์ถูกยกเลิก                                          |


## /policies/get {{id:api-policies-get}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.acrosure.com/policies/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.policy.get('plcy_SAMPLE01');
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

> ตัวอย่าง Response Body

```json
{
  "status": "ok",
  "data": {
    "id": "prod_ta",
    ...
  }
}
```

เรียกดูข้อมูลกรมธรรม์

### HTTP Request

`POST https://api.acrosure.com/policies/get`

### Request Body

| Name        | Required | Description        |
| ----------- | -------- | ------------------ |
| `policy_id` | **Yes**  | รหัสกรมธรรม์ในระบบ |


## /policies/list {{id:api-policies-list}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.acrosure.com/policies/list;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.policy.list({
  product_id: "prod_ta"
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

> ตัวอย่าง Response Body

```json
{
  "status": "ok",
  "data": [
    {
      "id": "plcy_SAMPLE01",
      ...
    }, {
      "id": "plcy_SAMPLE02",
      ...
    }
  ]
}
```

เรียกดูรายการกรมธรรม์ 

### HTTP Request

`POST https://api.acrosure.com/policies/list`

### Request Body

| Name                   | Required | Description                                    | Possible Values                                |
| ---------------------- | -------- | ---------------------------------------------- | ---------------------------------------------- |
| `product_id`           | No       | ชนิดของ Product                                |                                                |  |
| `first_name`           | No       | ชื่อจริงของผู้ซื้อ                             |
| `last_name`            | No       | นามสกุลของผู้ซื้อ                              |
| `email`                | No       | อีเมล์ของผู้ซื้อ                               |
| `telephone`            | No       | เบอร์โทรศัพท์ของผู้ซื้อ                        |
| `offset`               | No       | ตำแหน่งในลำดับของกรมธรรม์ที่ต้องการเริ่มดู     |
| `limit`                | No       | จำนวนสูงสุดของข้อมูลในรายการ                   |
| `order_by`             | No       | วิธีการจัดเรียงรายการ                          | `created_at`, `updated_at`                     |
| `status`               | No       | สถานะของกรมธรรม์                               | ดูเพิ่มเติมที่ [Policy Status](#status-policy) |
| `basic_data`           | No       | ข้อมูลเบื้องต้นของใบคำสั่งซื้อ                 | เป็น String                                    |
| `package_options`      | No       | ข้อมูลเพิ่มเติมในการค้นหาแพคเกจของใบคำสั่งซื้อ | เป็น String                                    |
| `additional_data`      | No       | ข้อมูลสำหรับการออกกรมธรรม์ของใบคำสั่งซื้อ      | เป็น String                                    |
| `ref1`                 | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 1           |
| `ref2`                 | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 2           |
| `ref3`                 | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 3           |
| `insurer_policy_code`  | No       | รหัสอ้างอิงกับทางบริษัทประกันภัย               |
| `start_created_date`   | No       | วันเริ่มต้น ของช่วงวันที่สร้างกรมธรรม์         |
| `end_created_date`     | No       | วันสิ้นสุด ของช่วงวันที่สร้างกรมธรรม์          |
| `start_effective_date` | No       | วันเริ่มต้น ของช่วงวันที่เริ่มคุ้มครอง         |
| `end_effective_date`   | No       | วันสิ้นสุด ของช่วงวันที่เริ่มคุ้มครอง          |
| `start_expiry_date`    | No       | วันเริ่มต้น ของช่วงวันที่สิ้นสุดความคุ้มครอง   |
| `end_expiry_date`      | No       | วันสิ้นสุด ของช่วงวันที่สิ้นสุดความคุ้มครอง    |
| `query`                | No       | คำสั่ง Query                                   |
