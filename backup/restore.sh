#!/bin/bash

# PostgreSQL Database Restore Script for Strapi CMS
# This script will clean and restore the database from a backup

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Load environment variables from .env file
if [ -f "../.env" ]; then
    export $(cat ../.env | grep -v '^#' | grep DATABASE_URL | xargs)
else
    echo -e "${RED}Error: .env file not found${NC}"
    exit 1
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo -e "${RED}Error: DATABASE_URL not found in .env file${NC}"
    exit 1
fi

# Parse DATABASE_URL
# Format: postgresql://user:password@host:port/database
DB_USER=$(echo $DATABASE_URL | sed -n 's/.*:\/\/\([^:]*\):.*/\1/p')
DB_PASS=$(echo $DATABASE_URL | sed -n 's/.*:\/\/[^:]*:\([^@]*\)@.*/\1/p')
DB_HOST=$(echo $DATABASE_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
DB_PORT=$(echo $DATABASE_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
DB_NAME=$(echo $DATABASE_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

echo -e "${YELLOW}Database Connection Details:${NC}"
echo "Host: $DB_HOST"
echo "Port: $DB_PORT"
echo "Database: $DB_NAME"
echo "User: $DB_USER"
echo ""

# Set backup directory (default to latest backup)
BACKUP_DIR=${1:-"backup-2025-10-09T06-00-00-112Z"}

if [ ! -d "$BACKUP_DIR" ]; then
    echo -e "${RED}Error: Backup directory '$BACKUP_DIR' not found${NC}"
    exit 1
fi

echo -e "${YELLOW}Backup directory: $BACKUP_DIR${NC}"
echo ""

# Confirmation prompt
echo -e "${RED}WARNING: This will DELETE ALL DATA in the database '$DB_NAME'${NC}"
echo -e "${YELLOW}Are you sure you want to continue? (yes/no)${NC}"
read -r confirmation

if [ "$confirmation" != "yes" ]; then
    echo -e "${YELLOW}Restore cancelled${NC}"
    exit 0
fi

# Set PGPASSWORD for non-interactive authentication
export PGPASSWORD="$DB_PASS"

echo ""
echo -e "${YELLOW}Step 1: Cleaning database (dropping all tables and extensions)...${NC}"

# Drop all tables, sequences, and other objects
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" << 'EOF'
DO $$ DECLARE
    r RECORD;
BEGIN
    -- Drop all tables
    FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
        EXECUTE 'DROP TABLE IF EXISTS public.' || quote_ident(r.tablename) || ' CASCADE';
    END LOOP;

    -- Drop all sequences
    FOR r IN (SELECT sequence_name FROM information_schema.sequences WHERE sequence_schema = 'public') LOOP
        EXECUTE 'DROP SEQUENCE IF EXISTS public.' || quote_ident(r.sequence_name) || ' CASCADE';
    END LOOP;

    -- Drop all views
    FOR r IN (SELECT table_name FROM information_schema.views WHERE table_schema = 'public') LOOP
        EXECUTE 'DROP VIEW IF EXISTS public.' || quote_ident(r.table_name) || ' CASCADE';
    END LOOP;

    -- Drop all functions
    FOR r IN (SELECT routine_name FROM information_schema.routines WHERE routine_schema = 'public') LOOP
        EXECUTE 'DROP FUNCTION IF EXISTS public.' || quote_ident(r.routine_name) || ' CASCADE';
    END LOOP;
END $$;
EOF

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Database cleaned successfully${NC}"
else
    echo -e "${RED}✗ Error cleaning database${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}Step 2: Restoring database from backup...${NC}"

# Restore using pg_restore (suppress transaction_timeout errors)
pg_restore -h "$DB_HOST" \
           -p "$DB_PORT" \
           -U "$DB_USER" \
           -d "$DB_NAME" \
           --verbose \
           --no-owner \
           --no-acl \
           --use-set-session-authorization \
           "$BACKUP_DIR" 2>&1 | grep -v "transaction_timeout" || true

RESTORE_EXIT_CODE=${PIPESTATUS[0]}

if [ $RESTORE_EXIT_CODE -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Database restored successfully!${NC}"
    echo ""
    echo -e "${GREEN}Restore completed from: $BACKUP_DIR${NC}"
else
    echo ""
    echo -e "${RED}✗ Error during restore${NC}"
    echo -e "${YELLOW}Note: Some warnings are normal for Strapi databases${NC}"
    exit 1
fi

# Unset password
unset PGPASSWORD

echo ""
echo -e "${GREEN}All done! Your Strapi database has been restored.${NC}"
