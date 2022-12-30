# example of env.production
```bash
NODE_ENV=production
DB_USERNAME=root
DB_PASSWORD=R1V7mVciKDzKgL
DB_PORT=3306
SERVICE_NAME=serverless-express
AWS_PROFILE=default
```

# example of env.development
```bash
NODE_ENV=development
DATABASE_URL=mysql://root:R1V7mVciKDzKgL@localhost:3306/development
```

# todo
- [  ] export variable DATABASE_URL in serverless.yml (necessary to enable prisma)