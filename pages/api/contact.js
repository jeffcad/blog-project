import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid or incomplete input' })
      return
    }

    const newMessage = {
      email,
      name,
      message
    }

    let client
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wsw5b.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(connectionString)
    } catch (error) {
      res.status(500).json({ message: 'Unable to connect to database.' })
      return
    }

    try {
      const db = client.db()
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage._id = result.insertedId
      res.status(201).json({ message: 'Message successfully stored' })
    } catch (error) {
      res.status(500).json({ message: 'Unable to add message to database.' })
    }

    client.close()
  }
}

export default handler