# kilometers-desktop-app
# mileage-sheets

# ENTITIES
|Name  |Data type  |Description  |
|---------|---------|---------|
|Type|TEXT |Type of the entity|
|Name|TEXT |Name of the entity|

# SHEETS
|Name  |Data Type  |Description|
|---------|---------|---------|
|Date|TEXT|Date of vehicle movement|
|Journey|TEXT|Journey from one distance to another|
|Comment|TEXT|Comment to indicate the reason forTracking the vehicle movement|
|Departure Statement|INTEGER|Departure mileage statement|
|Return Statement|INTEGER |Return mileage statement|
|Distance Statement|INTEGER|Distance traveled in kilometers|
|Total Kilometers|INTEGER|Total kilometers traveled for the sheet|
|Compensation Amount|REAL|Refund of mileage costs according to the scale provided|

# VEHICLES
|Name  |Data Type  |Description|
|---------|---------|---------|
|Brand|TEXT|Brand of the vehicle|
|Model|TEXT|Model of the vehicle|
|Year|TEXT|Year of the vehicle|
|Power|TEXT|Power of the vehicle|
|Registration|TEXT|Registration of the vehicle|
|Entity|TEXT|Entity belongs to the vehicle|

# USERS

|Name  |Data Type  |Description|
|---------|---------|---------|
|Name|TEXT|Name of the user|
|Surname|TEXT|Surname of the user|
|Role|TEXT|Status of the user|
|Entity|TEXT|Entity belongs to the user|

