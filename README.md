

Interceptors:
```
@Expose - implicitly expose the property of DTO
@Exclude - exclude the property of DTO
interface {  // interface of any class object
  new (...args: any[]): {};
}
```


## Create Report feature

```text
1. Create a new Report.entity file with [price, make, model, year, lat, lng, mileage]
2. Create Report.controller file with [createReport]
- receive body as CreateReportDto
- restrict access with AuthGuard for only signed-in users

3. Create Report.service file with [createReport]
- inject repository by using Report.entity for CRUD
- implement createReport method and return created entity
```

### Enhancements
Every user has a list of reports

```text
- User.entity has OneToMany relationship with Report.entity
- Report.entity has ManyToOne relationship with User.entity
- Report.controller use @CurrentUser to get the current user and pass it to service
```