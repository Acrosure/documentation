---
title: Acrosure API Reference

language_tabs: # must be one of https://git.io/vQNgJ
  - shell: cURL
  - javascript: JavaScript
  - java: Java
  - python: Python
  - csharp: C# .NET
  - swift: Swift

toc_footers:
  - <a href='https://dashboard.acrosure.com/signup'>Sign Up for API Token</a>
  - <a href='https://github.com/lord/slate'>Documentation Powered by Slate</a>

includes:
  - getting-started
  - integrations/form
  - integrations/hybrid
  - integrations/api
  - integrations/api-advanced
  - api/applications
  - api/products
  - api/policies
  - api/data

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
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
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
   
2. Login เข้าสู่ Dashboard <a href="https://dashboard.acrosure.com/login" target="_blank">ได้ที่นี่</a>
   
3. Copy API Token มาใช้
  ![Copy API Token](./images/getting-api-key.png)
   
4. สามารถเริ่มทดลองเชื่อมต่อกับระบบ Sandbox ได้ทันที

<aside class="notice">
Secret Token สามารถใช้งานได้ทุก API ที่ Public Token สามารถเรียกได้ แต่ Secret Token มีไว้ใช้ใน Server เท่านั้น
</aside>