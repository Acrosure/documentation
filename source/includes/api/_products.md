# Products API reference {{id:api-products}}

Product คือประกันภัย โดยประกันภัยแต่ละประเภทจะต้องการข้อมูลสำหรับออกกรมธรรม์ที่แตกต่างกัน ดูเพิ่มเติมได้ที่ [Acrosure Dashboard](https://dashboard.acrosure.com)

## โครงสร้างข้อมูล Product {{id:api-products-structure}}

> ตัวอย่างข้อมูล

```json
{
  "id": "prod_ta",
  "name": "International Travel Insurance",
  "type": "ta_international",
  "insurer_product_code": "ta_international",
  "form_items": [
    {
      "key": "countries",
      "type": "ARRAY",
      "label": "ประเทศที่ต้องการไป",
      "required": true
    },
    ...
  ],
  "sample_form_data": {
    "countries": [
        "GERMANY",
        "JAPAN"
    ],
    ...
  },
  "language": "EN",
  "complete_process": "CONFIRM",
  "is_form_available": true,
}
```

ข้อมูลภายใน Product ที่ได้คืนมาจากการเรียก API ต่างๆ

| Name                   | Meaning                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                   | รหัสของ Product ที่ใช้อ้างอิงในที่ต่างๆ                                                                                                                                                                                                                                                                                                    |
| `name`                 | ชื่อของประกันภัย                                                                                                                                                                                                                                                                                                                           |
| `type`                 | ประเภทของประกันภัย                                                                                                                                                                                                                                                                                                                         |
| `insurer_product_code` | รหัสอ้างอิงของประกันภัยนี้กับบริษัทประกันภัย                                                                                                                                                                                                                                                                                               |
| `form_items`           | โครงสร้างข้อมูลของฟอร์มสำหรับ Application (ดูเพิ่มที่ [Acrosure Dashboard](https://dashboard.acrosure.com))                                                                                                                                                                                                                                |
| `sample_form_data`     | ตัวอย่างฟอร์มที่ถูกต้องของประกันภัยนั้นๆ                                                                                                                                                                                                                                                                                                   |
| `language`             | ภาษาของประกันภัยนั้น                                                                                                                                                                                                                                                                                                                       |
| `complete_process`     | วิธีการยืนยันออกกรมธรรม์ของประกันภัยนั้นๆ <br><li> ถ้าเป็น `SUBMIT`: ต้องใช้ [/applications/submit](#api-applications-submit) ในการยืนยันคำสั่งซื้อ และต้องรอทางบริษัทประกันภัยยืนยันอีกครั้ง <br> <li>ถ้าเป็น `CONFIRM`: ต้องใช้ [/applications/confirm](#api-applications-confirm) ในการยืนยันคำสั่งซื้อ และจะได้รับกรมธรรม์ออนไลน์ทันที |
| `is_form_available`    | ค่าที่บ่งบอกว่ามีฟอร์มสำเร็จรูปให้ใช้หรือไม่                                                                                                                                                                                                                                                                                               |

### โครงสร้างของ Form item {{id:api-products-form-items}}

Form item คือข้อมูลที่อยู่ภายใน `form_items` ของ Product ซึ่งจะมีรายละเอียดของฟิลด์แบบฟอร์มภายใน Application อยู่

| Name       | Meaning                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| `key`      | ชื่อฟิลด์ที่ต้องใช้ส่งไปใน Request Body                                                               |
| `type`     | ประเภทข้อมูลภายในฟิลด์                                                                                |
| `label`    | คำอธิบายของฟิลด์                                                                                      |
| `required` | ค่าที่บอกว่าฟิลด์นี้จำเป็นต้องกรอกหรือไม่                                                             |
| `handler`  | ค่าที่สามารถนำไปอ้างอิงใช้ในการเรียก API [/data/get](#api-data-get) เพื่อดูค่าที่เป็นไปได้ของฟิลด์นี้ |
| `values`   | ค่าที่เป็นไปได้ของฟิลด์นี้ (ถ้ามีกำหนด)                                                               |
| `fields`   | ฟิลด์ภายใน (ถ้ามี)                                                                                    |

## /products/get {{id:api-products-get}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"product_id":"prod_ta"}' \
  https://api.acrosure.com/products/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.product.get('prod_ta');
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Product;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    try {
      Product product = client.product().get("prod_ta");
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.product.get(id: "prod_ta") { response in
  // ...
}
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


## /products/list {{id:api-products-list}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '' \
  https://api.acrosure.com/products/list;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.product.list();
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Product;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    try {
      Product[] products = client.product().list();
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
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.product.list() { response in
  // ...
}
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