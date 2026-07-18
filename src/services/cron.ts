import cron, { ScheduledTask } from "node-cron";
import { sendEmail } from "./resend";
import { captureException } from "./sentry";

type CronHandler = () => Promise<void> | void;

interface ScheduledJob {
  id: string;
  schedule: string; // Cron expression (e.g., "0 9 * * *" for 9 AM daily)
  handler: CronHandler;
  description: string;
}

const jobs = new Map<string, ScheduledTask>();

export function scheduleCronJob(jobConfig: ScheduledJob) {
  try {
    const task = cron.schedule(jobConfig.schedule, async () => {
      try {
        console.log(`[CRON] Starting job: ${jobConfig.description}`);
        await jobConfig.handler();
        console.log(`[CRON] Completed job: ${jobConfig.description}`);
      } catch (error) {
        console.error(`[CRON] Job failed: ${jobConfig.description}`, error);
        captureException(error as Error, { jobId: jobConfig.id, jobDescription: jobConfig.description });
      }
    });

    jobs.set(jobConfig.id, task);
    console.log(`[CRON] Scheduled: ${jobConfig.description} (${jobConfig.schedule})`);
  } catch (error) {
    console.error(`[CRON] Failed to schedule job: ${jobConfig.id}`, error);
    captureException(error as Error, { jobId: jobConfig.id });
  }
}

export function stopCronJob(jobId: string) {
  const task = jobs.get(jobId);
  if (task) {
    task.stop();
    jobs.delete(jobId);
    console.log(`[CRON] Stopped job: ${jobId}`);
  }
}

export function stopAllCronJobs() {
  jobs.forEach((task) => task.stop());
  jobs.clear();
  console.log("[CRON] All jobs stopped");
}

export function listCronJobs() {
  return Array.from(jobs.keys());
}

// Example cron jobs
export function initializeCronJobs() {
  // Daily email report at 9 AM
  scheduleCronJob({
    id: "daily-report",
    schedule: "0 9 * * *", // Every day at 9 AM
    description: "Send daily report email",
    handler: async () => {
      console.log("Daily report generated");
      // Add your logic here
    },
  });

  // Weekly cleanup on Monday at 2 AM
  scheduleCronJob({
    id: "weekly-cleanup",
    schedule: "0 2 * * 1", // Every Monday at 2 AM
    description: "Weekly database cleanup",
    handler: async () => {
      console.log("Weekly cleanup executed");
      // Add your cleanup logic here
    },
  });

  // Every hour
  scheduleCronJob({
    id: "hourly-sync",
    schedule: "0 * * * *", // Every hour
    description: "Hourly data sync",
    handler: async () => {
      console.log("Hourly sync executed");
      // Add your sync logic here
    },
  });
}
