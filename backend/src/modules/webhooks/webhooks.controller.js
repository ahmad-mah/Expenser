import db from './webhooks.db.js';

export const clerkWebhook = async (req, res) => {
  const event = req.body;

  console.log('WEBHOOK RECEIVED');

  if (event.type === 'user.created') {
    const user = event.data;

    const userId = user.id;
    const email = user.email_addresses?.[0]?.email_address ?? null;
    const name = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim();

    await db.createUser(userId, email, name);
  }

  res.sendStatus(200);
};
