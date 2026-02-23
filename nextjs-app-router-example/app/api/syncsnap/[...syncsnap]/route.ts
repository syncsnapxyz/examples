import { SyncsnapServer } from "syncsnap";
import { createRouteHandler } from "syncsnap/next";

const client = new SyncsnapServer();

export const { GET, POST } = createRouteHandler({
	client,
	onCompleted: async (job, presigned) => {
		// Runs on your server when polling completes. Use presigned URL server-side if needed.
		// Whatever you return here is sent to the client and passed to useSyncsnapJob's onCompleted(job, result).
		return {
			jobId: job.id,
			completedAt: new Date().toISOString(),
			downloadUrl: presigned?.url,
		};
	},
});
