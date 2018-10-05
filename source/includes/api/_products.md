# Products API reference

Product คือประกันภัย โดยประกันภัยแต่ละประเภทจะต้องการข้อมูลสำหรับออกกรมธรรม์ที่แตกต่างกัน ดูเพิ่มเติมได้ที่ [Acrosure Dashboard](https://dashboard.acrosure.com)

## โครงสร้างข้อมูล Product

> ตัวอย่างข้อมูล

```json
{
  "id": "prod_ta",
  "name": "International Travel Insurance",
  "type": "ta_international",
  "insurer_product_code": "ta_international",
  "handler_id": "ta_international",
  "conditions": null,
  "form_items": [
    {
      "key": "countries",
      "type": "ARRAY",
      "label": "ประเทศที่ต้องการไป",
      "required_for_package": true
    },
    {
      "key": "policy_date",
      "type": "DATETIME",
      "label": "วันที่เริ่มคุ้มครอง",
      "required": true,
      "required_for_package": true
    },
    {
      "key": "expiry_date",
      "type": "DATETIME",
      "label": "วันที่หมดความคุ้มครอง",
      "required": true,
      "required_for_package": true
    },
    {
      "key": "policy_unit",
      "type": "TEXT",
      "label": "แบบประกัน (รายวัน/รายปี)",
      "handler": "travel_policy_unit",
      "values": [
        {
          "value": "D",
          "label": "เดินทางรายวัน"
        },
        {
          "value": "Y",
          "label": "เดินทางรายปี"
        }
      ]
    },
    {
      "key": "customer_title",
      "type": "TEXT",
      "label": "คำนำหน้าชื่อ",
      "required": true,
      "handler": "person_title"
    },
    {
      "key": "customer_first_name",
      "type": "TEXT",
      "label": "ชื่อ",
      "required": true
    },
    {
      "key": "customer_last_name",
      "type": "TEXT",
      "label": "นามสกุล",
      "required": true
    },
    {
      "key": "company_name",
      "type": "TEXT",
      "label": "ชื่อบริษัท",
      "required": true
    },
    {
      "key": "card_type",
      "type": "TEXT",
      "label": "ประเภทบัตร",
      "required": true,
      "handler": "id_card_type",
      "values": [
        {
          "value": "I",
          "label": "บัตรประชาชน"
        },
        {
          "value": "P",
          "label": "พาสปอร์ต"
        }
      ]
    },
    {
      "key": "id_card",
      "type": "TEXT",
      "label": "เลขบัตร",
      "required": true
    },
    {
      "key": "email",
      "type": "TEXT",
      "label": "อีเมล์",
      "required": true
    },
    {
      "key": "phone",
      "type": "TEXT",
      "label": "เบอร์โทรศัพท์",
      "required": true
    },
    {
      "key": "insurer_list",
      "type": "ARRAY",
      "label": "ผู้เอาประกันภัย",
      "fields": [
        {
          "key": "title",
          "type": "TEXT",
          "label": "คำนำหน้าชื่อ",
          "required": true,
          "handler": "person_title"
        },
        {
          "key": "first_name",
          "type": "TEXT",
          "label": "ชื่อ",
          "required": true
        },
        {
          "key": "last_name",
          "type": "TEXT",
          "label": "นามสกุล",
          "required": true
        },
        {
          "key": "card_type",
          "type": "TEXT",
          "label": "ประเภทบัตร",
          "required": true,
          "handler": "id_card_type",
          "values": [
            {
              "value": "I",
              "label": "บัตรประชาชน"
            },
            {
              "value": "P",
              "label": "พาสปอร์ต"
            }
          ]
        },
        {
          "key": "id_card",
          "type": "TEXT",
          "label": "เลขบัตร",
          "required": true
        },
        {
          "key": "birthdate",
          "type": "DATETIME",
          "label": "วันเกิด",
          "required": true
        },
        {
          "key": "email",
          "type": "TEXT",
          "label": "อีเมล์"
        },
        {
          "key": "phone",
          "type": "TEXT",
          "label": "เบอร์โทรศัพท์",
          "required": true
        },
        {
          "key": "nominee",
          "type": "TEXT",
          "label": "ผู้รับผลประโยชน์"
        },
        {
          "key": "relationship",
          "type": "TEXT",
          "label": "ความสัมพันธ์",
          "handler": "nominee_relationship",
          "values": [
            {
              "value": "ภรรยา",
              "label": "ภรรยา"
            },
            {
              "value": "สามี",
              "label": "สามี"
            },
            {
              "value": "บิดา",
              "label": "บิดา"
            },
            {
              "value": "มารดา",
              "label": "มารดา"
            },
            {
              "value": "พี่",
              "label": "พี่"
            },
            {
              "value": "น้อง",
              "label": "น้อง"
            },
            {
              "value": "บุตรสาว",
              "label": "บุตรสาว"
            },
            {
              "value": "บุตรชาย",
              "label": "บุตรชาย"
            },
            {
              "value": "อื่นๆ",
              "label": "อื่นๆ"
            }
          ]
        },
        {
          "key": "address,label:ที่อยู่",
          "type": "OBJECT",
          "label": "",
          "required": true,
          "fields": [
            {
              "key": "address_no",
              "type": "TEXT",
              "label": "เลขที่บ้าน",
              "required": true
            },
            {
              "key": "moo",
              "type": "TEXT",
              "label": "หมู่"
            },
            {
              "key": "village",
              "type": "TEXT",
              "label": "หมู่บ้าน/อาคาร"
            },
            {
              "key": "alley",
              "type": "TEXT",
              "label": "ตรอก"
            },
            {
              "key": "lane",
              "type": "TEXT",
              "label": "ซอย"
            },
            {
              "key": "street",
              "type": "TEXT",
              "label": "ถนน"
            },
            {
              "key": "minor_district",
              "type": "TEXT",
              "label": "กิ่งอำเภอ"
            },
            {
              "key": "subdistrict",
              "type": "TEXT",
              "label": "แขวง/ตำบล",
              "required": true
            },
            {
              "key": "district",
              "type": "TEXT",
              "label": "เขต/อำเภอ",
              "required": true
            },
            {
              "key": "province",
              "type": "TEXT",
              "label": "จังหวัด",
              "required": true,
              "handler": "province"
            },
            {
              "key": "postal_code",
              "type": "TEXT",
              "label": "รหัสไปรษณีย์",
              "required": true
            }
          ]
        }
      ]
    }
  ],
  "sample_form_data": {
    "countries": [
        "GERMANY",
        "JAPAN"
    ],
    "start_province": "",
    "destination_provinces": null,
    "policy_date": "2018-12-05T00:00:00Z",
    "expiry_date": "2018-12-12T00:00:00Z",
    "policy_unit": "D",
    "customer_title": "MR.",
    "customer_first_name": "MANA",
    "customer_last_name": "MUNGMARN",
    "company_name": "-",
    "card_type": "I",
    "id_card": "1489900087857",
    "email": "developer@example.com",
    "phone": "0111111111",
    "insurer_list": [
        {
            "title": "MR.",
            "first_name": "MANA",
            "last_name": "MUNGMARN",
            "card_type": "I",
            "id_card": "1489900087857",
            "birthdate": "1988-10-14T00:00:00Z",
            "email": "developer@example.com",
            "phone": "0812345678",
            "nominee": "",
            "relationship": "",
            "address": {
                "address_no": "1",
                "moo": "2",
                "village": "VILLAGE",
                "alley": "",
                "lane": "LAD PRAO 4",
                "street": "LAD PRAO",
                "minor_district": "",
                "subdistrict": "Chomphon",
                "district": "Chatuchak",
                "province": "Bangkok",
                "postal_code": "10900"
            }
        },
        {
            "title": "MR.",
            "first_name": "MANEE",
            "last_name": "MUNGMARN",
            "card_type": "I",
            "id_card": "1682086540364",
            "birthdate": "1988-12-31T00:00:00Z",
            "email": "developer@example.com",
            "phone": "0812345678",
            "nominee": "MR. MANOCH MUNGMARN",
            "relationship": "Brother/Sister",
            "address": {
                "address_no": "1",
                "moo": "2",
                "village": "VILLAGE",
                "alley": "",
                "lane": "LAD PRAO 4",
                "street": "LAD PRAO",
                "minor_district": "",
                "subdistrict": "Chomphon",
                "district": "Chatuchak",
                "province": "Bangkok",
                "postal_code": "10900"
            }
        }
    ]
  },
  "language": "EN",
  "handler_option": {
    "language": "TH",
    "agent_code": "CLEVERSE",
    "insurer_id": "Thip",
    "request_no": "Acrosure",
    "email_types": [
      "delivery",
      "confirmation"
    ],
    "agent_password": "!qaz@wsx"
  },
  "complete_process": "CONFIRM",
  "is_form_available": true,
  "config": null
}
```

ข้อมูลภายใน Product ที่ได้คืนมาจากการเรียก API ต่างๆ

| Name                   | Meaning                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | รหัสของ Product ที่ใช้อ้างอิงในที่ต่างๆ                                                                                                                                                                                                                                                                                                                           |
| `name`                 | ชื่อของประกันภัย                                                                                                                                                                                                                                                                                                                                                  |
| `type`                 | ประเภทของประกันภัย                                                                                                                                                                                                                                                                                                                                                |
| `insurer_product_code` | รหัสอ้างอิงของประกันภัยนี้กับบริษัทประกันภัย                                                                                                                                                                                                                                                                                                                      |
| `conditions`           | ?                                                                                                                                                                                                                                                                                                                                                                 |
| `form_items`           | โครงสร้างข้อมูลของฟอร์มสำหรับ Application (ดูเพิ่มที่ [Acrosure Dashboard](https://dashboard.acrosure.com))                                                                                                                                                                                                                                                       |
| `sample_form_data`     | ตัวอย่างฟอร์มที่ถูกต้องของประกันภัยนั้นๆ                                                                                                                                                                                                                                                                                                                          |
| `language`             | ภาษาของประกันภัยนั้น                                                                                                                                                                                                                                                                                                                                              |
| `complete_process`     | วิธีการยืนยันออกกรมธรรม์ของประกันภัยนั้นๆ <br><li> ถ้าเป็น `SUBMIT`: ต้องใช้ [/applications/submit](#applications-submit) ในการยืนยันคำสั่งซื้อ (หรือจ่ายผ่าน Payment Gateway) และต้องรอทางบริษัทประกันภัยยืนยันอีกครั้ง <br> <li>ถ้าเป็น `CONFIRM`: ต้องใช้ [/applications/confirm](#applications-confirm) ในการยืนยันคำสั่งซื้อ และจะได้รับกรมธรรม์ออนไลน์ทันที |
| `is_form_available`    | ค่าที่บ่งบอกว่ามีฟอร์มสำเร็จรูปให้ใช้หรือไม่                                                                                                                                                                                                                                                                                                                      |

### โครงสร้างของ Form item

Form item คือข้อมูลที่อยู่ภายใน `form_items` ของ Product ซึ่งจะมีรายละเอียดของฟิลด์แบบฟอร์มภายใน Application อยู่

| Name      | Meaning                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------- |
| `key`     | ชื่อฟิลด์ที่ต้องใช้ส่งไปใน Request Body                                                           |
| `type`    | ประเภทข้อมูลภายในฟิลด์                                                                            |
| `label`   | คำอธิบายของฟิลด์                                                                                  |
| `handler` | ค่าที่สามารถนำไปอ้างอิงใช้ในการเรียก API [/data/get](#data-get) เพื่อดูค่าที่เป็นไปได้ของฟิลด์นี้ |
| `values`  | ค่าที่เป็นไปได้ของฟิลด์นี้                                                                        |

## /products/get

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.acrosure.com/products/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
client.product.setId("prod_ta");
const response = await client.product.get();
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

เรียกดูข้อมูลประกันภัย และแบบฟอร์มของประกันภัยนั้นๆ

### HTTP Request

`POST https://api.acrosure.com/products/get`

### Request Body

| Name         | Required | Description   |
| ------------ | -------- | ------------- |
| `product_id` | **Yes**  | รหัสประกันภัย |


## /products/list

```shell
curl -X POST \
  --header "Authorization: Bearer tokn_sample_secret" \
  --header "Content-Type: application/json" \
  -d '' \
  https://api.acrosure.com/products/list;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "tokn_sample_secret" });
const response = await client.product.list();
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
      "id": "prod_ta",
      ...
    }, {
      "id": "prod_motor",
      ...
    }
  ]
}
```

เรียกดูรายการประกันภัย ที่ทีมของคุณสามารถใช้งานได้

### HTTP Request

`POST https://api.acrosure.com/products/list`

### Request Body

_None_