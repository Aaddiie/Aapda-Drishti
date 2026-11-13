                   CLIENT
                     │
                   HTTPS
                     │
                     ▼
                API Gateway
                     │
                JWT Auth
                     │
             ┌───────┴───────┐
             │               │
         Authentication    RBAC
             │               │
             ▼               ▼
           User          Permissions
             │
             ▼
        Django APIs
             │
      ┌──────┼──────┐
      │      │      │
    MySQL   ML    Alerts

Authentication
    Login
    ↓
    Validate credentials
    ↓
    Generate Access Token
    +
    Refresh Token
    ↓
    Client


ROLE BASED ACCESS CONTROL
Example:

    ADMIN
    ├── Manage users
    ├── Manage alerts
    ├── Manage models
    └── View everything

    ANALYST
    ├── View analytics
    ├── View predictions
    └── Generate reports

    OPERATOR
    ├── Monitor alerts
    ├── Acknowledge alerts
    └── View risk maps

    USER
    ├── View alerts
    ├── View risk map
    └── Receive notifications