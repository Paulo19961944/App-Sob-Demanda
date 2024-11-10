import * as functions from 'firebase-functions/v2';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.cleanupExpiredPedidos = functions.scheduler
    .onSchedule('every 5 minutes', async (event) => {
        const now = admin.firestore.Timestamp.now();
        
        const snapshot = await admin.firestore()
            .collection('pedidos')
            .where('expiresAt', '<=', now)
            .get();

        const deletePromises = snapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(deletePromises);

        console.log(`Deleted ${snapshot.size} expired pedidos`); // Usando snapshot.size
    });
