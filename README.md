# Game React

## Authentication

Place DEVICE_ID 5ce66a15-b78d-481b-9479-ff2557427a30 in localstorage
MPIN 1234

## Withdrawal

getWithdrawText from apps api to get the withdrawable text

- allow amounts greater or equal to wallet balance
- min 1,000 and max 100,000
- current hour should be less than 10
- withdrawal object
  POST to "fundreq/withdrawFund"

  payment type is bank

```plain
        mObject.put("user_id", userLoginId)
        mObject.put("fullname", userFullName)
        mObject.put("username", userLoginUserName)
        mObject.put("mobile", userLoginMobile)
        //mObject.put("req_amount", requestPoints.toInt())
        mObject.put("req_amount", requestPoints)
        mObject.put("req_date", currentDate)
        mObject.put("req_time", currentTime)
        mObject.put("withdrawalMode", paymentType)



        mObject.put("accNumber", profileData.accountNo)
        mObject.put("ifscCode", profileData.ifscCode)
        mObject.put("bankName", profileData.bankName)
        mObject.put("accName", profileData.accountHolderName)
```

Start emulator
use cmd not powershell
`cd C:\Users\nabin\AppData\Local\Android\Sdk\emulator`
`emulator -avd Pixel_4_API_30 -dns-server 8.8.8.8 -no-snapshot-load`
