# Applications API reference {{id:api-applications}}

Application คือใบคำสั่งซื้อกรมธรรม์ ซึ่งทางผู้ใช้งาน Acrosure สามารถจัดการกับข้อมูลภายในแบบฟอร์มการซื้อประกันได้อย่างอิสระ ก่อนที่จะขอออกกรมธรรม์กับทางบริษัทประกันภัย

ใบคำสั่งซื้อของประกันแต่ละประเภทจะมีโครงสร้างข้อมูลในแบบฟอร์มที่แตกต่างกัน คือฟิลด์ `basic_data`, `package_options` และ `additional_data` ซึ่งสามารถดูโครงสร้างข้อมูลแบบฟอร์มเหล่านี้ได้บน [Acrosure Dashboard](https://dashboard.acrosure.com)

## โครงสร้างข้อมูล Application {{id:api-applications-structure}}

> ตัวอย่างข้อมูล

```json
{
  "id": "appl_SAMPLE01",
  "form_data": {
    "email": "developer@example.com",
    "phone": "086161236",
    "id_card": "1489900087857",
    "card_type": "I",
    "countries": [
      "GERMANY",
      "JAPAN"
    ],
    "expiry_date": "2018-11-21T00:00:00Z",
    "policy_date": "2018-11-14T00:00:00Z",
    "policy_unit": "D",
    "company_name": "-",
    "insurer_list": [
      {
        "email": "developer@example.com",
        "phone": "0812345678",
        "title": "MR.",
        "address": {
          "moo": "2",
          "lane": "LAD PRAO 4",
          "alley": "",
          "street": "LAD PRAO",
          "village": "VILLAGE",
          "district": "Chatuchak",
          "province": "Bangkok",
          "address_no": "1",
          "postal_code": "10900",
          "subdistrict": "Chomphon",
          "minor_district": ""
        },
        "id_card": "1111111111119",
        "nominee": "",
        "birthdate": "1988-10-14T00:00:00Z",
        "card_type": "I",
        "last_name": "MUNGMARN",
        "first_name": "MANA",
        "relationship": ""
      },
      {
        "email": "developer@example.com",
        "phone": "0812345678",
        "title": "MR.",
        "address": {
          "moo": "2",
          "lane": "LAD PRAO 4",
          "alley": "",
          "street": "LAD PRAO",
          "village": "VILLAGE",
          "district": "Chatuchak",
          "province": "Bangkok",
          "address_no": "1",
          "postal_code": "10900",
          "subdistrict": "Chomphon",
          "minor_district": ""
        },
        "id_card": "1111111111119",
        "nominee": "MR. MANOCH MUNGMARN",
        "birthdate": "1988-12-31T00:00:00Z",
        "card_type": "I",
        "last_name": "MUNGMARN",
        "first_name": "MANEE",
        "relationship": "Brother/Sister"
      }
    ],
    "customer_title": "MR.",
    "start_province": "",
    "customer_last_name": "MUNGMARN",
    "customer_first_name": "MANA",
    "destination_provinces": null
  },
  "status": "EXPIRED",
  "paid": false,
  "amount": 1351,
  "amount_with_tax": 1452,
  "source": "PARTNER",
  "ref1": "",
  "ref2": "",
  "ref3": "",
  "insurer_package_code": "ITA0402",
  "insurer_package_name": "",
  "insurer_application_no": "",
  "package_data": null,
  "language": "EN",
  "display_id": "AP00010000001",
  "step": 0,
  "created_at": "2018-09-14T20:53:59.547879Z",
  "updated_at": "2018-09-23T15:57:11.5342Z",
  "expired_at": "2018-09-21T20:53:59.530746Z",
  "product_id": "prod_ta",
  "user_id": "user_SAMPLE",
  "team_id": "team_SAMPLE",
  "group_policy_id": "",
  "product_code": "",
  "product_name": "International Travel Insurance",
  "policy_ids": null,
  "created_by": "Sample Partner"
}
```

ข้อมูลภายในใบคำสั่งซื้อที่ได้คืนมาจากการเรียก API ต่างๆ โดยบางฟิลด์เป็นฟิลด์ที่ทาง Acrosure คำนวณมาให้ ไม่สามารถแก้ไขได้โดยตรง (เช่น ค่าเบี้ยประกัน หรือข้อความ error)

| Name              | Meaning                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| `id`              | รหัสของใบคำสั่งซื้อที่ใช้อ้างอิงในที่ต่างๆ                                                                  |
| `display_id`      | หมายเลขของใบคำสั่งซื้อ อยู่ในรูปแบบที่อ่านง่าย                                                              |
| `basic_data`      | ข้อมูลเบื้องต้นที่ต้องใช้ในการค้นหาแพคเกจ (ดูเพิ่มที่ [Acrosure Dashboard](https://dashboard.acrosure.com)) |
| `package_options` | ข้อมูลเพิ่มเติมที่ใช้ในการค้นหาแพคเกจ (ดูเพิ่มที่ [Acrosure Dashboard](https://dashboard.acrosure.com))     |
| `additional_data` | ข้อมูลรายละเอียดสำหรับการออกกรมธรรม์ (ดูเพิ่มที่ [Acrosure Dashboard](https://dashboard.acrosure.com))      |
| `package_code`    | รหัสแพคเกจที่เลือกซื้อ                                                                                      |
| `ref1`            | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 1                                                                        |
| `ref2`            | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 2                                                                        |
| `ref3`            | ข้อความสำหรับใช้ในการอ้างอิงอันที่ 3                                                                        |
| `status`          | สถานะของใบคำสั่งซื้อ ดูเพิ่มเติมได้ที่ [Application Status](#api-applications-status)                       |
| `paid`            | ค่าที่บ่งบอกสถานะการชำระเงินของใบคำสั่งซื้อ                                                                 |
| `net_premium`     | ค่าเบี้ยประกันเบื้องต้น                                                                                     |
| `gross_premium`   | ค่าเบี้ยประกันสุทธิ                                                                                         |
| `vat`             | ค่า VAT                                                                                                     |
| `duty`            | ค่าภาษีอากร                                                                                                 |
| `step`            | หมายเลข step ที่ใบคำสั่งซื้อนั้นกำลังดำเนินการอยู่ (ใช้ภายใน [Acosure Form](https://form.acrosure.com))     |
| `product_id`      | รหัสชนิดของ Product                                                                                         |
| `user_id`         | รหัสของผู้ใช้ที่สร้างใบคำสั่งซื้อนี้ (ถ้าใช้ API Token ของ Team จะไม่มีฟิลด์นี้)                            |
| `team_id`         | รหัสของทีมที่สร้างใบคำสั่งซื้อนี้ (ทีมของคุณนั่นเอง! 🎉)                                                    |
| `policy_ids`      | รายการรหัสของกรมธรรม์                                                                                       |
| `error_fields`    | รายการที่บอกว่าฟิลด์ในแบบฟอร์มฟิลด์ไหนยังไม่ถูกต้อง                                                         |
| `error_message`   | ข้อความที่แจ้งความไม่ถูกต้องต่างๆ เช่น มีฟิลด์ไม่ครบ ยังไม่เลือกแพคเกจ เป็นต้น                              |
| `created_at`      | เวลาที่สร้างใบคำสั่งซื้อนี้                                                                                 |
| `updated_at`      | เวลาที่อัพเดทใบคำสั่งซื้อล่าสุด                                                                             |
| `expired_at`      | เวลาที่ใบคำสั่งซื้อนี้จะหมดอายุ                                                                             |

## Status ของ Application {{id:api-applications-status}}

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

## /applications/get {{id:api-applications-get}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.get("appl_SAMPLE01");
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.get(id: "appl_SAMPLE01") { response in
  // ...
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

เรียกดูข้อมูลใบคำขอสั่งซื้อ

### HTTP Request

`POST https://api.acrosure.com/applications/get`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | รหัสของใบคำสั่งซื้อ |


## /applications/list {{id:api-applications-list}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.acrosure.com/applications/list;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.list() { response in
  // ...
}
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

| Name         | Required | Description                                    | Possible Values                                               |
| ------------ | -------- | ---------------------------------------------- | ------------------------------------------------------------- |
| `product_id` | No       | ชนิดของ Product                                |                                                               |
| `offset`     | No       | ตำแหน่งในลำดับของใบคำสั่งซื้อที่ต้องการเริ่มดู |
| `limit`      | No       | จำนวนสูงสุดของข้อมูลในรายการ                   |
| `order_by`   | No       | วิธีการจัดเรียงรายการ                          | `created_at`, `updated_at`                                    |
| `status`     | No       | สถานะของใบคำสั่งซื้อ                           | ดูเพิ่มเติมที่ [Application Status](#api-applications-status) |
| `query`      | No       | คำสั่ง Query                                   |

## /applications/create {{id:api-applications-create}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta","basic_data":{"countries":["GERMANY","JAPAN"],"policy_date":"2018-12-08","expiry_date":"2018-12-15","policy_unit":"D"}}' \
  https://api.acrosure.com/applications/create;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.create({
  product_id: "prod_ta",
  basic_data: {
    countries: [
        "GERMANY",
        "JAPAN"
    ],
    policy_date: "2018-12-08",
    expiry_date: "2018-12-15",
    policy_unit: "D"
  },
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.create(
  productId: "prod_ta",
  basicData: [
    "countries": ["GERMANY", "JAPAN"],
    "policy_date": "2018-12-08",
    "expiry_date": "2018-12-15",
    "policy_unit": "D",
  ]
) { response in
  // ...
}
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


## /applications/update {{id:api-applications-update}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01",,"basic_data":{"countries":["GERMANY","JAPAN"],"policy_date":"2018-12-08","expiry_date":"2018-12-15","policy_unit":"D"},"package_options":null,"additional_data":{"customer_title":"MR.","customer_first_name":"MANA","customer_last_name":"MUNGMARN","company_name":"-","card_type":"I","id_card":"1489900087857","email":"developer@example.com","phone":"","insurer_list":[{"title":"MR.","first_name":"MANA","last_name":"MUNGMARN","card_type":"I","id_card":"1489900087857","birthdate":"1988-10-14","email":"developer@example.com","phone":"0812345678","nominee":"","relationship":"","address":{"address_no":"1","moo":"2","village":"VILLAGE","alley":"","lane":"LAD PRAO 4","street":"LAD PRAO","minor_district":"","subdistrict":"Chomphon","district":"Chatuchak","province":"Bangkok","postal_code":"10900"}},{"title":"MR.","first_name":"MANEE","last_name":"MUNGMARN","card_type":"I","id_card":"1682086540364","birthdate":"1988-12-31","email":"developer@example.com","phone":"0812345678","nominee":"MR. MANOCH MUNGMARN","relationship":"Brother/Sister","address":{"address_no":"1","moo":"2","village":"VILLAGE","alley":"","lane":"LAD PRAO 4","street":"LAD PRAO","minor_district":"","subdistrict":"Chomphon","district":"Chatuchak","province":"Bangkok","postal_code":"10900"}}]}}' \
  https://api.acrosure.com/applications/update;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.update({
  application_id: 'appl_SAMPLE01',
  basic_data: {
    countries: [
      "GERMANY",
      "JAPAN"
    ],
    policy_date: "2018-12-08",
    expiry_date: "2018-12-15",
    policy_unit: "D"
  },
  package_options: null,
  additional_data: {
    ...
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.create(
  productId: "prod_ta",
  basicData: [
    "countries": ["GERMANY", "JAPAN"],
    "policy_date": "2018-12-08",
    "expiry_date": "2018-12-15",
    "policy_unit": "D",
    pack
  ],
  additionalData, ...
) { response in
  // ...
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
ไม่สามารถ update <code>package_code</code> โดยตรงได้ ต้องใช้ <a href="#api-applications-select-package">/applications/select-package</a> ในการเลือกแพคเกจ
</aside>

## /applications/get-packages {{id:api-applications-get-packages}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/get-packages;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.getPackages('appl_SAMPLE01');
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.getPackages(id: "appl_SAMPLE01") { response in
  // ...
}
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
ใบคำสั่งซื้อนั้นต้องไม่มี status เป็น <code>INITIAL</code> หรือก็คือต้องมี basic_data ที่ถูกต้อง
</aside>

## /applications/get-package {{id:api-applications-get-package}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/get-package;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.getPackage('appl_SAMPLE01');
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.getPackage(id: "appl_SAMPLE01") { response in
  // ...
}
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

## /applications/select-package {{id:api-applications-select-package}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01","package_code":"PACKAGE_SAMPLE_01"}' \
  https://api.acrosure.com/applications/select-package;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.selectPackage({
  application_id: 'appl_SAMPLE01',
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.selectPackage(id: "appl_SAMPLE01", packageCode: "PACKAGE_SAMPLE_01") { response in
  // ...
}
```

> ตัวอย่าง Response Body

```json
{
  "status": "ok",
  "data": {
    "id": "appl_SAMPLE01",
    "package_code": "PACKAGE_SAMPLE_01"
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

## /applications/submit {{id:api-applications-submit}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"application_id":"appl_SAMPLE01"}' \
  https://api.acrosure.com/applications/submit;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.application.submit('appl_SAMPLE01');
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.application.submit(id: "appl_SAMPLE01") { response in
  // ...
}
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
ชนิด complete_process ของ Product นั้นๆ ต้องเป็น <code>SUBMIT</code>
</aside>

## /applications/confirm {{id:api-applications-confirm}}

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
const response = await client.application.confirm('appl_SAMPLE01');
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

<aside class="warning">
API นี้ต้องการ Secret Token
</aside>

ยืนยันการสั่งซื้อ โดยจะได้กรมธรรม์ออกมา

### HTTP Request

`POST https://api.acrosure.com/applications/confirm`

### Request Body

| Name             | Required | Description         |
| ---------------- | -------- | ------------------- |
| `application_id` | **Yes**  | หมายเลขใบคำสั่งซื้อ |

<aside class="notice">
ชนิด complete_process ของ Product นั้นๆ ต้องเป็น <code>CONFIRM</code>
</aside>

<aside class="success">
การดาวน์โหลดกรมธรรม์อาจมีการล่าช้าเล็กน้อย โดยดูได้จาก status ของ Policy ที่ถ้าหากเป็น <code>COMPLETED</code> หมายถึงไฟล์นั้นสามารถใช้งานได้แล้ว
</aside>
