#!/bin/bash
export $(grep -v '^#' .env.production | xargs)
DB_HOST=`aws rds describe-db-proxy-targets \
--db-proxy-name ${SERVICE_NAME}-rds-proxy \
--profile ${AWS_PROFILE} | \
grep -o -E "\"Endpoint\": \"\w+(?:-\w+)+.\w+.\w+(?:-\w+)+.rds.amazonaws.com\"" | \
awk -F\: '{print $2}' | \
tr -d '"' | \
tr -d ' '`
export DATABASE_URL=mysql://$DB_USERNAME:$DB_PASSWORD@$DB_HOST:$DB_PORT/$NODE_ENV
echo migrate to $DATABASE_URL...
npx prisma migrate deploy