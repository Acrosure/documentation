# ระบบแจ้งเตือนด้วย Webhook {{id:webhook}}

ระบบแจ้งเตือนเป็นระบบที่ใช้สำหรับการแจ้งเตือนลูกค้าในกรณีที่เกิดเหตุการณ์ต่างๆ โดยระบบรองรับการแจ้งเตือนด้วย Webhook API เพื่อให้นักพัฒนาของบริษัท Partner ไปทำการพัฒนาระบบต่อ

นักพัฒนาจะต้องแจ้ง webhook URL ให้แก่ระบบ โดยเมื่อมีเหตุการณ์แจ้งเตือนเกิดขึ้น ระบบจะทำการส่ง POST Request ไปยัง webhook URL ที่นักพัฒนาได้แจ้งไว้

## โครงสร้าง Request ของ Webhook {{id:webhook-struct}}

### Request Header
| Name | Meaning |
| - | - |
| `Acrosure-Signature`| ข้อความที่ผ่านกระบวนการแฮชด้วยฟังก์ชัน HMAC โดยใช้ Secret Token เป็นกุญแจแฮช |

> ตัวอย่าง Request Body

```json
{
  "event_type": "RENEW_AVAILABLE",
  "policy_id": "plcy_SAMPLE01",
  "expiry_date": "2018-09-28T00:00:00Z",
  "premium": {
    "net_premium": 1000,
    "gross_premium": 4,
    "vat": 70.28,
    "duty": 1074.28
  }
}
```

> วิธีการตรวจสอบ Signature ว่ามาจาก Acrosure จริงหรือไม่ สามารถทำได้ดังนี้

```shell
echo -n '<raw_data>' | openssl dgst -sha256 -hmac "<YOUR_SECRET_TOKEN>"
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_SECRET_TOKEN>" });
const isSignatureValid = client.verifySignature(
  '<signature>',
  '<raw_data>'
)
```

```java
Acrosure client = new Acrosure("<YOUR_SECRET_TOKEN>");
Bool isSignatureValid = client.verifySignature("<signature>", "<raw_data>"));
```

```python
acrosure_client = AcrosureClient(token = '<YOUR_SECRET_TOKEN>')
is_signature_valid = acrosure_client.verify_webhook(
  signature = '<signature>',
  data = '<raw_data>'
)
```

```csharp
AcrosureClient AcrosureClient  = new AcrosureClient("<YOUR_SECRET_TOKEN>")
bool isSignatureValid = AcrosureClient.verifySignature(
  "<signature>",
  @"{'data':'<raw_data>'}"
);
```

```swift
// Not supported for Client-side
```

```php
$acrosureClient = new AcrosureClient([ "token" => "<YOUR_SECRET_TOKEN>" ]);
$isSignatureValid = $acrosureClient->verifySignature(
  "<signature>",
  "<raw_data>"
);
```

### Request Body
| Name          | Meaning                                                    |
| ------------- | ---------------------------------------------------------- |
| `event_type`  | ประเภทของ Event                                            |
| `policy_id`   | รหัสกรมธรรม์ในระบบ                                         |
| `expiry_date` | วันที่สิ้นสุดการรับประกัน                                  |
| `premium`     | ค่าเบี้ยประกัน(ปรากฎในกรณี Event ประเภท `RENEW_AVAILABLE`) |

### ประเภทของ Event

| Event             | Meaning                                                                                |
| ----------------- | -------------------------------------------------------------------------------------- |
| `NEAR_EXPIRY_7`   | policy ที่ถูกกล่าวถึงใน event กำลังจะหมดอายุในอีก 7 วัน                                |
| `NEAR_EXPIRY_3`   | policy ที่ถูกกล่าวถึงใน event กำลังจะหมดอายุในอีก 3 วัน                                |
| `EXPIRY`          | policy ที่ถูกกล่าวถึงใน event ได้หมดอายุแล้ว                                           |
| `RENEW_AVAILABLE` | policy ที่ถูกกล่าวถึงใน event สามารถทำการต่ออายุได้ โดยมีรายละเอียเพิ่มเติมมากับ event |

### โครงสร้างของ Premium

| Name            | Meaning                   |
| --------------- | ------------------------- |
| `net_premium`   | เบี้ยประกันสุทธิ          |
| `gross_premium` | ค่าเบี้ยประกันรวมภาษีอากร |
| `vat`           | ภาษีมูลค่าเพิ่ม           |
| `duty`          | ภาษีอากรสแตมป์            |



