# External Services Setup Guide

This guide covers setting up Resend, Supabase, Cron Jobs, Sentry, and Azure for the PthFndR application.

## Overview

| Service | Purpose | Status | Priority |
|---------|---------|--------|----------|
| **Resend** | Transactional email | ✅ Integrated | Must-have |
| **Supabase** | Database & Auth | ✅ Integrated | Must-have |
| **Cron Jobs** | Scheduled tasks | ✅ Integrated | High |
| **Sentry** | Error tracking | ✅ Integrated | High |
| **Azure** | Cloud deployment | ✅ Framework ready | Medium |

---

## 1. Resend Email Service

### Purpose
Send transactional emails (contact confirmations, notifications).

### Setup

1. **Create Account**
   - Go to [https://resend.com](https://resend.com)
   - Sign up for a free account
   - Verify domain (or use `onboarding@resend.dev` for testing)

2. **Get API Key**
   - Navigate to **API Keys** in dashboard
   - Create new API key
   - Copy and add to `.env`:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
     ```

3. **Verify Email Domain** (for production)
   - Add DNS records as instructed
   - Update `from` address in code from `onboarding@resend.dev`

### Usage
```typescript
import { sendContactConfirmation, sendContactNotification } from '@/services/resend';

// Send confirmation to user
await sendContactConfirmation(name, email, role);

// Send notification to team
await sendContactNotification(name, email, role, message, organisation, interestIn);
```

---

## 2. Supabase Database & Auth

### Purpose
Store contacts, users, and other application data with built-in authentication.

### Setup

1. **Create Project**
   - Go to [https://app.supabase.com](https://app.supabase.com)
   - Click "New Project"
   - Choose region (EU for GDPR compliance)
   - Save password securely

2. **Get Credentials**
   - Project Settings → API
   - Copy `Project URL` and `Service Role Key`
   - Add to `.env`:
     ```
     SUPABASE_URL=https://your-project.supabase.co
     SUPABASE_SERVICE_ROLE_KEY=eyJ...your-key
     ```

3. **Create Tables**
   
   **contacts table**
   ```sql
   create table contacts (
     id bigint primary key generated always as identity,
     created_at timestamp with time zone default now(),
     name text not null,
     email text not null,
     role text not null,
     organisation text,
     source text default 'website',
     interest_in text,
     message text,
     status text default 'new'
   );

   -- Add RLS policies if needed
   alter table contacts enable row level security;
   ```

4. **Enable Services**
   - Auth → Providers → Enable Email/Magic Link (optional)
   - Storage → Create bucket (if needed for file uploads)

### Usage
```typescript
import { saveContact, getContacts, updateContact } from '@/services/supabase';

// Save contact
await saveContact({ name, email, role, organisation, message });

// Fetch contacts
const contacts = await getContacts('employer');

// Update status
await updateContact(contactId, { status: 'contacted' });
```

---

## 3. Cron Jobs (Scheduled Tasks)

### Purpose
Automate recurring tasks like sending daily reports, weekly cleanup, etc.

### Setup

1. **Configuration**
   - Cron jobs initialize automatically in production
   - Or enable in development with:
     ```
     ENABLE_CRON=true npm run dev
     ```

2. **Define Jobs**
   Edit `src/services/cron.ts`:
   ```typescript
   scheduleCronJob({
     id: 'daily-report',
     schedule: '0 9 * * *', // 9 AM every day
     description: 'Send daily report',
     handler: async () => {
       // Your logic here
     }
   });
   ```

3. **Cron Expression Format**
   ```
   ┌───────────── minute (0 - 59)
   │ ┌───────────── hour (0 - 23)
   │ │ ┌───────────── day of month (1 - 31)
   │ │ │ ┌───────────── month (1 - 12)
   │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
   │ │ │ │ │
   │ │ │ │ │
   * * * * *
   ```

   Common examples:
   - `0 9 * * *` - 9 AM daily
   - `0 2 * * 1` - 2 AM every Monday
   - `0 * * * *` - Every hour
   - `*/15 * * * *` - Every 15 minutes

### Usage
```typescript
import { scheduleCronJob, stopCronJob } from '@/services/cron';

// Schedule a job
scheduleCronJob({
  id: 'weekly-digest',
  schedule: '0 10 * * 0', // 10 AM every Sunday
  description: 'Send weekly digest',
  handler: async () => {
    const contacts = await getContacts();
    await sendEmail({ ... });
  }
});

// Stop a job
stopCronJob('weekly-digest');
```

---

## 4. Sentry Error Tracking

### Purpose
Monitor, track, and debug production errors and performance issues.

### Setup

1. **Create Account**
   - Go to [https://sentry.io](https://sentry.io)
   - Sign up for free account
   - Create organization

2. **Create Project**
   - Select "Node.js" as platform
   - Copy DSN (Sentry Data Source Name)
   - Add to `.env`:
     ```
     SENTRY_DSN=https://key@sentry.io/project-id
     SENTRY_TRACES_SAMPLE_RATE=0.1
     ```

3. **Configure Environment**
   ```env
   SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
   SENTRY_ENVIRONMENT=production
   SENTRY_TRACES_SAMPLE_RATE=0.1
   ```

4. **Set up Alerts** (optional)
   - Go to Project Settings → Alerts
   - Configure email notifications for errors
   - Set up Slack/Teams integration

### Usage
```typescript
import { captureException, captureMessage } from '@/services/sentry';

// Capture exceptions
try {
  await riskyOperation();
} catch (error) {
  captureException(error as Error, { context: 'payment-processing' });
}

// Capture messages
captureMessage('User reached checkout', 'info');
captureMessage('Failed payment attempt', 'warning');
```

---

## 5. Azure Cloud Deployment

### Purpose
Deploy the application to Azure App Service or Azure Container Instances.

### Setup

#### Option A: Azure App Service (Recommended)

1. **Create Resource Group**
   ```bash
   az group create --name pthfndr-rg --location uksouth
   ```

2. **Create App Service Plan**
   ```bash
   az appservice plan create \
     --name pthfndr-plan \
     --resource-group pthfndr-rg \
     --sku B1 \
     --is-linux
   ```

3. **Create Web App**
   ```bash
   az webapp create \
     --resource-group pthfndr-rg \
     --plan pthfndr-plan \
     --name pthfndr-app \
     --runtime "NODE|20-lts"
   ```

4. **Deploy Code**
   ```bash
   # Option 1: Git deployment
   az webapp up --resource-group pthfndr-rg --name pthfndr-app

   # Option 2: ZIP deployment
   npm run build
   zip -r app.zip dist/ package*.json
   az webapp deployment source config-zip \
     --resource-group pthfndr-rg \
     --name pthfndr-app \
     --src app.zip
   ```

5. **Set Environment Variables**
   ```bash
   az webapp config appsettings set \
     --resource-group pthfndr-rg \
     --name pthfndr-app \
     --settings \
       NODE_ENV=production \
       RESEND_API_KEY=$RESEND_API_KEY \
       SUPABASE_URL=$SUPABASE_URL \
       SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY \
       SENTRY_DSN=$SENTRY_DSN
   ```

6. **Enable Monitoring**
   - Application Insights → Auto-instrument your app
   - Set up alerts for high error rates

#### Option B: Azure Storage (for file uploads)

1. **Create Storage Account**
   ```bash
   az storage account create \
     --name pthfndrstorage \
     --resource-group pthfndr-rg \
     --location uksouth
   ```

2. **Create Container**
   ```bash
   az storage container create \
     --account-name pthfndrstorage \
     --name uploads
   ```

3. **Get Connection String**
   ```bash
   az storage account show-connection-string \
     --name pthfndrstorage \
     --resource-group pthfndr-rg
   ```

4. **Add to `.env`**
   ```env
   AZURE_STORAGE_ACCOUNT=pthfndrstorage
   AZURE_STORAGE_CONTAINER=uploads
   AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;...
   ```

### Monitoring & Logs

```bash
# View app logs
az webapp log tail --resource-group pthfndr-rg --name pthfndr-app

# Enable application logging
az webapp log config \
  --resource-group pthfndr-rg \
  --name pthfndr-app \
  --application-logging true \
  --level information

# View metrics
az monitor metrics list-definitions --resource /subscriptions/{id}/resourceGroups/pthfndr-rg/providers/Microsoft.Web/sites/pthfndr-app
```

---

## Environment Variables Checklist

### Development (.env.local or .env)
```
NODE_ENV=development
PORT=3000
RESEND_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key
SENTRY_DSN=your_dsn
```

### Production (Azure App Service)
```
NODE_ENV=production
PORT=8080 (Azure default)
RESEND_API_KEY=your_key
SUPABASE_URL=your_url
SUPABASE_SERVICE_ROLE_KEY=your_key
SENTRY_DSN=your_dsn
SENTRY_ENVIRONMENT=production
SENTRY_TRACES_SAMPLE_RATE=0.1
```

---

## Testing Locally

### Run with all services enabled
```bash
npm run dev
```

### Test contact form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "role": "employer",
    "name": "John Doe",
    "email": "john@example.com",
    "organisation": "Tech Corp",
    "message": "Interested in partnerships"
  }'
```

### Check health
```bash
curl http://localhost:3000/api/health
```

---

## Troubleshooting

### Resend emails not sending
- Check `RESEND_API_KEY` is correct
- Use `onboarding@resend.dev` for testing
- Check Resend dashboard for failed sends
- Verify recipient email isn't bouncing

### Supabase connection errors
- Verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
- Check RLS policies (row level security) aren't blocking inserts
- Verify table structure matches schema
- Check Supabase dashboard for errors

### Sentry not capturing errors
- Verify `SENTRY_DSN` is correct
- Check `NODE_ENV` is properly set
- Test with `captureMessage()` first
- Check Sentry dashboard for project settings

### Cron jobs not running
- Enable with `ENABLE_CRON=true` in development
- Check cron expression syntax (use https://crontab.guru)
- Monitor logs for job execution
- Production jobs start automatically

### Azure deployment issues
- Use `az webapp log tail` to view real-time logs
- Check environment variables with `az webapp config appsettings list`
- Verify Node.js version compatibility
- Check Application Insights for detailed errors

---

## Next Steps

1. ✅ Set up Resend for email
2. ✅ Configure Supabase for database
3. ✅ Enable Sentry error tracking
4. ✅ Deploy to Azure App Service
5. 🔄 Monitor and optimize
6. 📊 Set up dashboards and alerts
7. 🔐 Enable authentication flows
8. 💾 Add scheduled backup jobs

---

## Support & Resources

- **Resend Docs**: https://resend.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Sentry Docs**: https://docs.sentry.io/
- **Azure Docs**: https://docs.microsoft.com/azure/
- **Cron Reference**: https://crontab.guru

---

Last updated: 2026-07-18
