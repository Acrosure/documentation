# เชื่อมต่อแบบ API แบบหลายขั้นตอน {{id:integration-api-advanced}}

> ![API Advanced Integration Flow](./images/doc-api-advanced-flow.png)

บางครั้ง การเชื่อมต่อแบบ API อาจไม่ได้จบด้วยการใช้ `POST /applications/create` เพียงครั้งเดียว แต่อาจผ่านการใส่ข้อมูลทีละส่วนจนกว่าจะสมบูรณ์

ในกรณีดังกล่าว มีตัวอย่างในการทำงานดังนี้ ดังนี้

1. ดูรายละเอียดของฟอร์มที่ต้องกรอกจากแดชบอร์ด
2. เรียกใช้ API `POST /applications/create` เพื่อสร้างใบคำสั่งซื้อและใส่ข้อมูลเบื้องต้น
3. เรียกใช้ API `POST /applications/get-packages` เพื่อดูแพคเกจที่สามารถเลือกได้
4. เรียกใช้ API `POST /applications/select-package` เพื่อเลือกแพคเกจที่ต้องการ
5. เรียกใช้ API `POST /applications/update` เพื่อใส่ข้อมูลที่เหลือให้สมบูรณ์
6. เรียกใช้ API `POST /applications/confirm` เพื่อยืนยันการสั่งซื้อ

## 1. ดูรายละเอียดของฟอร์ม {{id:integration-api-advanced-1}}

ท่านสามารถดู `product_id` รายละเอียดฟอร์มที่ต้องกรอกได้จากหน้า Product ในแดชบอร์ด
โดยสามารถดูโครงสร้างข้อมูลของฟอร์มได้จากหัวข้อ Form Schema และดูตัวอย่างข้อมูลทดสอบได้จากหัวข้อ Sample Form Data

## 2. สร้างใบคำสั่งซื้อ {{id:integration-api-advanced-2}}

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
    countries: ["GERMANY", "JAPAN"],
    policy_date: "2018-12-08",
    expiry_date: "2018-12-15",
    policy_unit: "D"
  }
});
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.form.ApplicationCreateForm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ArrayNode;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>")
    ObjectMapper mapper = new ObjectMapper();
    ObjectNode basicData = mapper.createObjectNode();

    ArrayNode countries = basicData.putArray("countries");
    countries.add("GERMANY");
    countries.add("JAPAN");

    basicData.put("policy_date", "2018-12-08");
    basicData.put("expiry_date", "2018-12-15");
    basicData.put("policy_unit", "D");

    ApplicationCreateForm createForm = new ApplicationCreateForm();
    createForm.setBasicData(basicData);

    try {
      Application application = client.application().create(createForm);
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

```php
// PHP Code
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

สร้างฟอร์มสั่งซื้อพร้อมกรอกข้อมูลบางส่วน `POST /applications/create`

## 3. ดูแพคเกจที่สามารถซื้อได้ {{id:integration-api-advanced-3}}

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
const response = await client.application.getPackages("appl_SAMPLE01");
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.resource.Package;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    try {
      Application application = client.application().get("appl_SAMPLE01");
      Package[] packages = client.application().getPackages(application);
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
client.application.getPackages(id: "appl_SAMPLE01") { response in
  // ...
}
```

```php
// PHP Code
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

ดูรายการแพคเกจที่สามารถซื้อได้ `POST /applications/get-packages`

## 4. เลือกแพคเกจ {{id:integration-api-advanced-4}}

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
  application_id: "appl_SAMPLE01",
  package_code: "PACKAGE_SAMPLE_01"
});
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.resource.Package;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    try {
      Application application = client.application().get("appl_SAMPLE01");
      Package[] packages = client.application().getPackages(application);
      client.application().selectPackage(application, packages[0]);
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
client.application.selectPackage(id: "appl_SAMPLE01", packageCode: "PACKAGE_SAMPLE_01") { response in
  // ...
}
```

```php
// PHP Code
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

เลือกแพคเกจสำหรับใบคำสั่งซื้อผ่าน `POST /applications/select-package`

## 5. ใส่ข้อมูลในแบบฟอร์มให้สมบูรณ์ {{id:integration-api-advanced-5}}

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
  application_id: "appl_SAMPLE01",
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
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.form.ApplicationCreateForm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.ArrayNode;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>")
    ObjectMapper mapper = new ObjectMapper();
    ObjectNode basicData = mapper.createObjectNode();

    ArrayNode countries = basicData.putArray("countries");
    countries.add("GERMANY");
    countries.add("JAPAN");

    basicData.put("policy_date", "2018-12-08");
    basicData.put("expiry_date", "2018-12-15");
    basicData.put("policy_unit", "D");

    try {
      Application application = client.application().get("appl_SAMPLE01");
      application.setBasicData(basicData);
      client.application().update(application);
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
client.application.update(
  id: "appl_SAMPLE01",
  basicData: [
    "countries": ["GERMANY", "JAPAN"],
    "policy_date": "2018-12-08",
    "expiry_date": "2018-12-15",
    "policy_unit": "D",
  ],
  additionalData, ...
) { response in
  // ...
}
```

```php
// PHP Code
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

อัพเดทใบคำสั่งซื้อจนข้อมูลสมบูรณ์ `POST /applications/update`

<aside class="notice">
สามารถ update หลายครั้งได้ ไม่จำเป็นต้อง update ครั้งเดียวจนข้อมูลสมบูรณ์
</aside>

## 6. ยืนยันการสั่งซื้อ {{id:integration-api-advanced-6}}

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
const response = await client.application.confirm("appl_SAMPLE01");
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Application;
import com.acrosure.resource.Policy;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_SECRET_TOKEN>");

    try {
      Application application = client.application().get("appl_SAMPLE01");
      Policy[] policies = client.application().confirm(application);
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
// Not supported for Client-side
```

```php
// PHP Code
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

ยืนยันการสั่งซื้อ เช่นเดียวกับการสั่งซื้อด้วยวิธีการอื่นๆ `POST /applications/confirm`
