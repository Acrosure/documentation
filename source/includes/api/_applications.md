# Applications API reference

## /applications/get

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.preseer.com/applications/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.applicaiton.setId("appl_SAMPLE01");
const response = await client.application.get();
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
    "id": "appl_SAMPLE01",
    ...
  }
}
```

เรียกดูข้อมูลใบคำขอสั่งซื้อ

### HTTP Request

`POST https://api.acrosure.com/applications/get`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | รหัสของใบคำสั่งซื้อ |


## /applications/list

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.preseer.com/applications/list;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
const response = await client.application.list({
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
      "id": "appl_SAMPLE01",
      "product_id": "prod_ta",
      ...
    }, {
      "id": "appl_SAMPLE02",
      "product_id": "prod_ta",
      ...
    }
  ]
}
```

เรียกดูรายการใบคำขอสั่งซื้อ โดยสามารถระบุเงื่อนไขเพิ่มเติมหรือไม่ก็ได้

### HTTP Request

`POST https://api.acrosure.com/applications/list`

### Request Body

| Name         | Required | Description                                    | Possible Values                              |
| ------------ | -------- | ---------------------------------------------- | -------------------------------------------- |
| `product_id` | No       | ชนิดของ Product                                |                                              |
| `offset`     | No       | ตำแหน่งในลำดับของใบคำสั่งซื้อที่ต้องการเริ่มดู |
| `limit`      | No       | จำนวนสูงสุดของข้อมูลในรายการ                   |
| `order_by`   | No       | วิธีการจัดเรียงรายการ                          | `created_at`, `updated_at`                   |
| `status`     | No       | สถานะของใบคำสั่งซื้อ                           | ดูเพิ่มเติมที่ [Status](#status-application) |
| `source`     | No       | ที่มาของใบคำสั่งซื้อ                           | `PARTNER`, `CUSTOMER`                        |
| `query`      | No       | คำสั่ง Query                                   |

## /applications/create

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '' \
  https://api.preseer.com/applications/create;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
const response = await client.application.create({

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
      "id": "appl_SAMPLE01",
      ...
    }, {
      "id": "appl_SAMPLE02",
      ...
    }
  ]
}
```

สร้างใบคำสั่งซื้อ โดยสามารถสร้างแบบข้อมูลไม่ครบไว้ก่อน แล้วนำไป update ในคราวหลังได้

โดยโครงสร้างข้อมูล `basic_data`, `package_options`, `additional_data` สามารถดูรายละเอียดได้ที่ Dashboard ภายใน Product นั้นๆ

### HTTP Request

`POST https://api.acrosure.com/applications/create`

### Request Body

| Name              | Required | Description                                   |
| ----------------- | -------- | --------------------------------------------- |
| `product_id`      | **Yes**  | ชนิดของ Product                               |
| `basic_data`      | No       | ข้อมูลเบื้องต้นที่ต้องใช้ในการค้นหาแพคเกจ     |
| `package_options` | No       | ข้อมูลเพิ่มเติมที่ใช้ในการค้นหาแพคเกจ (ถ้ามี) |
| `additional_data` | No       | ข้อมูลรายละเอียดสำหรับการออกกรมธรรม์          |
| `package_code`    | No       | รหัสแพคเกจที่ต้องการเลือกซื้อ                 |
| `ref1`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 1          |
| `ref2`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 2          |
| `ref3`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 3          |


## /applications/update

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '' \
  https://api.preseer.com/applications/update;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
const response = await client.application.update({

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
      "id": "appl_SAMPLE01",
      ...
    }, {
      "id": "appl_SAMPLE02",
      ...
    }
  ]
}
```

อัพเดทใบคำสั่งซื้อ โดยสามารถอัพเดทแบบข้อมูลไม่ครบเพื่อเป็นการบันทึกไว้ก่อน แล้วนำไป update ในคราวหลังได้

โดยโครงสร้างข้อมูล `basic_data`, `package_options`, `additional_data` สามารถดูรายละเอียดได้ที่ Dashboard ภายใน Product นั้นๆ

### HTTP Request

`POST https://api.acrosure.com/applications/update`

### Request Body

| Name              | Required | Description                                   |
| ----------------- | -------- | --------------------------------------------- |
| `basic_data`      | No       | ข้อมูลเบื้องต้นที่ต้องใช้ในการค้นหาแพคเกจ     |
| `package_options` | No       | ข้อมูลเพิ่มเติมที่ใช้ในการค้นหาแพคเกจ (ถ้ามี) |
| `additional_data` | No       | ข้อมูลรายละเอียดสำหรับการออกกรมธรรม์          |
| `ref1`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 1          |
| `ref2`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 2          |
| `ref3`            | No       | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 3          |

<aside class="warning">
ไม่สามารถ update <code>package_code</code> โดยตรงได้ ต้องใช้ <a href="#applications-select-package">/applications/select-package</a> ในการเลือกแพคเกจ
</aside>

## /applications/get-packages

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.preseer.com/applications/get-packages;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
const response = await client.application.getPackages();
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
      "package_code": "PACKAGE_SAMPLE_01",
      ...
    }, {
      "package_code": "PACKAGE_SAMPLE_02",
      ...
    }
  ]
}
```

เรียกดูแพคเกจทั้งหมดที่ใบคำสั่งซื้อนั้นสามารถซื้อได้

### HTTP Request

`POST https://api.acrosure.com/applications/get-packages`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |

<aside class="notice">
ใบคำสั่งซื้อนั้นต้องไม่มี <code>status</code> เป็น <code>INITIAL</code> หรือก็คือต้องมี <code>basic_data</code> ที่ถูกต้อง
</aside>

## /applications/get-package

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.preseer.com/applications/get-package;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
const response = await client.application.getPackage();
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
    "package_code": "PACKAGE_SAMPLE_01",
    ...
  }
}
```

ดูแพคเกจที่ใบคำสั่งซื้อนั้นเลือกอยู่

### HTTP Request

`POST https://api.acrosure.com/applications/get-package`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |

## /applications/select-package

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01","package_code":"PACKAGE_SAMPLE_01"}' \
  https://api.preseer.com/applications/select-package;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
const response = await client.application.selectPackage({
  package_code: 'PACKAGE_SAMPLE_01'
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
  "data": {
    "id": "appl_SAMPLE01",
    ...
  }
}
```

เลือกแพคเกจสำหรับใบคำสั่งซื้อ

### HTTP Request

`POST https://api.acrosure.com/applications/select-package`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |
| `package_code`   | **Yes**  | หมายเลขแพคเกจ       |

## /applications/submit

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.preseer.com/applications/submit;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
const response = await client.application.submit();
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
    "id": "appl_SAMPLE01",
    "status": "SUBMITTED",
    ...
  }
}
```

ส่งคำขอไปยังบริษัทประกันภัย เพื่อขอคำยืนยันการสั่งซื้อและให้ทางบริษัทออกกรมธรรม์

### HTTP Request

`POST https://api.acrosure.com/applications/submit`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |

<aside class="notice">
ชนิด <code>complete_process</code> ของ Product นั้นๆ ต้องเป็น <code>SUBMIT</code>
</aside>

## /applications/confirm

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.preseer.com/applications/confirm;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.application.setId('appl_SAMPLE01')
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

ยืนยันการสั่งซื้อ โดยจะได้กรมธรรม์ออกมา

### HTTP Request

`POST https://api.acrosure.com/applications/confirm`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |

<aside class="notice">
ชนิด <code>complete_process</code> ของ Product นั้นๆ ต้องเป็น <code>CONFIRM</code>
</aside>

<aside class="success">
การดาวน์โหลดกรมธรรม์อาจมีการล่าช้าเล็กน้อย โดยดูได้จาก <code>status</code> ของ Policy ที่ถ้าหากเป็น <code>COMPLETED</code> หมายถึงไฟล์นั้นสามารถใช้งานได้แล้ว
</aside>

## รายการ Status ของ Application

| Name                     | Meaning                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `INITIAL`                | ข้อมูลเบื้องต้น (`basic_data`) ยังไม่ครบ                                                                                                   |
| `PACKAGE_REQUIRED`       | ข้อมูลเบื้องต้นถูกต้องแล้ว แต่ยังไม่มี `package_code` หรือ มี `package_code` แล้ว แต่ข้อมูลใบคำสั่งซื้อที่มีไม่สามารถเลือกแพคเกจนั้นได้อีก |
| `DATA_REQUIRED`          | ข้อมูลเบื้องต้นถูกต้องและเลือกแพคเกจแล้ว แต่ข้อมูลสำหรับการออกกรมธรรม์ยังไม่ถูกต้อง                                                        |
| `READY`                  | ข้อมูลครบถ้วน และเลือกแพคเกจแล้ว พร้อมสำหรับการร้องขอกรมธรรม์                                                                              |
| `CONFIRMING`             | กำลังยืนยันใบคำสั่งซื้อ                                                                                                                    |
| `ONLINE_PAYMENT_PENDING` | รอการชำระเงินผ่านช่องทางออนไลน์                                                                                                            |
| `POLICY_PENDING`         | กำลังรอกรมธรรม์ดาวน์โหลด                                                                                                                   |
| `CANCELLED`              | ใบคำสั่งซื้อถูกยกเลิก                                                                                                                      |
| `COMPLETED`              | ใบคำสั่งซื้อเสร็จสมบูรณ์                                                                                                                   |
| `SUBMITTED`              | กำลังรอทางบริษัทประกันภัยยืนยันและออกกรมธรรม์ให้                                                                                           |
| `TENTATIVELY_ACCEPTED`   | เกิดปัญหาจากทางบริษัทประกันภัย แต่ Acrosure ถือว่าใบคำสั่งซื้อสมบูรณ์แล้ว  และจะดำเนินการต่อให้                                            |
| `EXPIRED`                | ใบคำสั่งซื้อหมดอายุ                                                                                                                        |