# Team API reference {{id:api-teams}}

ใช้ในการจัดการข้อมูลทีม

## โครงสร้างข้อมูล Team {{id:api-teams-structure}}

> ตัวอย่างข้อมูล

```json
{
    "id": "team_sample",
    "company_name": "Sample Team",
    "callback_url": "https://www.example.com",
    "logo_file": {
        "title": "",
        "url": "https://storage.googleapis.com/SAMPLE_URL",
        "signed_url": "https://storage.googleapis.com/SAMPLE_SIGNED_URL"
    },
    "users": [
        {
            "id": "user_SAMPLE01",
            "email": "user01@example.com",
            "first_name_th": "Sample",
            "last_name_th": "Partner",
            "role": "partner.admin"
        }
    ]
}
```

ข้อมูลภายใน Team ที่ได้คืนมาจากการเรียก API ต่างๆ

| Name           | Meaning                                      |
| -------------- | -------------------------------------------- |
| `id`           | รหัสของ Team ที่ใช้อ้างอิงในที่ต่างๆ         |
| `company_name` | ชื่อทีม                                      |
| `callback_url` | URL สำหรับการ Redirect กลับของฟอร์มสำเร็จรูป |
| `logo_file`    | ไฟล์โลโก้ของทีม                              |
| `users`        | รายชื่อสมาชิกทีม                             |

## /teams/get-info {{id:api-teams-get-info}}

```shell
curl -X POST \
  --header "Authorization: Bearer <YOUR_PUBLIC_TOKEN>" \
  --header "Content-Type: application/json" \
  https://api.acrosure.com/teams/get-info;
```

```javascript
import AcrosureClient from "@acrosure/js-sdk";

const client = new AcrosureClient({ token: "<YOUR_PUBLIC_TOKEN>" });
const response = await client.teams.getInfo();
```

```java
import com.acrosure.Acrosure;
import com.acrosure.resource.Team;

public class Main {
  public static void main(String[] args) {
    Acrosure client = new Acrosure("<YOUR_PUBLIC_TOKEN>");

    try {
        Team team = client.team().getInfo();
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
client.team.getInfo { resp in
  // ...
}
```

> ตัวอย่าง Response Body

```json
{
    "data": {
        "id": "team_sample",
        "company_name": "Sample Team",
        "callback_url": "https://www.example.com",
        "enable_production": true,
        "is_insurer": false,
        "agent_code": "SAMPLE",
        "policy_exposed": false,
        "form_data_exposed": false,
        "logo_file": {
            "title": "",
            "url": "https://storage.googleapis.com/SAMPLE_URL",
            "signed_url": "https://storage.googleapis.com/SAMPLE_SIGNED_URL"
        },
        "users": [
            {
                "id": "user_SAMPLE01",
                "email": "user01@example.com",
                "first_name_th": "Sample",
                "last_name_th": "Partner",
                "role": "partner.admin"
            }
        ]
    },
    "status": "ok"
}
```

เรียกดูข้อมูลของทีมของคุณ

### HTTP Request

`POST https://api.acrosure.com/teams/get-info`

### Request Body

_None_
