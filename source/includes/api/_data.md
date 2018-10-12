# Data API reference {{id:api-data}}

ใช้ในการจัดการข้อมูลอื่นๆ เช่น ดูค่าที่เป็นไปได้ของแต่ละฟิลด์ในฟอร์ม

## /data/get {{id:api-data-get}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  -d '{"handler":"subdistrict","dependencies":["กรุงเทพมหานคร","วังทองหลาง"]}' \
  https://api.acrosure.com/data/get;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.data.get({
  handler: "subdistrict",
  dependencies: ["กรุงเทพมหานคร", "วังทองหลาง"]
});
```

```java
import com.acrosure.Acrosure;
import com.acrosure.form.DataGetform;
import com.acrosure.resource.Data;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    DataGetForm<String> form = new DataGetForm<>();
    form.setHandler("subdistrict");
    String[] dependencies = {"กรุงเทพมหานคร", "วังทองหลาง"};
    form.setDependencies(dependencies);

    try {
        Data[] data = client.data().get(form);
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
acrosure_client = AcrosureClient(token = '<YOUR_PUBLIC_TOKEN>')
values = acrosure_client.data.get(
  handler = '<some_handler>'
)
```

```csharp
// CSharp Code
```

```swift
let client = AcrosureClient(token: "<YOUR_PUBLIC_TOKEN>")
client.data.get(handler: "subdistrict", dependencies:["กรุงเทพมหานคร","วังทองหลาง"]) { resp in
  // ...
}
```

```php
$acrosureClient = new AcrosureClient([ "token" => "<YOUR_PUBLIC_TOKEN>" ]);
$values = $acrosureClient->getDataManager()->get([
  "handler" => "<some_handler>"
]);
```

> ตัวอย่าง Response Body

```json
{
    "status":"ok",
    "data":[
        {
            "value":"คลองเจ้าคุณสิงห์",
            "label":"คลองเจ้าคุณสิงห์"
        },
        {
            "value":"พลับพลา",
            "label":"พลับพลา"
        },
        {
            "value":"วังทองหลาง",
            "label":"วังทองหลาง"
        },
        {
            "value":"สะพานสอง",
            "label":"สะพานสอง"
        }
    ]
}
```

เรียกดูค่าที่เป็นไปได้ของฟิลด์ที่ใช้ Handler นั้นๆ

### HTTP Request

`POST https://api.acrosure.com/data/get`

### Request Body

| Name           | Required                                         | Description                                |
| -------------- | ------------------------------------------------ | ------------------------------------------ |
| `handler`      | **Yes**                                          | ชื่อ [Handler](#handlers)                  |
| `dependencies` | *No* (แต่ Yes สำหรับ Handler ที่มี Dependencies) | ค่าที่ต้องการในการเป็นเงื่อนไขการดึงข้อมูล |


## รายการ Handlers {{id:api-data-handlers}}

รายชื่อ handlers ต่างๆ

<aside class="success">
Dependencies ตอนเรียกนั้นต้องส่งตามลำดับให้ถูกต้อง
</aside>

<aside class="notice">
ถ้ามี dependencies ที่ใช้ต่อกัน เช่น จังหวัด อำเภอ ตำบล ต้องใช้ภาษาเดียวกัน

</aside>

| Name                              | Dependencies                                                                                  | Description                                   |
| --------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `province`                        | _None_                                                                                        | จังหวัด (ภาษาไทย)                             |
| `district`                        | <li>จังหวัด</li>                                                                              | เขต/อำเภอ (ภาษาไทย)                           |
| `subdistrict`                     | <li>จังหวัด</li><li>เขต/อำเภอ</li>                                                            | แขวง/ตำบล (ภาษาไทย)                           |
| `postal_code`                     | <li>จังหวัด</li><li>เขต/อำเภอ</li><li>แขวง/ตำบล</li>                                          | รหัสไปรษณีย์ (ภาษาไทย)                        |
| `province_en`                     | _None_                                                                                        | จังหวัด (ภาษาอังกฤษ)                          |
| `district_en`                     | <li>จังหวัด</li>                                                                              | เขต/อำเภอ (ภาษาอังกฤษ)                        |
| `subdistrict_en`                  | <li>จังหวัด</li><li>เขต/อำเภอ</li>                                                            | แขวง/ตำบล (ภาษาอังกฤษ)                        |
| `postal_code_en`                  | <li>จังหวัด</li><li>เขต/อำเภอ</li><li>แขวง/ตำบล</li>                                          | รหัสไปรษณีย์ (ภาษาอังกฤษ)                     |
| `country`                         | _None_                                                                                        | ประเทศ​ (ภาษาไทย)                             |
| `country_en`                      | _None_                                                                                        | ประเทศ​ (ภาษาอังกฤษ)                          |
| `id_card_type`                    | _None_                                                                                        | ประเภทของบัตร                                 |
| `person_type`                     | _None_                                                                                        | ประเภทบุคคล                                   |
| `organization_type`               | _None_                                                                                        | ประเภทบริษัท                                  |
| `customer_type`                   | _None_                                                                                        | ประเภทลูกค้า                                  |
| `person_title`                    | _None_                                                                                        | คำนำหน้าชื่อ (ภาษาไทย)                        |
| `person_title_en`                 | _None_                                                                                        | คำนำหน้าชื่อ (ภาษาอังกฤษ)                     |
| `nominee_relationship`            | _None_                                                                                        | ความสัมพันธ์ของผู้รับผลประโยชน์​ (ภาษาไทย)    |
| `nominee_relationship_en`         | _None_                                                                                        | ความสัมพันธ์ของผู้รับผลประโยชน์​ (ภาษาอังกฤษ) |
| `travel_policy_type`              | _None_                                                                                        | ประเภทของประกันเดินทาง                        |
| `travel_policy_unit`              | _None_                                                                                        | ประเภทการเดินทาง                              |
| `building_material`               | _None_                                                                                        | วัสดุอาคาร                                    |
| `building_type`                   | _None_                                                                                        | ประเภทอาคาร                                   |
| `building_roof_structure`         | _None_                                                                                        | โครงสร้างหลังคาของอาคาร                       |
| `building_roof_type`              | _None_                                                                                        | ประเภทหลังคาของอาคาร                          |
| `building_second_floor_type`      | _None_                                                                                        | ประเภทชั้นสองของอาคาร                         |
| `voluntary_motor_insurance_class` | _None_                                                                                        | ชั้นประกันรถยนต์                              |
| `voluntary_motor_insurance_type`  | _None_                                                                                        | ประเภทรถยนต์                                  |
| `motor_brand`                     | <li>ประเภทรถยนต์</li><li>ปีค.ศ.​ <i>(ตัวเลข)</i></li>                                         | ยี่ห้อรถยนต์                                  |
| `motor_model`                     | <li>ประเภทรถยนต์</li><li>ปีค.ศ.​ <i>(ตัวเลข)</i></li><li>ยี่ห้อรถยนต์</li>                    | รุ่นรถยนต์                                    |
| `model_spec`                      | <li>ประเภทรถยนต์</li><li>ปีค.ศ.​ <i>(ตัวเลข)</i></li><li>ยี่ห้อรถยนต์</li><li>รุ่นรถยนต์</li> | รุ่นย่อยรถยนต์                                |
| `repair_provider_type`            | _None_                                                                                        | ประเภทการซ่อมรถยนต์                           |
| `motor_gear_type`                 | _None_                                                                                        | ประเภทเกียร์รถยนต์                            |
