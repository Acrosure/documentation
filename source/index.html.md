---
title: Acrosure API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell: cURL
  - javascript: JavaScript
  - java: Java
  - python: Python
  - csharp: C# .NET
  - swift: Swift
  - php: PHP

toc_footers:
  - <a href='https://dashboard.acrosure.com/signup'>Sign Up for API Token</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - getting-started
  - sdk
  - integrations/form
  - integrations/hybrid
  - integrations/api
  - integrations/api-advanced
  - api/applications
  - api/products
  - api/policies
  - api/data
  - api/team
  - webhook

search: true
---

# เริ่มต้นใช้งาน {{id:getting-started}}

> การใช้งาน API Token คือการส่งไปใน Header ของ HTTP Request รูปแบบดังนี้:

```
Authorization: Bearer <YOUR_PUBLIC_TOKEN>
```

> ซึ่งตัวอย่างภายใน Documentation นี้ จะมีการส่ง API Token ไปด้วยทุกครั้ง ดังเช่นตัวอย่างด้านล่างนี้

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  https://api.acrosure.com/products/list;
```

```javascript
import AcrosureClient from '@acrosure/js-sdk'

const client = new AcrosureClient({ token: '<YOUR_PUBLIC_TOKEN>' })
const response = await client.product.list()
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Product;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>")
    Product[] products = client.product().list();
  }
}
```

```python
acrosure_client = AcrosureClient(token = '<YOUR_PUBLIC_TOKEN>')
products = acrosure_client.product.list()
```

```csharp
AcrosureClient AcrosureClient  = new AcrosureClient("<YOUR_PUBLIC_TOKEN>")
JObject products = await AcrosureClient.Product.List();
```

```swift
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.product.list() { response in
  // ...
}
```

```php
$acrosureClient = new AcrosureClient([ "token" => "<YOUR_PUBLIC_TOKEN>" ]);
$products = $acrosureClient->getProductManager()->getList();
```

> ตัวอย่างผลลัพธ์จากคำสั่งด้านบน

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

> ซึ่งผลลัพธ์ดังกล่าวก็คือรายการประกันภัยที่คุณสามารถทดลองใช้งานได้

ท่านสามารถเริ่มสมัครใช้งาน Acrosure เพื่อเริ่มทดลองเชื่อมต่อกับ Acrosure ได้อย่างง่ายๆ ดังนี้

1. ลงทะเบียนสร้าง Account Acrosure <a href="https://dashboard.acrosure.com/signup" target="_blank">ได้ที่นี่</a>

2. Login เข้าสู่ Dashboard <a href="https://dashboard.acrosure.com/" target="_blank">ได้ที่นี่</a>

3. Copy API Token มาใช้
   ![Copy API Token](./images/getting-api-key.png)
4. สามารถเริ่มทดลองเชื่อมต่อกับระบบ Sandbox ได้ทันที

<aside class="notice">
Secret Token สามารถใช้งานได้ทุก API ที่ Public Token สามารถเรียกได้ แต่ Secret Token มีไว้ใช้ใน Server เท่านั้น
</aside>

## การเลือกใช้งาน Public/Secret Token {{id:tokens-explained}}

Token ทั้งสองประเภทใช้ในการยืนยันตัวตนเมื่อเรียกใช้ API ของ Acrosure แต่จะมีสิทธิ์ในการเข้าถึงบาง API ไม่เหมือนกัน

### Public Token

สามารถเข้าถึง API ได้จำกัด โดยจะเป็น API ที่ไม่ส่งผลโดยตรงต่อการสร้างกรมธรรม์ (เช่น [/applications/confirm](#api-applications-confirm))

### Secret Token

สามารถเข้าถึง API ได้ทั้งหมด รวมถึงการเรียก API สำหรับสร้างกรมธรรม์ด้วย

### เหตุผลที่ต้องมี Token สองประเภท

จุดประสงค์ของ Public Token นั้น มีไว้เพื่อให้คุณสามารถนำไปใช้ในระบบของคุณที่เปิดให้ผู้ใช้ทั่วไปเข้าถึงได้ เช่น Website หรือ Mobile Application โดยถึงแม้มีผู้ใช้เจอ Public Token นี้ ก็ไม่สามารถนำไปเรียกใช้ API เพื่อสร้างกรมธรรม์เองได้

ส่วน Secret Token นั้น มีไว้เพื่อให้คุณนำไปใช้ในระบบของคุณที่บุคคลภายนอกไม่สามารถเข้าถึงได้ เช่น Backend ที่ใช้งานภายใน เพื่อการสร้างกรมธรรม์
